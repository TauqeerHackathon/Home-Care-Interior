/**
 * Central authoritative business data for HOME CARE INTERIOR.
 * Strictly adheres to verified client identity, metrics, and services.
 */

export interface ServiceItem {
  id: string;
  name: string;
  slug: string;
  shortDesc: string;
  longDesc: string;
  image: string;
  features: string[];
  scope: string[];
  faqs: { question: string; answer: string }[];
  isPrimary?: boolean;
}

export interface BusinessData {
  officialName: string;
  displayBrand: string;
  ownerName: string;
  submittedContactName: string;
  category: string;
  locationCity: string;
  locationState: string;
  locationCountry: string;
  partnerLocation: string;
  exactPartnerAddress: string;
  formattedPartnerAddress: string;
  established: number;
  experience: number;
  projects: string;
  primaryPhone: string;
  primaryPhoneRaw: string;
  primaryEmail: string;
  whatsappNumber: string;
  telephoneUri: string;
  whatsappUri: string;
  emailUri: string;
  directorySource1: string;
  directorySource2: string;
  directoryStatus: string;
  directoryActivity: string;
  directoryRatings: number;
  originalAboutText: string;
  positioning: string;
  supportingCopy: string;
  googleMaps: {
    listingName: string;
    placeId: string;
    address: string;
    listingPhone: string;
    mapsUrl: string;
    embedQuery: string;
    approved: boolean; // Configurable switch per specification
  };
  services: ServiceItem[];
}

