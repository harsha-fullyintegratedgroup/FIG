
import { Service, BlogPost, TeamMember, Industry } from './types';

export const SERVICES: Service[] = [
  {
    id: 'msme-funding',
    title: 'MSME Business Consulting',
    description: 'Specialized strategic guidance for micro, small, and medium enterprises to achieve operational excellence, secure growth capital, and navigate regulatory frameworks.',
    icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
  },
  {
    id: 'gtm-strategy',
    title: 'Go-To-Market Strategy',
    description: 'Comprehensive launch frameworks designed to help businesses enter new markets and launch products with data-driven precision and competitive advantage.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z'
  },
  {
    id: 'process-consultation',
    title: 'Process Consultation',
    description: 'Expert analysis and re-engineering of internal workflows to eliminate operational bottlenecks, reduce waste, and maximize productivity.',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 002-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01'
  }
];

export const INDUSTRIES: Industry[] = [
  {
    id: 'manufacturing',
    name: 'Manufacturing & Processing',
    path: '/industries/manufacturing',
    subIndustries: [
      {
        name: 'Manufacturing — Light & Medium Scale',
        items: [
          'Textile & Apparel Manufacturing', 'Garment & Fashion Production Units', 'Leather & Footwear Manufacturing',
          'Plastic & Polymer Product Units', 'Rubber Products Manufacturing', 'Metal Fabrication & Sheet Metal Works',
          'Auto Components & Ancillary Units', 'Machine Tools & Precision Engineering', 'Electronics Assembly & PCB Manufacturing',
          'Electrical Equipment & Switchgear Units', 'Furniture & Woodworking Units', 'Paper & Stationery Products',
          'Packaging Materials Manufacturing', 'Ceramic & Glass Products', 'Chemical & Specialty Chemicals Units',
          'Pharmaceutical Formulation Units', 'Ayurvedic & Herbal Product Manufacturing', 'Cosmetics & Personal Care Manufacturing',
          'Handicrafts & Artisan Products', 'Toy Manufacturing Units'
        ]
      },
      {
        name: 'Food Processing & Packaged Foods',
        items: [
          'Dairy Processing & Milk Products', 'Bakery & Confectionery Units', 'Snack Foods & Ready-to-Eat Manufacturing',
          'Spice Processing & Grinding Units', 'Edible Oil Extraction & Refining', 'Flour Mills & Grain Processing',
          'Fruit & Vegetable Processing', 'Beverage Manufacturing (Non-Alcoholic)', 'Meat & Poultry Processing',
          'Seafood Processing & Packaging', 'Frozen Foods Manufacturing', 'Pickle & Sauce Manufacturing',
          'Health Foods & Nutraceuticals', 'Organic & Natural Foods Processing', 'Animal Feed Manufacturing',
          'Ice Cream & Frozen Desserts'
        ]
      }
    ]
  },
  {
    id: 'tech',
    name: 'Technology & Digital Commerce',
    path: '/industries/tech',
    subIndustries: [
      {
        name: 'Technology & SaaS',
        items: [
          'Enterprise Software Development', 'Mobile Application Development', 'Web Application & Portal Development',
          'SaaS Product Companies', 'Cloud Infrastructure Services', 'Cybersecurity & InfoSec Services',
          'Data Analytics & Business Intelligence', 'Artificial Intelligence & ML Solutions', 'Internet of Things (IoT) Platforms',
          'Blockchain & Web3 Development', 'ERP & Business Software Implementation', 'IT Managed Services Providers',
          'Quality Assurance & Testing Services', 'DevOps & Platform Engineering', 'API Development & Integration Services',
          'HealthTech & MedTech Solutions', 'EdTech Platforms & Learning Management', 'FinTech & Payment Solutions',
          'AgriTech & Farm Management Software', 'LegalTech & Compliance Automation'
        ]
      },
      {
        name: 'E-commerce & D2C Brands',
        items: [
          'Fashion & Apparel D2C Brands', 'Beauty & Personal Care D2C', 'Health & Wellness D2C Brands',
          'Food & Beverage D2C Brands', 'Home & Living D2C Brands', 'Electronics & Gadgets E-commerce',
          'Pet Products & Care E-commerce', 'Kids & Baby Products D2C', 'Sports & Fitness Equipment D2C',
          'Jewellery & Accessories E-commerce', 'Marketplace Sellers & Aggregators', 'Subscription Box Services',
          'Social Commerce Operators', 'Live Commerce & Influencer-Led Brands'
        ]
      }
    ]
  },
  {
    id: 'trade',
    name: 'Trade, Retail & Distribution',
    path: '/industries/trade',
    subIndustries: [
      {
        name: 'Trading & Distribution (Import-Export, Wholesale)',
        items: [
          'Commodity Trading (Agri, Metals, Minerals)', 'Industrial Raw Material Distributors', 'FMCG Wholesale & Distribution',
          'Pharmaceutical Distributors & Stockists', 'Electronics & IT Hardware Distribution', 'Building Materials & Hardware Trading',
          'Textile & Fabric Wholesale', 'Auto Parts & Spare Distributors', 'Chemical & Petrochemical Trading',
          'Food Grains & Pulses Trading', 'Import-Export Trading Houses', 'Machinery & Equipment Trading'
        ]
      },
      {
        name: 'Multi-location Retail & Franchise Operations',
        items: [
          'Supermarket & Grocery Chains', 'Fashion & Lifestyle Retail Chains', 'Electronics & Consumer Durables Retail',
          'Pharmacy & Wellness Retail Chains', 'Quick Service Restaurant (QSR) Franchises', 'Fuel Station & Convenience Store Chains',
          'Optical & Eyewear Retail Chains', 'Furniture & Home Decor Retail Chains', 'Automotive Dealership Networks',
          'Education & Coaching Franchises', 'Salon & Spa Franchises', 'Fitness & Gym Franchises'
        ]
      },
      {
        name: 'Logistics & Warehousing',
        items: [
          'Third-Party Logistics (3PL) Providers', 'Freight Forwarding & Customs Brokers', 'Warehousing & Fulfilment Centers',
          'Cold Chain & Temperature-Controlled Logistics', 'Last-Mile Delivery Services', 'Express & Courier Services',
          'Fleet Operators & Transporters', 'Container & Intermodal Logistics', 'E-commerce Logistics Specialists',
          'Hazardous Goods Transport', 'Project Cargo & Heavy Haulage', 'Inventory Management Service Providers'
        ]
      },
      {
        name: 'Agri-Input & Allied Services',
        items: [
          'Seeds & Planting Material Distributors', 'Fertilizer & Agrochemical Dealers', 'Farm Equipment & Machinery Dealers',
          'Irrigation Equipment Suppliers', 'Animal Husbandry Input Suppliers', 'Aquaculture & Fisheries Input Dealers',
          'Organic Farming Input Suppliers', 'Cold Storage & Agri Warehousing', 'Agricultural Trading & Mandis',
          'Farm Management Service Providers'
        ]
      }
    ]
  },
  {
    id: 'healthcare',
    name: 'Healthcare Services',
    path: '/industries/healthcare',
    subIndustries: [
      {
        name: 'Healthcare — Clinics, Diagnostics, Pharmacies',
        items: [
          'Multi-Specialty Clinics', 'Single-Specialty Clinics (Dental, Derma, Ortho, etc.)', 'Diagnostic Laboratories & Pathology Centers',
          'Radiology & Imaging Centers', 'Dialysis Centers', 'Physiotherapy & Rehabilitation Centers', 'IVF & Fertility Clinics',
          'Eye Care & Ophthalmology Centers', 'Mental Health & Counselling Centers', 'Home Healthcare Service Providers',
          'Retail Pharmacy Chains', 'Hospital Pharmacy Operations', 'Online Pharmacy & Medicine Delivery',
          'Ayurveda, Homeopathy & Alternative Medicine Clinics', 'Veterinary Clinics & Pet Care Centers', 'Medical Equipment Rental Services'
        ]
      }
    ]
  },
  {
    id: 'infrastructure',
    name: 'Infrastructure & Energy',
    path: '/industries/infrastructure',
    subIndustries: [
      {
        name: 'Construction & Infrastructure Contractors',
        items: [
          'Residential Building Contractors', 'Commercial & Office Building Contractors', 'Industrial Shed & Factory Construction',
          'Road & Highway Contractors', 'Bridge & Flyover Contractors', 'Water Supply & Sanitation Contractors',
          'Electrical Infrastructure Contractors', 'MEP (Mechanical, Electrical, Plumbing) Contractors', 'Interior Fit-Out Contractors',
          'Landscaping & Hardscaping Contractors', 'Demolition & Site Clearing Services', 'Structural Steel & Prefab Contractors',
          'Civil Foundation & Piling Contractors', 'Renovation & Retrofitting Contractors'
        ]
      },
      {
        name: 'Renewable Energy & CleanTech',
        items: [
          'Solar EPC Contractors', 'Solar O&M Service Providers', 'Rooftop Solar Installers', 'Solar Equipment Distributors',
          'Wind Energy Service Providers', 'EV Charging Infrastructure Providers', 'Battery Storage & Energy Systems',
          'Energy Audit & Efficiency Consultants', 'Biogas & Biomass Energy Operators', 'Waste-to-Energy Project Developers',
          'Carbon Credit & ESG Advisory', 'Green Building Certification Consultants'
        ]
      }
    ]
  },
  {
    id: 'hospitality',
    name: 'Hospitality, Events & Marketing',
    path: '/industries/hospitality',
    subIndustries: [
      {
        name: 'Hospitality — Hotels, Restaurants, QSRs',
        items: [
          'Budget & Economy Hotels', 'Business & Corporate Hotels', 'Boutique & Heritage Hotels', 'Resorts & Leisure Properties',
          'Homestays & Vacation Rentals', 'Fine Dining Restaurants', 'Casual Dining Restaurants', 'Quick Service Restaurants (QSR)',
          'Cloud Kitchens & Delivery-Only Brands', 'Cafes & Coffee Shops', 'Bars & Pubs', 'Catering & Banquet Services',
          'Food Courts & Multi-Brand Outlets', 'Travel Agencies & Tour Operators'
        ]
      },
      {
        name: 'Event Management',
        items: [
          'Corporate Event Management', 'Wedding & Social Event Planners', 'Exhibition & Trade Show Organizers',
          'Conference & MICE Organizers', 'Concert & Live Entertainment Producers', 'Sports Event Management',
          'Brand Activation & Experiential Marketing', 'Virtual & Hybrid Event Producers', 'Audio-Visual & Production Services',
          'Venue Management & Operations'
        ]
      },
      {
        name: 'Marketing & Creative Agencies',
        items: [
          'Full-Service Advertising Agencies', 'Digital Marketing Agencies', 'Performance Marketing & Media Buying',
          'Social Media Marketing Agencies', 'Content Marketing & Copywriting Agencies', 'SEO & Search Marketing Agencies',
          'Branding & Design Studios', 'Video Production & Animation Studios', 'Public Relations & Communications Agencies',
          'Influencer Marketing Agencies', 'Market Research & Insights Firms', 'Packaging Design Agencies'
        ]
      }
    ]
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'future-of-msme',
    title: 'The Future of MSME Business Consulting in 2025',
    excerpt: 'How digital-first advisory and strategic planning are reshaping the small business landscape.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600',
    category: 'Finance'
  },
  {
    id: 'digital-transformation',
    title: 'Digital Transformation: Beyond the Buzzword',
    excerpt: 'Practical steps for legacy businesses to integrate AI and cloud infrastructure without breaking operations.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1600',
    category: 'Innovation'
  },
  {
    id: 'global-market-entry',
    title: 'Navigating Entry into South-East Asian Markets',
    excerpt: 'A comprehensive guide on cultural alignment and regulatory compliance for global expansion.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600',
    category: 'Strategy'
  }
];

export const TEAM: TeamMember[] = [
  {
    name: 'Sarah Chen',
    role: 'Managing Partner',
    bio: 'Former McKinsey strategist with 15+ years experience in global market expansion and structural financing.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800'
  },
  {
    name: 'Marcus Thorne',
    role: 'Head of MSME Business Consulting',
    bio: 'Investment banker specializing in small business grants, debt restructuring, and venture capital frameworks.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800'
  },
  {
    name: 'Elena Rodriguez',
    role: 'Process Design Lead',
    bio: 'Expert in Six Sigma methodologies and digital workflow automation for mid-scale global enterprises.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800'
  }
];
