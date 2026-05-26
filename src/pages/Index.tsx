import Hero from "@/components/Hero";
import About from "@/components/About";
import Info from "@/components/Info";
import Spiritual from "@/components/Spiritual";
import Gallery from "@/components/Gallery";
import Registration from "@/components/Registration";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Info />
      <Spiritual />
      <Gallery />
      <Registration />
      <Footer />
      <ScrollToTop />
    </main>
  );
};

export default Index;
