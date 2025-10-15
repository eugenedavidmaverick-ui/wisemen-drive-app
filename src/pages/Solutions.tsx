import FarmertricsNav from "@/components/farmertrics/FarmertricsNav";
import FarmertricsFooter from "@/components/farmertrics/FarmertricsFooter";
import { Smartphone, Cloud, LineChart, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const Solutions = () => {
  const solutions = [
    {
      icon: Smartphone,
      title: "Mobile-First Platform",
      description: "Access your farm data anywhere, anytime. Our mobile app brings powerful analytics to your fingertips.",
      features: ["Real-time notifications", "Offline mode", "GPS field mapping", "Photo documentation"],
    },
    {
      icon: Cloud,
      title: "Cloud-Based Storage",
      description: "Never lose your valuable farm data. Everything is securely stored and accessible from any device.",
      features: ["Automatic backups", "Unlimited storage", "Data encryption", "Multi-device sync"],
    },
    {
      icon: LineChart,
      title: "Predictive Analytics",
      description: "Leverage machine learning to predict crop yields, optimize planting schedules, and prevent issues.",
      features: ["Yield forecasting", "Risk assessment", "Market trends", "ROI calculations"],
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Coordinate with your team, share insights, and manage farm operations efficiently.",
      features: ["Task assignments", "Shared reports", "Role-based access", "Activity tracking"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <FarmertricsNav />
      
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Solutions for <span className="text-primary">Modern Farming</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive tools and technologies designed to transform how you manage your farm
            </p>
          </div>

          <div className="space-y-20">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="w-16 h-16 rounded-2xl gradient-hero flex items-center justify-center mb-6">
                    <solution.icon className="text-primary-foreground" size={32} />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    {solution.title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    {solution.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <div className="w-2 h-2 rounded-full bg-primary"></div>
                        </div>
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button size="lg">Learn More</Button>
                </div>
                <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                  <div className="bg-card border border-border rounded-3xl p-12 shadow-card aspect-square flex items-center justify-center">
                    <solution.icon className="text-primary" size={200} strokeWidth={1} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FarmertricsFooter />
    </div>
  );
};

export default Solutions;
