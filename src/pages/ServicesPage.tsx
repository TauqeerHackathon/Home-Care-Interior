import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { BUSINESS_DATA } from '../data/businessData';
import { SEO } from '../components/SEO';

export const ServicesPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Our Services | 7 Core Civil & Interior Services Pune"
        description="Explore the 7 published services of Home Care Interior: Interior Work, Building Construction, Renovation, Civil Work, Modular Kitchen, False Ceiling, and Project Management in Pune."
      />

      {/* Header */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-[0.22em] text-champagne block mb-4 font-medium">
              Comprehensive Contracting Capabilities
            </span>
            <h1 className="text-4xl sm:text-5xl font-serif font-normal text-white leading-tight mb-6">
              Our Seven Published Services
            </h1>
            <p className="text-base sm:text-lg text-ivory/80 leading-relaxed font-light">
              Home Care Interior delivers exactly seven core contracting and interior offerings. Each is executed with disciplined civil planning, skilled on-site workmanship, and neat finishes.
            </p>
          </div>
        </div>
      </section>

      {/* Services List with Rich Details */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-softwhite">
        <div className="max-w-7xl mx-auto space-y-20">
          {BUSINESS_DATA.services.map((service, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div
                key={service.slug}
                id={service.slug}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center pt-8 first:pt-0 border-t first:border-t-0 border-stone-200"
              >
                {/* Image Column */}
                <div className={`lg:col-span-6 ${isReversed ? 'lg:order-2' : ''}`}>
                  <div className="relative aspect-[16/10] rounded-sm overflow-hidden bg-stone-100 shadow-md border border-stone-200 group">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 bg-charcoal/80 backdrop-blur-sm text-ivory text-xs font-mono px-3 py-1 rounded-sm border border-white/10">
                      Service 0{index + 1}
                    </div>
                  </div>
                </div>

                {/* Content Column */}
                <div className={`lg:col-span-6 space-y-5 ${isReversed ? 'lg:order-1' : ''}`}>
                  <div className="flex items-center gap-3">
                    <span className="text-xs uppercase tracking-[0.2em] text-champagne-dark font-medium">
                      Core Offering
                    </span>
                    {service.isPrimary && (
                      <span className="text-[10px] uppercase tracking-widest text-charcoal bg-champagne/30 px-2 py-0.5 rounded-sm font-semibold">
                        Primary Visual Focus
                      </span>
                    )}
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-serif text-charcoal font-medium">
                    {service.name}
                  </h2>

                  <p className="text-sm text-charcoal/80 leading-relaxed font-light">
                    {service.longDesc}
                  </p>

                  <div className="space-y-2 pt-2">
                    <span className="text-xs uppercase tracking-wider text-stone-muted font-medium block">
                      Key Highlights:
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-charcoal/80">
                      {service.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-champagne-dark mt-0.5 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 flex items-center gap-4">
                    <Link
                      to={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-charcoal hover:bg-olive text-white text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors shadow-sm"
                    >
                      <span>Explore Service In-Depth</span>
                      <ArrowUpRight className="w-4 h-4 text-champagne" />
                    </Link>

                    <Link
                      to={`/contact?service=${encodeURIComponent(service.name)}`}
                      className="text-xs font-semibold uppercase tracking-wider text-charcoal hover:text-champagne-dark transition-colors underline underline-offset-4"
                    >
                      Enquire for this service
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-ivory border-t border-stone-200 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl font-serif text-charcoal">Need Multiple Services Integrated?</h2>
          <p className="text-sm text-charcoal/70 leading-relaxed font-light">
            Home Care Interior specializes in synchronizing civil, ceiling, modular carpentry, and finishing under one accountable coordinator.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-charcoal hover:bg-olive text-white text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors shadow-md"
            >
              <span>Schedule a Scope Consultation</span>
              <ArrowUpRight className="w-4 h-4 text-champagne" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
