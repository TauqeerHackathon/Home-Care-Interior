/**
 * Enquiry utility functions, validation, and WhatsApp message formatting
 * for HOME CARE INTERIOR.
 */

import { BUSINESS_DATA } from '../data/businessData';

export interface EnquiryPayload {
  fullName: string;
  phone: string;
  email: string;
  service: string;
  projectLocation: string;
  projectDetails: string;
  consent: boolean;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Partial<Record<keyof EnquiryPayload, string>>;
}

export const VALID_SERVICES = [
  'Building Construction',
  'Renovation',
  'Civil Work',
  'Interior Work',
  'Modular Kitchen',
  'False Ceiling',
  'Project Management',
] as const;

export type ValidServiceName = typeof VALID_SERVICES[number];

/**
 * Validates enquiry input fields according to Indian business standards
 */
export function validateEnquiryForm(payload: EnquiryPayload): ValidationResult {
  const errors: Partial<Record<keyof EnquiryPayload, string>> = {};

  if (!payload.fullName || payload.fullName.trim().length < 2) {
    errors.fullName = 'Please enter your full name (at least 2 characters).';
  }

  // Phone validation: Indian standard 10 digits or international format
  const cleanPhone = payload.phone.replace(/[\s\-()]/g, '');
  const indianPhoneRegex = /^(\+91|91|0)?[6-9]\d{9}$/;
  const generalPhoneRegex = /^\+?[0-9]{10,14}$/;

  if (!payload.phone || payload.phone.trim() === '') {
    errors.phone = 'Phone number is required for project coordination.';
  } else if (!indianPhoneRegex.test(cleanPhone) && !generalPhoneRegex.test(cleanPhone)) {
    errors.phone = 'Please provide a valid 10-digit mobile number.';
  }

  // Email validation (RFC 5322 compliant simple check)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!payload.email || payload.email.trim() === '') {
    errors.email = 'Email address is required.';
  } else if (!emailRegex.test(payload.email.trim())) {
    errors.email = 'Please provide a valid email address.';
  }

  // Exact 7 services check
  if (!payload.service || !VALID_SERVICES.includes(payload.service as ValidServiceName)) {
    errors.service = 'Please select one of our 7 verified services.';
  }

  if (!payload.projectLocation || payload.projectLocation.trim().length < 2) {
    errors.projectLocation = 'Please provide your project location (e.g. Kondhwa, Pune).';
  }

  if (!payload.projectDetails || payload.projectDetails.trim().length < 10) {
    errors.projectDetails = 'Please share a brief description of your requirements (at least 10 characters).';
  }

  if (!payload.consent) {
    errors.consent = 'Please confirm consent to be contacted regarding this enquiry.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Formats WhatsApp prefilled message string
 * Exactly matching Section 13 format:
 *
 * Hello Home Care Interior,
 *
 * I would like to enquire about a project.
 *
 * Name: [Name]
 * Required Service: [Service]
 * Project Location: [Location]
 * Project Details: [Details]
 *
 * Please contact me.
 */
export function buildWhatsAppMessage(payload: Partial<EnquiryPayload>): string {
  const lines = [
    `Hello Home Care Interior,`,
    ``,
    `I would like to enquire about a project.`,
    ``,
    `Name: ${payload.fullName || 'Not specified'}`,
    `Required Service: ${payload.service || 'General Enquiry'}`,
    `Project Location: ${payload.projectLocation || 'Pune'}`,
    `Project Details: ${payload.projectDetails || 'Interested in discussing a new project.'}`,
    ``,
    `Please contact me.`,
  ];

  return lines.join('\n');
}

/**
 * Generates direct wa.me link with URL encoded message
 */
export function getWhatsAppUrl(payload: Partial<EnquiryPayload>): string {
  const message = buildWhatsAppMessage(payload);
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${BUSINESS_DATA.primaryPhoneRaw}?text=${encoded}`;
}

/**
 * Helper to format phone for clean visual display
 */
export function formatPhoneNumber(phone: string): string {
  return phone;
}
