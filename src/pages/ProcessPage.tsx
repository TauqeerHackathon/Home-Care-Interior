import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2, ShieldCheck, Compass } from 'lucide-react';
import { PROCESS_STEPS, BUSINESS_DATA } from '../data/businessData';
import { SEO } from '../components/SEO';

export const ProcessPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Our 5-Step Process | How We Work - Home Care Interior"
        description="Discover the structured 5-step contracting and interior process of Home Care Interior Pune: Initial Discussion, Requirement Understanding, Scope & Planning, Work Execution, and Project Review."
      />

      {/* Header */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-charcoal text-ivory">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-[0.22em] text-champagne block mb-4 font-medium">
              Transparent Methodology
            </span>
            <h1 className="text-4xl sm:text-5xl font-serif font-normal text-white leading-tight mb-6">
              From Your Vision to Execution.
            </h1>
            <p className="text-base sm:text-lg text-ivory/80 leading-relaxed font-light">
              Clear stages, disciplined scheduling, and direct owner supervision. We eliminate misunderstandings and ensure durable, neatly finished spaces.
            </p>
          </div>
        </div>
      </section>

      {/* 5-Step Process Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-softwhite">
        <div className="max-w-5xl mx-auto space-y-12">
          {PROCESS_STEPS.map((step, index) => (
            <div
              key={step.step}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start p-8 bg-white border border-stone-200 rounded-sm shadow-xs hover:border-champagne/40 transition-colors"
            >
              <div className="md:col-span-3">
                <span className="text-5xl font-serif font-light text-champagne block mb-1">
                  {step.step}
                </span>
                <span className="text-xs uppercase tracking-widest text-stone-muted font-mono">
                  Stage 0{index + 1}
                </span>
              </div>

              <div className="md:col-span-9 space-y-3">
                <h3 className="text-2xl font-serif text-charcoal font-medium">
                  {step.title}
                </h3>
                <p className="text-sm font-medium text-charcoal/80 leading-relaxed">
                  {step.summary}
                </p>
                <p className="text-xs sm:text-sm text-charcoal/65 leading-relaxed font-light">
                  {step.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Guiding Commitments */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-ivory border-t border-stone-200">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl font-serif text-charcoal mb-3">Our Practical Commitments</h2>
            <p className="text-sm text-charcoal/70 leading-relaxed font-light">
              What you can expect from Home Care Interior from first contact to key handover.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white border border-stone-200 rounded-sm space-y-2">
              <CheckCircle2 className="w-5 h-5 text-champagne-dark mb-1" />
              <h4 className="text-base font-serif text-charcoal font-medium">Realistic Milestone Planning</h4>
              <p className="text-xs text-charcoal/70 leading-relaxed font-light">
                We provide honest duration estimates based on curing times, material fabrication, and trade sequencing rather than unrealistic marketing deadlines.
              </p>
            </div>

            <div className="p-6 bg-white border border-stone-200 rounded-sm space-y-2">
              <CheckCircle2 className="w-5 h-5 text-champagne-dark mb-1" />
              <h4 className="text-base font-serif text-charcoal font-medium">Transparent Material Selection</h4>
              <p className="text-xs text-charcoal/70 leading-relaxed font-light">
                All plywood grades, stone types, gypsum framing, and paint specifications are agreed upon in advance, with zero covert downgrades.
              </p>
            </div>

            <div className="p-6 bg-white border border-stone-200 rounded-sm space-y-2">
              <CheckCircle2 className="w-5 h-5 text-champagne-dark mb-1" />
              <h4 className="text-base font-serif text-charcoal font-medium">Single Point of Accountability</h4>
              <p className="text-xs text-charcoal/70 leading-relaxed font-light">
                Yusuf Musir Khan personally oversees civil leveling, false ceiling alignment, and modular carpentry, giving you direct peace of mind.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-charcoal hover:bg-olive text-white text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors shadow-md"
            >
              <span>Begin Stage 01: Initial Discussion</span>
              <ArrowUpRight className="w-4 h-4 text-champagne" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
