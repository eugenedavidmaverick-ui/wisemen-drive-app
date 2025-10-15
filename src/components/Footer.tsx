import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-heading font-bold text-xl mb-4">WISEMEN</h3>
            <p className="text-muted-foreground text-sm">
              Crafting automotive excellence since 1923
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-smooth">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Heritage</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-smooth">Bespoke</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Ownership</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Maintenance</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-accent transition-smooth">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-smooth">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-smooth">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Wisemen Automotive. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
