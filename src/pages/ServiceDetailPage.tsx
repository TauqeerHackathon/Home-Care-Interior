import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  HelpCircle,
  Phone,
  MessageCircle,
  ChevronRight,
  ShieldCheck,
} from 'lucide-react';
import { BUSINESS_DATA, PROJECT_GALLERY } from '../data/businessData';
import { SEO } from '../components/SEO';
import { ContactForm } from '../components/ContactForm';

export const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const service = BUSINESS_DATA.services.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  // Related services (other 6 services)
  const relatedServices = BUSINESS_DATA.services.filter((s) => s.slug !== service.slug);

  // Filter gallery images matching this service
  const serviceProjects = PROJECT_GALLERY.filter((p) => p.serviceSlug === service.slug);

  return (
    <>
      <SEO
        title={`${service.name} | Home Care Interior Pune`}
        description={`${service.name} services in Pune by Yusuf Musir Khan. ${service.shortDesc} Reliable civil contracting and interior solutions.`}
        image={service.image}
      />

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="pt-28 pb-4 px-4 sm:px-6 lg:px-8 bg-charcoal text-stone-muted text-xs border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center gap-2">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-champagne" />
          <Link to="/services" className="hover:text-white transition-colors">Our Services</Link>
          <ChevronRight className="w-3.5 h-3.5 text-champagne" />
          <span className="text-ivory font-medium">{service.name}</span>
        </div>
      </nav>

      {/* Service Hero */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-xs uppercase tracking-[0.2em] text-champagne font-medium">
                  Official Service 0{BUSINESS_DATA.services.findIndex((s) => s.slug === service.slug) + 1}
                </span>
                {service.isPrimary && (
                  <span className="text-[10px] uppercase tracking-widest text-charcoal bg-champagne-light px-2.5 py-0.5 rounded-sm font-semibold">
                    Primary Brand Focus
                  </span>
                )}
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white font-normal leading-tight text-balance">
                {service.name}
              </h1>

              <p className="text-base sm:text-lg text-ivory/80 leading-relaxed font-light">
                {service.longDesc}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-stone-muted">
                <span className="inline-flex items-center gap-1.5 text-ivory">
                  <ShieldCheck className="w-4 h-4 text-champagne" />
                  <span>Verified Civil Contractor</span>
                </span>
                <span aria-hidden="true">·</span>
                <span>Kondhwa, Pune Execution</span>
                <span aria-hidden="true">·</span>
                <span>Personal Supervision</span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="aspect-[4/3] rounded-sm overflow-hidden bg-stone-900 border border-white/10 shadow-2xl">
                <img
                  src={service.image}
                  alt={`${service.name} execution by Home Care Interior`}
                  className="w-full h-full object-cover"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scope and Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-softwhite">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Key Features */}
            <div className="p-8 bg-white border border-stone-200 rounded-sm shadow-sm space-y-5">
              <h3 className="text-xl font-serif text-charcoal font-semibold">Execution Highlights</h3>
              <p className="text-xs text-charcoal/70 leading-relaxed">
                Every project under {service.name} is delivered to exacting engineering and craftsmanship standards.
              </p>
              <ul className="space-y-3 pt-2">
                {service.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-charcoal/80">
                    <CheckCircle2 className="w-4 h-4 text-champagne-dark mt-0.5 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Scope Coverage */}
            <div className="p-8 bg-ivory/60 border border-stone-200 rounded-sm shadow-sm space-y-5">
              <h3 className="text-xl font-serif text-charcoal font-semibold">Scope of Work Undertaken</h3>
              <p className="text-xs text-charcoal/70 leading-relaxed">
                Typical assignments managed for residential and commercial clients across Pune.
              </p>
              <ul className="space-y-3 pt-2">
                {service.scope.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-charcoal/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-champagne-dark mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Practical FAQs */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-ivory/40 border-t border-stone-200">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-xs uppercase tracking-[0.2em] text-champagne-dark font-medium block mb-2">
                Questions Answered
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-charcoal font-normal">
                Frequently Asked About {service.name}
              </h2>
            </div>

            <div className="space-y-4">
              {service.faqs.map((faq, idx) => (
                <div key={idx} className="p-6 bg-white border border-stone-200 rounded-sm shadow-xs space-y-2">
                  <h4 className="text-base font-serif font-medium text-charcoal flex items-start gap-2.5">
                    <HelpCircle className="w-4 h-4 text-champagne-dark mt-0.5 shrink-0" />
                    <span>{faq.question}</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-charcoal/70 pl-6 leading-relaxed font-light">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Service-Specific Enquiry Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-softwhite border-t border-stone-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs uppercase tracking-[0.2em] text-champagne-dark font-medium block mb-2">
              Get Started
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-charcoal font-normal">
              Enquire About {service.name}
            </h2>
            <p className="text-xs sm:text-sm text-charcoal/70 max-w-lg mx-auto mt-2 leading-relaxed">
              Connect directly with Yusuf Musir Khan to discuss site measurements, project scope, and practical timelines.
            </p>
          </div>

          <ContactForm initialService={service.name} />
        </div>
      </section>

      {/* Related Services Navigation */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-ivory border-t border-stone-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-serif text-charcoal">Related Contracting Services</h3>
            <Link to="/services" className="text-xs uppercase tracking-wider font-semibold text-charcoal hover:text-champagne-dark">
              View All 7 Services
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedServices.slice(0, 3).map((rel) => (
              <Link
                key={rel.slug}
                to={`/services/${rel.slug}`}
                className="group p-5 bg-white border border-stone-200 rounded-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-base font-serif text-charcoal font-medium group-hover:text-champagne-dark transition-colors mb-1">
                    {rel.name}
                  </h4>
                  <p className="text-xs text-charcoal/70 line-clamp-2 leading-relaxed font-light">
                    {rel.shortDesc}
                  </p>
                </div>
                <div className="pt-4 flex items-center justify-between text-xs font-semibold text-charcoal group-hover:text-champagne-dark">
                  <span>View Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
