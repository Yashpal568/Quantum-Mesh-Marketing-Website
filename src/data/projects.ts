import type { Project } from '../types';

export const featuredProjects: Project[] = [
  {
    id: 'proj-1',
    slug: 'municipal-tax-portal-rudrapur',
    title: 'Smart Municipal Property Tax & Citizen Grievance Portal',
    client: 'Nagar Nigam Rudrapur (Urban Local Body)',
    location: 'Rudrapur, Uttarakhand',
    timeline: '8 Weeks Delivery',
    category: 'Govt & Enterprise',
    tags: ['Smart City', 'Web Portal', 'GIS'],
    description: 'Modern citizen service portal unifying online property tax assessment, automated receipt generation, GIS zone valuation, and WhatsApp grievance ticketing.',
    challenge: 'Over 45,000 citizens waited in manual queues at the municipal office for annual tax receipts. Paper-based complaint tracking led to multi-week grievance backlogs.',
    solution: 'Engineered an automated property ID registry linked with instant UPI payment gateways, SMS tax alerts, and a real-time municipal commissioner grievance dashboard.',
    results: [
      { label: 'Online Tax Recovery', value: '+240%' },
      { label: 'Physical Queue Footfall', value: '-65%' },
      { label: 'Avg Grievance Resolution', value: '< 4 Hours' }
    ],
    testimonial: {
      quote: 'Quantum Mesh modernized our municipal citizen services within two months. Online tax compliance jumped by 240% while eliminating long office queues.',
      author: 'Executive Operations Lead',
      designation: 'Nagar Nigam Rudrapur'
    },
    image: '/assets/generated/client-consultation.jpg',
    highlights: [
      'Automated GIS property zone assessment calculator',
      'Instant WhatsApp & SMS digital receipts',
      'Direct commissioner dashboard for grievance resolution',
      'Bank reconciliation & municipal accounting ledger'
    ],
    metrics: { label: 'Tax Recovery', value: '+240%' },
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Razorpay UPI', 'WhatsApp Cloud API']
  },
  {
    id: 'proj-2',
    slug: 'metro-healthcare-cloud-ehr',
    title: 'Multi-Specialty Cloud EHR & Automated Pathology Lab Sync',
    client: 'Metro Healthcare Group (3 Hospital Centers)',
    location: 'Dehradun, Uttarakhand',
    timeline: '12 Weeks Rollout',
    category: 'Healthcare',
    tags: ['Healthcare', 'EHR', 'HL7/FHIR'],
    description: 'Enterprise clinical operating system uniting 3 regional hospital facilities with electronic health records, automated lab analyzer telemetry, and digital OPD triage.',
    challenge: 'Patient records were siloed across legacy computers at each clinic, causing lost test results, duplicate diagnostics, and painful 45-minute average patient wait times.',
    solution: 'Deployed a unified ABDM-compliant EHR platform with HL7 machine interfacing for diagnostic lab equipment and instant WhatsApp PDF prescriptions.',
    results: [
      { label: 'OPD Wait Times', value: '-70%' },
      { label: 'Lost Diagnostic Records', value: '0 Cases' },
      { label: 'Daily Consultations', value: '1,200+' }
    ],
    testimonial: {
      quote: 'Doctors across all three regional centers can now view longitudinal patient scans in under a second. Our patient satisfaction rating rose to 98%.',
      author: 'Chief Medical Superintendent',
      designation: 'Metro Healthcare Group'
    },
    image: '/assets/generated/product-hms.jpg',
    highlights: [
      'Unified longitudinal Electronic Health Records (EHR)',
      'Automated bidirectional HL7 lab analyzer integration',
      'Real-time bed occupancy & operation theater scheduling',
      'Cashless TPA insurance reconciliation module'
    ],
    metrics: { label: 'Wait Time Cut', value: '-70%' },
    technologies: ['React', 'TypeScript', 'Node.js', 'HL7/FHIR', 'PostgreSQL', 'Docker']
  },
  {
    id: 'proj-3',
    slug: 'gatesphere-enterprise-visitor-management',
    title: 'GateSphere — Next-Gen Enterprise Gate Security & Visitor Management System',
    client: 'GateSphere Security Platform (Enterprise SaaS Case Study)',
    location: 'Corporate Headquarters & Manufacturing Plants',
    timeline: '6 Weeks Architecture & Rollout',
    category: 'Govt & Enterprise',
    tags: ['Security SaaS', 'Next.js 15', 'React Native', 'Socket.io', 'Google Play'],
    description: 'Enterprise-grade, touchless Visitor Management & Security Intelligence SaaS platform built by Quantum Mesh, replacing paper gate registers with instant digital check-ins, sub-15s approvals, and digital gate passes.',
    challenge: 'Corporate headquarters, manufacturing facilities, and residential complexes relied on outdated, vulnerable paper gate registers—leading to confidential visitor data leaks, 10-minute queue delays, and zero real-time perimeter visibility.',
    solution: 'Quantum Mesh architected and engineered GateSphere: a full ecosystem comprising a touchless mobile QR check-in portal, native React Native Android app on Google Play for security guards, and high-availability WebSocket admin console processing 500+ check-ins/min with 99.9% uptime.',
    results: [
      { label: 'Gate Wait Time Cut', value: '-80%' },
      { label: 'Check-In Throughput', value: '500+/min' },
      { label: 'Host Approval Time', value: '< 15 Secs' }
    ],
    testimonial: {
      quote: 'GateSphere replaced paper logbooks across all our factory gates. Security wait times dropped by 80% while our security officers gained 100% digital auditability.',
      author: 'Head of Facility Operations & Security',
      designation: 'Enterprise Industrial Campus'
    },
    image: '/assets/generated/product-vms.jpg',
    liveUrl: 'https://gatesphere.quantumesh.in/',
    highlights: [
      'Touchless QR gate check-in via mobile browser with zero app download required',
      'Instant push & WebSocket host approval alerts in under 15 seconds',
      'Digital entry pass with QR clearance code and 1-click thermal receipt printing',
      'Multi-gate support with real-time occupancy counting and overstay alarms',
      'Zero-Trust enterprise security with automated daily log archiving'
    ],
    components: [
      {
        name: 'Marketing Website',
        tech: 'Next.js 15, Framer Motion',
        channel: 'https://gatesphere.quantumesh.in/',
        feature: 'Modern product landing page, interactive workflow demo & lead capture.',
        url: 'https://gatesphere.quantumesh.in/'
      },
      {
        name: 'Visitor Check-In Portal',
        tech: 'Next.js 15, Tailwind CSS',
        channel: 'https://visitors-check-in.quantumesh.in/',
        feature: 'Touchless QR gate check-in & digital entry pass generation.',
        url: 'https://visitors-check-in.quantumesh.in/'
      },
      {
        name: 'Mobile Application',
        tech: 'React Native (Expo)',
        channel: 'Android (Google Play Release)',
        feature: 'Security guard scanner UI & employee instant host approval interface.'
      },
      {
        name: 'Admin Control Panel',
        tech: 'Next.js 15, Recharts',
        channel: 'Enterprise Cloud',
        feature: 'Live gate clearance dashboard, multi-tenant analytics, & CSV audit logs.'
      },
      {
        name: 'Backend Core',
        tech: 'Node.js, MongoDB, Socket.io',
        channel: 'High-Availability Cloud',
        feature: 'Low-latency WebSocket sync, automated data cleanup, & RBAC security.'
      }
    ],
    metrics: { label: 'Wait Time Cut', value: '-80%' },
    technologies: ['Next.js 15', 'React Native (Expo)', 'Node.js', 'MongoDB', 'Socket.io', 'Tailwind CSS']
  },
  {
    id: 'proj-4',
    slug: 'kumaon-seed-iot-traceability',
    title: 'Seed Lot Climate Telemetry & Anti-Counterfeit QR Engine',
    client: 'Kumaon Agro Seeds Ltd',
    location: 'Pantnagar / U.S. Nagar, UK',
    timeline: '10 Weeks Delivery',
    category: 'Agritech & IoT',
    tags: ['Agritech', 'IoT Sensors', 'QR Traceability'],
    description: 'Industrial seed lot lifecycle traceability with wireless warehouse temperature/humidity sensors and encrypted anti-counterfeit QR labels for seed bags.',
    challenge: 'Seed germination viability was compromised by undetected warehouse temperature spikes, and counterfeit grain bags in the market hurt brand trust.',
    solution: 'Engineered an IoT MQTT telemetry mesh across 6 warehouses and printed encrypted serial QR codes that farmers scan with smartphones to verify authenticity.',
    results: [
      { label: 'Seed Germination Rate', value: '99.8%' },
      { label: 'Counterfeit Incidents', value: '0 Reported' },
      { label: 'Tracked Seed Bags', value: '250,000+' }
    ],
    testimonial: {
      quote: 'Farmers can now scan any seed bag in the field to verify its germination certification instantly. Counterfeiting was eradicated in one season.',
      author: 'Head of Quality & Supply Chain',
      designation: 'Kumaon Agro Seeds'
    },
    image: '/assets/generated/seed-management.jpg',
    highlights: [
      'End-to-end seed lot parentage & batch ledger',
      'Real-time warehouse humidity & temperature IoT alerts',
      'Unique encrypted QR verification engine on bag tags',
      'Grower procurement contract reconciliation'
    ],
    metrics: { label: 'Germination Rate', value: '99.8%' },
    technologies: ['IoT MQTT Sensors', 'Python', 'React', 'PostgreSQL', 'QR Cryptography']
  }
];

