import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  Phone,
  ArrowUpRight,
  ChevronDown,
  ChevronRight,
  MessageCircle,
  Building,
  Home,
  Wrench,
  Sparkles,
  UtensilsCrossed,
  SquareDot,
  ClipboardList,
} from 'lucide-react';
import { Logo } from './Logo';
import { BUSINESS_DATA } from '../data/businessData';
import { MAIN_NAV_LINKS } from '../config/navigation';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesMobileExpanded, setIsServicesMobileExpanded] = useState(true);
  const [isDesktopServicesOpen, setIsDesktopServicesOpen] = useState(false);

  const desktopDropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const location = useLocation();

  // Scroll detection for sticky navigation styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsDesktopServicesOpen(false);
  }, [location.pathname]);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Handle escape key to close menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
        setIsDesktopServicesOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Mouse event handlers for desktop dropdown with safe hover buffer
  const handleDesktopMouseEnter = () => {
    if (desktopDropdownTimeoutRef.current) {
      clearTimeout(desktopDropdownTimeoutRef.current);
    }
    setIsDesktopServicesOpen(true);
  };

  const handleDesktopMouseLeave = () => {
    desktopDropdownTimeoutRef.current = setTimeout(() => {
      setIsDesktopServicesOpen(false);
    }, 200);
  };

  const isHeroTransparent = location.pathname === '/' && !isScrolled;

  const serviceIconMap: Record<string, React.ReactNode> = {
    'interior-work': <Sparkles className="w-4 h-4 text-champagne" />,
    'building-construction': <Building className="w-4 h-4 text-champagne" />,
    'renovation': <Home className="w-4 h-4 text-champagne" />,
    'civil-work': <Wrench className="w-4 h-4 text-champagne" />,
    'modular-kitchen': <UtensilsCrossed className="w-4 h-4 text-champagne" />,
    'false-ceiling': <SquareDot className="w-4 h-4 text-champagne" />,
    'project-management': <ClipboardList className="w-4 h-4 text-champagne" />,
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isHeroTransparent
            ? 'bg-gradient-to-b from-charcoal/80 via-charcoal/40 to-transparent py-4 sm:py-5'
            : 'bg-softwhite/95 backdrop-blur-md shadow-sm border-b border-stone-200/80 py-3 sm:py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 sm:gap-8 min-h-[48px]">
            {/* Zone 1: Brand Wordmark & Logo */}
            <div className="shrink-0">
              <Logo size="md" variant={isHeroTransparent ? 'light' : 'dark'} />
            </div>

            {/* Zone 2: Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
              {MAIN_NAV_LINKS.map((link) => {
                if (link.hasDropdown) {
                  return (
                    <div
                      key={link.path}
                      className="relative py-2 group"
                      onMouseEnter={handleDesktopMouseEnter}
                      onMouseLeave={handleDesktopMouseLeave}
                    >
                      <button
                        type="button"
                        onClick={() => setIsDesktopServicesOpen(!isDesktopServicesOpen)}
                        aria-expanded={isDesktopServicesOpen}
                        className={`inline-flex items-center gap-1.5 whitespace-nowrap shrink-0 transition-colors py-1 relative cursor-pointer ${
                          isHeroTransparent
                            ? location.pathname.startsWith('/services')
                              ? 'text-white font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-champagne'
                              : 'text-ivory/80 hover:text-white'
                            : location.pathname.startsWith('/services')
                            ? 'text-charcoal font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-champagne'
                            : 'text-charcoal/80 hover:text-champagne-dark'
                        }`}
                      >
                        <span>{link.label}</span>
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${
                            isDesktopServicesOpen ? 'rotate-180 text-champagne' : ''
                          }`}
                        />
                      </button>

                      {/* Desktop Dropdown Mega-Menu */}
                      {isDesktopServicesOpen && (
                        <div
                          className="absolute top-full left-1/2 -translate-x-1/2 w-[340px] bg-white border border-stone-200/90 shadow-xl rounded-sm py-2 px-1 z-50 animate-fade-in"
                          role="menu"
                          aria-label="Services menu"
                        >
                          <div className="px-3 py-2 border-b border-stone-100 flex items-center justify-between">
                            <span className="text-[11px] uppercase tracking-wider text-stone-muted font-semibold">
                              All 7 Official Services
                            </span>
                            <Link
                              to="/services"
                              onClick={() => setIsDesktopServicesOpen(false)}
                              className="text-xs font-semibold text-champagne-dark hover:text-charcoal flex items-center gap-0.5"
                            >
                              <span>Overview</span>
                              <ArrowUpRight className="w-3 h-3" />
                            </Link>
                          </div>

                          <div className="py-1">
                            {BUSINESS_DATA.services.map((service) => (
                              <Link
                                key={service.slug}
                                to={`/services/${service.slug}`}
                                onClick={() => setIsDesktopServicesOpen(false)}
                                className={`flex items-start gap-3 px-3 py-2.5 rounded-sm hover:bg-ivory/60 transition-colors group/item ${
                                  location.pathname === `/services/${service.slug}`
                                    ? 'bg-ivory text-charcoal font-semibold'
                                    : 'text-charcoal/80'
                                }`}
                                role="menuitem"
                              >
                                <div className="mt-0.5 shrink-0 p-1 rounded-xs bg-stone-100 group-hover/item:bg-white transition-colors">
                                  {serviceIconMap[service.id] || <Sparkles className="w-4 h-4 text-champagne" />}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center justify-between">
                                    <span className="text-xs font-medium text-charcoal group-hover/item:text-champagne-dark transition-colors">
                                      {service.name}
                                    </span>
                                    {service.isPrimary && (
                                      <span className="text-[9px] uppercase tracking-wider text-champagne-dark bg-champagne/10 px-1.5 py-0.2 rounded-xs font-semibold">
                                        Primary
                                      </span>
                                    )}
                                  </div>
                                  <p className="text-[11px] text-stone-muted line-clamp-1 mt-0.5 font-light">
                                    {service.shortDesc}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={({ isActive }) =>
                      `whitespace-nowrap shrink-0 transition-colors py-1 relative ${
                        isHeroTransparent
                          ? isActive
                            ? 'text-white font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-champagne'
                            : 'text-ivory/80 hover:text-white'
                          : isActive
                          ? 'text-charcoal font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-champagne'
                          : 'text-charcoal/80 hover:text-champagne-dark'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                );
              })}
            </nav>

            {/* Zone 3: Desktop Action & Phone */}
            <div className="hidden lg:flex items-center gap-4 shrink-0">
              <a
                href={BUSINESS_DATA.telephoneUri}
                className={`inline-flex items-center gap-1.5 text-xs font-medium transition-colors ${
                  isHeroTransparent ? 'text-ivory/80 hover:text-white' : 'text-charcoal/70 hover:text-charcoal'
                }`}
                title={`Call ${BUSINESS_DATA.primaryPhone}`}
              >
                <Phone className="w-3.5 h-3.5 text-champagne" />
                <span>{BUSINESS_DATA.primaryPhone}</span>
              </a>

              <Link
                to="/contact"
                className={`inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider rounded-sm shadow-sm whitespace-nowrap transition-colors ${
                  isHeroTransparent
                    ? 'text-charcoal bg-champagne hover:bg-champagne-light'
                    : 'text-white bg-charcoal hover:bg-olive'
                }`}
              >
                <span>Discuss Your Project</span>
                <ArrowUpRight
                  className={`w-3.5 h-3.5 ${isHeroTransparent ? 'text-charcoal' : 'text-champagne-light'}`}
                />
              </Link>
            </div>

            {/* Mobile Header Right Actions (Touch target >= 44x44px) */}
            <div className="flex items-center gap-2 lg:hidden shrink-0">
              {/* Direct call action on mobile */}
              <a
                href={BUSINESS_DATA.telephoneUri}
                className={`w-11 h-11 flex items-center justify-center rounded-sm border transition-colors ${
                  isHeroTransparent
                    ? 'border-white/20 text-white bg-charcoal/40 hover:bg-charcoal/60'
                    : 'border-stone-200 text-charcoal bg-white hover:bg-ivory'
                }`}
                aria-label="Call Home Care Interior: +91 9823857050"
              >
                <Phone className="w-4 h-4 text-champagne-dark" />
              </a>

              {/* Accessible Hamburger Menu Button */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`w-11 h-11 flex items-center justify-center rounded-sm border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne ${
                  isHeroTransparent
                    ? 'border-white/20 text-white bg-charcoal/40 hover:bg-charcoal/60'
                    : 'border-stone-200 text-charcoal bg-white hover:bg-ivory'
                }`}
                aria-label={isMobileMenuOpen ? 'Close main navigation' : 'Open main navigation'}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-charcoal" />
                ) : (
                  <Menu className={`w-6 h-6 ${isHeroTransparent ? 'text-white' : 'text-charcoal'}`} />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* COMPLETE MOBILE NAVIGATION DRAWER */}
      {isMobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
          className="fixed inset-0 z-50 lg:hidden flex flex-col bg-softwhite animate-fade-in text-charcoal"
          style={{ paddingTop: 'env(safe-area-inset-top)', paddingBottom: 'env(safe-area-inset-bottom)' }}
        >
          {/* Mobile Drawer Top Bar */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-stone-200 bg-white shrink-0">
            <Logo size="md" variant="dark" onClick={() => setIsMobileMenuOpen(false)} />
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-11 h-11 flex items-center justify-center rounded-sm border border-stone-200 text-charcoal hover:bg-ivory focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne"
              aria-label="Close navigation"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Scrollable Navigation List */}
          <div className="flex-1 overflow-y-auto px-5 py-6 flex flex-col justify-between">
            <nav className="space-y-1">
              {/* Home */}
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center justify-between px-3 py-3.5 rounded-sm text-base font-serif tracking-wide transition-colors ${
                  location.pathname === '/'
                    ? 'bg-ivory text-champagne-dark font-semibold'
                    : 'text-charcoal hover:bg-ivory/60'
                }`}
              >
                <span>Home</span>
                <ChevronRight className="w-4 h-4 text-stone-muted" />
              </Link>

              {/* About Us */}
              <Link
                to="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center justify-between px-3 py-3.5 rounded-sm text-base font-serif tracking-wide transition-colors ${
                  location.pathname === '/about'
                    ? 'bg-ivory text-champagne-dark font-semibold'
                    : 'text-charcoal hover:bg-ivory/60'
                }`}
              >
                <span>About Us</span>
                <ChevronRight className="w-4 h-4 text-stone-muted" />
              </Link>

              {/* OUR SERVICES - Expandable Accordion with all 7 Services */}
              <div className="pt-1 pb-1">
                <div
                  className={`flex items-center justify-between px-3 py-3.5 rounded-sm text-base font-serif tracking-wide cursor-pointer transition-colors ${
                    location.pathname.startsWith('/services')
                      ? 'bg-ivory text-champagne-dark font-semibold'
                      : 'text-charcoal hover:bg-ivory/60'
                  }`}
                  onClick={() => setIsServicesMobileExpanded(!isServicesMobileExpanded)}
                >
                  <div className="flex items-center gap-2">
                    <span>Our Services</span>
                    <span className="text-[10px] uppercase font-sans tracking-wider bg-champagne/20 text-champagne-dark font-semibold px-2 py-0.5 rounded-xs">
                      7 Core Services
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-charcoal transition-transform duration-200 ${
                      isServicesMobileExpanded ? 'rotate-180 text-champagne-dark' : ''
                    }`}
                  />
                </div>

                {/* Submenu of all 7 services */}
                {isServicesMobileExpanded && (
                  <div className="mt-1 ml-3 pl-3 border-l-2 border-champagne/40 space-y-1 py-1">
                    <Link
                      to="/services"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center justify-between px-3 py-2.5 rounded-sm text-xs font-semibold uppercase tracking-wider ${
                        location.pathname === '/services'
                          ? 'text-champagne-dark bg-ivory font-bold'
                          : 'text-stone-muted hover:text-charcoal hover:bg-stone-100'
                      }`}
                    >
                      <span>All Services Overview</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-champagne" />
                    </Link>

                    {BUSINESS_DATA.services.map((service) => (
                      <Link
                        key={service.slug}
                        to={`/services/${service.slug}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`flex items-center justify-between px-3 py-2.5 rounded-sm text-sm transition-colors ${
                          location.pathname === `/services/${service.slug}`
                            ? 'bg-ivory text-charcoal font-semibold border-l-2 border-champagne'
                            : 'text-charcoal/80 hover:text-charcoal hover:bg-ivory/40'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          {serviceIconMap[service.id] || <Sparkles className="w-3.5 h-3.5 text-champagne" />}
                          <span>{service.name}</span>
                        </div>
                        {service.isPrimary && (
                          <span className="text-[9px] uppercase tracking-wider text-champagne-dark font-semibold">
                            Primary
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Our Projects */}
              <Link
                to="/projects"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center justify-between px-3 py-3.5 rounded-sm text-base font-serif tracking-wide transition-colors ${
                  location.pathname === '/projects'
                    ? 'bg-ivory text-champagne-dark font-semibold'
                    : 'text-charcoal hover:bg-ivory/60'
                }`}
              >
                <span>Our Projects</span>
                <ChevronRight className="w-4 h-4 text-stone-muted" />
              </Link>

              {/* Our Process */}
              <Link
                to="/process"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center justify-between px-3 py-3.5 rounded-sm text-base font-serif tracking-wide transition-colors ${
                  location.pathname === '/process'
                    ? 'bg-ivory text-champagne-dark font-semibold'
                    : 'text-charcoal hover:bg-ivory/60'
                }`}
              >
                <span>Our Process</span>
                <ChevronRight className="w-4 h-4 text-stone-muted" />
              </Link>

              {/* Contact Us */}
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center justify-between px-3 py-3.5 rounded-sm text-base font-serif tracking-wide transition-colors ${
                  location.pathname === '/contact'
                    ? 'bg-ivory text-champagne-dark font-semibold'
                    : 'text-charcoal hover:bg-ivory/60'
                }`}
              >
                <span>Contact Us</span>
                <ChevronRight className="w-4 h-4 text-stone-muted" />
              </Link>

              {/* Privacy Policy */}
              <Link
                to="/privacy-policy"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center justify-between px-3 py-2.5 rounded-sm text-xs uppercase tracking-wider text-stone-muted hover:text-charcoal ${
                  location.pathname === '/privacy-policy' ? 'text-charcoal font-semibold' : ''
                }`}
              >
                <span>Privacy Policy</span>
                <ChevronRight className="w-3.5 h-3.5 text-stone-muted" />
              </Link>
            </nav>

            {/* Direct Mobile Quick Actions in Drawer */}
            <div className="pt-6 border-t border-stone-200 mt-6 space-y-3">
              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href={BUSINESS_DATA.telephoneUri}
                  className="flex items-center justify-center gap-2 py-3 px-3 bg-charcoal hover:bg-olive text-white rounded-sm text-xs font-semibold uppercase tracking-wider transition-colors min-h-[44px]"
                >
                  <Phone className="w-3.5 h-3.5 text-champagne" />
                  <span>Call Us</span>
                </a>

                <a
                  href={BUSINESS_DATA.whatsappUri}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-3 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-sm text-xs font-semibold uppercase tracking-wider transition-colors min-h-[44px]"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>

              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-champagne hover:bg-champagne-light text-charcoal rounded-sm text-xs font-semibold uppercase tracking-wider transition-colors min-h-[44px] shadow-sm"
              >
                <span>Discuss Your Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
