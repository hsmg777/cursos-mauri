import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { useTranslation } from "react-i18next";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const scrollToTop = () => window.scrollTo({ top: 0, left: 0, behavior: "auto" });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: t("navbar.home"), path: "/" },
    { name: t("navbar.courses"), path: "/courses" },
    { name: t("navbar.contact"), path: "/contact" },
  ];

  const currentLang = i18n.language.startsWith("en") ? "EN" : "ES";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link
            to="/"
            className="inline-flex items-center"
            onClick={scrollToTop}
          >
            <img
              src="/images/logo.png"
              alt="Logo"
              className="h-44 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={scrollToTop}
                className={`text-sm tracking-wide transition-colors ${
                  location.pathname === link.path
                    ? "text-neutral-900"
                    : "text-neutral-600 hover:text-neutral-900"
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Language Selector */}
            <div className="flex items-center gap-2 text-sm text-neutral-600">
              <div className="relative">
                <select
                  value={currentLang}
                  onChange={(e) => i18n.changeLanguage(e.target.value.toLowerCase())}
                  className="appearance-none bg-transparent border border-neutral-300 rounded-md pl-3 pr-8 py-1 text-neutral-900"
                >
                  <option value="ES">ES</option>
                  <option value="EN">EN</option>
                </select>
                <ChevronDown className="w-3 h-3 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-600" />
              </div>
            </div>

            <Button
              asChild
              variant="default"
              className="bg-neutral-900 hover:bg-neutral-800 text-white px-6 transition-all"
            >
              <Link to="/courses" onClick={scrollToTop}>{t("navbar.viewCourses")}</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-neutral-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-neutral-200">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={scrollToTop}
                className={`block text-lg ${
                  location.pathname === link.path
                    ? "text-neutral-900"
                    : "text-neutral-600"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 space-y-3">
              <Button asChild variant="default" className="w-full bg-neutral-900 hover:bg-neutral-800">
                <Link to="/courses" onClick={scrollToTop}>{t("navbar.viewCourses")}</Link>
              </Button>
              <div className="flex items-center justify-center space-x-2 text-sm text-neutral-600">
                <span>{t("navbar.language")}:</span>
                <div className="relative">
                  <select
                    value={currentLang}
                    onChange={(e) => i18n.changeLanguage(e.target.value.toLowerCase())}
                    className="appearance-none bg-transparent border border-neutral-300 rounded-md pl-3 pr-8 py-1 text-neutral-900"
                  >
                    <option value="ES">ES</option>
                    <option value="EN">EN</option>
                  </select>
                  <ChevronDown className="w-3 h-3 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
