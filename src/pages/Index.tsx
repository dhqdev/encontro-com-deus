import Hero from "@/components/Hero";
import About from "@/components/About";
import Info from "@/components/Info";
import Spiritual from "@/components/Spiritual";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Info />
      <Spiritual />
      <Gallery />
      <Footer />
      <ScrollToTop />
    </main>
  );
};

export default Index;
