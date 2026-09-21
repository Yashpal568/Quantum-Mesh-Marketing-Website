export interface CityLocation {
  id: string;
  slug: string;
  cityName: string;
  region: 'Kumaon' | 'Garhwal' | 'National';
  tagline: string;
  metaTitle: string;
  metaDescription: string;
  popularServices: string[];
  localFocus: string;
  targetKeywords: string[];
  clientTypes: string[];
  deliveryMode: 'On-Site & Cloud' | 'Cloud & Remote';
}

export const CITIES_DATA: CityLocation[] = [
  {
    id: 'rudrapur',
    slug: 'rudrapur',
    cityName: 'Rudrapur (Corporate HQ)',
    region: 'Kumaon',
    tagline: 'Premier Website Developer & Industrial Software Engineering in Rudrapur',
    metaTitle: 'Website Developer & Software Company in Rudrapur | Quantum Mesh HQ',
    metaDescription: 'Looking for a top website developer near you in Rudrapur? Quantum Mesh (PSA Plaza, Awas Vikas) builds custom websites, industrial ERPs, biometric attendance systems, and school software in Rudrapur Sidcul.',
    popularServices: [
      'Website Development & Business Portals',
      'Industrial ERP & Sidcul Manufacturing Automation',
      'Biometric Attendance Machine & Cloud Sync',
      'School Management System (Monthly Rental / Custom)',
      'Hospital Management System (HMS)',
      'Custom Android & iOS Mobile Apps'
    ],
    localFocus: 'Serving businesses, factories across Sidcul Industrial Area, schools in Awas Vikas & Kichha Bypass, and local retail enterprises with immediate on-site support.',
    targetKeywords: [
      'website developer near me',
      'website development company in rudrapur',
      'software company in rudrapur',
      'biometric attendance machine rudrapur',
      'school management software rudrapur',
      'best web design company rudrapur',
      'app developers in rudrapur'
    ],
    clientTypes: ['Industrial Manufacturers', 'Private Schools & Colleges', 'Hospitals & Clinics', 'Retail Stores'],
    deliveryMode: 'On-Site & Cloud'
  },
  {
    id: 'dehradun',
    slug: 'dehradun',
    cityName: 'Dehradun',
    region: 'Garhwal',
    tagline: 'Leading Software Development & Web Application Agency in Dehradun',
    metaTitle: 'Website Developer & IT Company in Dehradun | Quantum Mesh',
    metaDescription: 'Best website developer and custom software company in Dehradun. Specialized in University ERPs, Agentic AI, government solutions, and high-performance React web applications.',
    popularServices: [
      'University & College Management Systems (UMS/LMS)',
      'Enterprise Web Application & Portal Development',
      'Agentic AI & Autonomous Business Workflows',
      'Multi-Cloud Kubernetes & DevOps Infrastructure',
      'Visitor & Campus Access Control'
    ],
    localFocus: 'Partnering with educational institutions, technology startups, and public sector organizations across Rajpur Road, Sahastradhara IT Park, and Clement Town.',
    targetKeywords: [
      'website developer in dehradun',
      'software company in dehradun',
      'web development company in dehradun',
      'IT company in dehradun',
      'university erp software dehradun',
      'ai development company dehradun'
    ],
    clientTypes: ['Higher Education Universities', 'GovTech Initiatives', 'Hospitality Groups', 'Enterprise Offices'],
    deliveryMode: 'On-Site & Cloud'
  },
  {
    id: 'haldwani',
    slug: 'haldwani',
    cityName: 'Haldwani & Nainital',
    region: 'Kumaon',
    tagline: 'Custom Management Systems & Web Development in Haldwani',
    metaTitle: 'Website Developer & Software Development Company in Haldwani | Quantum Mesh',
    metaDescription: 'Top website developers in Haldwani and Nainital. Building custom Hospital Management Systems, Servora Restaurant POS, School ERPs, and responsive corporate websites.',
    popularServices: [
      'Hospital Management System (HMS) & Clinic Portals',
      'Restaurant POS & Billing SaaS (Servora)',
      'School Management ERP (CBSE / ICSE Compliant)',
      'E-Commerce & Digital Billing Solutions',
      'Hotel & Resort Booking Portals'
    ],
    localFocus: 'Supporting healthcare networks on Kaladhungi Road, restaurants and retail in Nainital Road, and educational campuses throughout Haldwani and Kathgodam.',
    targetKeywords: [
      'website developer in haldwani',
      'software company in haldwani',
      'web design in haldwani',
      'hospital management software haldwani',
      'school erp haldwani',
      'restaurant software haldwani'
    ],
    clientTypes: ['Multi-Specialty Hospitals', 'Restaurants & Cafes', 'Hotels & Hill Resorts', 'Retail Showrooms'],
    deliveryMode: 'On-Site & Cloud'
  },
  {
    id: 'haridwar-roorkee',
    slug: 'haridwar-roorkee',
    cityName: 'Haridwar & Roorkee',
    region: 'Garhwal',
    tagline: 'Industrial IoT, Biometric Terminals & Enterprise Software in Haridwar & Roorkee',
    metaTitle: 'Web Development & IT Solutions in Haridwar & Roorkee | Quantum Mesh',
    metaDescription: 'Industrial software, biometric attendance systems, and website development for pharmaceutical, manufacturing, and academic institutions in Haridwar Sidcul and Roorkee.',
    popularServices: [
      'Factory Biometric Access Control & Turnstiles',
      'Pharmaceutical Batch & Quality Control ERPs',
      'College Administration Portals',
      'Custom Responsive Corporate Websites',
      'Inventory & Warehouse Supply Chain Trackers'
    ],
    localFocus: 'Serving pharmaceutical units in SIDCUL Haridwar, Bhagwanpur industrial belt, and prestigious engineering colleges in Roorkee.',
    targetKeywords: [
      'website developer in haridwar',
      'software company in haridwar',
      'biometric attendance haridwar',
      'web development roorkee',
      'it company roorkee'
    ],
    clientTypes: ['Pharma & Chemical Plants', 'Engineering Colleges', 'Hotels & Ashrams', 'Industrial Units'],
    deliveryMode: 'On-Site & Cloud'
  },
  {
    id: 'kashipur-pantnagar',
    slug: 'kashipur-pantnagar',
    cityName: 'Kashipur & Pantnagar',
    region: 'Kumaon',
    tagline: 'Agritech Traceability & Industrial Automation in Kashipur & Pantnagar',
    metaTitle: 'Software Company & Website Developer in Kashipur & Pantnagar | Quantum Mesh',
    metaDescription: 'Specialized Agritech seed lot traceability, industrial ERPs, and web development for manufacturing hubs in Kashipur and Pantnagar.',
    popularServices: [
      'Seed Management & Agritech QR Traceability',
      'Industrial Inventory & Sidcul ERP Systems',
      'Modern High-Converting Business Websites',
      'Biometric Time-Office Software',
      'Custom Billing & Mobile Order Apps'
    ],
    localFocus: 'Dedicated technical solutions for agriculture seed breeders, agricultural universities, packaging industries, and manufacturing plants.',
    targetKeywords: [
      'software company in kashipur',
      'website developer kashipur',
      'seed management software uttarakhand',
      'pantnagar it company'
    ],
    clientTypes: ['Seed Producers & Agritech', 'Auto Ancillary Factories', 'Packaging Units', 'Commercial Firms'],
    deliveryMode: 'On-Site & Cloud'
  },
  {
    id: 'rishikesh-ramnagar',
    slug: 'rishikesh-ramnagar',
    cityName: 'Rishikesh & Ramnagar',
    region: 'Garhwal',
    tagline: 'Hospitality Software, Resort Portals & Tourism Apps in Rishikesh & Corbett',
    metaTitle: 'Web Development & Hospitality Software in Rishikesh & Ramnagar | Quantum Mesh',
    metaDescription: 'Website developer and software provider for luxury resorts, safari lodges, yoga ashrams, and adventure tourism businesses in Rishikesh and Jim Corbett Ramnagar.',
    popularServices: [
      'Resort & Jungle Lodge Booking Engines',
      'Restaurant POS & Table QR Ordering (Servora)',
      'Yoga & Wellness Retreat Management Platforms',
      'Safari & Activity Booking Systems',
      'Multi-Language Tourism Websites'
    ],
    localFocus: 'Tailored for luxury hospitality providers in Tapovan, Shivpuri, and Corbett National Park zone.',
    targetKeywords: [
      'website developer in rishikesh',
      'resort software uttarakhand',
      'web design ramnagar',
      'hotel management system rishikesh'
    ],
    clientTypes: ['Boutique Resorts', 'Yoga & Wellness Centers', 'Safari Operators', 'Fine Dining Cafes'],
    deliveryMode: 'On-Site & Cloud'
  },
  {
    id: 'kichha-sitarganj',
    slug: 'kichha-sitarganj-khatima',
    cityName: 'Kichha, Sitarganj & Khatima',
    region: 'Kumaon',
    tagline: 'Mill ERPs, Warehouse Solutions & Business Websites in U.S. Nagar',
    metaTitle: 'Software & Website Developer in Kichha, Sitarganj & Khatima | Quantum Mesh',
    metaDescription: 'Local software development, rice mill management, and biometric time-tracking systems for agro-industries in Kichha, Eldeco Sidcul Sitarganj, and Khatima.',
    popularServices: [
      'Rice Mill & Agro-Processing ERPs',
      'Factory Biometric Punch Attendance',
      'Wholesale Inventory & Invoicing Portals',
      'Commercial Business Websites',
      'GPS Fleet Tracking for Transport Logistics'
    ],
    localFocus: 'On-site technical support for industrial units across Eldeco Sidcul Sitarganj and agro-processing hubs along NH-74.',
    targetKeywords: [
      'software company in sitarganj',
      'website developer kichha',
      'biometric machine sitarganj',
      'web development khatima'
    ],
    clientTypes: ['Agro Processors', 'Eldeco Sidcul Units', 'Transport Transporters', 'Distributors'],
    deliveryMode: 'On-Site & Cloud'
  },
  {
    id: 'all-india',
    slug: 'pan-india',
    cityName: 'Pan-India Enterprise Delivery',
    region: 'National',
    tagline: 'Scalable Cloud Platforms, Agentic AI & Custom SaaS Across India',
    metaTitle: 'Custom Software Development Company in India | Quantum Mesh',
    metaDescription: 'Partner with Quantum Mesh for enterprise software engineering across Delhi NCR, Bengaluru, Mumbai, Pune, and Hyderabad. Agentic AI, multi-cloud Kubernetes, and turnkey B2B SaaS.',
    popularServices: [
      'Autonomous Agentic AI & Multi-Agent Graphs',
      'Multi-Cloud Kubernetes Architecture (AWS & Azure)',
      'Enterprise SaaS Development (React 19 & Go)',
      'Private LLM Hosting & Vector Search RAG',
      'Custom ERP & Legacy Digital Modernization'
    ],
    localFocus: 'Serving funded technology scale-ups, national hospital chains, and educational conglomerates nationwide.',
    targetKeywords: [
      'custom software development company india',
      'agentic ai solutions india',
      'saas development company india',
      'cloud devops consultants india',
      'enterprise web app developers'
    ],
    clientTypes: ['Funded Tech Startups', 'Healthcare Networks', 'National School Chains', 'Government Bodies'],
    deliveryMode: 'Cloud & Remote'
  }
];
