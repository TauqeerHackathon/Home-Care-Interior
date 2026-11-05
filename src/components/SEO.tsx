import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { BUSINESS_DATA } from '../data/businessData';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  type?: 'website' | 'article';
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  image = '/assets/brand/home-care-interior-logo.png',
  type = 'website',
}) => {
  const location = useLocation();
  const siteTitle = title
    ? `${title} | Home Care Interior Pune`
    : 'Home Care Interior | Luxury Interior & Civil Contracting Pune';
  const siteDesc =
    description ||
    'Home Care Interior brings together interior work, renovation and civil contracting services in Kondhwa, Pune by Yusuf Musir Khan. Established 2002 with 20+ years experience and 100+ projects.';

  useEffect(() => {
    document.title = siteTitle;

    // Helper to update meta tag content
    const setMeta = (name: string, content: string, attr: 'name' | 'property' = 'name') => {
      let element = document.querySelector(`meta[${attr}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    setMeta('description', siteDesc);
    setMeta('og:title', siteTitle, 'property');
    setMeta('og:description', siteDesc, 'property');
    setMeta('og:type', type, 'property');
    setMeta('og:image', image, 'property');
    setMeta('twitter:title', siteTitle);
    setMeta('twitter:description', siteDesc);

    // Canonical link
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', window.location.href);

    // Add JSON-LD LocalBusiness Schema
    const schemaId = 'business-json-ld';
    let script = document.getElementById(schemaId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = schemaId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }

    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'HomeAndConstructionBusiness',
      name: BUSINESS_DATA.officialName,
      alternateName: BUSINESS_DATA.displayBrand,
      description: BUSINESS_DATA.originalAboutText,
      url: window.location.origin,
      telephone: BUSINESS_DATA.primaryPhone,
      email: BUSINESS_DATA.primaryEmail,
      founder: {
        '@type': 'Person',
        name: BUSINESS_DATA.ownerName,
        jobTitle: BUSINESS_DATA.category,
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Sarve number 52 bhagyanagar kondwapur ke number 30 Makka masjid',
        addressLocality: 'Kondhwa, Pune',
        addressRegion: 'Maharashtra',
        postalCode: '411048',
        addressCountry: 'IN',
      },
      areaServed: {
        '@type': 'AdministrativeArea',
        name: 'Pune',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Civil & Interior Contracting Services',
        itemListElement: BUSINESS_DATA.services.map((service, index) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: service.name,
            description: service.shortDesc,
          },
          position: index + 1,
        })),
      },
      knowsAbout: [
        'Civil Contracting',
        'Interior Work',
        'Modular Kitchen',
        'False Ceiling',
        'Building Construction',
        'Renovation',
        'Project Management',
      ],
      foundingDate: '2002',
    };

    script.textContent = JSON.stringify(jsonLd);
  }, [siteTitle, siteDesc, image, type, location.pathname]);

  return null;
};
