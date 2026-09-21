export interface SolutionDetail {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  badge: string;
  heroImage: string;
  overview: string;
  hardwareSpecs?: {
    title: string;
    items: { label: string; value: string }[];
  };
  keyFeatures: {
    title: string;
    description: string;
    icon: string;
  }[];
  workflows: {
    step: string;
    title: string;
    desc: string;
  }[];
  architecture: {
    title: string;
    points: string[];
  };
  deploymentOptions: {
    tier: string;
    suitableFor: string;
    highlights: string[];
  }[];
  faqs: {
    q: string;
    a: string;
  }[];
}

export const solutionsData: Record<string, SolutionDetail> = {
  'biometric-attendance': {
    id: 'biometric-attendance',
    slug: 'biometric-attendance',
    title: 'Biometric Attendance & Login Ecosystem',
    subtitle: 'High-Precision Facial & Fingerprint Hardware Terminals + Centralized Cloud Attendance & Automated Payroll Software.',
    badge: 'Hardware + Cloud Ecosystem',
    heroImage: '/assets/generated/biometric-ecosystem.jpg',
    overview: 'A complete, turn-key workplace authentication ecosystem. Combines industrial-grade biometric terminal devices (dual IR camera facial recognition, optical/capacitive fingerprint sensors, RFID cards, battery backup, and 4G/Wi-Fi) with real-time cloud attendance software, multi-shift roster planning, automated leave approvals, and one-click salary calculations.',
    hardwareSpecs: {
      title: 'Terminal Hardware Specifications',
      items: [
        { label: 'Facial Recognition', value: 'Dual-lens IR camera, live anti-spoofing detection (< 0.2s speed)' },
        { label: 'Fingerprint Sensor', value: '500 DPI optical sensor with scratch-resistant surface' },
        { label: 'RFID / NFC Card Reader', value: '13.56 MHz Mifare & 125 kHz Proximity Cards' },
        { label: 'Display & Touchscreen', value: '5.0-inch IPS Capacitive Touchscreen (800x480)' },
        { label: 'Connectivity', value: '4G LTE SIM Slot, Dual-band Wi-Fi, Gigabit Ethernet, Bluetooth 5.0' },
        { label: 'Capacity', value: 'Up to 50,000 Faces, 100,000 Fingerprints, 5,000,000 Log Records' },
        { label: 'Battery Backup', value: 'Built-in 4000mAh Lithium-ion battery (up to 4 hours runtime)' },
        { label: 'Access Control Relay', value: 'Door strike, magnetic lock, exit button, alarm input/output' }
      ]
    },
    keyFeatures: [
      {
        title: 'Instant Push Attendance Sync',
        description: 'Biometric punches push instantly over WebSockets and MQTT to the cloud dashboard within 100ms.',
        icon: 'Zap'
      },
      {
        title: 'Multi-Shift Roster & Night Shifts',
        description: 'Configure complex rotational, rotational-night, and dynamic grace-period shifts with automated detection.',
        icon: 'Calendar'
      },
      {
        title: 'Automated Payroll & Overtime',
        description: 'Calculates payable days, half-days, early-departures, overtime hours, and exports directly to Tally, Zoho, and Excel.',
        icon: 'DollarSign'
      },
      {
        title: 'Multi-Branch Central Monitoring',
        description: 'Centrally manage 100+ office locations, retail stores, or campus gates from a single unified portal.',
        icon: 'Building2'
      },
      {
        title: 'Geo-Fenced Mobile Punch with Selfie',
        description: 'Field teams and remote employees punch attendance from mobile app bounded by precise GPS geofences.',
        icon: 'MapPin'
      },
      {
        title: 'Visitor & Contractor Badging',
        description: 'Issue temporary QR and biometric guest passes with access control restrictions to sensitive zones.',
        icon: 'ShieldCheck'
      }
    ],
    workflows: [
      { step: '01', title: 'Hardware Installation', desc: 'Plug-and-play setup via Wall Mount or Turnstile bracket; auto-connects to cloud via 4G/Wi-Fi.' },
      { step: '02', title: 'Rapid Enrollment', desc: '10-second employee biometric registration on terminal or via self-enrollment mobile link.' },
      { step: '03', title: 'Live Verification', desc: 'Employees verify via face scan or fingerprint; door unlocks and punch syncs to cloud in real time.' },
      { step: '04', title: 'Payroll Reconciliation', desc: 'End of month one-click payroll generation with attendance loss deductions and overtime bonuses.' }
    ],
    architecture: {
      title: 'Enterprise Hardware-to-Cloud Topology',
      points: [
        'TLS 1.3 encrypted data channel between terminals and cloud gateway.',
        'Offline punch caching up to 500,000 logs during internet disruption with auto-healing sync.',
        'Role-based access hierarchy for Branch Managers, HR Admins, and Super Administrators.',
        'REST APIs & Webhooks for seamless integration with existing SAP, ERPNext, Workday, or custom HRMS.'
      ]
    },
    deploymentOptions: [
      {
        tier: 'Single Office Package',
        suitableFor: 'Startups & Single Office (10-100 staff)',
        highlights: ['1x Face + Fingerprint Device', 'Cloud Software License', 'Mobile App Support', '1-Year Hardware Warranty']
      },
      {
        tier: 'Multi-Branch Enterprise',
        suitableFor: 'Retail Chains, Schools & Corporate Offices',
        highlights: ['Multiple Synced Devices', 'Centralized Multi-Location HRMS', 'Automated Shift Rotations', 'Priority 24/7 SLA']
      },
      {
        tier: 'Industrial & Turnstile Integration',
        suitableFor: 'Manufacturing Plants, Warehouses & Campuses',
        highlights: ['Turnstile Flap-Barrier Terminals', 'IP65 Weatherproof Devices', 'RFID Heavy Duty Casing', 'On-Premise Appliance Option']
      }
    ],
    faqs: [
      {
        q: 'What happens if the internet goes down at the office?',
        a: 'The terminal continues authenticating employees and stores up to 5,000,000 logs in its encrypted local flash memory. As soon as connectivity is restored, it pushes all logs to the cloud without losing timestamps.'
      },
      {
        q: 'Can employees fool the facial recognition with photos or mobile screens?',
        a: 'No. Our terminals use dual infrared (IR) cameras with active 3D structured light liveness detection that rejects printed photos, tablet screens, and silicon masks.'
      },
      {
        q: 'Can the software integrate with our existing salary and accounting tools?',
        a: 'Yes. We support direct automated exports and API integrations with Tally Prime, Zoho Payroll, Keka, SAP, and custom payroll engines.'
      }
    ]
  },

  'agentic-ai': {
    id: 'agentic-ai',
    slug: 'agentic-ai',
    title: 'Business-Ready Agentic AI & Autonomous Agents',
    subtitle: 'Deploy Goal-Driven AI Agents that Execute Complex Business Workflows, Call Enterprise APIs, and Automate Operations.',
    badge: 'Enterprise Agentic Intelligence',
    heroImage: '/assets/generated/agentic-ai.jpg',
    overview: 'Move beyond passive conversational chatbots. Quantum Mesh builds autonomous Agentic AI architectures where specialized AI agents plan, deliberate, access private enterprise databases, execute tool calls, and collaborate across teams to resolve complex multi-step workflows without constant human intervention.',
    keyFeatures: [
      {
        title: 'Autonomous Multi-Agent Collaboration',
        description: 'Specialized agents (e.g. Research Agent, Validator, Formatter, Approver) collaborate to solve complex multi-stage tasks.',
        icon: 'Bot'
      },
      {
        title: 'Live Enterprise Tool & API Execution',
        description: 'Agents execute authorized actions: sending emails, updating CRM records, triggering SQL queries, and querying inventory.',
        icon: 'Wrench'
      },
      {
        title: 'Private Enterprise Knowledge RAG',
        description: 'Grounded in your company documentation, PDFs, Notion spaces, and customer tickets with zero hallucination guardrails.',
        icon: 'Database'
      },
      {
        title: 'Human-in-the-Loop Approval Checkpoints',
        description: 'Configure threshold rules where critical actions (such as payouts or contract sends) require explicit human sign-off.',
        icon: 'UserCheck'
      },
      {
        title: 'Self-Correction & Error Reflection',
        description: 'Agents analyze failed executions, rewrite invalid payloads, and retry autonomously with reasoning feedback loops.',
        icon: 'RefreshCw'
      },
      {
        title: 'Full Audit Trail & Observability',
        description: 'Every token, prompt, decision step, and tool execution is logged with complete replayability and compliance metrics.',
        icon: 'Activity'
      }
    ],
    workflows: [
      { step: '01', title: 'Task Initiation', desc: 'Triggered by a webhook, customer email, Slack message, or database change.' },
      { step: '02', title: 'Agent Reasoning & Planning', desc: 'Orchestrator breaks the objective down into sequential and parallel sub-goals.' },
      { step: '03', title: 'Tool Execution & Retrieval', desc: 'Agents query private vector stores, call external APIs, and validate responses.' },
      { step: '04', title: 'Completion & Telemetry', desc: 'Final deliverables are published, actions committed, and telemetry logged to dashboard.' }
    ],
    architecture: {
      title: 'Agentic Infrastructure & Governance',
      points: [
        'Support for top foundational models (Claude 3.7, GPT-4o, DeepSeek-R1) and private self-hosted open-weights (Llama 3, Mistral).',
        'LangGraph and custom stateful orchestration graphs with persistent memory checkpoints.',
        'Zero Data Retention policies ensuring your proprietary data is never used for third-party model training.',
        'Enterprise rate-limiting, PII redaction, prompt-injection defense firewalls.'
      ]
    },
    deploymentOptions: [
      {
        tier: 'AI Customer Operations Agent',
        suitableFor: 'E-commerce, SaaS, Support Teams',
        highlights: ['Autonomous Ticket Resolution', 'Order Modification Tool Calling', 'Omnichannel (Email, WhatsApp, Web)', 'Human Escalation Routing']
      },
      {
        tier: 'Autonomous Sales & SDR Agent',
        suitableFor: 'B2B Companies & Service Agencies',
        highlights: ['Inbound Lead Qualification', 'Personalized Prospect Research', 'Automated Calendar Scheduling', 'CRM Deal Enrichment']
      },
      {
        tier: 'Custom Enterprise Agentic Core',
        suitableFor: 'Banks, Healthcare, Logistics, Legal',
        highlights: ['Custom Private RAG Pipeline', 'Multi-Agent Workflow Customization', 'On-Premise Private LLM Deployment', 'SOC2 & HIPAA Compliant']
      }
    ],
    faqs: [
      {
        q: 'How are Agentic AI agents different from ordinary chatbots?',
        a: 'Ordinary chatbots only answer questions based on static prompts. Agentic AI agents have goals, memory, and agency: they can use tools, browse APIs, make multi-step decisions, execute actions, and verify their own results.'
      },
      {
        q: 'Can agents execute unauthorized actions in our database?',
        a: 'No. All tools are strictly governed by role-based API keys with least-privilege permissions. High-risk operations require explicit Human-in-the-Loop approval triggers.'
      },
      {
        q: 'Can we run models completely on-premise without sending data to OpenAI/Anthropic?',
        a: 'Yes. We specialize in private deployments using vLLM, Ollama, and TensorRT-LLM running on your dedicated GPUs or private AWS/Azure VPC.'
      }
    ]
  },

  'cloud-devops-genai': {
    id: 'cloud-devops-genai',
    slug: 'cloud-devops-genai',
    title: 'Cloud Infrastructure, DevOps & Generative AI Engineering',
    subtitle: 'Enterprise AWS/GCP/Azure Kubernetes Architectures, Automated CI/CD Pipelines, and Custom Generative AI Model Deployments.',
    badge: 'Cloud & GenAI Infrastructure',
    heroImage: '/assets/generated/cloud-devops-genai.jpg',
    overview: 'From enterprise cloud migrations and resilient Kubernetes cluster orchestration to fine-tuning private Large Language Models (LLMs), Quantum Mesh delivers end-to-end cloud engineering, automated DevOps, and modern generative AI infrastructure that accelerates developer velocity and reduces cloud spending.',
    keyFeatures: [
      {
        title: 'Multi-Cloud Architecture (AWS, GCP, Azure)',
        description: 'Scalable cloud infrastructure designed for 99.99% uptime with automated cross-region redundancy.',
        icon: 'Cloud'
      },
      {
        title: 'Kubernetes & Container Orchestration',
        description: 'Production-grade EKS, GKE, and AKS clusters with automated horizontal pod autoscaling and zero-downtime rollouts.',
        icon: 'Cpu'
      },
      {
        title: 'Automated CI/CD Pipelines',
        description: 'GitHub Actions, GitLab CI, and ArgoCD pipelines automating linting, security scans, unit tests, and production deployments.',
        icon: 'GitBranch'
      },
      {
        title: 'Private LLM Fine-Tuning & Serving',
        description: 'Deploy custom fine-tuned open-source models with high-throughput vLLM inference and GPU optimization.',
        icon: 'Sparkles'
      },
      {
        title: 'FinOps & Cloud Cost Optimization',
        description: 'Rigorous cloud infrastructure audits, reserved instance planning, and container rightsizing saving up to 40% on monthly spend.',
        icon: 'TrendingDown'
      },
      {
        title: 'Infrastructure as Code (IaC)',
        description: '100% reproducible environments managed via Terraform, OpenTofu, and Ansible with automated drift detection.',
        icon: 'Code'
      }
    ],
    workflows: [
      { step: '01', title: 'Cloud Audit & Assessment', desc: 'We inspect your current architecture, security posture, bottlenecks, and cloud billing waste.' },
      { step: '02', title: 'IaC & Containerization', desc: 'All environments are codified with Terraform and containerized with multi-stage Docker builds.' },
      { step: '03', title: 'CI/CD & GitOps Setup', desc: 'Automated testing and GitOps deployments with instant rollbacks and preview environments.' },
      { step: '04', title: '24/7 SRE & Monitoring', desc: 'Real-time Datadog/Prometheus dashboards, alert paging, and automated self-healing scripts.' }
    ],
    architecture: {
      title: 'Modern Cloud-Native & AI Tech Stack',
      points: [
        'Containerization: Docker, Kubernetes, Helm, ArgoCD, KEDA.',
        'Infrastructure as Code: Terraform, Terragrunt, Ansible, Pulumi.',
        'AI/LLM Serving: vLLM, TensorRT-LLM, HuggingFace TGI, Triton Inference Server.',
        'Monitoring & SRE: Prometheus, Grafana, OpenTelemetry, Datadog, Loki.'
      ]
    },
    deploymentOptions: [
      {
        tier: 'DevOps & CI/CD Modernization',
        suitableFor: 'Growth Stage Startups & SaaS Teams',
        highlights: ['Automated GitHub Actions CI/CD', 'Staging & Production Clusters', 'Docker Containerization', 'Developer Velocity Audit']
      },
      {
        tier: 'Enterprise Cloud Migration & FinOps',
        suitableFor: 'Established Companies & Legacy Portals',
        highlights: ['Zero-Downtime Database Migration', 'AWS/GCP Well-Architected Review', 'Cloud Cost Reduction Guarantee', 'Dedicated SRE Support']
      },
      {
        tier: 'Private Generative AI Infrastructure',
        suitableFor: 'AI-First Products & Regulated Enterprises',
        highlights: ['Private GPU Cluster Provisioning', 'Proprietary LLM Fine-Tuning', 'High-Speed Vector Database (Milvus/Qdrant)', 'Private Endpoints & Encryption']
      }
    ],
    faqs: [
      {
        q: 'Can you help reduce our existing AWS or Google Cloud monthly bill?',
        a: 'Yes. Our FinOps engagements regularly save clients 25% to 45% through rightsizing overprovisioned nodes, automating spot instances, switching to Graviton ARM processors, and optimizing idle egress.'
      },
      {
        q: 'Do you manage zero-downtime migrations for production databases?',
        a: 'Yes. We utilize continuous database replication (such as AWS DMS or PostgreSQL logical replication) ensuring zero downtime during the cutover window.'
      },
      {
        q: 'Can we run private Generative AI models inside our own VPC?',
        a: 'Yes. We set up private GPU clusters running vLLM or Ollama inside your private subnet with zero internet exposure, ensuring full compliance with HIPAA and GDPR.'
      }
    ]
  }
};