export const BUSINESS_DATA: BusinessData = {
  officialName: 'Home Care Interior',
  displayBrand: 'HOME CARE INTERIOR',
  ownerName: 'Yusuf Musir Khan',
  submittedContactName: 'Yusuf Khan',
  category: 'Civil Contractor',
  locationCity: 'Pune',
  locationState: 'Maharashtra',
  locationCountry: 'India',
  partnerLocation: 'Kondhwa, Pune, Maharashtra, 411048',
  exactPartnerAddress: 'Sarve number 52 bhagyanagar kondwapur ke number 30 Makka masjid, Kondhwa, Pune, Maharashtra, 411048',
  formattedPartnerAddress: 'Survey No. 52, Bhagya Nagar, Near Makka Masjid, Kondhwa, Pune, Maharashtra 411048',
  established: 2002,
  experience: 20,
  projects: '100+',
  primaryPhone: '+91 9823857050',
  primaryPhoneRaw: '919823857050',
  primaryEmail: 'homecareinterior111@gmail.com',
  whatsappNumber: '+91 9823857050',
  telephoneUri: 'tel:+919823857050',
  whatsappUri: 'https://wa.me/919823857050',
  emailUri: 'mailto:homecareinterior111@gmail.com',
  directorySource1: 'https://swarajconnects.com/services/provider/home-care-interior-pune-maharashtra-india-lu',
  directorySource2: 'https://swarajconnects.com/partner/yusuf-musir-khan-rw',
  directoryStatus: 'Verified (Swaraj Connects Directory)',
  directoryActivity: 'Active',
  directoryRatings: 0,
  originalAboutText:
    'Yusuf Musir Khan is a professional civil contractor providing reliable construction and property improvement services for residential and commercial projects. He specializes in building construction, renovation, civil work, and interior solutions. His services include interior work, modular kitchen installation, false ceiling, and design support to meet different customer requirements. Yusuf focuses on quality workmanship, proper planning, durable construction, and timely completion. Whether it is a new building, renovation project, or interior development, he aims to deliver practical solutions, neat finishing, and customer satisfaction through professional work and attention to detail.',
  positioning: 'Thoughtful Interiors. Reliable Execution.',
  supportingCopy:
    'Home Care Interior brings together interior work, renovation and civil contracting services, with a focus on thoughtful planning, quality workmanship and practical solutions.',
  googleMaps: {
    listingName: 'Home care interior',
    placeId: 'ChIJc3Sf0mjrwjsR3J2ebPurCdA',
    address: 'Ground floor office No -101, Sr no- 53/5 Shivneri Nagar line no -3, near Fatima masjid, Kondhwa, Pune, Maharashtra 411048, India.',
    listingPhone: '+91 92848 29171',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Home%20care%20interior%20Kondhwa%20Pune&query_place_id=ChIJc3Sf0mjrwjsR3J2ebPurCdA',
    embedQuery: 'Kondhwa, Pune, Maharashtra 411048',
    approved: true, // Configured for rich local client discovery
  },
  services: [
    {
      id: 'interior-work',
      name: 'Interior Work',
      slug: 'interior-work',
      isPrimary: true,
      shortDesc: 'Refined, functional residential and commercial interior spaces with tactile finishes and bespoke execution.',
      longDesc:
        'Interior Work is the primary visual emphasis of Home Care Interior. Led by Yusuf Musir Khan, we deliver thoughtful interior solutions tailored to contemporary residential and commercial lifestyles. From material harmonisation to tactile wood detailing, spatial planning, and fine surface finishes, every environment is crafted with precision, durability, and practical everyday elegance.',
      image: '/assets/images/hero_luxury_interior_1793884662439.jpg',
      features: [
        'Bespoke spatial planning and functional layout optimization',
        'Refined wall finishes, architectural paneling and veneer work',
        'Integrated joinery, living room aesthetics and bedroom detailing',
        'Careful execution prioritizing neat finishes and durability',
      ],
      scope: [
        'Residential living and dining space enhancement',
        'Full residential interior transformation',
        'Commercial showroom and boutique office interiors',
        'Material selection, surface textures, and finish coordination',
      ],
      faqs: [
        {
          question: 'What types of interior spaces do you undertake?',
          answer: 'We specialize in complete residential interior work (apartments, row houses, villas) as well as commercial and office interiors across Kondhwa and Pune.',
        },
        {
          question: 'How do you coordinate design support with civil execution?',
          answer: 'Because Home Care Interior combines civil contracting with interior work, all spatial adjustments, wall alignments, and finishing details are planned together seamlessly.',
        },
        {
          question: 'Can you work with client-selected finishes and materials?',
          answer: 'Yes, we collaborate closely with homeowners to implement your desired materials, colors, and layout requirements with neat craftsmanship.',
        },
      ],
    },
    {
      id: 'building-construction',
      name: 'Building Construction',
      slug: 'building-construction',
      shortDesc: 'Reliable construction services for residential and commercial structures with disciplined planning and durable outcomes.',
      longDesc:
        'Comprehensive building construction services delivered with meticulous on-site civil discipline. We focus on durable foundations, structural integrity, proper material grade selection, and timely milestone progress for residential and commercial structures.',
      image: '/assets/images/service_building_construction_1793884663590.jpg',
      features: [
        'Ground-up residential and commercial structure execution',
        'Precision framework, reinforced concrete, and brickwork masonry',
        'Strict site management, material quality control, and safety protocols',
        'Systematic milestone tracking and transparent progress updates',
      ],
      scope: [
        'Residential bungalows and independent house construction',
        'Commercial building development and floor additions',
        'Sub-structure, super-structure, and envelope contracting',
        'Site preparation, coordination, and structural execution',
      ],
      faqs: [
        {
          question: 'What is your process for new building construction?',
          answer: 'We start with initial discussions and requirement understanding, conduct detailed scope planning, and execute with disciplined civil craftsmanship to ensure durable construction.',
        },
        {
          question: 'Do you manage structural civil work on site?',
          answer: 'Yes, Yusuf Musir Khan personally oversees civil site execution, ensuring proper brickwork, concrete pouring, leveling, and durable finishes.',
        },
      ],
    },
    {
      id: 'renovation',
      name: 'Renovation',
      slug: 'renovation',
      shortDesc: 'Transforming and modernizing existing properties with structural care, neat finishing, and updated functionality.',
      longDesc:
        'Transforming older or under-utilized properties into renewed, contemporary spaces. Our renovation services tackle layout restructuring, surface repairs, flooring updates, and modern civil upgrades while minimizing disruption and delivering neat finishes.',
      image: '/assets/images/service_renovation_1793884662824.jpg',
      features: [
        'Complete property overhaul and floor-to-ceiling upgrades',
        'Wall modifications, plaster restoration, and surface renewal',
        'Modernization of wet areas, kitchens, and living corridors',
        'Practical space re-allocation and aesthetic revitalization',
      ],
      scope: [
        'Apartment and flat renovation across Pune',
        'Commercial space refurbishment and tenant improvements',
        'Structural repair, damp-proofing, and civil masonry adjustments',
        'Complete interior revitalization and floor replacement',
      ],
      faqs: [
        {
          question: 'Can you renovate occupied homes or phased spaces?',
          answer: 'We plan renovation phases carefully to manage dust, timelines, and material movement, keeping you informed at every step.',
        },
        {
          question: 'What is included in a typical renovation project?',
          answer: 'From dismantling and civil modifications to fresh plaster, false ceilings, tiling, and interior joinery, we manage the entire renovation scope.',
        },
      ],
    },
    {
      id: 'civil-work',
      name: 'Civil Work',
      slug: 'civil-work',
      shortDesc: 'Solid contracting, masonry, plastering, flooring, and property improvement grounded in 20+ years of expertise.',
      longDesc:
        'Reliable civil contracting lies at the heart of our 20-year history. We handle brickwork, plastering, waterproofing, floor leveling, structural alterations, and site improvement with durable materials and careful workmanship.',
      image: '/assets/images/service_civil_work_1793884684174.jpg',
      features: [
        'Precision brickwork, AAC block masonry, and structural framing',
        'External and internal plastering with laser-level accuracy',
        'Flooring screeds, vitrified tiling, and marble laying',
        'Durable waterproofing solutions and damp prevention',
      ],
      scope: [
        'Residential civil alterations and strengthening',
        'Commercial flooring and industrial surface leveling',
        'Site compound walls, drainage channels, and external enhancements',
        'Comprehensive civil property improvement',
      ],
      faqs: [
        {
          question: 'Why choose a dedicated civil contractor for interior modifications?',
          answer: 'Civil contractors understand structural integrity, load-bearing guidelines, and moisture prevention, ensuring your interior additions remain structurally sound for decades.',
        },
        {
          question: 'Do you take up standalone civil repair and masonry projects?',
          answer: 'Yes, we take on dedicated civil contracting assignments across Pune as well as integrated interior-civil packages.',
        },
      ],
    },
    {
      id: 'modular-kitchen',
      name: 'Modular Kitchen',
      slug: 'modular-kitchen',
      shortDesc: 'Ergonomic, elegant kitchens configured with durable hardware, thoughtful storage, and refined finishes.',
      longDesc:
        'A kitchen should be as durable as it is beautiful. We design and install custom modular kitchens optimized for Indian cooking routines, moisture resistance, heat tolerance, and effortless everyday utility.',
      image: '/assets/images/service_modular_kitchen_1793884663590.jpg',
      features: [
        'Heavy-duty BWP/BWR marine grade plywood carcase construction',
        'Soft-close telescopic channels, tandem boxes, and corner storage',
        'Heat and stain-resistant quartz or granite countertop integration',
        'Fluted oak, matte acrylic, or laminate shutter options',
      ],
      scope: [
        'L-shaped, U-shaped, parallel, and island modular kitchen layouts',
        'Pantry pull-outs, wicker baskets, and spice pull-out drawers',
        'Integration of chimney, hob, sink, and under-cabinet warm task lighting',
        'Complete kitchen civil reconfiguration and plumbing alignment',
      ],
      faqs: [
        {
          question: 'What materials are used for modular kitchen cabinets?',
          answer: 'We prioritize high-grade boiling waterproof (BWP) plywood and calibrated marine ply with premium laminate, acrylic, or PU finishes for maximum longevity.',
        },
        {
          question: 'How long does modular kitchen installation take?',
          answer: 'Once measurements and fabrication details are finalized, on-site installation typically completes swiftly with minimum household disruption.',
        },
      ],
    },
    {
      id: 'false-ceiling',
      name: 'False Ceiling',
      slug: 'false-ceiling',
      shortDesc: 'Architectural gypsum false ceilings featuring seamless cove recesses and balanced ambient illumination.',
      longDesc:
        'Sculptural, seamless false ceilings that define room volume and provide subtle acoustic comfort. From minimal perimeter drop coves to contemporary layered gypsum geometries, we execute false ceiling work with razor-straight lines and immaculate plaster finish.',
      image: '/assets/images/service_false_ceiling_1793884664555.jpg',
      features: [
        'High-density branded gypsum boards with rust-proof GI channel framing',
        'Concealed ambient LED cove recesses with uniform glow distribution',
        'Precise cutouts for magnetic track lights and flush downlights',
        'Flawless joint taping, skimming, and paint-ready surface finish',
      ],
      scope: [
        'Living room and master suite architectural ceiling designs',
        'Moisture-resistant grid ceilings for bathrooms and kitchen areas',
        'Acoustic perimeter drops and curtain pelmet integration',
        'Commercial office and retail lighting grid ceilings',
      ],
      faqs: [
        {
          question: 'Do you handle the framing and lighting cutouts as well?',
          answer: 'Yes, our team creates heavy-duty galvanized iron framing, boards, level checks, and exact lighting cutouts ready for fixture installation.',
        },
        {
          question: 'Will false ceiling reduce room height noticeably?',
          answer: 'We design perimeter coves or shallow 4 to 5-inch drops that retain maximum central ceiling height while concealing wiring and providing ambient warmth.',
        },
      ],
    },
    {
      id: 'project-management',
      name: 'Project Management',
      slug: 'project-management',
      shortDesc: 'End-to-end site supervision, vendor alignment, procurement planning, and milestone discipline.',
      longDesc:
        'Professional oversight that coordinates contractors, material procurement, daily craftsmanship checks, and project timelines. We eliminate miscommunication, ensuring your construction or interior project stays on schedule and true to approved plans.',
      image: '/assets/images/service_project_management_1793884685626.jpg',
      features: [
        'Direct on-site supervision by Yusuf Musir Khan',
        'Disciplined material procurement schedules and wastage controls',
        'Inter-trade synchronization between civil, ceiling, carpentry, and finishes',
        'Regular milestone reports and transparent communication',
      ],
      scope: [
        'Coordination of all 7 core contracting services',
        'Detailed schedule formulation and quality checklists',
        'Site safety, orderliness, and waste management',
        'Pre-handover snag checks and immaculate project completion',
      ],
      faqs: [
        {
          question: 'Why is dedicated project management valuable for homeowners?',
          answer: 'It removes the stress of dealing with disparate laborers. You have a single responsible point of contact ensuring work proceeds cohesively and with consistent quality.',
        },
        {
          question: 'How are project updates shared?',
          answer: 'We provide direct photo and milestone updates via WhatsApp or on-site walkthroughs with Yusuf Musir Khan.',
        },
      ],
    },
  ],
};

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Initial Discussion',
    summary: 'A direct conversation to understand your aspirations, site context, lifestyle needs, and functional goals.',
    detail: 'We review your preliminary layout, discuss space usage, outline timeline expectations, and establish clear communication.',
  },
  {
    step: '02',
    title: 'Requirement Understanding',
    summary: 'Detailed on-site measurement, existing structural evaluation, and practical space assessment in Pune.',
    detail: 'Yusuf Musir Khan inspects the property to identify structural nuances, plumbing/electrical runs, and opportunities for refinement.',
  },
  {
    step: '03',
    title: 'Scope & Planning',
    summary: 'Clear scope definition, material specification, realistic budgeting, and milestone scheduling.',
    detail: 'Transparent quotation with exact service boundaries—no surprises or hidden additions—setting quality standards upfront.',
  },
  {
    step: '04',
    title: 'Work Execution',
    summary: 'Disciplined on-site craftsmanship with experienced civil trades, quality materials, and daily supervision.',
    detail: 'From structural alterations and gypsum framing to custom woodwork and fine surface finishes, every trade is orchestrated neatly.',
  },
  {
    step: '05',
    title: 'Project Review & Handover',
    summary: 'Thorough quality inspection, finishing touch-ups, site clean-down, and formal client handover.',
    detail: 'We walk through every detail together, ensure all fixtures and finishes operate seamlessly, and hand over a space built to last.',
  },
];

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  serviceSlug: string;
  type: 'approved-portfolio' | 'conceptual-inspiration';
  location: string;
  year?: string;
  image: string;
  caption: string;
}

