import React from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  ArrowUpRight,
  Building2,
  Navigation,
} from 'lucide-react';
import { Logo } from './Logo';
import { BUSINESS_DATA } from '../data/businessData';
import { MAIN_NAV_LINKS, SOCIAL_LINKS } from '../config/navigation';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-ivory pt-16 pb-24 lg:pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 5-Column Desktop Grid / Responsive Mobile Stack */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* COLUMN 1: BRAND (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <Logo variant="light" size="lg" />
            <p className="text-sm text-ivory/70 leading-relaxed font-light mt-3 max-w-sm">
              {BUSINESS_DATA.supportingCopy}
            </p>

            <div className="p-3 bg-white/5 border border-white/10 rounded-sm space-y-1.5 text-xs text-ivory/80 max-w-sm">
              <div className="flex items-center justify-between text-stone-muted">
                <span>Principal Contractor</span>
                <span className="text-white font-medium">{BUSINESS_DATA.ownerName}</span>
              </div>
              <div className="flex items-center justify-between text-stone-muted">
                <span>Category</span>
                <span className="text-white font-medium">{BUSINESS_DATA.category}</span>
              </div>
              <div className="flex items-center justify-between text-stone-muted">
                <span>Milestones</span>
                <span className="text-white font-medium">Est. 2002 · 20 Yrs · 100+ Proj</span>
              </div>
            </div>
          </div>

          {/* COLUMN 2: QUICK LINKS (lg:col-span-2) */}
          <div className="lg:col-span-2">
            <h3 className="text-xs uppercase tracking-widest text-champagne font-semibold mb-4 flex items-center gap-1.5">
              <span>Quick Links</span>
            </h3>
            <ul className="space-y-2.5 text-sm text-ivory/75">
              {MAIN_NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="hover:text-champagne transition-colors inline-block py-1 min-h-[32px] sm:min-h-0"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/privacy-policy"
                  className="hover:text-champagne transition-colors inline-block py-1 min-h-[32px] sm:min-h-0 text-stone-muted"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: OUR 7 SERVICES (lg:col-span-3) */}
          <div className="lg:col-span-3">
            <h3 className="text-xs uppercase tracking-widest text-champagne font-semibold mb-4">
              Our 7 Services
            </h3>
            <ul className="space-y-2 text-sm text-ivory/75">
              {BUSINESS_DATA.services.map((service) => (
                <li key={service.slug}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="hover:text-champagne transition-colors inline-flex items-center justify-between w-full py-1 group min-h-[32px] sm:min-h-0"
                  >
                    <span className="group-hover:translate-x-0.5 transition-transform">{service.name}</span>
                    <ArrowUpRight className="w-3 h-3 text-champagne/40 group-hover:text-champagne transition-colors opacity-0 group-hover:opacity-100 shrink-0 ml-1" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4: CONTACT & LOCATION (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs uppercase tracking-widest text-champagne font-semibold mb-4">
              Direct Contact
            </h3>
            <div className="space-y-3.5 text-sm text-ivory/80">
              <a
                href={BUSINESS_DATA.telephoneUri}
                className="flex items-start gap-3 hover:text-champagne transition-colors group py-0.5"
              >
                <div className="p-1.5 rounded-xs bg-white/5 group-hover:bg-champagne/20 text-champagne mt-0.5 shrink-0 transition-colors">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="block text-xs text-stone-muted">Phone Enquiries</span>
                  <span className="font-medium text-white">{BUSINESS_DATA.primaryPhone}</span>
                </div>
              </a>

              <a
                href={BUSINESS_DATA.whatsappUri}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 hover:text-champagne transition-colors group py-0.5"
              >
                <div className="p-1.5 rounded-xs bg-[#25D366]/20 text-[#25D366] mt-0.5 shrink-0 transition-colors">
                  <MessageCircle className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="block text-xs text-stone-muted">WhatsApp Leads</span>
                  <span className="font-medium text-white">{BUSINESS_DATA.whatsappNumber}</span>
                </div>
              </a>

              <a
                href={BUSINESS_DATA.emailUri}
                className="flex items-start gap-3 hover:text-champagne transition-colors group py-0.5"
              >
                <div className="p-1.5 rounded-xs bg-white/5 group-hover:bg-champagne/20 text-champagne mt-0.5 shrink-0 transition-colors">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="block text-xs text-stone-muted">Email Direct</span>
                  <span className="font-medium text-white break-all text-xs sm:text-sm">
                    {BUSINESS_DATA.primaryEmail}
                  </span>
                </div>
              </a>

              <div className="flex items-start gap-3 pt-1">
                <div className="p-1.5 rounded-xs bg-white/5 text-champagne mt-0.5 shrink-0">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <div className="space-y-1">
                  <span className="block text-xs text-stone-muted">Operations Location</span>
                  <p className="text-xs text-ivory/70 leading-relaxed">
                    {BUSINESS_DATA.formattedPartnerAddress}
                  </p>
                  {BUSINESS_DATA.googleMaps.approved && (
                    <a
                      href={BUSINESS_DATA.googleMaps.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] text-champagne-light hover:text-white underline underline-offset-4 pt-0.5"
                    >
                      <Navigation className="w-3 h-3" />
                      <span>Get Directions on Google Maps</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER BOTTOM: INDEPENDENT BUSINESS & LEGAL */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-muted">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-center md:text-left">
            <span>Home Care Interior</span>
            <span aria-hidden="true" className="text-white/20">·</span>
            <span>Kondhwa, Pune, Maharashtra 411048</span>
            {BUSINESS_DATA.googleMaps.approved && (
              <>
                <span aria-hidden="true" className="text-white/20">·</span>
                <a
                  href={BUSINESS_DATA.googleMaps.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ivory/70 hover:text-champagne underline underline-offset-4"
                >
                  Google Maps Location
                </a>
              </>
            )}
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <Link to="/privacy-policy" className="hover:text-champagne transition-colors">
              Privacy Policy
            </Link>
            <span>&copy; {currentYear} Home Care Interior. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
