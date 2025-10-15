import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, CloudRain, Sprout } from "lucide-react";

const FarmertricsHero = () => {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 items-center mb-16">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              Better Data,{" "}
              <span className="text-primary">Better Farms</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-xl">
              Empowering farmers with data-driven insights to make informed decisions and maximize crop yields.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg">
                Start Free Trial
                <ArrowRight className="ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg">
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-2 gap-4 animate-slide-in-right">
            <div className="col-span-2 gradient-accent rounded-3xl p-8 flex items-center justify-center h-40 shadow-card">
              <h2 className="text-4xl font-bold text-accent-foreground">Better Data</h2>
            </div>
            <div className="gradient-hero rounded-3xl p-8 flex items-center justify-center h-52 shadow-card">
              <h2 className="text-3xl font-bold text-primary-foreground">Better Farms</h2>
            </div>
            <div className="bg-card border border-border rounded-3xl p-6 flex flex-col items-center justify-center h-52 shadow-card hover:shadow-hover transition-smooth">
              <BarChart3 className="text-primary mb-4" size={48} />
              <p className="text-center font-semibold text-card-foreground">Real-time Analytics</p>
            </div>
            <div className="bg-card border border-border rounded-3xl p-6 flex flex-col items-center justify-center h-40 shadow-card hover:shadow-hover transition-smooth">
              <CloudRain className="text-accent mb-2" size={40} />
              <p className="text-center text-sm font-semibold text-card-foreground">Weather Insights</p>
            </div>
            <div className="bg-card border border-border rounded-3xl p-6 flex flex-col items-center justify-center h-40 shadow-card hover:shadow-hover transition-smooth">
              <Sprout className="text-primary mb-2" size={40} />
              <p className="text-center text-sm font-semibold text-card-foreground">Crop Health</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FarmertricsHero;
