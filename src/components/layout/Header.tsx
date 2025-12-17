import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  const navigation = [
    { name: t("nav.home"), href: "/" },
    {
      name: t("nav.aboutUs"),
      children: [
        { name: t("nav.companyProfile"), href: "/about/company" },
        { name: t("nav.ourStrength"), href: "/about/strength" },
      ],
    },
    {
      name: t("nav.solutions"),
      children: [
        { name: t("nav.aiPlatform"), href: "/solutions/ai-platform" },
        { name: t("nav.exportServices"), href: "/solutions/export-services" },
      ],
    },
    {
      name: t("nav.globalNetwork"),
      children: [
        { name: t("nav.pocNetwork"), href: "/network/overview" },
        { name: t("nav.successStories"), href: "/network/success-stories" },
      ],
    },
    {
      name: t("nav.performance"),
      children: [
        { name: t("nav.trackRecord"), href: "/performance/track-record" },
        { name: t("nav.roadmap"), href: "/performance/roadmap" },
      ],
    },
    { name: t("nav.contact"), href: "/contact" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Global">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5 flex items-center gap-2">
              <div className="w-10 h-10 bg-navy rounded-lg flex items-center justify-center">
                <span className="text-white font-display font-bold text-lg">G</span>
              </div>
              <span className="font-display font-bold text-xl text-navy">GBPL</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) =>
              item.children ? (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-teal transition-colors outline-none">
                    {item.name}
                    <ChevronDown className="h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="center" className="w-48">
                    {item.children.map((child) => (
                      <DropdownMenuItem key={child.name} asChild>
                        <Link
                          to={child.href}
                          className={cn(
                            "w-full cursor-pointer",
                            isActive(child.href) && "text-teal font-medium"
                          )}
                        >
                          {child.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors",
                    isActive(item.href)
                      ? "text-teal"
                      : "text-gray-700 hover:text-teal"
                  )}
                >
                  {item.name}
                </Link>
              )
            )}
          </div>

          {/* Right side - Language toggle & CTA */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-teal transition-colors outline-none">
                <Globe className="h-4 w-4" />
                {language}
                <ChevronDown className="h-3 w-3" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onSelect={() => setLanguage("EN")}>
                  English
                </DropdownMenuItem>
                <DropdownMenuItem onSelect={() => setLanguage("KO")}>
                  한국어
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button asChild className="bg-teal hover:bg-teal-dark text-white">
              <Link to="/contact">{t("nav.contactUs")}</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div className="fixed inset-0 bg-black/30" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link to="/" className="-m-1.5 p-1.5 flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                <div className="w-10 h-10 bg-navy rounded-lg flex items-center justify-center">
                  <span className="text-white font-display font-bold text-lg">G</span>
                </div>
                <span className="font-display font-bold text-xl text-navy">GBPL</span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) =>
                    item.children ? (
                      <div key={item.name} className="space-y-2">
                        <span className="block px-3 py-2 text-base font-semibold text-gray-900">
                          {item.name}
                        </span>
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            to={child.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-teal"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50 hover:text-teal"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )
                  )}
                </div>
                <div className="py-6 space-y-4">
                  <div className="flex items-center gap-2 px-3">
                    <Globe className="h-4 w-4 text-gray-600" />
                    <button
                      onClick={() => setLanguage("EN")}
                      className={cn("text-sm", language === "EN" ? "text-teal font-medium" : "text-gray-600")}
                    >
                      EN
                    </button>
                    <span className="text-gray-300">|</span>
                    <button
                      onClick={() => setLanguage("KO")}
                      className={cn("text-sm", language === "KO" ? "text-teal font-medium" : "text-gray-600")}
                    >
                      KO
                    </button>
                  </div>
                  <Button asChild className="w-full bg-teal hover:bg-teal-dark text-white">
                    <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>{t("nav.contactUs")}</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
