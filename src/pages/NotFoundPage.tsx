import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';
import { SEO } from '../components/SEO';

export const NotFoundPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Page Not Found | Home Care Interior Pune"
        description="The requested page could not be found. Return to Home Care Interior."
      />

      <section className="min-h-[75vh] flex items-center justify-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-softwhite text-center">
        <div className="max-w-md mx-auto space-y-6">
          <span className="text-xs uppercase tracking-[0.25em] text-champagne-dark font-mono">
            Error 404
          </span>
          <h1 className="text-4xl font-serif text-charcoal font-normal">
            Page Not Found
          </h1>
          <p className="text-sm text-charcoal/70 leading-relaxed font-light">
            The architectural blueprint or page you are looking for has been moved or does not exist.
          </p>
          <div className="pt-2 flex items-center justify-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-charcoal hover:bg-olive text-white text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors shadow-sm"
            >
              <Home className="w-4 h-4 text-champagne" />
              <span>Back to Homepage</span>
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 border border-stone-300 hover:bg-white text-charcoal text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors"
            >
              <span>Our Services</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
