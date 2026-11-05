import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, MessageCircle, Phone } from 'lucide-react';
import {
  EnquiryPayload,
  validateEnquiryForm,
  getWhatsAppUrl,
  VALID_SERVICES,
} from '../utils/enquiry';
import { BUSINESS_DATA } from '../data/businessData';

interface ContactFormProps {
  initialService?: string;
  onSuccess?: () => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({ initialService }) => {
  const [formData, setFormData] = useState<EnquiryPayload>({
    fullName: '',
    phone: '',
    email: '',
    service: initialService && VALID_SERVICES.includes(initialService as any) ? initialService : 'Interior Work',
    projectLocation: '',
    projectDetails: '',
    consent: true,
  });

  const [errors, setErrors] = useState<Partial<Record<keyof EnquiryPayload, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    if (errors[name as keyof EnquiryPayload]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = validateEnquiryForm(formData);

    if (!result.isValid) {
      setErrors(result.errors);
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable dispatch & formulate direct action
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  if (isSubmitted) {
    const whatsappUrl = getWhatsAppUrl(formData);

    return (
      <div className="bg-white border border-champagne/40 p-8 rounded-sm shadow-sm text-center">
        <div className="w-14 h-14 bg-champagne/10 text-champagne rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-serif text-charcoal mb-2">Enquiry Received</h3>
        <p className="text-sm text-charcoal/70 max-w-md mx-auto mb-6 leading-relaxed">
          Thank you, <strong className="text-charcoal">{formData.fullName}</strong>. Yusuf Musir Khan or our project team will review your requirement for <strong className="text-charcoal">{formData.service}</strong> in {formData.projectLocation} and contact you promptly.
        </p>

        <div className="p-4 bg-ivory rounded-sm max-w-md mx-auto mb-6 text-left text-xs space-y-1.5 border border-ivory/80">
          <p><span className="text-stone-muted font-medium">Contact Person:</span> {formData.fullName}</p>
          <p><span className="text-stone-muted font-medium">Service Requested:</span> {formData.service}</p>
          <p><span className="text-stone-muted font-medium">Location:</span> {formData.projectLocation}</p>
          <p><span className="text-stone-muted font-medium">Direct Phone:</span> {formData.phone}</p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors shadow-sm"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Open in WhatsApp</span>
          </a>

          <a
            href={BUSINESS_DATA.telephoneUri}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-charcoal hover:bg-olive text-white text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors shadow-sm"
          >
            <Phone className="w-4 h-4 text-champagne" />
            <span>Call +91 9823857050</span>
          </a>
        </div>

        <button
          type="button"
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              fullName: '',
              phone: '',
              email: '',
              service: 'Interior Work',
              projectLocation: '',
              projectDetails: '',
              consent: true,
            });
          }}
          className="mt-6 text-xs text-stone-muted hover:text-charcoal underline underline-offset-4"
        >
          Submit another project enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-stone-200/80 p-6 sm:p-8 rounded-sm shadow-sm space-y-5" noValidate>
      <div className="border-b border-ivory pb-4 mb-4">
        <h3 className="text-xl font-serif text-charcoal font-semibold">Discuss Your Project</h3>
        <p className="text-xs text-charcoal/60 mt-1">
          Share your civil contracting or interior requirement. Yusuf Musir Khan directly coordinates client enquiries.
        </p>
      </div>

      {/* Full Name */}
      <div>
        <label htmlFor="fullName" className="block text-xs font-medium uppercase tracking-wider text-charcoal/80 mb-1.5">
          Full Name <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="e.g. Rahul Sharma"
          className={`w-full px-4 py-2.5 text-sm bg-softwhite border ${
            errors.fullName ? 'border-red-500 ring-1 ring-red-500' : 'border-stone-300 focus:border-charcoal'
          } rounded-sm focus:outline-none transition-colors`}
        />
        {errors.fullName && (
          <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>{errors.fullName}</span>
          </p>
        )}
      </div>

      {/* Phone & Email Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className="block text-xs font-medium uppercase tracking-wider text-charcoal/80 mb-1.5">
            Phone Number <span className="text-red-600">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 98221 23456"
            className={`w-full px-4 py-2.5 text-sm bg-softwhite border ${
              errors.phone ? 'border-red-500 ring-1 ring-red-500' : 'border-stone-300 focus:border-charcoal'
            } rounded-sm focus:outline-none transition-colors`}
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.phone}</span>
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-xs font-medium uppercase tracking-wider text-charcoal/80 mb-1.5">
            Email Address <span className="text-red-600">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="name@example.com"
            className={`w-full px-4 py-2.5 text-sm bg-softwhite border ${
              errors.email ? 'border-red-500 ring-1 ring-red-500' : 'border-stone-300 focus:border-charcoal'
            } rounded-sm focus:outline-none transition-colors`}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.email}</span>
            </p>
          )}
        </div>
      </div>

      {/* Service Required & Project Location */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="service" className="block text-xs font-medium uppercase tracking-wider text-charcoal/80 mb-1.5">
            Service Required <span className="text-red-600">*</span>
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className={`w-full px-4 py-2.5 text-sm bg-softwhite border ${
              errors.service ? 'border-red-500 ring-1 ring-red-500' : 'border-stone-300 focus:border-charcoal'
            } rounded-sm focus:outline-none transition-colors`}
          >
            {VALID_SERVICES.map((srv) => (
              <option key={srv} value={srv}>
                {srv}
              </option>
            ))}
          </select>
          {errors.service && (
            <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.service}</span>
            </p>
          )}
        </div>

        <div>
          <label htmlFor="projectLocation" className="block text-xs font-medium uppercase tracking-wider text-charcoal/80 mb-1.5">
            Project Location <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="projectLocation"
            name="projectLocation"
            value={formData.projectLocation}
            onChange={handleChange}
            placeholder="e.g. Kondhwa, Pune"
            className={`w-full px-4 py-2.5 text-sm bg-softwhite border ${
              errors.projectLocation ? 'border-red-500 ring-1 ring-red-500' : 'border-stone-300 focus:border-charcoal'
            } rounded-sm focus:outline-none transition-colors`}
          />
          {errors.projectLocation && (
            <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              <span>{errors.projectLocation}</span>
            </p>
          )}
        </div>
      </div>

      {/* Project Details */}
      <div>
        <label htmlFor="projectDetails" className="block text-xs font-medium uppercase tracking-wider text-charcoal/80 mb-1.5">
          Project Requirements & Scope <span className="text-red-600">*</span>
        </label>
        <textarea
          id="projectDetails"
          name="projectDetails"
          rows={3}
          value={formData.projectDetails}
          onChange={handleChange}
          placeholder="Please describe your space, required work, timeline or approximate area..."
          className={`w-full px-4 py-2.5 text-sm bg-softwhite border ${
            errors.projectDetails ? 'border-red-500 ring-1 ring-red-500' : 'border-stone-300 focus:border-charcoal'
          } rounded-sm focus:outline-none transition-colors resize-none`}
        />
        {errors.projectDetails && (
          <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>{errors.projectDetails}</span>
          </p>
        )}
      </div>

      {/* Consent Checkbox */}
      <div>
        <label className="flex items-start gap-2.5 cursor-pointer">
          <input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            className="mt-0.5 rounded text-charcoal focus:ring-champagne"
          />
          <span className="text-xs text-charcoal/70 leading-snug">
            I agree to be contacted by Home Care Interior regarding this project enquiry. We respect your privacy.
          </span>
        </label>
        {errors.consent && (
          <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>{errors.consent}</span>
          </p>
        )}
      </div>

      {/* Action Buttons */}
      <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:flex-1 py-3 px-6 text-xs font-semibold uppercase tracking-wider text-white bg-charcoal hover:bg-olive transition-colors rounded-sm shadow-sm inline-flex items-center justify-center gap-2 disabled:opacity-50"
        >
          {isSubmitting ? (
            <span>Sending Enquiry...</span>
          ) : (
            <>
              <span>Submit Project Enquiry</span>
              <Send className="w-3.5 h-3.5 text-champagne" />
            </>
          )}
        </button>

        <a
          href={getWhatsAppUrl(formData)}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto py-3 px-5 text-xs font-semibold uppercase tracking-wider text-charcoal bg-champagne hover:bg-champagne-light transition-colors rounded-sm inline-flex items-center justify-center gap-2"
          title="Direct WhatsApp Enquiry"
        >
          <MessageCircle className="w-4 h-4 text-charcoal" />
          <span>Chat on WhatsApp</span>
        </a>
      </div>
    </form>
  );
};
