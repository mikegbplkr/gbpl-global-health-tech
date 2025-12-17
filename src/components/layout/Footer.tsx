import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Youtube } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  const footerNavigation = {
    solutions: [
      { name: t("nav.aiPlatform"), href: "/solutions/ai-platform" },
      { name: t("nav.exportServices"), href: "/solutions/export-services" },
    ],
    company: [
      { name: t("nav.companyProfile"), href: "/about/company" },
      { name: t("nav.ourStrength"), href: "/about/strength" },
      { name: t("nav.trackRecord"), href: "/performance/track-record" },
      { name: t("nav.roadmap"), href: "/performance/roadmap" },
    ],
    network: [
      { name: t("nav.pocNetwork"), href: "/network/overview" },
      { name: t("nav.successStories"), href: "/network/success-stories" },
    ],
  };

  const certifications = [
    "Venture Enterprise",
    "Research Institute",
    "AI Voucher Supplier",
  ];

  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-teal rounded-lg flex items-center justify-center">
                <span className="text-white font-display font-bold text-lg">G</span>
              </div>
              <span className="font-display font-bold text-xl">GBPL</span>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed mb-6 max-w-sm">
              {t("footer.description")}
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <MapPin className="h-4 w-4 text-teal flex-shrink-0" />
                <span>{t("footer.address")}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <Mail className="h-4 w-4 text-teal flex-shrink-0" />
                <a href="mailto:contact@gbpl.co.kr" className="hover:text-teal transition-colors">
                  contact@gbpl.co.kr
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <Phone className="h-4 w-4 text-teal flex-shrink-0" />
                <a href="tel:+82-2-1234-5678" className="hover:text-teal transition-colors">
                  +82-2-1234-5678
                </a>
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-subheading font-semibold text-sm uppercase tracking-wider mb-4">
              {t("footer.solutions")}
            </h3>
            <ul className="space-y-3">
              {footerNavigation.solutions.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-gray-300 hover:text-teal transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-subheading font-semibold text-sm uppercase tracking-wider mb-4">
              {t("nav.aboutUs")}
            </h3>
            <ul className="space-y-3">
              {footerNavigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-gray-300 hover:text-teal transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Network */}
          <div>
            <h3 className="font-subheading font-semibold text-sm uppercase tracking-wider mb-4">
              {t("nav.globalNetwork")}
            </h3>
            <ul className="space-y-3">
              {footerNavigation.network.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-gray-300 hover:text-teal transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <span className="text-sm text-gray-400">Certifications:</span>
            {certifications.map((cert) => (
              <span
                key={cert}
                className="px-3 py-1 bg-gray-800 rounded-full text-xs text-gray-300"
              >
                {cert}
              </span>
            ))}
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} GBPL Co., Ltd. {t("footer.rights")}
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="text-gray-400 hover:text-teal transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-teal transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-teal transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
