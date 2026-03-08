import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Cross } from "lucide-react";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/sermons", label: "Sermons" },
  { path: "/ministries", label: "Ministries" },
  { path: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-primary-foreground/10">
      <div className="container-church flex items-center justify-between h-16 sm:h-20 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <Cross className="w-6 h-6 text-secondary" />
          <div>
            <span className="font-heading text-sm sm:text-base text-primary-foreground tracking-widest uppercase">
              Akehlulwa Lutfo
            </span>
            <span className="block text-[10px] sm:text-xs text-secondary font-subheading tracking-wider uppercase">
              Ministries
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-subheading text-sm uppercase tracking-wider transition-colors duration-300 ${
                location.pathname === link.path
                  ? "text-secondary"
                  : "text-primary-foreground/80 hover:text-secondary"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-primary-foreground"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-primary/98 backdrop-blur-md border-t border-primary-foreground/10 animate-fade-in">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block font-subheading text-base uppercase tracking-wider transition-colors ${
                  location.pathname === link.path
                    ? "text-secondary"
                    : "text-primary-foreground/80 hover:text-secondary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
