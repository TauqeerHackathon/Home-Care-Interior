import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowLeft } from 'lucide-react';
import { BUSINESS_DATA } from '../data/businessData';
import { SEO } from '../components/SEO';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Privacy Policy | Home Care Interior Pune"
        description="Privacy policy and data handling practices for customer enquiries at Home Care Interior, Pune."
      />

      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-charcoal text-ivory">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-champagne hover:text-white transition-colors mb-4"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Home</span>
          </Link>
          <h1 className="text-3xl sm:text-4xl font-serif text-white font-normal mb-4">
            Privacy Policy
          </h1>
          <p className="text-xs text-ivory/60 font-mono">
            Last Updated: November 2026 · Home Care Interior
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-softwhite">
        <div className="max-w-4xl mx-auto space-y-8 text-charcoal/80 text-sm leading-relaxed font-light">
          <div>
            <h2 className="text-xl font-serif text-charcoal font-semibold mb-3">
              1. Overview & Business Identity
            </h2>
            <p>
              Home Care Interior ("we", "us", or "our"), operated by civil contractor Yusuf Musir Khan in Kondhwa, Pune, Maharashtra, is committed to respecting your privacy. This policy describes how we collect, use, and protect the information you provide when using our website and submitting project enquiries.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-serif text-charcoal font-semibold mb-3">
              2. Information We Collect
            </h2>
            <p>
              We collect information strictly necessary to assess and respond to your construction, renovation, or interior contracting enquiries. This includes:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1.5 text-xs sm:text-sm">
              <li><strong>Contact Information:</strong> Full name, telephone/mobile number, and email address.</li>
              <li><strong>Project Specifics:</strong> The requested service (one of our 7 published services), property/site location in Pune, and description of your project scope.</li>
              <li><strong>Direct Communications:</strong> Information shared during direct telephone conversations, WhatsApp messages, or site consultation meetings.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-serif text-charcoal font-semibold mb-3">
              3. Purpose of Data Use
            </h2>
            <p>
              Your submitted data is used solely for the legitimate business purpose of:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1.5 text-xs sm:text-sm">
              <li>Contacting you regarding your project enquiry and scheduling site assessments.</li>
              <li>Preparing accurate quotations, scopes of work, and project execution plans.</li>
              <li>Communicating milestone updates during active civil and interior contracts.</li>
            </ul>
            <p className="mt-2 text-xs text-charcoal/70">
              We do not sell, rent, lease, or monetize customer contact details to third-party marketing brokers or advertisers.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-serif text-charcoal font-semibold mb-3">
              4. WhatsApp & External Channels
            </h2>
            <p>
              When you choose to communicate via WhatsApp, message transmission is governed by WhatsApp's terms of service and privacy policies. The pre-filled messages initiated from this website are intended solely to streamline project enquiries.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-serif text-charcoal font-semibold mb-3">
              5. Contacting the Business
            </h2>
            <p>
              If you have any questions about this privacy statement or wish to request the removal or correction of your enquiry data, please reach out directly:
            </p>
            <div className="p-4 bg-ivory rounded-sm border border-stone-200 mt-2 text-xs space-y-1">
              <p><strong>Home Care Interior</strong></p>
              <p>Associated Professional: Yusuf Musir Khan</p>
              <p>Phone: {BUSINESS_DATA.primaryPhone}</p>
              <p>Email: {BUSINESS_DATA.primaryEmail}</p>
              <p>Address: {BUSINESS_DATA.formattedPartnerAddress}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