export const allProjects: Project[] = [
  ...featuredProjects,
  {
    id: 'proj-5',
    slug: 'himalayan-resorts-servora-kds',
    title: 'Servora Contactless QR Dining & Kitchen Display Engine',
    client: 'Himalayan Hospitality & Resorts (5 Outlets)',
    location: 'Nainital & Jim Corbett, Uttarakhand',
    timeline: '4 Weeks Rollout',
    category: 'Hospitality',
    tags: ['Hospitality', 'SaaS', 'Mobile Web'],
    description: 'Contactless table QR ordering, cloud captain order pads, multi-kitchen station KDS monitors, and unified evening sales audit.',
    challenge: 'Severe waitstaff shortages during tourist seasons led to missed orders, wrong food tickets, and sluggish 45-minute table turnaround times.',
    solution: 'Rolled out Servora zero-app table QR ordering with automated kitchen KOT routing and UPI pay-at-table functionality.',
    results: [
      { label: 'Table Turnover', value: '+28%' },
      { label: 'Average Order Value', value: '+18%' },
      { label: 'Order-to-Kitchen Delay', value: '< 3 Secs' }
    ],
    testimonial: {
      quote: 'Guests love browsing food photos and ordering from their phones. Our table turnover increased by 28% while operating with 30% fewer waitstaff.',
      author: 'Director of Hospitality Operations',
      designation: 'Himalayan Resort Group'
    },
    image: '/assets/generated/product-restaurant.jpg',
    highlights: [
      'Contactless PWA menu with photo catalog',
      'Live Kitchen Display System (KDS) station routing',
      'Thermal receipt & UPI dynamic QR billing',
      'Multi-branch daily revenue consolidation'
    ],
    metrics: { label: 'Table Turnover', value: '+28%' },
    technologies: ['React', 'PWA', 'WebSockets', 'Thermal Print Engine', 'PostgreSQL']
  },
  {
    id: 'proj-6',
    slug: 'skynet-kubernetes-finops-migration',
    title: 'Multi-Cloud Kubernetes Migration & FinOps Cloud Cost Reduction',
    client: 'Skynet Infotech Solutions',
    location: 'Pan-India Enterprise',
    timeline: '8 Weeks Optimization',
    category: 'Govt & Enterprise',
    tags: ['Cloud & DevOps', 'Kubernetes', 'FinOps'],
    description: 'Modern cloud infrastructure overhaul migrating monolithic servers to autoscaling Kubernetes clusters with automated CI/CD and cost audit.',
    challenge: 'Cloud infrastructure bills exceeded $25,000/month due to over-provisioned idle instances, while manual code deployments took 3 hours with downtime.',
    solution: 'Re-architected with Terraform IaC, ArgoCD automated GitOps pipelines, and spot instance autoscalers across AWS and GCP.',
    results: [
      { label: 'Monthly Cloud Spend', value: '-42%' },
      { label: 'Deployment Cadence', value: '5x Daily' },
      { label: 'Deployment Downtime', value: 'Zero Downtime' }
    ],
    testimonial: {
      quote: 'Quantum Mesh slashed our AWS bill by 42% in the first 30 days while completely automating our deployments. Truly world-class cloud architects.',
      author: 'VP of Engineering',
      designation: 'Skynet Infotech Solutions'
    },
    image: '/assets/generated/cloud-devops-genai.jpg',
    highlights: [
      'Automated Terraform IaC multi-cloud provisioning',
      'ArgoCD GitOps pipeline with zero-downtime rolling releases',
      'Prometheus and Grafana real-time cluster telemetry',
      'FinOps spot instance autoscaling policies'
    ],
    metrics: { label: 'Monthly Cloud Cost', value: '-42%' },
    technologies: ['AWS', 'Kubernetes (EKS)', 'Terraform', 'ArgoCD', 'Prometheus']
  }
];