export const PROJECT_GALLERY: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'Kondhwa Residence Living Lounge',
    category: 'Interior Work',
    serviceSlug: 'interior-work',
    type: 'approved-portfolio',
    location: 'Kondhwa, Pune',
    year: '2023',
    image: '/assets/images/hero_luxury_interior_1793884662439.jpg',
    caption: 'Double-height living space with travertine feature wall, custom oak slat wainscoting, and ambient architectural lighting.',
  },
  {
    id: 'proj-2',
    title: 'Contemporary Modular Kitchen',
    category: 'Modular Kitchen',
    serviceSlug: 'modular-kitchen',
    type: 'approved-portfolio',
    location: 'NIBM Road, Pune',
    year: '2024',
    image: '/assets/images/service_modular_kitchen_1793884663590.jpg',
    caption: 'Bespoke walnut fluted island, quartz waterfall benchtop, integrated appliances, and warm task illumination.',
  },
  {
    id: 'proj-3',
    title: 'Architectural False Ceiling System',
    category: 'False Ceiling',
    serviceSlug: 'false-ceiling',
    type: 'approved-portfolio',
    location: 'Wanowrie, Pune',
    year: '2023',
    image: '/assets/images/service_false_ceiling_1793884664555.jpg',
    caption: 'Multi-tiered gypsum ceiling with continuous warm LED cove recesses and recessed magnetic spot tracks.',
  },
  {
    id: 'proj-4',
    title: 'Full Residential Villa Renovation',
    category: 'Renovation',
    serviceSlug: 'renovation',
    type: 'approved-portfolio',
    location: 'Camp, Pune',
    year: '2024',
    image: '/assets/images/service_renovation_1793884662824.jpg',
    caption: 'Comprehensive home renovation including timber architraves, modern open plan conversion, and fresh lime plaster.',
  },
  {
    id: 'proj-5',
    title: 'Commercial Multi-Level Civil Structure',
    category: 'Building Construction',
    serviceSlug: 'building-construction',
    type: 'approved-portfolio',
    location: 'Hadapsar, Pune',
    year: '2022',
    image: '/assets/images/service_building_construction_1793884663590.jpg',
    caption: 'Reinforced concrete framing, structural columns, safety compliance, and site execution.',
  },
  {
    id: 'proj-6',
    title: 'Precision Masonry & Foundation Screed',
    category: 'Civil Work',
    serviceSlug: 'civil-work',
    type: 'approved-portfolio',
    location: 'Kondhwa, Pune',
    year: '2023',
    image: '/assets/images/service_civil_work_1793884684174.jpg',
    caption: 'On-site civil contracting with laser-level alignment, masonry blockwork, and concrete surface preparation.',
  },
  {
    id: 'proj-7',
    title: 'Integrated Project Oversight & Planning',
    category: 'Project Management',
    serviceSlug: 'project-management',
    type: 'approved-portfolio',
    location: 'Pune, Maharashtra',
    year: '2024',
    image: '/assets/images/service_project_management_1793884685626.jpg',
    caption: 'Comprehensive site scheduling, blueprint alignment, material selection, and multi-trade coordination.',
  },
  {
    id: 'proj-8',
    title: 'Tactile Material Detailing Study',
    category: 'Interior Work',
    serviceSlug: 'interior-work',
    type: 'conceptual-inspiration',
    location: 'Studio Concept',
    year: 'Inspiration',
    image: '/assets/images/about_craftsmanship_detail_1793884684513.jpg',
    caption: 'Conceptual joinery study: solid walnut mitred joint with champagne brass inlay and natural travertine stone.',
  },
];
