import FarmertricsNav from "@/components/farmertrics/FarmertricsNav";
import FarmertricsHero from "@/components/farmertrics/FarmertricsHero";
import FarmertricsFeatures from "@/components/farmertrics/FarmertricsFeatures";
import FarmertricsFooter from "@/components/farmertrics/FarmertricsFooter";

const FarmertricsHome = () => {
  return (
    <div className="min-h-screen bg-background">
      <FarmertricsNav />
      <FarmertricsHero />
      <FarmertricsFeatures />
      <FarmertricsFooter />
    </div>
  );
};

export default FarmertricsHome;
