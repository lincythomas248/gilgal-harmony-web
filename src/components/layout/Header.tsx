import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, MapPin, Mail, Phone } from "lucide-react";
import logo from "@/assets/logo-church.png";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Our Beliefs", href: "/beliefs" },
  {
    name: "Ministries",
    href: "/ministries",
    children: [
      { name: "Scripture School", href: "/ministries/scripture-school" },
      { name: "PYPA", href: "/ministries/pypa" },
      { name: "Prayer & Fellowship", href: "/prayer-fellowship" },
    ],
  },
  { name: "Media", href: "/media" },
  { name: "Events", href: "/events" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact Us", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [ministriesOpen, setMinistriesOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;
  const isMinistryActive = () =>
    location.pathname.startsWith("/ministries") || location.pathname === "/prayer-fellowship";

  return (
    <>
      {/* Top Info Strip */}
      <div className="bg-navy text-navy-foreground text-sm hidden md:block">
        <div className="section-container">
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-dove" />
                <span className="text-navy-foreground/80">Sharjah & Ras Al Khaimah, UAE</span>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <a href="mailto:ipcgilgalshj@gmail.com" className="flex items-center gap-2 hover:text-dove transition-colors">
                <Mail className="h-3.5 w-3.5" />
                <span>ipcgilgalshj@gmail.com</span>
              </a>
              <a href="tel:+971501892016" className="flex items-center gap-2 hover:text-dove transition-colors">
                <Phone className="h-3.5 w-3.5" />
                <span>+971 50 189 2016</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-card shadow-sm sticky top-0 z-50 border-b border-border">
        <nav className="section-container">
          <div className="flex items-center justify-between py-3">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt="IPC Gilgal Church" className="h-16 md:h-20 w-auto" />
              <div className="hidden sm:block">
                <p className="text-lg font-semibold text-foreground">IPC Gilgal</p>
                <p className="text-xs text-muted-foreground">Sharjah & RAK</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navigation.map((item) =>
                item.children ? (
                  <div key={item.name} className="relative group">
                    <button
                      className={`nav-link px-3 py-2 flex items-center gap-1 ${
                        isMinistryActive() ? "nav-link-active" : ""
                      }`}
                    >
                      {item.name}
                      <ChevronDown className="h-4 w-4" />
                    </button>
                    <div className="absolute top-full left-0 pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="bg-card border border-border rounded-md shadow-lg py-2 min-w-[180px]">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            to={child.href}
                            className={`block px-4 py-2 text-sm hover:bg-muted transition-colors ${
                              isActive(child.href)
                                ? "text-primary font-medium"
                                : "text-foreground/80"
                            }`}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`nav-link px-3 py-2 ${
                      isActive(item.href) ? "nav-link-active" : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              )}
              <a
                href="https://www.instantchurchdirectory.com/login"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-3 btn-primary text-sm px-4 py-2"
              >
                Member Login
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="lg:hidden border-t border-border py-4">
              {/* Mobile info strip */}
              <div className="flex flex-col gap-2 mb-4 pb-4 border-b border-border text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5" />
                  <span>Sharjah & Ras Al Khaimah, UAE</span>
                </div>
                <a href="mailto:ipcgilgalshj@gmail.com" className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="h-3.5 w-3.5" />
                  <span>ipcgilgalshj@gmail.com</span>
                </a>
                <a href="tel:+971501892016" className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="h-3.5 w-3.5" />
                  <span>+971 50 189 2016</span>
                </a>
              </div>
              
              <div className="flex flex-col gap-1">
                {navigation.map((item) =>
                  item.children ? (
                    <div key={item.name}>
                      <button
                        onClick={() => setMinistriesOpen(!ministriesOpen)}
                        className={`w-full text-left nav-link px-3 py-2 flex items-center justify-between ${
                          isMinistryActive() ? "nav-link-active" : ""
                        }`}
                      >
                        {item.name}
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${
                            ministriesOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {ministriesOpen && (
                        <div className="pl-6 flex flex-col gap-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              to={child.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className={`py-2 text-sm ${
                                isActive(child.href)
                                  ? "text-primary font-medium"
                                  : "text-foreground/70"
                              }`}
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`nav-link px-3 py-2 ${
                        isActive(item.href) ? "nav-link-active" : ""
                      }`}
                    >
                      {item.name}
                    </Link>
                  )
                )}
                <a
                  href="https://www.instantchurchdirectory.com/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 mx-3 btn-primary text-sm text-center"
                >
                  Member Directory Login
                </a>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}
