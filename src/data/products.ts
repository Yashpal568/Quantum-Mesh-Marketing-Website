import type { Product } from '../types';

export const products: Product[] = [
  {
    id: 'hms',
    slug: 'hms',
    name: 'Hospital Management System (HMS)',
    shortName: 'HMS',
    code: 'HMS',
    category: 'Healthcare',
    description: 'Complete solution for hospitals and healthcare institutions.',
    longDescription: 'An enterprise healthcare platform uniting patient records, multi-specialty OPD/IPD workflows, diagnostic laboratory integration, automated billing, and smart pharmacy inventory.',
    iconName: 'Building2',
    badge: 'Healthcare OS',
    image: '/assets/generated/product-hms.jpg',
    theme: {
      bg: 'bg-[#F0F7FF]',
      border: 'border-[#D8EAFF]',
      accent: 'text-[#2563EB]',
      tagBg: 'bg-[#DBEAFE]',
      textAccent: '#2563EB',
      gradient: 'from-blue-500 to-indigo-600',
    },
    features: [
      'Patient electronic health records (EHR)',
      'Multi-doctor appointment scheduling',
      'OPD/IPD admission & bed management',
      'Diagnostic laboratory HL7/FHIR sync',
      'Automated insurance & cashless billing',
      'Smart pharmacy inventory with batch alerts',
      'Staff shift rosters & biometric punches',
      'Executive analytics & revenue dashboards'
    ],
    metrics: [
      { label: 'OPD Queue Reduction', value: '65%' },
      { label: 'Billing Processing Time', value: '< 2 mins' },
      { label: 'Pharmacy Stock Accuracy', value: '99.8%' },
      { label: 'HIPAA & ABDM Compliance', value: '100% Ready' }
    ],
    benefits: [
      'Eliminate paper records with unified electronic health records (EHR) accessible across departments.',
      'Real-time bed availability tracking and seamless operation theater (OT) scheduling.',
      'Instant insurance claim and cashless billing reconciliations with statutory audit logs.',
      'Automated expiry alerts, drug interaction warnings, and bulk inventory procurement for pharmacies.',
      'Integrated patient SMS/WhatsApp reminders for upcoming consultations and lab results.'
    ],
    modules: [
      {
        title: 'OPD & Patient Triage',
        desc: 'Fast digital token generation, doctor queue displays, vital sign recordings, and chief complaint logs.',
        highlights: ['Barcode / QR token issuance', 'Digital queue status TV screens', 'Doctor consultation queue prioritization']
      },
      {
        title: 'Electronic Health Records (EHR)',
        desc: 'Comprehensive patient medical history, allergies, diagnostic scans, past prescriptions, and physician notes.',
        highlights: ['ICD-10 clinical coding', 'Digital signature prescriptions', 'Encrypted lab report attachments']
      },
      {
        title: 'IPD & Bed Allocation',
        desc: 'Interactive ward visualizer, nurse monitoring stations, dietary charts, and seamless discharge workflows.',
        highlights: ['Visual bed occupancy map', 'Nurse medication charts (eMAR)', 'Automated discharge summary generator']
      },
      {
        title: 'Pharmacy & Stock Ledger',
        desc: 'Real-time drug dispensing tied directly to doctor prescriptions with automated reorder thresholds.',
        highlights: ['Batch number & expiry monitoring', 'Generic medicine substitute suggestions', 'One-click supplier purchase orders']
      },
      {
        title: 'Billing & Cashless TPA',
        desc: 'Transparent multi-department billing with consolidated invoicing, package pricing, and insurance claims.',
        highlights: ['Cashless insurance TPA portal', 'GST statutory compliance', 'Integrated multi-gateway payment links']
      }
    ],
    workflow: [
      { step: '01', title: 'Patient Registration', desc: 'Instant digital check-in with national health ID or mobile verification.' },
      { step: '02', title: 'Triage & Consultation', desc: 'Doctors access medical history and prescribe with digital signatures.' },
      { step: '03', title: 'Pharmacy & Lab Orders', desc: 'Automatic routing of lab requests and pharmacy prescriptions.' },
      { step: '04', title: 'Billing & Discharge', desc: 'Consolidated one-click invoice generation with multi-gateway payments.' }
    ],
    faqs: [
      {
        question: 'Can HMS be deployed on local hospital servers or cloud?',
        answer: 'Both deployment options are fully supported. We provide local on-premise deployments with automated background cloud backups or high-availability cloud hosting on AWS/Azure with zero local server maintenance.'
      },
      {
        question: 'Is the platform compliant with Indian ABDM (Ayushman Bharat Digital Mission)?',
        answer: 'Yes, Quantum Mesh HMS is engineered to adhere to ABDM guidelines, featuring ABHA creation, FHIR medical records linkage, and HL7 compliant diagnostic device integrations.'
      },
      {
        question: 'How does data migration from our existing software work?',
        answer: 'Our dedicated healthcare data engineering team handles the complete migration of legacy patient records, past prescriptions, and inventory ledgers within 48 to 72 hours without downtime.'
      }
    ],
    techStack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'HL7/FHIR Protocol', 'Docker'],
    mockupType: 'hms'
  },
  {
    id: 'vms',
    slug: 'vms',
    name: 'GateSphere — Enterprise Gate Security & Visitor Management System',
    shortName: 'GateSphere',
    code: 'GateSphere',
    category: 'Enterprise',
    description: 'Touchless QR gate check-in, real-time employee approval alerts, and digital pass verification.',
    longDescription: 'GateSphere is an enterprise-grade, touchless Visitor Management & Security Intelligence SaaS platform built by Quantum Mesh. It replaces outdated paper gate registers at corporate headquarters, manufacturing plants, and residential complexes with a seamless digital check-in workflow, real-time employee approval alerts, and digital gate pass verification.',
    headline: 'Next-Gen Enterprise Gate Security & Touchless Visitor Management.',
    subheadline: 'Replace vulnerable paper gate registers with touchless mobile QR check-ins, sub-15s host approval alerts, digital badge verification, and multi-gate intelligence.',
    socialProof: 'Trusted by corporate headquarters, industrial manufacturing plants, and residential complexes.',
    liveUrl: 'https://gatesphere.quantumesh.in/',
    iconName: 'ShieldCheck',
    badge: 'Security Intelligence SaaS',
    image: '/assets/generated/product-vms.jpg',
    theme: {
      bg: 'bg-[#F0FDF4]',
      border: 'border-[#DCFCE7]',
      accent: 'text-[#16A34A]',
      tagBg: 'bg-[#DCFCE7]',
      textAccent: '#16A34A',
      gradient: 'from-emerald-500 to-green-600',
    },
    pillars: [
      {
        icon: 'Zap',
        title: 'Touchless QR Gate Clearance',
        quote: 'Process 500+ gate check-ins per minute with zero app download.',
        points: [
          'Visitors scan a unique dynamic QR code at the facility gate using their mobile browser—no app download required.',
          'Eliminates physical contact, paper registers, and congested entry gate queues.',
          'Generates encrypted digital gate passes valid strictly for approved visit durations.'
        ]
      },
      {
        icon: 'ChefHat',
        title: 'Instant Host Approvals',
        quote: 'Approve or decline visitor entry in under 15 seconds.',
        points: [
          'Security guards and employee hosts receive push notifications and instant WebSocket alerts to approve or reject visitors in under 15 seconds.',
          'View visitor selfie photo, designated vehicle number, and meeting purpose before granting entry.',
          'Eliminates phone calls and security intercom delays between front gate and host desks.'
        ]
      },
      {
        icon: 'CreditCard',
        title: 'Digital Pass & Thermal Print Verification',
        quote: 'Zero-Trust facility security with 100% auditable digital logs.',
        points: [
          'Approved visitors receive a digital entry badge on their phone containing a QR clearance code, valid for their specified visit duration.',
          'Supports 1-click thermal badge printing on standard 58mm & 80mm security printers at the security booth.',
          'Multi-gate support with real-time exit scans that calculate overstays and maintain 100% forensic security compliance.'
        ]
      }
    ],
    featureMatrix: [
      {
        feature: '🌐 Marketing & Demo Portal',
        benefit: 'Modern Next.js 15 product landing page with interactive workflow demo and lead capture at gatesphere.quantumesh.in.'
      },
      {
        feature: '📱 Touchless Check-In Portal',
        benefit: 'Mobile-optimized guest check-in portal generating instant digital entry passes at visitors-check-in.quantumesh.in.'
      },
      {
        feature: '📲 Guard & Employee Mobile App',
        benefit: 'React Native (Expo) app published to Google Play Store with fast QR scanning and instant host approval push alerts.'
      },
      {
        feature: '🖥️ Admin Control Panel',
        benefit: 'Enterprise dashboard tracking real-time gate clearances, peak visitor hours, multi-tenant analytics, and CSV audit logs.'
      },
      {
        feature: '⚡ High-Availability Backend Core',
        benefit: 'Node.js, MongoDB, and Socket.io engine delivering sub-50ms WebSocket sync, automated data archiving, and RBAC security.'
      }
    ],
    pricingPlans: [
      {
        name: 'Starter Facility',
        price: '₹1,499',
        period: '/ month',
        description: 'Ideal for commercial office branches and small gated campuses.',
        features: [
          'Up to 2 Active Entry Gates',
          'Touchless Mobile QR Check-In',
          'Instant Host WhatsApp & SMS Alerts',
          'Digital Mobile Entry Passes',
          '30-Day Auditable Security Logs'
        ]
      },
      {
        name: 'Enterprise Campus',
        price: '₹3,499',
        period: '/ month',
        popular: true,
        description: 'Built for corporate headquarters, manufacturing plants, and hospitals.',
        features: [
          'Unlimited Entry & Exit Gates',
          'Android Security Guard Scanner App (Google Play)',
          'Live WebSocket Approval Sync (<15s)',
          '1-Click Thermal Badge Printing (58mm/80mm)',
          'Overstay & Blacklist Breach Alerts',
          '24/7 Priority Emergency Support'
        ]
      },
      {
        name: 'Industrial Multi-Plant',
        price: '₹6,999',
        period: '/ month',
        description: 'For multi-location factories, industrial parks, and smart cities.',
        features: [
          'Multi-Facility Central Security Command',
          'Automatic Turnstile & Boom Barrier Relay Sync',
          'Custom White-Label Branding & Domain',
          'Dedicated Security Account Manager',
          '99.9% High-Availability Uptime SLA'
        ]
      }
    ],
    features: [
      'Touchless dynamic QR gate clearance (<1s mobile web load)',
      'Instant host approval alerts via push notifications & WebSockets (<15s)',
      'Digital entry pass with QR code and live countdown timer',
      '1-click thermal badge printing (58mm & 80mm security printers)',
      'Security guard scanner mobile app (Android Google Play release)',
      'Multi-gate support with cross-gate entry/exit reconciliation',
      'Real-time facility occupancy counter & emergency roll-call list',
      'Zero-Trust encryption with automated daily audit log archiving'
    ],
    metrics: [
      { label: 'Gate Wait Time Cut', value: '-80%' },
      { label: 'Check-In Throughput', value: '500+/min' },
      { label: 'Host Approval Time', value: '< 15s' },
      { label: 'System Uptime SLA', value: '99.9%' }
    ],
    benefits: [
      'Eliminate paper gate registers completely, preventing confidential client data leaks and visitor information theft.',
      'Cut vehicle and visitor entry wait times by 80% with instantaneous mobile QR scanning and automated host alerts.',
      'Maintain 100% forensic security compliance with tamper-proof digital logs, photo captures, and overstay tracking.',
      'Arm security personnel with a native Android scanner app synced in real time to employee desks across all buildings.'
    ],
    modules: [
      {
        title: 'Touchless QR Gate Clearance',
        desc: 'Visitors scan dynamic entrance QR codes with their smartphone browser. No app install needed.',
        highlights: ['Runs on any mobile browser (Safari, Chrome)', 'Instant selfie & ID upload', 'Configurable digital NDA & safety protocol']
      },
      {
        title: 'Instant Host Approvals & Guard Scanner',
        desc: 'Real-time WebSocket alerts ping employee hosts on their phones and laptops for instant 1-tap approvals.',
        highlights: ['Sub-15 second approval turnaround', 'Android Guard App with camera barcode reader', 'Slack, Teams & SMS fallback channels']
      },
      {
        title: 'Digital Pass & Thermal Badge Printing',
        desc: 'Visitors receive digital phone passes with animated verification rings or printable thermal passes.',
        highlights: ['Compatible with Brother & Zebra 58mm/80mm', 'Time-expiring visitor security badges', 'Vehicle license number recorded on badge']
      },
      {
        title: 'Multi-Gate Real-Time Security Intelligence',
        desc: 'Enterprise command dashboard reporting real-time building occupancy, peak visitor volume, and emergency muster.',
        highlights: ['Cross-gate entry & exit tracking', 'Real-time blacklist alerts', '1-click CSV audit log export']
      }
    ],
    workflow: [
      { step: '01', title: 'Gate QR Scan', desc: 'Visitor arrives at facility and scans dynamic entrance QR code on their smartphone in seconds.' },
      { step: '02', title: 'Host Instant Ping', desc: 'Employee host receives instant push and WebSocket alert with visitor details and photo.' },
      { step: '03', title: 'Sub-15s Approval', desc: 'Host approves entry with 1 tap, automatically generating an encrypted digital gate pass.' },
      { step: '04', title: 'Guard Clearance & Exit', desc: 'Guard scans digital badge to grant entry; automated scan at exit checks out and prevents overstays.' }
    ],
    faqs: [
      {
        question: 'Do visitors need to download an application to check in?',
        answer: 'No! GateSphere operates touchlessly via mobile web browsers. Visitors simply scan the dynamic gate QR code on arrival and their pass generates in seconds.'
      },
      {
        question: 'How do security guards scan and verify visitor passes?',
        answer: 'Security guards use the GateSphere Android App (available on Google Play Store) or any tablet browser to scan the visitor\'s digital QR pass and verify live approval status.'
      },
      {
        question: 'How does GateSphere handle multi-gate enterprise complexes?',
        answer: 'GateSphere synchronizes all entry and exit gates in real time via WebSockets. A visitor can enter through Gate 1 and check out via Gate 4 with immediate perimeter occupancy recalculation.'
      },
      {
        question: 'Does GateSphere eliminate security risks associated with physical paper logs?',
        answer: 'Yes! Paper registers leak phone numbers, company names, and visitor details to anyone glancing at the reception desk. GateSphere encrypts all visitor data, enforces strict Role-Based Access Control (RBAC), and provides tamper-proof audit trails.'
      }
    ],
    techStack: ['Next.js 15', 'React Native (Expo)', 'Node.js', 'MongoDB', 'Socket.io', 'Tailwind CSS', 'Recharts'],
    mockupType: 'vms'
  },
  {
    id: 'ums',
    slug: 'ums',
    name: 'University Management System (UMS)',
    shortName: 'UMS',
    code: 'UMS',
    category: 'Education',
    description: 'Manage academic, examination, admissions and more.',
    longDescription: 'Comprehensive campus ERP for universities and colleges streamlining student lifecycle from online admissions, curriculum planning, and biometric attendance to semester examinations and fee collections.',
    iconName: 'GraduationCap',
    badge: 'Campus ERP',
    image: '/assets/generated/product-ums.jpg',
    theme: {
      bg: 'bg-[#FAF5FF]',
      border: 'border-[#F3E8FF]',
      accent: 'text-[#9333EA]',
      tagBg: 'bg-[#F3E8FF]',
      textAccent: '#9333EA',
      gradient: 'from-purple-500 to-violet-600',
    },
    features: [
      'Online admissions & document verification',
      'Student profile & lifecycle management',
      'Dynamic timetable & classroom allocator',
      'Controller of Examinations (COE) portal',
      'Biometric & RFID student attendance',
      'Smart fee engine with installment tracking',
      'Faculty workload & research management',
      'Accreditation & NAAC/NIRF reporting'
    ],
    metrics: [
      { label: 'Admission Processing', value: '4x Faster' },
      { label: 'Fee Reconciliation', value: '100% Automated' },
      { label: 'Exam Result Publishing', value: 'Same Day' },
      { label: 'Faculty Time Saved', value: '35%' }
    ],
    benefits: [
      'End-to-end paperless admissions with document verification, merit list generation, and seat allocation.',
      'Smart fee engine supporting installments, scholarships, fine calculation, and automated bank reconciliation.',
      'Configurable grading scales, exam hall ticket generation, question paper routing, and digital marks entry.',
      'Dedicated mobile-friendly web portals for students, parents, faculty members, and university chancellors.'
    ],
    modules: [
      {
        title: 'Admissions & Merit Allocation',
        desc: 'Custom application forms, entrance test score processing, quota reservation rules, and instant fee confirmation.',
        highlights: ['Document upload & verification portal', 'Automated merit ranking engine', 'Integrated payment gateway']
      },
      {
        title: 'Academics & Timetable Matrix',
        desc: 'Conflict-free classroom scheduling across lecture halls, labs, faculty availability, and elective course selections.',
        highlights: ['Choice Based Credit System (CBCS)', 'Syllabus and lesson plan tracking', 'Student elective course registration']
      },
      {
        title: 'Examination & Grade Publishing',
        desc: 'End-to-end management from exam schedule announcement and hall tickets to barcode paper evaluation and transcripts.',
        highlights: ['Hall ticket generation with seat mapping', 'GPA / CGPA automated calculation', 'Digital degree certificate issuance']
      },
      {
        title: 'Campus Fee & Financial Ledger',
        desc: 'Multi-head fee collection for tuition, hostel, transport, and examination with real-time Tally and ERP synchronization.',
        highlights: ['Automated fee reminder alerts', 'Scholarship & concession adjustments', 'Instant PDF digital receipts']
      }
    ],
    workflow: [
      { step: '01', title: 'Digital Admissions', desc: 'Prospects apply online, submit documents, and pay fees seamlessly.' },
      { step: '02', title: 'Academic Scheduling', desc: 'Department heads define courses, timetables, and faculty allocations.' },
      { step: '03', title: 'Attendance & Midterms', desc: 'Biometric and app-based attendance paired with continuous assessments.' },
      { step: '04', title: 'Controller of Exams', desc: 'End-to-end exam creation, hall tickets, marking, and degree printing.' }
    ],
    faqs: [
      {
        question: 'Does UMS support Choice Based Credit System (CBCS)?',
        answer: 'Yes, our academic curriculum engine fully supports UGC-mandated CBCS frameworks with core, elective, and skill-enhancement course credits.'
      },
      {
        question: 'Can it scale to large multi-campus universities?',
        answer: 'UMS is built on a multi-tenant cloud microservices architecture tested to support over 50,000 concurrent students and faculty across multiple regional campuses.'
      }
    ],
    techStack: ['React', 'TypeScript', 'Node.js', 'GraphQL', 'PostgreSQL', 'Redis'],
    mockupType: 'ums'
  },
  {
    id: 'lms',
    slug: 'lms',
    name: 'Learning Management System (LMS)',
    shortName: 'LMS',
    code: 'LMS',
    category: 'Education',
    description: 'Engaging and flexible e-learning platform for modern education.',
    longDescription: 'Intuitive modern digital academy platform featuring interactive video lessons, automated assignment grading, live classroom integration, proctored quizzes, and verifiable credential issuance.',
    iconName: 'BookOpen',
    badge: 'Digital Academy',
    image: '/assets/generated/product-lms.jpg',
    theme: {
      bg: 'bg-[#FFF7ED]',
      border: 'border-[#FFEDD5]',
      accent: 'text-[#EA580C]',
      tagBg: 'bg-[#FFEDD5]',
      textAccent: '#EA580C',
      gradient: 'from-orange-500 to-amber-600',
    },
    features: [
      'Interactive video lesson player with HLS streaming',
      'Automated assignment rubrics & grading',
      'Live interactive classroom & Zoom bridge',
      'Proctored quizzes & timed assessments',
      'Gamified milestones & achievement badges',
      'Discussion forums & peer collaboration',
      'Tamper-proof verifiable digital certificates',
      'Student drop-off & engagement heatmaps'
    ],
    metrics: [
      { label: 'Course Completion Rate', value: '78%' },
      { label: 'Video Streaming Latency', value: '< 200ms' },
      { label: 'Automated Grading Time', value: 'Instant' },
      { label: 'Active Student Engagement', value: '+45%' }
    ],
    benefits: [
      'Modular curriculum builder supporting high-definition video, SCORM packages, PDFs, and live interactive webinars.',
      'Gamified progress bars, milestone badges, and automated certificate generation upon course completion.',
      'Built-in peer discussions, instructor feedback channels, and file turn-ins with plagiarism checks.',
      'Deep learning analytics highlighting student drop-off points, quiz bottlenecks, and topic mastery.'
    ],
    modules: [
      {
        title: 'Video Player & Content Engine',
        desc: 'Encrypted adaptive streaming that adjusts playback quality dynamically with bookmarking and downloadable resources.',
        highlights: ['Variable playback speed (0.5x to 2x)', 'Time-stamped discussion comments', 'DRM protection preventing piracy']
      },
      {
        title: 'Automated Quizzes & Grading',
        desc: 'Configurable assessments with multiple choice, coding sandboxes, short answers, and randomized question banks.',
        highlights: ['Time limits and attempt restrictions', 'Automated instant score breakdown', 'Instructor feedback annotations']
      },
      {
        title: 'Live Classroom Bridges',
        desc: 'One-click launch of live interactive video classes with screen sharing, breakout rooms, and automated attendance logs.',
        highlights: ['Zoom, Google Meet, and WebRTC support', 'Cloud recording playback integration', 'Live in-session polls and Q&A']
      },
      {
        title: 'Verifiable Digital Credentials',
        desc: 'Custom branded certificates automatically generated upon meeting completion criteria with verifiable QR authentication.',
        highlights: ['Unique certificate verification URL', 'LinkedIn one-click credential share', 'Exportable high-res PDF badge']
      }
    ],
    workflow: [
      { step: '01', title: 'Course Creation', desc: 'Instructors structure modules, upload multimedia, and configure milestones.' },
      { step: '02', title: 'Self-Paced Learning', desc: 'Learners interact with bite-sized lessons with cross-device sync.' },
      { step: '03', title: 'Quiz & Evaluations', desc: 'Automated multiple-choice checks and rubrics-based project grading.' },
      { step: '04', title: 'Verified Certification', desc: 'Instant downloadable certificates with verifiable QR authenticity.' }
    ],
    faqs: [
      {
        question: 'How do you prevent unauthorized video downloads?',
        answer: 'Videos are encoded via HTTP Live Streaming (HLS) with rotating token authentication and encrypted segments, preventing third-party download plugins from capturing raw files.'
      },
      {
        question: 'Does the platform work on low-bandwidth connections?',
        answer: 'Yes, adaptive bitrate streaming automatically reduces resolution for students on 3G/4G networks without buffering.'
      }
    ],
    techStack: ['React', 'Vite', 'Node.js', 'HLS Video Streaming', 'MongoDB', 'Tailwind'],
    mockupType: 'lms'
  },
  {
    id: 'restaurant-saas',
    slug: 'restaurant-saas',
    name: 'Servora — Restaurant OS & QR Dine-In',
    shortName: 'Servora',
    code: 'Servora',
    category: 'Restaurant',
    description: 'Contactless QR Menu, Live Kitchen Display (KDS), and Smart GST Billing Platform.',
    longDescription: 'Streamline table turnover, eliminate ordering delays, and boost profit margins with Servora — the all-in-one Contactless QR Menu, Live Kitchen Display (KDS), and Smart GST Billing Platform.',
    headline: 'The Operating System for Modern Restaurants.',
    subheadline: 'Streamline table turnover, eliminate ordering delays, and boost profit margins with Servora — the all-in-one Contactless QR Menu, Live Kitchen Display (KDS), and Smart GST Billing Platform.',
    socialProof: 'Trusted by modern cafes, fine dining bistros, multi-outlet food courts, and cloud kitchens.',
    liveUrl: 'https://servora.quantumesh.in/',
    iconName: 'UtensilsCrossed',
    badge: 'Hospitality Cloud OS',
    image: '/assets/generated/product-restaurant.jpg',
    theme: {
      bg: 'bg-[#FDF2F8]',
      border: 'border-[#FCE7F3]',
      accent: 'text-[#DB2777]',
      tagBg: 'bg-[#FCE7F3]',
      textAccent: '#DB2777',
      gradient: 'from-pink-500 to-rose-600',
    },
    pillars: [
      {
        icon: 'Zap',
        title: 'Ultra-Fast Contactless QR Ordering',
        quote: 'Turn tables 35% faster with zero waiter dependency.',
        points: [
          'Guests simply scan a sleek table QR code to view high-definition culinary menus.',
          'Seamless vegetarian/non-vegetarian filters, portion variants (Half/Full), and live dish customization.',
          'No app download required — loads instantly in any mobile browser in under 1 second.'
        ]
      },
      {
        icon: 'ChefHat',
        title: 'Live Kitchen Display System (KDS)',
        quote: 'Say goodbye to lost paper tickets and kitchen chaos.',
        points: [
          'Orders placed by guests or staff beam straight to kitchen displays with real-time sound chimes.',
          'Color-coded order tracking (Pending → Cooking → Ready → Served) keeps chefs and captains in perfect sync.',
          'Eliminates order mix-ups and reduces food prep wait times.'
        ]
      },
      {
        icon: 'CreditCard',
        title: 'Smart POS & Instant Split-Billing Engine',
        quote: 'Collect payments in seconds with zero gateway commissions.',
        points: [
          'Dynamic UPI QR Codes: Customers scan and pay instantly via Google Pay, PhonePe, or Paytm with automatic payment verification.',
          'Split Bills Easily: Split evenly across friends, split by custom amounts, or split by individual dishes.',
          'Compliant GST Invoicing: Automated 5% / 18% tax calculation, round-off handling, and 1-click thermal receipt printing (80mm & 58mm).'
        ]
      }
    ],
    featureMatrix: [
      {
        feature: '🎨 QR Template Studio',
        benefit: 'Design and download custom branded acrylic QR table standees with WiFi login details in seconds.'
      },
      {
        feature: '📊 Live Table Status Grid',
        benefit: 'Monitor occupied, available, and billing tables in real-time across your entire dining floor.'
      },
      {
        feature: '📦 1-Click Menu & Inventory',
        benefit: 'Instantly toggle out-of-stock items, bulk-upload dishes via CSV, and adjust pricing in real-time.'
      },
      {
        feature: '📈 Executive Analytics',
        benefit: 'Track daily revenue, top-selling dishes, peak dining hours, and monthly sales growth with visual dashboards.'
      },
      {
        feature: '🔒 Multi-Tenant Security',
        benefit: 'Cloud-backed data security with daily automated backups and encrypted staff access control.'
      }
    ],
    pricingPlans: [
      {
        name: 'Starter Plan',
        price: '₹999',
        period: '/ month',
        description: 'Ideal for small cafes, bakeries, and quick-service kiosks.',
        features: [
          'Up to 10 Active Tables',
          'Digital QR Contactless Menu',
          'Real-time Order Management',
          'Standard UPI QR Billing',
          'Email Support'
        ]
      },
      {
        name: 'Professional Plan',
        price: '₹2,499',
        period: '/ month',
        popular: true,
        description: 'Built for busy casual dining, bistros, and high-volume restaurants.',
        features: [
          'Unlimited Tables & Diners',
          'Real-time Kitchen Display System (KDS)',
          'Advanced Multi-Payer Split Billing & GST Invoices',
          'QR Template Studio with Bulk Standee Export',
          'Live Sales Analytics & Inventory Manager',
          '24/7 Priority Support'
        ]
      },
      {
        name: 'Enterprise Plan',
        price: '₹4,999',
        period: '/ month',
        description: 'For multi-branch restaurants, franchises, and luxury dining spaces.',
        features: [
          'Multi-Branch & Chain Management',
          'Custom Domain & White-Label Branding',
          'Dedicated Account Manager & VIP Onboarding',
          'Custom ERP / Accounting Integrations',
          '99.9% Uptime SLA'
        ]
      }
    ],
    features: [
      'Contactless table QR code digital menus (loads < 1 sec)',
      'Live Kitchen Display System (KDS) with sound chimes',
      'Dynamic UPI QR code billing with automatic payment verification',
      'Flexible split-billing (equal, custom amounts, or by dish)',
      'Compliant GST invoicing with 80mm & 58mm thermal printing',
      'Live floor table status grid & seating occupancy',
      'Instant 1-click out-of-stock item toggling',
      'QR Template Studio for branded acrylic table standees'
    ],
    metrics: [
      { label: 'Table Turnover Speed', value: '+35%' },
      { label: 'Payment Commission', value: '0%' },
      { label: 'Menu Load Speed', value: '< 1 sec' },
      { label: 'Order to Kitchen Delay', value: '0 ms' }
    ],
    benefits: [
      'Turn tables 35% faster with zero waiter dependency, letting guests scan, customize, and order instantly.',
      'Eliminate kitchen chaos and lost paper tickets with real-time color-coded KDS station displays and chimes.',
      'Zero gateway commissions (0%) — collect customer payments directly into your bank via dynamic UPI QR codes.',
      'Automatic 5% and 18% GST calculation with instant split-bill capabilities and 1-click thermal receipt printing.'
    ],
    modules: [
      {
        title: 'Ultra-Fast Contactless QR Ordering',
        desc: 'Sleek acrylic QR standees loaded in mobile browsers in <1 second with zero app download required. Includes dietary filters and portion sizing.',
        highlights: ['Runs natively in Chrome/Safari (< 1s load)', 'Veg/Non-Veg filters & portion variants (Half/Full)', 'Live dish customization & cooking instructions']
      },
      {
        title: 'Live Kitchen Display System (KDS)',
        desc: 'Replaces lost paper tickets with color-coded live kitchen screens and alert chimes that keep chefs and captains in sync.',
        highlights: ['Sound chime on new order placement', 'Pending → Cooking → Ready → Served workflow', 'Eliminates order mix-ups and reduces kitchen delays']
      },
      {
        title: 'Smart POS & Instant Split Billing',
        desc: 'Rapid billing with dynamic UPI QR codes (GPay, PhonePe, Paytm), split billing by person or item, and 80mm/58mm GST thermal printing.',
        highlights: ['0% gateway commissions — direct bank UPI', 'Split bills evenly, custom amounts, or by dish', 'Automated 5% / 18% GST tax calculation']
      },
      {
        title: 'Executive Analytics & Live Table Grid',
        desc: 'Visual floor grid showing occupied and billing tables in real-time, coupled with peak dining hours and dish profitability metrics.',
        highlights: ['Live dining floor table occupancy', 'Top-selling dishes & revenue growth reports', '1-click out-of-stock toggle from smartphone']
      }
    ],
    workflow: [
      { step: '01', title: 'Table QR Scan', desc: 'Guests scan sleek table QR to view high-definition visual menu in <1s with zero app download.' },
      { step: '02', title: 'Instant KDS Routing', desc: 'Orders beam instantly to kitchen displays with real-time sound chimes and color-coded statuses.' },
      { step: '03', title: 'Fast Food Preparation', desc: 'Chefs update tickets (Pending → Cooking → Ready), reducing prep time and eliminating lost paper slips.' },
      { step: '04', title: 'Split Bill & UPI Pay', desc: 'Guests split bills easily and pay via dynamic UPI QR code (0% commission) with instant GST receipt.' }
    ],
    faqs: [
      {
        question: 'Do customers need to download an application to order?',
        answer: 'No! Servora runs natively on any smartphone browser (Chrome, Safari, etc.). Customers simply scan the QR code and the live menu opens in less than a second.'
      },
      {
        question: 'Does Servora take a commission on customer orders?',
        answer: 'Zero percent (0%). You keep 100% of your earnings. Payments go directly to your restaurant\'s bank account via direct UPI or cash.'
      },
      {
        question: 'Can I print traditional paper receipts?',
        answer: 'Yes! Servora generates formatted GST tax invoices that print seamlessly on any standard 58mm or 80mm thermal receipt printer.'
      },
      {
        question: 'How do I change menu item prices or mark items out of stock?',
        answer: 'You can toggle item availability or update prices from your phone or dashboard in 1 click. The customer\'s digital menu updates immediately in real time.'
      }
    ],
    techStack: ['React', 'WebSockets', 'PWA', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
    mockupType: 'restaurant'
  },
  {
    id: 'school-management-saas',
    slug: 'school-management-saas',
    name: 'School Management System SaaS (Rent / On-Demand)',
    shortName: 'School ERP',
    code: 'SCH-ERP',
    category: 'Education',
    description: 'Monthly rental subscription or custom ERP for modern schools.',
    longDescription: 'A complete modern School ERP available on flexible monthly rent or as a custom-built solution. Covers online student admissions, digital fee collection counter, live GPS school bus tracking, dynamic timetable generation, report cards, teacher grading, and dedicated parent mobile apps.',
    iconName: 'GraduationCap',
    badge: 'EdTech SaaS',
    image: '/assets/generated/school-management.jpg',
    theme: {
      bg: 'bg-[#FFFBEB]',
      border: 'border-[#FEF3C7]',
      accent: 'text-[#D97706]',
      tagBg: 'bg-[#FEF3C7]',
      textAccent: '#D97706',
      gradient: 'from-amber-500 to-orange-600',
    },
    features: [
      'Student admissions & digital fee counter',
      'Live GPS school bus tracking with parent alerts',
      'Digital attendance & dynamic timetable generation',
      'Examination report cards & teacher grading',
      'White-labeled parent & teacher mobile apps (Android & iOS)',
      'Library & digital book borrowing catalog',
      'SMS & WhatsApp automatic fee reminders',
      'Flexible monthly rent or custom on-demand deployment'
    ],
    metrics: [
      { label: 'Monthly Fee Collection', value: '3x Faster' },
      { label: 'Bus Route Tracking Accuracy', value: '100% Real-Time' },
      { label: 'Parent App Adoption', value: '96%' },
      { label: 'Setup & Onboarding Time', value: '< 24 Hours' }
    ],
    benefits: [
      'Flexible monthly rent-based subscription model—schools do not need large upfront capital investment.',
      'Parents receive live GPS notifications when the school bus is 5 minutes from their designated pickup stop.',
      'Instant fee receipts generated online with automated WhatsApp payment links and installment schedules.',
      'Zero paperwork: automated report card generation with CBSE/ICSE grading formulas and digital signatures.'
    ],
    modules: [
      {
        title: 'Student Admissions & Digital Fee Counter',
        desc: 'Online enrollment forms, automated student roll allocation, multi-head fee counter with receipt printing and bank reconciliation.',
        highlights: ['Online admission application portal', 'UPI / Card digital fee collection', 'Automated fee dues WhatsApp notifications']
      },
      {
        title: 'Live GPS School Bus Tracking',
        desc: 'Real-time telemetry from GPS units installed on school buses, providing parents and administration with live map tracking and geofence alerts.',
        highlights: ['Live interactive Google Maps route view', 'Speed alerts & driver behavior monitoring', '5-minute arrival proximity push alerts']
      },
      {
        title: 'Digital Attendance & Automated Timetable',
        desc: 'Classroom attendance via RFID cards or teacher tablets, combined with AI clash-free weekly timetable scheduling.',
        highlights: ['RFID / Biometric attendance sync', 'Automatic absent SMS alert to parents', 'Substitute teacher auto-allocation']
      },
      {
        title: 'Examinations, Grading & Report Cards',
        desc: 'Configurable term exams, grading rubrics, mark entry portals for teachers, and beautiful one-click printable report cards.',
        highlights: ['CBSE, ICSE, and State board templates', 'Teacher marks entry with validation checks', 'Downloadable parent digital report cards']
      },
      {
        title: 'White-Labeled Mobile Apps',
        desc: 'Branded Android and iOS apps with school logo for parents and teachers to check notices, homework, fee receipts, and bus tracking.',
        highlights: ['School branded mobile application', 'Instant digital homework & circular diary', 'Direct teacher-parent communication channel']
      }
    ],
    workflow: [
      { step: '01', title: 'Admissions & Setup', desc: 'Import student and staff rosters in bulk within minutes via CSV or Excel.' },
      { step: '02', title: 'Fee & Bus Mapping', desc: 'Configure fee structures and assign students to respective bus transport routes.' },
      { step: '03', title: 'Daily Operations', desc: 'Teachers take attendance and mark homework; parents track buses in real time.' },
      { step: '04', title: 'Exams & Reports', desc: 'Generate report cards, track fee collection analytics, and promote academic terms.' }
    ],
    faqs: [
      {
        question: 'How does the monthly rental subscription model work?',
        answer: 'Schools can subscribe on an affordable per-student monthly rent basis with zero upfront capital expenditure. Cloud hosting, security updates, and phone/onsite support are completely included.'
      },
      {
        question: 'Can schools deploy this as a custom on-premise solution instead?',
        answer: 'Yes, we also offer complete perpetual license deployments with custom source code deployment on private institutional servers if preferred.'
      },
      {
        question: 'How does the live GPS tracking integrate with buses?',
        answer: 'We provide plug-and-play GPS hardware units with 4G SIM cards that install into school buses in under 15 minutes, syncing directly to our cloud tracking server.'
      }
    ],
    techStack: ['React', 'React Native', 'Node.js', 'PostgreSQL', 'Google Maps API', 'Razorpay/Stripe'],
    mockupType: 'school'
  },
  {
    id: 'biometric-attendance',
    slug: 'biometric-attendance',
    name: 'Biometric Attendance & Access Ecosystem',
    shortName: 'Biometric OS',
    code: 'BIO-ECO',
    category: 'Enterprise',
    description: 'Hardware facial recognition & fingerprint terminals synced to cloud HRMS.',
    longDescription: 'Turn-key biometric ecosystem integrating edge AI dual-camera face recognition and optical fingerprint terminals with cloud HRMS roster scheduling, automated payroll, and overtime management.',
    iconName: 'Fingerprint',
    badge: 'Hardware + Cloud',
    image: '/assets/generated/biometric-ecosystem.jpg',
    theme: {
      bg: 'bg-[#F0FDF4]',
      border: 'border-[#DCFCE7]',
      accent: 'text-[#16A34A]',
      tagBg: 'bg-[#DCFCE7]',
      textAccent: '#16A34A',
      gradient: 'from-cyan-500 to-blue-600',
    },
    features: [
      'Dual-IR camera anti-spoofing facial recognition (<0.2s)',
      'High-durability optical fingerprint & RFID NFC scanning',
      'Real-time push sync via 4G SIM or Wi-Fi (<100ms)',
      'Multi-shift rotations, night shifts & overtime rules',
      'One-click automated payroll, leave approvals & Tally export',
      'Geo-fenced mobile punches for remote sales teams',
      'Door access controller relay for turnstiles and electromagnetic locks',
      'Centralized multi-branch monitoring console'
    ],
    metrics: [
      { label: 'Recognition Speed', value: '< 0.2s' },
      { label: 'Anti-Spoofing Accuracy', value: '99.9%' },
      { label: 'Cloud Sync Latency', value: '< 100ms' },
      { label: 'Monthly Payroll Time Saved', value: '85%' }
    ],
    benefits: [
      'Eliminate buddy punching and proxy attendance with 3D infrared depth-sensing facial verification.',
      'Instant cloud data push means HR and payroll managers see punches across all regional branches in real time.',
      'Seamless automated salary deduction and one-click Tally/ERP ledger export on month-end.',
      'Hardware and cloud warranty support with same-day engineer dispatch in Uttarakhand.'
    ],
    modules: [
      {
        title: 'Edge AI Biometric Terminals',
        desc: 'Industrial-grade dual camera terminals featuring anti-spoofing liveness detection and optical fingerprint sensor.',
        highlights: ['0.2 second recognition speed', 'Works in complete darkness (IR LED)', 'Offline storage up to 500,000 logs']
      },
      {
        title: 'Cloud HRMS & Roster Engine',
        desc: 'Automated shift rota planning supporting rotational shifts, grace periods, half-days, and customized overtime rules.',
        highlights: ['Automated late-coming deduction rules', 'Multi-level leave approval workflow', 'Department-wise roster calendar']
      },
      {
        title: 'Automated Payroll & Compliance',
        desc: 'One-click salary computation incorporating PF, ESI, TDS, professional tax, loan advances, and direct Tally XML export.',
        highlights: ['One-click monthly pay slip PDF generation', 'Tally & SAP ERP direct ledger sync', 'Statutory compliance tax reports']
      },
      {
        title: 'Geo-Fenced Mobile Punch App',
        desc: 'Field and remote staff can clock in using GPS geo-fenced selfie punches with real-time location validation.',
        highlights: ['GPS radius boundary enforcement', 'Selfie liveness check', 'Live field team route tracking']
      }
    ],
    workflow: [
      { step: '01', title: 'Hardware Deployment', desc: 'Terminals mounted and connected to power; 4G SIM or Wi-Fi enables cloud push.' },
      { step: '02', title: 'Staff Enrollment', desc: '10-second face and fingerprint enrollment directly at terminal or via admin portal.' },
      { step: '03', title: 'Real-Time Logging', desc: 'Punches sync to cloud in <100ms with instant shift and overtime calculation.' },
      { step: '04', title: 'Payroll Run', desc: 'Month-end salary computation generated in one click with bank payout files.' }
    ],
    faqs: [
      {
        question: 'Does the terminal work during internet outages?',
        answer: 'Yes, the terminals store up to 500,000 logs offline with battery backup. Once connectivity is restored, all stored punches automatically push to the cloud.'
      },
      {
        question: 'Can this control door access and turnstiles?',
        answer: 'Yes, all terminals include dry contact relay outputs for magnetic door locks, flap barriers, and security turnstiles.'
      }
    ],
    techStack: ['Embedded Linux', 'MQTT', 'WebSockets', 'React', 'Node.js', 'PostgreSQL'],
    mockupType: 'biometric'
  }
];
