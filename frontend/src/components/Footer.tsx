import { Link } from "react-router-dom";
import { Instagram, Youtube, Facebook } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link
              to="/"
              className="inline-flex items-center mb-4 -mt-2"
            >
              <img
                src="/images/logo.png"
                alt="Logo"
                className="h-24 w-auto"
              />
            </Link>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Master watercolor painting through professional guidance and
              structured courses.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:pl-24">
            <h3 className="text-sm tracking-wide mb-4 text-neutral-900">
              Quick Links
            </h3>
            <div className="space-y-2">
              <Link
                to="/"
                className="block text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                Home
              </Link>
              <Link
                to="/courses"
                className="block text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                Courses
              </Link>
              <Link
                to="/contact"
                className="block text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-sm tracking-wide mb-4 text-neutral-900">
              Follow Me
            </h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-neutral-600 hover:text-neutral-900 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-neutral-600 hover:text-neutral-900 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-neutral-600 hover:text-neutral-900 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-neutral-200 space-y-4">
          <p className="text-sm text-neutral-500 text-center">
            © {currentYear} Mauri Virtanen. All rights reserved.
          </p>
          <a
            href="https://nivusoftware.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto w-fit flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
          >
            <img
              src="/images/logo_nube.png"
              alt="Nivusoftware"
              className="h-4 w-auto"
            />
            <span>
              Desarrollado por <strong>Nivusoftware</strong>
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
