import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Value from "@/components/Value";
import Info from "@/components/Info";
import Spiritual from "@/components/Spiritual";
import Gallery from "@/components/Gallery";
import Registration from "@/components/Registration";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Value />
      <Info />
      <Spiritual />
      <Gallery />
      <Registration />
      <Footer />
    </main>
  );
};

export default Index;
