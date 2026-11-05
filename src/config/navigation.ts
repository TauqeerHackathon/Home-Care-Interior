/**
 * Centralized Navigation Configuration for HOME CARE INTERIOR.
 * Single source of truth for Desktop Header, Desktop Dropdown, Mobile Drawer, and Footer.
 */

import { BUSINESS_DATA, ServiceItem } from '../data/businessData';

export interface NavItem {
  label: string;
  path: string;
  hasDropdown?: boolean;
}

export const MAIN_NAV_LINKS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Our Services', path: '/services', hasDropdown: true },
  { label: 'Our Projects', path: '/projects' },
  { label: 'Our Process', path: '/process' },
  { label: 'Contact Us', path: '/contact' },
];

export interface SocialLink {
  platform: 'Instagram' | 'Facebook' | 'YouTube' | 'LinkedIn' | 'WhatsApp';
  url: string;
  isConfigured: boolean;
}

/**
 * Social channels configuration.
 * Per specification: Only display accounts whose actual URLs have been configured.
 * Do not invent social media links.
 */
export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: 'WhatsApp',
    url: BUSINESS_DATA.whatsappUri,
    isConfigured: true,
  },
  // Future social links can be activated here once verified client URLs are provided
  {
    platform: 'Instagram',
    url: '',
    isConfigured: false,
  },
  {
    platform: 'Facebook',
    url: '',
    isConfigured: false,
  },
  {
    platform: 'YouTube',
    url: '',
    isConfigured: false,
  },
  {
    platform: 'LinkedIn',
    url: '',
    isConfigured: false,
  },
];
