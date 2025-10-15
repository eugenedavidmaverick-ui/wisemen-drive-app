import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import suvImage from "@/assets/suv-model.jpg";
import coupeImage from "@/assets/coupe-model.jpg";

const models = [
  {
    name: "Wisemen Prestige",
    category: "Luxury Sedan",
    description: "The epitome of refined elegance and uncompromising comfort",
    image: suvImage,
    price: "From $450,000",
  },
  {
    name: "Wisemen Sovereign",
    category: "Grand Tourer",
    description: "Where performance meets sophistication in perfect harmony",
    image: coupeImage,
    price: "From $525,000",
  },
];

const Models = () => {
  return (
    <section id="models" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-4">
            Our Collection
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Each vehicle is meticulously crafted to deliver an unparalleled driving experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {models.map((model, index) => (
            <Card
              key={model.name}
              className="group overflow-hidden bg-card border-border hover:border-accent/50 transition-premium animate-fade-in shadow-premium"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={model.image}
                    alt={`${model.name} - ${model.category}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-premium"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-accent text-sm font-semibold tracking-wider mb-2">
                      {model.category}
                    </p>
                    <h3 className="text-3xl font-heading font-bold mb-2">
                      {model.name}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground mb-4">{model.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-semibold text-accent">
                      {model.price}
                    </span>
                    <Button variant="ghost" size="sm">
                      Discover More
                      <ArrowRight className="ml-2" size={16} />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Models;
