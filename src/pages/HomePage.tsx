import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  ShieldCheck,
  CheckCircle,
  MapPin,
  Calendar,
  Layers,
  ChevronRight,
  Compass,
  Phone,
  MessageCircle,
} from 'lucide-react';
import { BUSINESS_DATA, PROJECT_GALLERY, PROCESS_STEPS } from '../data/businessData';
import { ProjectLightbox } from '../components/ProjectLightbox';
import { SEO } from '../components/SEO';

export const HomePage: React.FC = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  return (
    <>
      <SEO
        title="Home Care Interior | Luxury Interior & Civil Contracting Pune"
        description="Thoughtful Interiors. Reliable Execution. Interior work, renovation and building construction in Kondhwa, Pune by Yusuf Musir Khan. Established 2002 with 20+ years experience and 100+ projects."
      />

      {/* 01 — HERO */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-charcoal text-ivory overflow-hidden">
        {/* Architectural Background with Contrast Scrim */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/hero_luxury_interior_1793884662439.jpg"
            alt="Luxury modern architectural residence interior crafted by Home Care Interior"
            className="w-full h-full object-cover object-center scale-105 animate-subtle-zoom"
            loading="eager"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/80 to-charcoal/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-charcoal/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="max-w-3xl">
            {/* Quiet metadata kicker */}
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-champagne mb-5">
              <span>Established 2002</span>
              <span aria-hidden="true">·</span>
              <span>Kondhwa, Pune</span>
              <span aria-hidden="true">·</span>
              <span>Civil Contractor</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal tracking-tight text-white leading-[1.1] mb-6 text-balance">
              Crafting Spaces.
              <br />
              <span className="italic font-light text-champagne-light">Creating Lasting Impressions.</span>
            </h1>

            <p className="text-base sm:text-lg text-ivory/80 leading-relaxed font-light mb-10 max-w-2xl">
              Interior work, renovation and construction solutions shaped by thoughtful planning, quality workmanship and attention to detail.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                to="/projects"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-champagne hover:bg-champagne-light text-charcoal text-xs font-semibold uppercase tracking-wider rounded-sm transition-all shadow-md group"
              >
                <span>Explore Our Work</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/25 hover:bg-white/10 text-white text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors"
              >
                <span>Discuss Your Project</span>
                <ChevronRight className="w-4 h-4 text-champagne" />
              </Link>
            </div>
          </div>
        </div>

        {/* Quiet scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-stone-muted text-[10px] tracking-widest uppercase">
          <span>Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-champagne to-transparent" />
        </div>
      </section>

      {/* 03 — COMPANY HIGHLIGHTS STRIP (Adjacent to Hero) */}
      <section className="bg-ivory border-y border-stone-200/80 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-stone-300/70 text-center">
            <div className="pt-4 md:pt-0">
              <span className="block text-xs uppercase tracking-widest text-stone-muted font-medium mb-1">
                Established
              </span>
              <span className="text-4xl sm:text-5xl font-serif text-charcoal font-semibold tabular-nums">
                {BUSINESS_DATA.established}
              </span>
              <p className="text-xs text-charcoal/60 mt-1">Foundation of disciplined contracting</p>
            </div>

            <div className="pt-6 md:pt-0 md:px-8">
              <span className="block text-xs uppercase tracking-widest text-stone-muted font-medium mb-1">
                Experience
              </span>
              <span className="text-4xl sm:text-5xl font-serif text-charcoal font-semibold tabular-nums">
                {BUSINESS_DATA.experience}
              </span>
              <p className="text-xs text-charcoal/60 mt-1">Years of on-site craftsmanship</p>
            </div>

            <div className="pt-6 md:pt-0 md:px-8">
              <span className="block text-xs uppercase tracking-widest text-stone-muted font-medium mb-1">
                Projects
              </span>
              <span className="text-4xl sm:text-5xl font-serif text-charcoal font-semibold tabular-nums">
                {BUSINESS_DATA.projects}
              </span>
              <p className="text-xs text-charcoal/60 mt-1">Residential & civil milestones delivered</p>
            </div>
          </div>
        </div>
      </section>

      {/* 02 — INTRODUCTION */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-softwhite">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="text-xs uppercase tracking-[0.2em] text-champagne-dark font-medium">
                Welcome to Home Care Interior
              </div>

              <h2 className="text-3xl sm:text-4xl font-serif font-normal text-charcoal leading-tight text-balance">
                Where Function Meets <br />
                <span className="italic">Refined Living.</span>
              </h2>

              <p className="text-charcoal/75 leading-relaxed font-light text-base">
                {BUSINESS_DATA.supportingCopy}
              </p>

              <blockquote className="pl-5 border-l-2 border-champagne text-sm text-charcoal/80 italic font-serif leading-relaxed">
                "{BUSINESS_DATA.originalAboutText.slice(0, 240)}..."
              </blockquote>

              <div className="pt-2 flex items-center gap-6 text-xs text-stone-muted">
                <span className="inline-flex items-center gap-1.5 text-charcoal font-medium">
                  <ShieldCheck className="w-4 h-4 text-champagne-dark" />
                  <span>Swaraj Connects Verified</span>
                </span>
                <span aria-hidden="true">·</span>
                <span>Kondhwa, Pune</span>
              </div>

              <div className="pt-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-charcoal hover:text-champagne-dark transition-colors group"
                >
                  <span>Learn More About Our Philosophy</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="aspect-[4/3] rounded-sm overflow-hidden shadow-lg border border-stone-200">
                <img
                  src="/assets/images/about_craftsmanship_detail_1793884684513.jpg"
                  alt="Architectural wood joinery and natural stone detailing"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-charcoal text-ivory p-5 rounded-sm shadow-xl hidden sm:block max-w-xs border border-white/10">
                <span className="text-xs uppercase tracking-widest text-champagne block mb-1">
                  Craftsmanship First
                </span>
                <p className="text-xs text-ivory/80 leading-relaxed">
                  Personal supervision by Yusuf Musir Khan on every civil and interior detail.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04 — SERVICES (The 7 Exact Services, Interior Work prominent) */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-ivory/50 border-t border-stone-200/80">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-champagne-dark font-medium block mb-2">
                Our Capabilities
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-charcoal font-normal">
                Expertise Built Around Your Space.
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-charcoal hover:text-champagne-dark transition-colors group shrink-0"
            >
              <span>View All 7 Services</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Asymmetric Bento layout highlighting Interior Work */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BUSINESS_DATA.services.map((service, index) => {
              const isMarquee = service.id === 'interior-work';

              return (
                <div
                  key={service.slug}
                  className={`group relative bg-white border border-stone-200/90 rounded-sm overflow-hidden transition-all duration-300 hover:shadow-lg flex flex-col justify-between ${
                    isMarquee ? 'md:col-span-2 lg:col-span-2' : 'col-span-1'
                  }`}
                >
                  <div className="relative overflow-hidden aspect-[16/10] bg-stone-100">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4 bg-charcoal/80 backdrop-blur-sm text-ivory text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-sm border border-white/10 font-mono">
                      0{index + 1}
                    </div>
                  </div>

                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-4 mb-2">
                        <h3 className="text-xl sm:text-2xl font-serif text-charcoal font-medium group-hover:text-champagne-dark transition-colors">
                          {service.name}
                        </h3>
                        {isMarquee && (
                          <span className="text-[10px] uppercase tracking-widest text-champagne-dark bg-ivory px-2.5 py-0.5 rounded-sm font-semibold">
                            Primary Emphasis
                          </span>
                        )}
                      </div>
                      <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed font-light mb-4">
                        {service.shortDesc}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                      <Link
                        to={`/services/${service.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-charcoal group-hover:text-champagne-dark transition-colors"
                      >
                        <span>Explore Service Details</span>
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 05 — SELECTED WORK / GALLERY */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-softwhite border-t border-stone-200/80">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-champagne-dark font-medium block mb-2">
                Portfolio Showcase
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-charcoal font-normal">
                A Closer Look at Our Work.
              </h2>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-charcoal hover:text-champagne-dark transition-colors group shrink-0"
            >
              <span>Explore All Projects & Concepts</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Grid of Projects */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROJECT_GALLERY.slice(0, 4).map((project, idx) => (
              <div
                key={project.id}
                onClick={() => setSelectedImageIndex(idx)}
                className="group cursor-pointer bg-white border border-stone-200/80 rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-charcoal/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-xs uppercase tracking-widest text-white font-medium bg-charcoal/80 px-3 py-1.5 rounded-sm">
                      Inspect
                    </span>
                  </div>
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-champagne-dark font-medium block mb-1">
                      {project.category}
                    </span>
                    <h3 className="text-base font-serif text-charcoal font-medium line-clamp-1">
                      {project.title}
                    </h3>
                  </div>
                  <div className="mt-3 pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-muted">
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-champagne" />
                      <span>{project.location}</span>
                    </span>
                    <span>{project.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 06 — OUR APPROACH */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-16">
            <span className="text-xs uppercase tracking-[0.2em] text-champagne block mb-2 font-medium">
              Work Ethic & Standards
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-white font-normal mb-4">
              Built on Detail. Guided by Purpose.
            </h2>
            <p className="text-ivory/70 text-sm sm:text-base leading-relaxed font-light">
              We stand apart through realistic civil planning, material integrity, and disciplined coordination on site.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Proper Planning',
                desc: 'Thorough site appraisal and structural analysis prevent costly oversights and misaligned expectations.',
              },
              {
                title: 'Quality Workmanship',
                desc: 'Experienced civil masons, carpenters, and finishing specialists executing with high standards.',
              },
              {
                title: 'Practical Solutions',
                desc: 'Sensible spatial planning that accommodates everyday routines, storage needs, and longevity.',
              },
              {
                title: 'Attention to Detail',
                desc: 'Straight edges, consistent plastering, calibrated cabinetry joints, and balanced illumination.',
              },
              {
                title: 'Neat Finishing',
                desc: 'Pristine paint lines, tidy grout joints, and immaculate handover without lingering snags.',
              },
              {
                title: 'Professional Coordination',
                desc: 'Direct oversight by Yusuf Musir Khan connecting every trade seamlessly under one banner.',
              },
            ].map((pillar, idx) => (
              <div
                key={pillar.title}
                className="p-6 bg-white/5 border border-white/10 rounded-sm hover:border-champagne/40 transition-colors"
              >
                <div className="text-xs font-mono text-champagne mb-3">0{idx + 1}</div>
                <h3 className="text-xl font-serif text-white font-medium mb-2">{pillar.title}</h3>
                <p className="text-xs sm:text-sm text-ivory/70 leading-relaxed font-light">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 07 — OUR PROCESS */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-softwhite">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-champagne-dark font-medium block mb-2">
                Execution Framework
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-charcoal font-normal">
                From Your Vision to Execution.
              </h2>
            </div>
            <Link
              to="/process"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-charcoal hover:text-champagne-dark transition-colors group shrink-0"
            >
              <span>Explore Detailed Workflow</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.step}
                className="relative p-6 bg-ivory/40 border border-stone-200 rounded-sm flex flex-col justify-between"
              >
                <div>
                  <span className="text-2xl font-serif font-semibold text-champagne-dark block mb-3">
                    {step.step}
                  </span>
                  <h3 className="text-base font-serif font-medium text-charcoal mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-charcoal/70 leading-relaxed font-light">
                    {step.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 08 — FOUNDER PROFILE: YUSUF MUSIR KHAN */}
      <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-ivory border-t border-stone-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <div className="aspect-[4/5] rounded-sm overflow-hidden bg-charcoal shadow-xl border border-stone-300 relative">
                <img
                  src="/assets/images/service_project_management_1793884685626.jpg"
                  alt="Yusuf Musir Khan and architectural project execution team"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-ivory">
                  <span className="text-[10px] uppercase tracking-widest text-champagne block mb-1">
                    Civil Contractor & Founder
                  </span>
                  <h3 className="text-2xl font-serif text-white font-medium">Yusuf Musir Khan</h3>
                  <p className="text-xs text-ivory/70 mt-1">20 Years of Civil & Interior Leadership</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="text-xs uppercase tracking-[0.2em] text-champagne-dark font-medium">
                Founder & Leadership
              </div>

              <h2 className="text-3xl sm:text-4xl font-serif text-charcoal font-normal">
                Meet Yusuf Musir Khan.
              </h2>

              <p className="text-charcoal/80 leading-relaxed font-light text-base">
                Yusuf Musir Khan is a professional civil contractor providing reliable construction and property improvement services for residential and commercial projects. He specializes in building construction, renovation, civil work, and interior solutions.
              </p>

              <p className="text-charcoal/75 leading-relaxed font-light text-sm">
                His services include interior work, modular kitchen installation, false ceiling, and design support to meet different customer requirements. Yusuf focuses on quality workmanship, proper planning, durable construction, and timely completion.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-stone-300/80">
                <div>
                  <span className="text-xs text-stone-muted block">Direct Contact</span>
                  <a
                    href={BUSINESS_DATA.telephoneUri}
                    className="text-sm font-semibold text-charcoal hover:text-champagne-dark"
                  >
                    {BUSINESS_DATA.primaryPhone}
                  </a>
                </div>
                <div>
                  <span className="text-xs text-stone-muted block">Directory Profile</span>
                  <span className="text-xs font-semibold text-charcoal">Swaraj Connects Verified</span>
                </div>
                <div>
                  <span className="text-xs text-stone-muted block">Base of Operations</span>
                  <span className="text-xs font-semibold text-charcoal">Kondhwa, Pune</span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <a
                  href={BUSINESS_DATA.whatsappUri}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Connect on WhatsApp</span>
                </a>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-charcoal hover:bg-olive text-white text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors shadow-sm"
                >
                  <span>Request a Site Consultation</span>
                  <ArrowUpRight className="w-4 h-4 text-champagne" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10 — LOCATION & DIRECTORY CONFIRMATION */}
      <section className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-softwhite border-t border-stone-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs uppercase tracking-[0.2em] text-champagne-dark font-medium block">
                Local Presence
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-charcoal font-normal">
                Based in Pune, Maharashtra.
              </h2>
              <p className="text-sm text-charcoal/70 leading-relaxed font-light">
                Serving Kondhwa, NIBM Road, Wanowrie, Camp, Hadapsar, and greater Pune with dedicated on-site civil and interior contracting.
              </p>

              <div className="p-5 bg-ivory rounded-sm border border-stone-200 text-xs space-y-2">
                <p className="font-semibold text-charcoal">Official Partner Address (Directory Record):</p>
                <p className="text-charcoal/80 font-mono text-[11px] leading-relaxed">
                  {BUSINESS_DATA.exactPartnerAddress}
                </p>
                <p className="text-stone-muted pt-2 border-t border-stone-200">
                  Formatted: {BUSINESS_DATA.formattedPartnerAddress}
                </p>
              </div>

              {BUSINESS_DATA.googleMaps.approved && (
                <div className="flex flex-wrap gap-4 pt-2">
                  <a
                    href={BUSINESS_DATA.googleMaps.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-charcoal hover:bg-olive text-white text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors shadow-sm"
                  >
                    <MapPin className="w-4 h-4 text-champagne" />
                    <span>Get Directions on Google Maps</span>
                  </a>
                </div>
              )}
            </div>

            <div className="lg:col-span-6">
              <div className="aspect-[16/10] bg-stone-100 rounded-sm border border-stone-300 overflow-hidden shadow-sm relative">
                <iframe
                  title="Home Care Interior Pune Location Map"
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(
                    BUSINESS_DATA.formattedPartnerAddress
                  )}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11 — CONVERSION CTA BANNER */}
      <section className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-charcoal text-ivory text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10 space-y-6">
          <span className="text-xs uppercase tracking-[0.22em] text-champagne font-medium">
            Start Your Transformation
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-white font-normal text-balance">
            Have a Space in Mind?
          </h2>
          <p className="text-sm sm:text-base text-ivory/80 max-w-xl mx-auto leading-relaxed font-light">
            Tell us about your interior, renovation or construction requirements. Yusuf Musir Khan is ready to discuss practical solutions and clear planning.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-champagne hover:bg-champagne-light text-charcoal text-xs font-semibold uppercase tracking-wider rounded-sm transition-all shadow-md group"
            >
              <span>Start Your Enquiry</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <a
              href={BUSINESS_DATA.telephoneUri}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-white/20 hover:bg-white/10 text-white text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors"
            >
              <Phone className="w-4 h-4 text-champagne" />
              <span>Call +91 9823857050</span>
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox for Gallery */}
      {selectedImageIndex !== null && (
        <ProjectLightbox
          items={PROJECT_GALLERY}
          currentIndex={selectedImageIndex}
          isOpen={selectedImageIndex !== null}
          onClose={() => setSelectedImageIndex(null)}
          onNavigate={(newIdx) => setSelectedImageIndex(newIdx)}
        />
      )}
    </>
  );
};
