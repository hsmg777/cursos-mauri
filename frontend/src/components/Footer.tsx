import { Link } from "react-router-dom";
import { Instagram, Youtube, Facebook } from "lucide-react";
import { useTranslation } from "react-i18next";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 grid grid-cols-1 gap-8 text-center md:grid-cols-3 md:text-left">
          {/* Brand */}
          <div>
            <Link
              to="/"
              className="mb-4 inline-flex items-center md:-mt-2"
            >
              <img
                src="/images/logo.png"
                alt="Logo"
                className="h-20 w-auto sm:h-24"
              />
            </Link>
            <p className="text-sm text-neutral-600 leading-relaxed">
              {t("footer.description")}
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:pl-24">
            <h3 className="text-sm tracking-wide mb-4 text-neutral-900">
              {t("footer.quickLinks")}
            </h3>
            <div className="space-y-2">
              <Link
                to="/"
                className="block text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                {t("navbar.home")}
              </Link>
              <Link
                to="/courses"
                className="block text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                {t("navbar.courses")}
              </Link>
              <Link
                to="/contact"
                className="block text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                {t("navbar.contact")}
              </Link>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-sm tracking-wide mb-4 text-neutral-900">
              {t("footer.followMe")}
            </h3>
            <div className="flex justify-center space-x-4 md:justify-start">
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

        <div className="space-y-4 border-t border-neutral-200 pt-8 text-center">
          <p className="text-center text-sm text-neutral-500">
            © {currentYear} Mauri Virtanen. {t("footer.rights")}
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
            <span className="mt-0.5">
              {t("footer.developedBy")} <strong>Nivusoftware</strong>
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
