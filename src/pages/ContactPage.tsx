import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Clock, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { BUSINESS_DATA } from '../data/businessData';
import { ContactForm } from '../components/ContactForm';
import { SEO } from '../components/SEO';

export const ContactPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Contact Us | Yusuf Musir Khan - Home Care Interior Pune"
        description="Contact Home Care Interior in Kondhwa, Pune. Call +91 9823857050 or message via WhatsApp for building construction, renovation, civil contracting, and interior inquiries."
      />

      {/* Header */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-[0.22em] text-champagne block mb-4 font-medium">
              Direct Client Engagement
            </span>
            <h1 className="text-4xl sm:text-5xl font-serif font-normal text-white leading-tight mb-6">
              Discuss Your Project
            </h1>
            <p className="text-base sm:text-lg text-ivory/80 leading-relaxed font-light">
              Connect directly with Yusuf Musir Khan for consultations across Kondhwa, Wanowrie, NIBM, Camp, and greater Pune.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-softwhite">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Contact Details & Direct Actions */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-champagne-dark font-medium block mb-2">
                  Official Contact Details
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif text-charcoal font-normal">
                  Home Care Interior
                </h2>
                <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed mt-2 font-light">
                  Direct communication with the business owner ensures rapid site appraisals, accurate scope estimates, and personal craftsmanship oversight.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                <a
                  href={BUSINESS_DATA.telephoneUri}
                  className="flex items-start gap-4 p-5 bg-white border border-stone-200 rounded-sm hover:border-champagne/40 transition-colors group shadow-xs"
                >
                  <div className="p-2.5 bg-ivory rounded-sm text-champagne-dark group-hover:bg-champagne group-hover:text-charcoal transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-stone-muted font-medium">
                      Primary Telephone
                    </span>
                    <span className="text-base font-semibold text-charcoal group-hover:text-champagne-dark transition-colors">
                      {BUSINESS_DATA.primaryPhone}
                    </span>
                    <span className="block text-xs text-charcoal/60 mt-0.5">Click to call directly</span>
                  </div>
                </a>

                <a
                  href={BUSINESS_DATA.whatsappUri}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-5 bg-white border border-stone-200 rounded-sm hover:border-champagne/40 transition-colors group shadow-xs"
                >
                  <div className="p-2.5 bg-[#25D366]/10 rounded-sm text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-stone-muted font-medium">
                      WhatsApp Lead Contact
                    </span>
                    <span className="text-base font-semibold text-charcoal group-hover:text-champagne-dark transition-colors">
                      {BUSINESS_DATA.whatsappNumber}
                    </span>
                    <span className="block text-xs text-charcoal/60 mt-0.5">Prefilled instant messaging</span>
                  </div>
                </a>

                <a
                  href={BUSINESS_DATA.emailUri}
                  className="flex items-start gap-4 p-5 bg-white border border-stone-200 rounded-sm hover:border-champagne/40 transition-colors group shadow-xs"
                >
                  <div className="p-2.5 bg-ivory rounded-sm text-champagne-dark group-hover:bg-champagne group-hover:text-charcoal transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-stone-muted font-medium">
                      Official Email
                    </span>
                    <span className="text-sm font-semibold text-charcoal group-hover:text-champagne-dark transition-colors break-all">
                      {BUSINESS_DATA.primaryEmail}
                    </span>
                    <span className="block text-xs text-charcoal/60 mt-0.5">Direct client enquiries</span>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-5 bg-white border border-stone-200 rounded-sm shadow-xs">
                  <div className="p-2.5 bg-ivory rounded-sm text-champagne-dark">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="block text-xs uppercase tracking-wider text-stone-muted font-medium">
                      Partner Location
                    </span>
                    <p className="text-xs font-mono text-charcoal/80 leading-relaxed">
                      {BUSINESS_DATA.exactPartnerAddress}
                    </p>
                    <p className="text-xs text-stone-muted pt-1">
                      {BUSINESS_DATA.formattedPartnerAddress}
                    </p>
                  </div>
                </div>
              </div>

              {/* Directory Verification Callout */}
              <div className="p-5 bg-ivory rounded-sm border border-stone-300/80 space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-charcoal">
                  <ShieldCheck className="w-4 h-4 text-champagne-dark" />
                  <span>Swaraj Connects Directory Status: {BUSINESS_DATA.directoryStatus}</span>
                </div>
                <p className="text-xs text-charcoal/70 leading-relaxed font-light">
                  Active civil contracting listing under Yusuf Musir Khan. We do not use third-party sales intermediaries.
                </p>
              </div>
            </div>

            {/* Interactive Lead Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Location Map Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-ivory border-t border-stone-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            <div>
              <h3 className="text-2xl font-serif text-charcoal">Locate Our Kondhwa Operations</h3>
              <p className="text-xs text-charcoal/70 mt-1">
                Serving Kondhwa, NIBM Road, Wanowrie, Hadapsar, Fatima Nagar, and Pune districts.
              </p>
            </div>
            {BUSINESS_DATA.googleMaps.approved && (
              <a
                href={BUSINESS_DATA.googleMaps.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-charcoal hover:bg-olive text-white text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors shadow-sm shrink-0"
              >
                <MapPin className="w-4 h-4 text-champagne" />
                <span>Open in Google Maps</span>
              </a>
            )}
          </div>

          <div className="aspect-[21/9] min-h-[320px] bg-stone-100 rounded-sm border border-stone-300 overflow-hidden shadow-sm">
            <iframe
              title="Home Care Interior Pune Office Map"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(
                BUSINESS_DATA.formattedPartnerAddress
              )}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>
    </>
  );
};
