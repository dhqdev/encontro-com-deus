import Hero from "@/components/Hero";
import About from "@/components/About";
import Value from "@/components/Value";
import Info from "@/components/Info";
import Spiritual from "@/components/Spiritual";
import Gallery from "@/components/Gallery";
import Registration from "@/components/Registration";
import Footer from "@/components/Footer";
import EdenChatbot from "@/components/EdenChatbot";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Registration />
      <About />
      <Value />
      <Info />
      <Spiritual />
      <Gallery />
      <Footer />
      <EdenChatbot />
      <ScrollToTop />
    </main>
  );
};

export default Index;
