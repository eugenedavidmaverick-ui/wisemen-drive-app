import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Models from "@/components/Models";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Models />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
