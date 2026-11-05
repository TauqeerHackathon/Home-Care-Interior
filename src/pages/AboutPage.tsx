import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Phone, MessageCircle, MapPin, CheckCircle2 } from 'lucide-react';
import { BUSINESS_DATA } from '../data/businessData';
import { SEO } from '../components/SEO';

export const AboutPage: React.FC = () => {
  return (
    <>
      <SEO
        title="About Us | Yusuf Musir Khan - Home Care Interior Pune"
        description="Learn about Home Care Interior and professional civil contractor Yusuf Musir Khan. Established in 2002 in Kondhwa, Pune with 20 years experience and 100+ completed projects."
      />

      {/* Hero Header */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-champagne mb-4">
              <span>Established 2002</span>
              <span aria-hidden="true">·</span>
              <span>20 Years Experience</span>
              <span aria-hidden="true">·</span>
              <span>Pune, Maharashtra</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-serif font-normal text-white leading-tight mb-6 text-balance">
              Thoughtful Interiors.
              <br />
              <span className="italic font-light text-champagne-light">Reliable Execution.</span>
            </h1>
            <p className="text-base sm:text-lg text-ivory/80 leading-relaxed font-light">
              Home Care Interior brings together interior work, renovation and civil contracting services, with a focus on thoughtful planning, quality workmanship and practical solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Key Company Metrics */}
      <section className="bg-ivory border-y border-stone-300/80 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-stone-300">
          <div>
            <span className="text-xs uppercase tracking-widest text-stone-muted block mb-1">Established</span>
            <span className="text-4xl font-serif text-charcoal font-semibold tabular-nums">{BUSINESS_DATA.established}</span>
            <p className="text-xs text-charcoal/60 mt-1">Founded in Kondhwa, Pune</p>
          </div>
          <div className="pt-4 md:pt-0">
            <span className="text-xs uppercase tracking-widest text-stone-muted block mb-1">Experience</span>
            <span className="text-4xl font-serif text-charcoal font-semibold tabular-nums">{BUSINESS_DATA.experience}</span>
            <p className="text-xs text-charcoal/60 mt-1">Years of Craftsmanship</p>
          </div>
          <div className="pt-4 md:pt-0">
            <span className="text-xs uppercase tracking-widest text-stone-muted block mb-1">Projects</span>
            <span className="text-4xl font-serif text-charcoal font-semibold tabular-nums">{BUSINESS_DATA.projects}</span>
            <p className="text-xs text-charcoal/60 mt-1">Contracting Milestones</p>
          </div>
        </div>
      </section>

      {/* Founder & Professional Narrative */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-softwhite">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <div className="aspect-[4/5] rounded-sm overflow-hidden bg-charcoal shadow-xl border border-stone-200 relative">
                <img
                  src="/assets/images/owner_yusuf_khan.jpg"
                  alt="Yusuf Musir Khan, Civil Contractor & Founder of Home Care Interior"
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-ivory">
                  <span className="text-[10px] uppercase tracking-widest text-champagne block mb-1">Professional Identity</span>
                  <h3 className="text-xl font-serif text-white">{BUSINESS_DATA.ownerName}</h3>
                  <p className="text-xs text-ivory/70 mt-0.5">{BUSINESS_DATA.category} · Kondhwa, Pune</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="text-xs uppercase tracking-[0.2em] text-champagne-dark font-medium">
                Our Foundation
              </div>

              <h2 className="text-3xl sm:text-4xl font-serif text-charcoal font-normal">
                About Yusuf Musir Khan & Home Care Interior
              </h2>

              {/* Exact Published Source Quote */}
              <div className="p-6 bg-ivory rounded-sm border-l-4 border-champagne text-charcoal/85 text-sm sm:text-base leading-relaxed italic font-serif">
                "{BUSINESS_DATA.originalAboutText}"
              </div>

              <div className="space-y-4 text-sm text-charcoal/75 leading-relaxed font-light">
                <p>
                  As an experienced civil contractor rooted in Pune, Yusuf Musir Khan approaches every project with a dual commitment: the structural rigor of civil execution and the refined aesthetic sensitivity of modern interior design.
                </p>
                <p>
                  Unlike disconnected agencies that outsource trades to random subcontractors, Home Care Interior coordinates on-site civil works, false ceiling installations, modular kitchen fittings, and bespoke interior finishes directly under Yusuf's personal oversight.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <div className="p-3 bg-white border border-stone-200 rounded-sm flex items-center gap-2 text-xs text-charcoal">
                  <CheckCircle2 className="w-4 h-4 text-champagne-dark shrink-0" />
                  <span>Durable Materials & Construction</span>
                </div>
                <div className="p-3 bg-white border border-stone-200 rounded-sm flex items-center gap-2 text-xs text-charcoal">
                  <CheckCircle2 className="w-4 h-4 text-champagne-dark shrink-0" />
                  <span>Disciplined Project Planning</span>
                </div>
                <div className="p-3 bg-white border border-stone-200 rounded-sm flex items-center gap-2 text-xs text-charcoal">
                  <CheckCircle2 className="w-4 h-4 text-champagne-dark shrink-0" />
                  <span>Neat & Tactile Finishing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Execution Standards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-ivory/60 border-t border-stone-300/80">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-10">
            <span className="text-xs uppercase tracking-[0.2em] text-champagne-dark font-medium block mb-2">
              Our Professional Commitments
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif text-charcoal mb-3">Core Contracting Standards</h3>
            <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed font-light">
              Grounded in 20 years of on-site civil and interior practice in Kondhwa and greater Pune, Home Care Interior operates under four foundational principles.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-white border border-stone-200 rounded-sm space-y-2">
              <span className="text-xs font-mono text-champagne-dark font-semibold">01</span>
              <h4 className="text-base font-serif text-charcoal font-medium">Proper Planning</h4>
              <p className="text-xs text-charcoal/70 leading-relaxed">
                Thorough site appraisal and structural analysis to prevent misaligned expectations and budget creep.
              </p>
            </div>

            <div className="p-6 bg-white border border-stone-200 rounded-sm space-y-2">
              <span className="text-xs font-mono text-champagne-dark font-semibold">02</span>
              <h4 className="text-base font-serif text-charcoal font-medium">Quality Workmanship</h4>
              <p className="text-xs text-charcoal/70 leading-relaxed">
                Experienced civil masons, carpenters, and finishing technicians supervised directly on site.
              </p>
            </div>

            <div className="p-6 bg-white border border-stone-200 rounded-sm space-y-2">
              <span className="text-xs font-mono text-champagne-dark font-semibold">03</span>
              <h4 className="text-base font-serif text-charcoal font-medium">Durable Construction</h4>
              <p className="text-xs text-charcoal/70 leading-relaxed">
                High-grade materials, calibrated marine plywood, and disciplined civil execution built to last.
              </p>
            </div>

            <div className="p-6 bg-white border border-stone-200 rounded-sm space-y-2">
              <span className="text-xs font-mono text-champagne-dark font-semibold">04</span>
              <h4 className="text-base font-serif text-charcoal font-medium">Timely Completion</h4>
              <p className="text-xs text-charcoal/70 leading-relaxed">
                Clear milestones and synchronized inter-trade coordination to ensure prompt, tidy handover.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-charcoal text-ivory text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl font-serif text-white">Work Directly With Yusuf Musir Khan</h2>
          <p className="text-sm text-ivory/70 leading-relaxed font-light">
            Whether planning a new building, an apartment renovation, or refined interior solutions in Kondhwa or across Pune, let's schedule an initial discussion.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-3.5 bg-champagne hover:bg-champagne-light text-charcoal text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors"
            >
              Discuss Your Project
            </Link>
            <a
              href={BUSINESS_DATA.whatsappUri}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors inline-flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us Directly</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
