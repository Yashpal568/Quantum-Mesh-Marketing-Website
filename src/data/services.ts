import type { Service } from '../types';

export const services: Service[] = [
  {
    id: 'school-management-saas',
    slug: 'school-management-system-saas',
    title: 'School Management System SaaS (Rent / On-Demand)',
    shortDescription: 'Monthly subscription rent-based OR custom on-demand complete School ERP ecosystem.',
    longDescription: 'A complete modern School ERP available on flexible monthly rent or as a custom-built solution. Covers online student admissions, digital fee collection counter, live GPS school bus tracking, dynamic timetable generation, report cards, teacher grading, and dedicated parent mobile apps.',
    iconName: 'GraduationCap',
    badge: 'EdTech ERP',
    image: '/assets/generated/school-management.jpg',
    capabilities: [
      'Flexible Monthly Rent-Based Subscription or Custom Deployment',
      'Student Admissions & Digital Fee Counter with Online Receipts',
      'Live GPS School Bus Tracking with Parent Alerts',
      'Digital Attendance, Timetable & Examination Report Cards',
      'White-Labeled Parent & Teacher Mobile Apps (Android & iOS)'
    ],
    technologies: ['React', 'React Native', 'Node.js', 'PostgreSQL', 'Google Maps API', 'Razorpay/Stripe']
  },
  {
    id: 'biometric-attendance-ecosystem',
    slug: 'biometric-attendance-device-software-ecosystem',
    title: 'Biometric Attendance & Login Ecosystem (Hardware + Software)',
    shortDescription: 'Face recognition & fingerprint biometric hardware terminals synced to cloud HRMS.',
    longDescription: 'Complete turn-key attendance hardware and software ecosystem. Includes dual-IR camera face recognition and optical fingerprint terminals integrated with cloud shift roster scheduling, geo-fenced mobile punches, and automated salary deductions and payroll.',
    iconName: 'Fingerprint',
    badge: 'Hardware + Cloud',
    image: '/assets/generated/biometric-ecosystem.jpg',
    capabilities: [
      'Dual-Camera Anti-Spoofing Facial Recognition (<0.2s check-in)',
      'High-Durability Optical Fingerprint & RFID/NFC Card Scanning',
      'Real-Time Cloud Push Sync via 4G SIM or Wi-Fi (<100ms)',
      'Multi-Shift Rotations, Night Shifts & Overtime Rules',
      'One-Click Automated Payroll, Leave Approvals & Tally Export'
    ],
    technologies: ['Biometric Hardware Terminals', 'WebSockets', 'MQTT', 'React', 'Node.js', 'PostgreSQL']
  },
  {
    id: 'agentic-ai-solutions',
    slug: 'business-ready-agentic-ai-solutions',
    title: 'Business-Ready Agentic AI Solutions & AI Agents',
    shortDescription: 'Autonomous AI agents that execute multi-step workflows, call enterprise APIs, and solve operations.',
    longDescription: 'Deploy goal-driven, autonomous AI agents capable of reasoning, executing authorized tool calls, connecting to internal databases, and collaborating across workflows to automate sales SDR outreach, customer support, invoice verification, and internal research.',
    iconName: 'Bot',
    badge: 'Autonomous AI',
    image: '/assets/generated/agentic-ai.jpg',
    capabilities: [
      'Multi-Agent Collaborative Orchestration (LangGraph / Custom Graphs)',
      'Enterprise API & Tool Calling (Slack, Gmail, HubSpot, Databases)',
      'Private Knowledge RAG with Zero Hallucination Guardrails',
      'Autonomous Inbound SDR & Customer Support Agents',
      'Enterprise Guardrails, PII Redaction & Complete Audit Logs'
    ],
    technologies: ['Claude 3.7', 'GPT-4o', 'DeepSeek-R1', 'LangGraph', 'Python', 'Qdrant/Milvus', 'vLLM']
  },
  {
    id: 'cloud-devops-generative-ai',
    slug: 'cloud-devops-generative-ai-infrastructure',
    title: 'Cloud Infrastructure, DevOps & Generative AI Engineering',
    shortDescription: 'AWS/GCP/Azure Kubernetes clusters, automated CI/CD, FinOps, and private LLM serving.',
    longDescription: 'End-to-end cloud engineering and modern DevOps automation paired with private Generative AI model deployments. We architect resilient Kubernetes environments, automate zero-downtime deployments, cut cloud bills by up to 40%, and host private fine-tuned LLMs.',
    iconName: 'Cloud',
    badge: 'Cloud & LLM Serving',
    image: '/assets/generated/cloud-devops-genai.jpg',
    capabilities: [
      'Production Kubernetes (EKS / GKE / AKS) Orchestration',
      'Zero-Downtime Automated CI/CD Pipelines (GitHub Actions & ArgoCD)',
      'FinOps Cloud Audit & Up to 40% Monthly Cost Reduction',
      'Private LLM Fine-Tuning, vLLM High-Throughput Model Serving',
      'Infrastructure as Code (IaC) with 100% Terraform / OpenTofu'
    ],
    technologies: ['AWS', 'Google Cloud', 'Azure', 'Kubernetes', 'Docker', 'Terraform', 'vLLM', 'Prometheus']
  },
  {
    id: 'seed-management-system',
    slug: 'seed-management-system',
    title: 'Seed Management & Agritech Lot Traceability',
    shortDescription: 'Seed lot traceability, germination test tracking, warehouse climate sensors, and grower contracts.',
    longDescription: 'Specialized agritech software engineered for seed production companies, agricultural research labs, and grain distributors. Manages seed parentage, germination and purity testing logs, climate-controlled warehouse telemetry, grower contracts, and QR certification passes.',
    iconName: 'Sprout',
    badge: 'Agritech IoT',
    image: '/assets/generated/seed-management.jpg',
    capabilities: [
      'End-to-End Seed Lot & Batch Traceability from Field to Distribution',
      'Germination, Purity & Moisture Laboratory Test Logging',
      'Grower Contract Accounting & Seed Procurement Ledgers',
      'Warehouse IoT Climate Telemetry (Temperature & Humidity)',
      'Digital Verification QR Passes for Bag Packaging'
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'IoT MQTT Sensors', 'QR Engine']
  },
  {
    id: 'ai-english-learner',
    slug: 'ai-english-learner-software',
    title: 'AI English Learner Software & EdTech Platform',
    shortDescription: 'Voice AI tutor with real-time pronunciation scoring, soundwave feedback, and adaptive lessons.',
    longDescription: 'Interactive conversational English learning platform powered by modern speech recognition and language models. Evaluates pronunciation accuracy down to phoneme level, provides instant intonation feedback, and generates personalized dialogues based on learner CEFR proficiency.',
    iconName: 'Headphones',
    badge: 'Voice AI EdTech',
    image: '/assets/generated/ai-english-learner.jpg',
    capabilities: [
      'Phoneme-Level Pronunciation Accuracy Scoring (0-100%)',
      'Real-Time Audio Waveform & Intonation Visualization',
      'Conversational AI Voice Partner for Fluency Practice',
      'Gamified Vocabulary Flashcards, Quizzes & Milestone Badges',
      'CEFR Standardized Evaluation (A1 through C2 Framework)'
    ],
    technologies: ['Web Audio API', 'Whisper ASR', 'HLS Audio', 'React Native', 'FastAPI', 'PyTorch']
  },
  {
    id: 'mobile-app-development',
    slug: 'mobile-app-development',
    title: 'Custom Mobile App Development (iOS & Android)',
    shortDescription: 'Native and cross-platform mobile apps with fluid animations and offline sync.',
    longDescription: 'High-performance mobile applications engineered for iOS and Android using React Native and Flutter. We build intuitive consumer apps and rugged enterprise mobile tools featuring offline database sync, push notifications, camera/scanner integrations, and biometrics.',
    iconName: 'Smartphone',
    badge: 'iOS & Android',
    image: '/assets/generated/mobile-app.jpg',
    capabilities: [
      'Cross-Platform iOS & Android Apps via React Native & Flutter',
      'Offline-First Data Storage with Seamless Background Cloud Sync',
      'Hardware Integrations: Camera, QR Scanner, Bluetooth BLE, GPS',
      'Secure Biometric App Authentication (FaceID & Fingerprint)',
      'App Store Optimization (ASO) & Continuous Deployment'
    ],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'SQLite']
  },
  {
    id: 'custom-software',
    slug: 'custom-software-development',
    title: 'Custom Software Development',
    shortDescription: 'Build scalable business applications tailored to specific workflows.',
    longDescription: 'We design, engineer, and deploy bespoke software solutions architected precisely for your unique operational bottlenecks, enterprise workflows, and growth targets.',
    iconName: 'Cpu',
    badge: 'Enterprise Architecture',
    image: '/assets/generated/custom-software.jpg',
    capabilities: [
      'Enterprise Workflow Automation',
      'Bespoke ERP & CRM Architecture',
      'Legacy System Modernization',
      'High-Throughput Backend APIs',
      'Custom Database Schemas & Data Warehousing'
    ],
    technologies: ['Node.js', 'Python', 'Go', 'PostgreSQL', 'Docker', 'Redis']
  },
  {
    id: 'web-application',
    slug: 'web-application-development',
    title: 'Web Application Development',
    shortDescription: 'Modern, responsive and scalable web applications.',
    longDescription: 'High-performance web applications built with cutting-edge frontend architectures, responsive design systems, robust state management, and enterprise-grade security.',
    iconName: 'Globe',
    badge: 'Scalable Web SaaS',
    image: '/assets/generated/web-application.jpg',
    capabilities: [
      'Modern Single-Page & Multi-Page Apps',
      'Enterprise Admin Portals & Dashboards',
      'Progressive Web Applications (PWA)',
      'Real-Time Collaborative Web Tools',
      'API Integrations & Payment Gateways'
    ],
    technologies: ['React', 'TypeScript', 'Next.js', 'Vite', 'Tailwind CSS', 'GraphQL']
  },
  {
    id: 'ui-ux-design',
    slug: 'ui-ux-design',
    title: 'UI/UX Design & Product Systems',
    shortDescription: 'Modern interfaces and product design systems.',
    longDescription: 'Human-centric UI/UX design that elevates software usability, customer retention, and brand authority through data-backed user journeys and modern design systems.',
    iconName: 'Palette',
    badge: 'Design Systems & Figma',
    image: '/assets/generated/ui-ux-design.jpg',
    capabilities: [
      'Design Systems & Component Libraries',
      'Interactive Figma Prototypes & Wireframes',
      'User Journey & Usability Research',
      'Responsive Mobile & Desktop UX',
      'Microinteractions & Motion Guidelines'
    ],
    technologies: ['Figma', 'Design Tokens', 'Tailwind CSS', 'Framer Motion']
  }
];
