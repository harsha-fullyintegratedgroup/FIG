import { Service, BlogPost, TeamMember } from './types';

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