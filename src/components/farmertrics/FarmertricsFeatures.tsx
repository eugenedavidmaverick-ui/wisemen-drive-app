import { BarChart3, CloudRain, Sprout, TrendingUp, Database, Bell } from "lucide-react";

const FarmertricsFeatures = () => {
  const features = [
    {
      icon: BarChart3,
      title: "Data Analytics",
      description: "Transform raw farm data into actionable insights with advanced analytics and visualization tools.",
    },
    {
      icon: CloudRain,
      title: "Weather Forecasting",
      description: "Hyperlocal weather predictions to help you plan irrigation, planting, and harvesting perfectly.",
    },
    {
      icon: Sprout,
      title: "Crop Monitoring",
      description: "Track crop health, growth stages, and potential issues before they become problems.",
    },
    {
      icon: TrendingUp,
      title: "Yield Optimization",
      description: "Data-driven recommendations to maximize your crop yields and profitability.",
    },
    {
      icon: Database,
      title: "Historical Data",
      description: "Access years of farming data to identify patterns and make better long-term decisions.",
    },
    {
      icon: Bell,
      title: "Smart Alerts",
      description: "Get notified about critical conditions, pest risks, and optimal timing for farm activities.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Powered by Data, Built for Farmers
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to make smarter decisions and grow better crops
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-8 shadow-card hover:shadow-hover transition-smooth group"
            >
              <div className="w-14 h-14 rounded-xl gradient-hero flex items-center justify-center mb-6 group-hover:scale-110 transition-spring">
                <feature.icon className="text-primary-foreground" size={28} />
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FarmertricsFeatures;
