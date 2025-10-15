import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Experience Wisemen luxury firsthand. Our team is ready to assist you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-6 animate-fade-in">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="text-accent" size={24} />
            </div>
            <h3 className="font-heading font-semibold text-xl mb-2">Phone</h3>
            <p className="text-muted-foreground">+233 (54) 857-8655</p>
          </div>

          <div className="text-center p-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="text-accent" size={24} />
            </div>
            <h3 className="font-heading font-semibold text-xl mb-2">Email</h3>
            <p className="text-muted-foreground">contact@wisemen.com</p>
          </div>

          <div className="text-center p-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="text-accent" size={24} />
            </div>
            <h3 className="font-heading font-semibold text-xl mb-2">Location</h3>
            <p className="text-muted-foreground">Beverly Hills, CA</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
