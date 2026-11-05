import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageCircle, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { Logo } from './Logo';
import { BUSINESS_DATA } from '../data/businessData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal text-ivory pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand & Introduction */}
          <div className="lg:col-span-4 flex flex-col space-y-4">
            <Logo variant="light" size="lg" />
            <p className="text-sm text-ivory/70 leading-relaxed font-light mt-2 max-w-sm">
              {BUSINESS_DATA.supportingCopy}
            </p>
            <div className="pt-2 text-xs text-stone-muted space-y-1">
              <p>Principal: <span className="text-ivory font-medium">{BUSINESS_DATA.ownerName}</span></p>
              <p>Business Category: <span className="text-ivory font-medium">{BUSINESS_DATA.category}</span></p>
              <div className="inline-flex items-center gap-1.5 text-champagne pt-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Verified Provider on Swaraj Connects</span>
              </div>
            </div>
          </div>

          {/* All 7 Services */}
          <div className="lg:col-span-3">
            <h3 className="text-xs uppercase tracking-widest text-champagne font-semibold mb-4">
              Our 7 Services
            </h3>
            <ul className="space-y-2 text-sm text-ivory/75">
              {BUSINESS_DATA.services.map((service) => (
                <li key={service.slug}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="hover:text-champagne transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>{service.name}</span>
                    <ArrowUpRight className="w-3 h-3 text-champagne/40 group-hover:text-champagne transition-colors opacity-0 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links & Process */}
          <div className="lg:col-span-2">
            <h3 className="text-xs uppercase tracking-widest text-champagne font-semibold mb-4">
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm text-ivory/75">
              <li>
                <Link to="/" className="hover:text-champagne transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-champagne transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-champagne transition-colors">
                  All Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-champagne transition-colors">
                  Selected Work
                </Link>
              </li>
              <li>
                <Link to="/process" className="hover:text-champagne transition-colors">
                  Our 5-Step Process
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-champagne transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-champagne transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Contact & Location */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs uppercase tracking-widest text-champagne font-semibold mb-4">
              Direct Contact
            </h3>
            <div className="space-y-3 text-sm text-ivory/80">
              <a
                href={BUSINESS_DATA.telephoneUri}
                className="flex items-start gap-3 hover:text-champagne transition-colors group"
              >
                <Phone className="w-4 h-4 text-champagne mt-0.5 shrink-0" />
                <div>
                  <span className="block text-xs text-stone-muted">Phone Enquiries</span>
                  <span className="font-medium text-white">{BUSINESS_DATA.primaryPhone}</span>
                </div>
              </a>

              <a
                href={BUSINESS_DATA.whatsappUri}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 hover:text-champagne transition-colors group"
              >
                <MessageCircle className="w-4 h-4 text-champagne mt-0.5 shrink-0" />
                <div>
                  <span className="block text-xs text-stone-muted">WhatsApp Enquiries</span>
                  <span className="font-medium text-white">{BUSINESS_DATA.whatsappNumber}</span>
                </div>
              </a>

              <a
                href={BUSINESS_DATA.emailUri}
                className="flex items-start gap-3 hover:text-champagne transition-colors group"
              >
                <Mail className="w-4 h-4 text-champagne mt-0.5 shrink-0" />
                <div>
                  <span className="block text-xs text-stone-muted">Email Direct</span>
                  <span className="font-medium text-white break-all">{BUSINESS_DATA.primaryEmail}</span>
                </div>
              </a>

              <div className="flex items-start gap-3 pt-1">
                <MapPin className="w-4 h-4 text-champagne mt-0.5 shrink-0" />
                <div>
                  <span className="block text-xs text-stone-muted">Location</span>
                  <span className="text-xs text-ivory/70 leading-relaxed block">
                    {BUSINESS_DATA.formattedPartnerAddress}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Directory Authority & Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-muted">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-center md:text-left">
            <span>Official Directory Records:</span>
            <a
              href={BUSINESS_DATA.directorySource1}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ivory/70 hover:text-champagne underline underline-offset-4"
            >
              Swaraj Connects Provider Profile
            </a>
            <span aria-hidden="true">·</span>
            <a
              href={BUSINESS_DATA.directorySource2}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ivory/70 hover:text-champagne underline underline-offset-4"
            >
              Yusuf Musir Khan Partner Profile
            </a>
            {BUSINESS_DATA.googleMaps.approved && (
              <>
                <span aria-hidden="true">·</span>
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

          <div className="flex items-center gap-4">
            <Link to="/privacy-policy" className="hover:text-champagne transition-colors">
              Privacy
            </Link>
            <span>&copy; {new Date().getFullYear()} Home Care Interior. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
