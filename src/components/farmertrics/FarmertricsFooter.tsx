import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";

const FarmertricsFooter = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/farmmmmm.png"
                alt="Farmertrics Logo"
                className="w-10 h-10 object-contain"
              />
              <span className="text-xl font-bold"></span>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Empowering farmers through data-driven decisions
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Product</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a href="#" className="hover:text-accent transition-smooth">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-smooth">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-smooth">
                  Case Studies
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Company</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a href="#" className="hover:text-accent transition-smooth">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-smooth">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-smooth">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-primary-foreground/80 hover:text-accent transition-smooth"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-primary-foreground/80 hover:text-accent transition-smooth"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-primary-foreground/80 hover:text-accent transition-smooth"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-primary-foreground/80 hover:text-accent transition-smooth"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/80">
          <p>&copy; 2025 Farmertrics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FarmertricsFooter;
