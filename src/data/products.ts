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
    name: 'Visitor Management System (VMS)',
    shortName: 'VMS',
    code: 'VMS',
    category: 'Enterprise',
    description: 'Smart visitor tracking with QR, biometrics and real-time notifications.',
    longDescription: 'Next-generation gate and front-desk security suite providing touchless visitor pre-registration, instant host notifications, badge printing, and real-time perimeter occupancy metrics.',
    iconName: 'ShieldCheck',
    badge: 'Security & Access',
    image: '/assets/generated/product-vms.jpg',
    theme: {
      bg: 'bg-[#F0FDF4]',
      border: 'border-[#DCFCE7]',
      accent: 'text-[#16A34A]',
      tagBg: 'bg-[#DCFCE7]',
      textAccent: '#16A34A',
      gradient: 'from-emerald-500 to-green-600',
    },
    features: [
      'Touchless kiosk self-registration',
      'Dynamic QR gate pass generation',
      'Host instant notification & approval',
      'Facial photo capture & verification',
      'Thermal badge printing with photo ID',
      'Blacklist alerts & perimeter security',
      'Visitor history & forensic audit logs',
      'Emergency roll-call evacuation list'
    ],
    metrics: [
      { label: 'Check-in Time', value: '< 15 secs' },
      { label: 'Unauthorized Breach Prevention', value: '100%' },
      { label: 'Host Notification Speed', value: 'Instant (< 1s)' },
      { label: 'Audit Trail Retention', value: 'Enterprise Compliant' }
    ],
    benefits: [
      'Modern touchless check-in for corporate headquarters, industrial plants, and secure campuses.',
      'One-tap host approval via WhatsApp, SMS, and Slack notifications with host photo confirmation.',
      'Automated NDA signing, safety protocol acknowledgments, and facial photo capture during kiosk arrival.',
      'Live evacuation list and real-time building occupancy tracking for fire and safety compliance.'
    ],
    modules: [
      {
        title: 'Kiosk Self Check-In',
        desc: 'Interactive iPad or Android tablet kiosk at reception allowing visitors to scan pre-registered invites or enter phone numbers.',
        highlights: ['Sub-15 second check-in', 'Webcam portrait capture', 'Digital NDA / compliance signature']
      },
      {
        title: 'Instant Host Approvals',
        desc: 'Instant ping delivered to the designated host with visitor photo and purpose of visit for one-tap accept or decline.',
        highlights: ['WhatsApp & SMS webhooks', 'Slack and Microsoft Teams bot alerts', 'Host location & meeting room routing']
      },
      {
        title: 'Thermal Badge Printing',
        desc: 'Automatic high-speed thermal badge printing with visitor name, host name, valid floor zone, and unique exit QR code.',
        highlights: ['Compatible with Zebra & Brother printers', 'Color-coded visitor category labels', 'Auto-expiring visual badges']
      },
      {
        title: 'Perimeter Security & Blacklist',
        desc: 'Instant red flags if an unauthorized person or former contractor attempts check-in at any campus entry gate.',
        highlights: ['VIP notifications for senior guests', 'Centralized multi-gate sync', 'Vehicle license plate registration']
      }
    ],
    workflow: [
      { step: '01', title: 'Pre-Invitation', desc: 'Host sends calendar invite with a secure unique QR access pass.' },
      { step: '02', title: 'Kiosk / Gate Scan', desc: 'Visitor scans pass or signs in using tablet kiosk in under 15 seconds.' },
      { step: '03', title: 'Host Ping & Approval', desc: 'Host receives instant notification to approve arrival with one tap.' },
      { step: '04', title: 'Badge & Checkout', desc: 'Thermal badge is issued, followed by tap-out checkout at exit.' }
    ],
    faqs: [
      {
        question: 'Does VMS support facial recognition hardware?',
        answer: 'Yes, VMS integrates seamlessly with dual-camera biometric terminals for automated face recognition check-in for frequent vendors and employees.'
      },
      {
        question: 'Can hosts pre-register visitors in advance?',
        answer: 'Yes, hosts can generate personalized pre-registration links or calendar invites that include a unique QR pass for VIP express lane entry.'
      }
    ],
    techStack: ['React Native', 'React.js', 'WebSockets', 'AWS IoT', 'QR/NFC Core'],
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
    name: 'Restaurant SaaS (Servora)',
    shortName: 'Servora',
    code: 'Servora',
    category: 'Restaurant',
    description: 'QR-based ordering, menu management, billing and analytics.',
    longDescription: 'All-in-one hospitality operating system empowering dine-in contactless QR ordering, live Kitchen Display Systems (KDS), cloud billing, captain app, and revenue analytics.',
    iconName: 'UtensilsCrossed',
    badge: 'Hospitality Cloud',
    image: '/assets/generated/product-restaurant.jpg',
    theme: {
      bg: 'bg-[#FDF2F8]',
      border: 'border-[#FCE7F3]',
      accent: 'text-[#DB2777]',
      tagBg: 'bg-[#FCE7F3]',
      textAccent: '#DB2777',
      gradient: 'from-pink-500 to-rose-600',
    },
    features: [
      'Contactless table QR code digital menus',
      'Live Kitchen Display System (KDS)',
      'Touchscreen POS billing with thermal printing',
      'Table allocation & live seating occupancy',
      'Real-time recipe & inventory depletion',
      'Multi-outlet menu & pricing syndication',
      'Captain order-taking mobile PWA',
      'Daily sales & popular dish analytics'
    ],
    metrics: [
      { label: 'Table Turnover Speed', value: '+28%' },
      { label: 'Average Order Value', value: '+18%' },
      { label: 'Order to Kitchen Time', value: '< 3 secs' },
      { label: 'Staff Efficiency Gain', value: '40%' }
    ],
    benefits: [
      'Dynamic digital menus updated in real-time with one-tap out-of-stock toggles and high-resolution food photography.',
      'Dine-in guests order directly from their phone with zero app download needed, speeding up service during peak hours.',
      'Kitchen Display System (KDS) eliminates paper tickets and order confusion between kitchen chefs and service captains.',
      'Multi-outlet menu syndication and unified daily revenue reporting across all your cafe and restaurant branches.'
    ],
    modules: [
      {
        title: 'QR Code Table Ordering',
        desc: 'Smart acrylic table stands with QR codes enabling guests to browse visual menus, customize dishes, and order instantly.',
        highlights: ['Zero-app installation (runs in mobile browser)', 'Chef recommendations and add-on prompts', 'Special allergy and cooking instructions']
      },
      {
        title: 'Kitchen Display System (KDS)',
        desc: 'Wall-mounted monitors inside the kitchen replacing paper KOTs with color-coded timers showing new, prep, and ready orders.',
        highlights: ['Station-wise order routing (Bar, Grill, Dessert)', 'Elapsed time alerts for delayed tickets', 'Bump-bar and touchscreen order clearance']
      },
      {
        title: 'Cloud POS & Cashier Counter',
        desc: 'Rapid billing software supporting table merging, bill splitting, discounts, promo codes, and thermal receipt printing.',
        highlights: ['UPI QR code printed on bill', 'Offline mode with background synchronization', 'Compatible with thermal USB/Bluetooth printers']
      },
      {
        title: 'Inventory & Recipe Costing',
        desc: 'Direct link between recipes and stock inventory. When a burger is ordered, buns, patties, and cheese are automatically deducted.',
        highlights: ['Real-time food cost percentage tracking', 'Low ingredient stock threshold notifications', 'Vendor purchase order management']
      }
    ],
    workflow: [
      { step: '01', title: 'Table QR Scan', desc: 'Guests scan smart table QR to browse visual menu and item recommendations.' },
      { step: '02', title: 'KOT Direct Routing', desc: 'Orders transmit directly to kitchen stations with special cooking notes.' },
      { step: '03', title: 'Preparation & Serving', desc: 'Kitchen updates progress, alerting service staff when dishes are ready.' },
      { step: '04', title: 'Split Bill & Pay', desc: 'Guests can split bills and pay via UPI, cards, or settle at reception.' }
    ],
    faqs: [
      {
        question: 'Does Servora POS work if the internet disconnects?',
        answer: 'Yes, Servora features an offline-first architecture. Cashiers can continue punch billing and print thermal receipts offline; data automatically syncs once connection is restored.'
      },
      {
        question: 'Do customers need to download an application to order?',
        answer: 'No app download is required. Scanning the table QR opens an ultra-fast Progressive Web App (PWA) directly in Chrome, Safari, or any mobile browser.'
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
