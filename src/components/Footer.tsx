import { Link } from "react-router-dom";
import { Cross, MapPin, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-church section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Cross className="w-6 h-6 text-secondary" />
              <span className="font-heading text-lg tracking-widest uppercase">Akehlulwa Lutfo</span>
            </div>
            <p className="font-body text-sm text-primary-foreground/70 leading-relaxed">
              A sanctuary of victory and divine authority. Walking in the triumphant power of Jesus Christ.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-sm tracking-widest uppercase text-secondary mb-4">Quick Links</h4>
            <div className="space-y-2">
              {[
                { path: "/about", label: "About Us" },
                { path: "/sermons", label: "Sermons" },
                { path: "/ministries", label: "Ministries" },
                { path: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block font-body text-sm text-primary-foreground/70 hover:text-secondary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-sm tracking-widest uppercase text-secondary mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-secondary mt-1 shrink-0" />
                <span className="font-body text-sm text-primary-foreground/70">Mbabane, Eswatini</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-secondary shrink-0" />
                <span className="font-body text-sm text-primary-foreground/70">+268 7600 0000</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-secondary shrink-0" />
                <span className="font-body text-sm text-primary-foreground/70">info@akehlulwalutfo.org</span>
              </div>
            </div>
          </div>

          {/* Social & Prayer */}
          <div>
            <h4 className="font-heading text-sm tracking-widest uppercase text-secondary mb-4">Connect</h4>
            <div className="flex items-center gap-4 mb-4">
              <a href="#" className="text-primary-foreground/70 hover:text-secondary transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-secondary transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-secondary transition-colors" aria-label="YouTube">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
            <Link to="/contact" className="btn-outline-gold text-xs py-2 px-4 border border-secondary text-secondary hover:bg-secondary hover:text-foreground font-subheading uppercase tracking-wider transition-colors rounded">
              Prayer Request
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-primary-foreground/10 text-center">
          <p className="font-body text-xs text-primary-foreground/50">
            © {new Date().getFullYear()} Akehlulwa Lutfo Ministries. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
