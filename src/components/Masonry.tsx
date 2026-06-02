import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { gsap } from 'gsap';
import './Masonry.css';

export interface MasonryItem {
  id: string;
  img?: string;
  video?: string;
  alt?: string;
  height: number;
}

interface MasonryProps {
  items: MasonryItem[];
  ease?: string;
  duration?: number;
  stagger?: number;
  animateFrom?: 'top' | 'bottom' | 'left' | 'right' | 'center' | 'random';
  scaleOnHover?: boolean;
  hoverScale?: number;
  blurToFocus?: boolean;
  colorShiftOnHover?: boolean;
  onItemClick?: (item: MasonryItem) => void;
}

const useMedia = (queries: string[], values: number[], defaultValue: number): number => {
  const get = () => values[queries.findIndex(q => matchMedia(q).matches)] ?? defaultValue;
  const [value, setValue] = useState(get);

  useEffect(() => {
    const handler = () => setValue(get);
    queries.forEach(q => matchMedia(q).addEventListener('change', handler));
    return () => queries.forEach(q => matchMedia(q).removeEventListener('change', handler));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return value;
};

const useMeasure = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    if (!ref.current) return;
    const ro = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setSize({ width, height });
    });
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);

  return [ref, size] as const;
};

const preloadImages = async (urls: string[]) => {
  await Promise.all(
    urls.map(
      src =>
        new Promise<void>(resolve => {
          const img = new Image();
          img.src = src;
          img.onload = img.onerror = () => resolve();
        })
    )
  );
};

type GridItem = MasonryItem & { x: number; y: number; w: number; h: number };

const Masonry = ({
  items,
  ease = 'power3.out',
  duration = 0.6,
  stagger = 0.05,
  animateFrom = 'bottom',
  scaleOnHover = true,
  hoverScale = 0.95,
  blurToFocus = true,
  colorShiftOnHover = false,
  onItemClick,
}: MasonryProps) => {
  const columns = useMedia(
    ['(min-width:1500px)', '(min-width:1000px)', '(min-width:600px)', '(min-width:400px)'],
    [5, 4, 3, 2],
    1
  );

  const [containerRef, { width }] = useMeasure();
  const [imagesReady, setImagesReady] = useState(false);
  const [imgDimensions, setImgDimensions] = useState<Record<string, { w: number; h: number }>>({});

  const getInitialPosition = (item: GridItem) => {
    const containerRect = containerRef.current?.getBoundingClientRect();
    if (!containerRect) return { x: item.x, y: item.y };

    let direction = animateFrom;
    if (animateFrom === 'random') {
      const directions = ['top', 'bottom', 'left', 'right'] as const;
      direction = directions[Math.floor(Math.random() * directions.length)];
    }

    switch (direction) {
      case 'top':    return { x: item.x, y: -200 };
      case 'bottom': return { x: item.x, y: window.innerHeight + 200 };
      case 'left':   return { x: -200, y: item.y };
      case 'right':  return { x: window.innerWidth + 200, y: item.y };
      case 'center':
        return {
          x: containerRect.width / 2 - item.w / 2,
          y: containerRect.height / 2 - item.h / 2,
        };
      default:
        return { x: item.x, y: item.y + 100 };
    }
  };

  useEffect(() => {
    const dims: Record<string, { w: number; h: number }> = {};
    const promises = items.map(item => {
      if (!item.img) return Promise.resolve();
      return new Promise<void>(resolve => {
        const el = new Image();
        el.onload = () => { dims[item.id] = { w: el.naturalWidth, h: el.naturalHeight }; resolve(); };
        el.onerror = () => resolve();
        el.src = item.img!;
      });
    });
    Promise.all(promises).then(() => {
      setImgDimensions(dims);
      setImagesReady(true);
    });
  }, [items]);

  const grid = useMemo<GridItem[]>(() => {
    if (!width) return [];
    const colHeights = new Array(columns).fill(0);
    const columnWidth = width / columns;

    return items.map(child => {
      const col = colHeights.indexOf(Math.min(...colHeights));
      const x = columnWidth * col;
      // Images: use natural aspect ratio so nothing is cropped
      // Videos: use provided height / 2 as fallback
      let h: number;
      if (child.img && imgDimensions[child.id]) {
        const { w: natW, h: natH } = imgDimensions[child.id];
        h = columnWidth * (natH / natW);
      } else {
        h = child.height / 2;
      }
      const y = colHeights[col];
      colHeights[col] += h;
      return { ...child, x, y, w: columnWidth, h };
    });
  }, [columns, items, width, imgDimensions]);

  const totalHeight = useMemo(() => {
    if (!grid.length) return 0;
    return Math.max(...grid.map(item => item.y + item.h));
  }, [grid]);

  const hasMounted = useRef(false);

  useLayoutEffect(() => {
    if (!imagesReady) return;

    grid.forEach((item, index) => {
      const selector = `[data-key="${item.id}"]`;
      const animationProps = { x: item.x, y: item.y, width: item.w, height: item.h };

      if (!hasMounted.current) {
        const initialPos = getInitialPosition(item);
        gsap.fromTo(selector, {
          opacity: 0,
          x: initialPos.x,
          y: initialPos.y,
          width: item.w,
          height: item.h,
          ...(blurToFocus && { filter: 'blur(10px)' }),
        }, {
          opacity: 1,
          ...animationProps,
          ...(blurToFocus && { filter: 'blur(0px)' }),
          duration: 0.8,
          ease: 'power3.out',
          delay: index * stagger,
        });
      } else {
        gsap.to(selector, { ...animationProps, duration, ease, overwrite: 'auto' });
      }
    });

    hasMounted.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [grid, imagesReady]);

  const handleMouseEnter = (item: GridItem) => {
    const selector = `[data-key="${item.id}"]`;
    if (scaleOnHover) {
      gsap.to(selector, { scale: hoverScale, duration: 0.3, ease: 'power2.out' });
    }
    if (colorShiftOnHover) {
      gsap.to(`[data-key="${item.id}"] .masonry-color-overlay`, { opacity: 0.3, duration: 0.3 });
    }
  };

  const handleMouseLeave = (item: GridItem) => {
    const selector = `[data-key="${item.id}"]`;
    if (scaleOnHover) {
      gsap.to(selector, { scale: 1, duration: 0.3, ease: 'power2.out' });
    }
    if (colorShiftOnHover) {
      gsap.to(`[data-key="${item.id}"] .masonry-color-overlay`, { opacity: 0, duration: 0.3 });
    }
  };

  return (
    <div
      ref={containerRef}
      className="masonry-list"
      style={{ height: totalHeight || '100%' }}
    >
      {grid.map(item => (
        <div
          key={item.id}
          data-key={item.id}
          className="masonry-item-wrapper"
          onClick={() => onItemClick?.(item)}
          onMouseEnter={() => handleMouseEnter(item)}
          onMouseLeave={() => handleMouseLeave(item)}
        >
          {item.video ? (
            <div className="masonry-item-img">
              <video
                className="masonry-item-video"
                src={item.video}
                autoPlay
                muted
                loop
                playsInline
              />
              {colorShiftOnHover && <div className="masonry-color-overlay" />}
            </div>
          ) : (
            <div className="masonry-item-img">
              <img
                src={item.img}
                alt={item.alt ?? ''}
                className="masonry-item-photo"
                draggable={false}
              />
              {colorShiftOnHover && <div className="masonry-color-overlay" />}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Masonry;
