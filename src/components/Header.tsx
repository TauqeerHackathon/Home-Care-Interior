import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ArrowUpRight } from 'lucide-react';
import { Logo } from './Logo';
import { BUSINESS_DATA } from '../data/businessData';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Our Services', path: '/services' },
    { label: 'Our Projects', path: '/projects' },
    { label: 'Our Process', path: '/process' },
    { label: 'Contact Us', path: '/contact' },
  ];

  const isHeroTransparent = location.pathname === '/' && !isScrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isHeroTransparent
            ? 'bg-transparent py-5'
            : 'bg-softwhite/95 backdrop-blur-md shadow-sm border-b border-stone-200/80 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Brand wordmark */}
            <div className="shrink-0">
              <Logo size="md" variant={isHeroTransparent ? 'light' : 'dark'} />
            </div>

            {/* Zone 2: Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
              {navLinks.map((link) => (
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
              ))}
            </nav>

            {/* Zone 3: 1 Primary Action */}
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
                <ArrowUpRight className={`w-3.5 h-3.5 ${isHeroTransparent ? 'text-charcoal' : 'text-champagne-light'}`} />
              </Link>
            </div>

            {/* Mobile menu toggle button */}
            <div className="flex items-center gap-3 lg:hidden">
              <a
                href={BUSINESS_DATA.telephoneUri}
                className={`p-2 rounded-sm border ${
                  isHeroTransparent
                    ? 'border-white/20 text-white bg-white/10'
                    : 'border-stone-muted/30 text-charcoal bg-white/80'
                }`}
                aria-label="Call Home Care Interior"
              >
                <Phone className="w-4 h-4 text-champagne-dark" />
              </a>

              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-champagne ${
                  isHeroTransparent ? 'text-white hover:text-champagne' : 'text-charcoal hover:text-champagne-dark'
                }`}
                aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
          className="fixed inset-0 z-50 lg:hidden flex flex-col bg-charcoal text-ivory animate-fade-in"
        >
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
            <Logo size="md" variant="light" />
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-ivory/80 hover:text-white"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col justify-between">
            <nav className="flex flex-col space-y-5">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-xl font-serif tracking-wide transition-colors ${
                      isActive ? 'text-champagne font-semibold' : 'text-ivory/80 hover:text-white'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}

              <div className="pt-6 border-t border-white/10">
                <span className="text-xs uppercase tracking-widest text-stone-muted block mb-3">
                  Our 7 Services
                </span>
                <div className="grid grid-cols-1 gap-2.5 text-sm text-ivory/70">
                  {BUSINESS_DATA.services.map((s) => (
                    <Link
                      key={s.slug}
                      to={`/services/${s.slug}`}
                      className="hover:text-champagne transition-colors py-1 flex items-center justify-between"
                    >
                      <span>{s.name}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-champagne/60" />
                    </Link>
                  ))}
                </div>
              </div>
            </nav>

            <div className="pt-8 border-t border-white/10 flex flex-col gap-4">
              <a
                href={BUSINESS_DATA.telephoneUri}
                className="flex items-center justify-center gap-2 w-full py-3 text-sm font-semibold text-charcoal bg-champagne hover:bg-champagne-light rounded-sm transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call {BUSINESS_DATA.primaryPhone}</span>
              </a>

              <Link
                to="/contact"
                className="flex items-center justify-center gap-2 w-full py-3 text-sm font-semibold uppercase tracking-wider text-white border border-champagne/40 hover:bg-white/5 rounded-sm transition-colors"
              >
                <span>Discuss Your Project</span>
                <ArrowUpRight className="w-4 h-4 text-champagne" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
