export interface JobOpening {
  id: string;
  slug: string;
  title: string;
  department: 'Engineering' | 'AI & Machine Learning' | 'Product & Design' | 'IoT & Hardware' | 'Sales & Solutions';
  location: string;
  type: 'Full-Time' | 'Contract';
  workplace: 'Remote' | 'Hybrid' | 'On-Site';
  experience: string;
  overview: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave?: string[];
}

export const PERKS = [
  {
    icon: 'Laptop',
    title: 'Top-Tier Hardware',
    desc: 'Choose an Apple M3 Max MacBook Pro or high-RAM Linux developer workstation plus 4K monitors.'
  },
  {
    icon: 'Globe',
    title: 'Work From Anywhere',
    desc: 'Flexible remote and hybrid arrangements with home office setup stipends.'
  },
  {
    icon: 'Zap',
    title: 'Learning & Dev Budget',
    desc: 'Annual $1,500 personal budget for conferences, certifications, books, and courses.'
  },
  {
    icon: 'Heart',
    title: 'Comprehensive Healthcare',
    desc: '100% premium coverage for health, dental, and vision for you and your dependents.'
  },
  {
    icon: 'TrendingUp',
    title: 'Equity & Performance Bonuses',
    desc: 'Competitive base compensation plus meaningful stock options and bi-annual bonuses.'
  },
  {
    icon: 'Coffee',
    title: 'Team Retreats & Hackathons',
    desc: 'Quarterly internal hackathons, all-hands gatherings, and paid team offsites.'
  }
];

export const OPENINGS: JobOpening[] = [
  {
    id: 'job-1',
    slug: 'senior-full-stack-engineer',
    title: 'Senior Full Stack Engineer (React, Node.js, Go)',
    department: 'Engineering',
    location: 'Rudrapur, Uttarakhand / Remote',
    type: 'Full-Time',
    workplace: 'Remote',
    experience: '4 - 7 years',
    overview: 'We are seeking an experienced Full Stack Engineer to lead architecture across our flagship SaaS products (HMS, School Management, Servora). You will design scalable microservices and build responsive frontend user interfaces.',
    responsibilities: [
      'Architect robust REST and GraphQL APIs using Node.js and Go microservices.',
      'Develop modern, responsive web frontends using React 19, TypeScript, and Tailwind CSS.',
      'Collaborate with product designers to implement pixel-perfect, accessible component libraries.',
      'Optimize database queries across PostgreSQL and MongoDB for high-throughput multi-tenant SaaS.',
      'Mentor junior engineers and champion CI/CD and automated testing best practices.'
    ],
    requirements: [
      'Proven experience shipping production web applications in React and TypeScript.',
      'Strong backend experience in Node.js, Go, or Python with relational/NoSQL databases.',
      'Deep understanding of RESTful architecture, WebSockets, and distributed caching (Redis).',
      'Solid grasp of frontend performance optimization, SSR/SSG, and responsive design.',
      'Excellent verbal and written communication skills.'
    ],
    niceToHave: [
      'Experience with Docker, Kubernetes, or AWS serverless deployments.',
      'Familiarity with multi-tenant SaaS architecture and tenant isolation.'
    ]
  },
  {
    id: 'job-2',
    slug: 'agentic-ai-llm-engineer',
    title: 'Agentic AI & LLM Systems Engineer (LangGraph, Python)',
    department: 'AI & Machine Learning',
    location: 'Remote',
    type: 'Full-Time',
    workplace: 'Remote',
    experience: '3 - 6 years',
    overview: 'Build the next generation of autonomous enterprise agents. You will design state-graph orchestrators, fine-tune domain-specific models, and implement retrieval-augmented generation pipelines.',
    responsibilities: [
      'Design and deploy stateful multi-agent systems using LangGraph, AutoGen, and custom Python frameworks.',
      'Build hybrid RAG pipelines integrating dense vector search (Qdrant/Pinecone) and keyword BM25 retrieval.',
      'Implement deterministic tool-calling workflows connecting AI agents to enterprise ERPs and CRMs.',
      'Establish evaluation benchmarks for hallucination rate, latency, and context adherence.',
      'Deploy open-source LLMs (Llama 3, Mistral) on private vLLM clusters with continuous batching.'
    ],
    requirements: [
      'Strong proficiency in Python, PyTorch, Hugging Face ecosystem, and modern LLM frameworks.',
      'Hands-on experience building agents with tool calling, memory management, and structured outputs.',
      'Familiarity with vector embeddings, chunking strategies, and re-ranking algorithms.',
      'Understanding of prompt engineering, model quantization (AWQ, GGUF), and private hosting.'
    ],
    niceToHave: [
      'Published research or open-source contributions in agentic AI or NLP.',
      'Experience building speech-to-text or phoneme alignment models.'
    ]
  },
  {
    id: 'job-3',
    slug: 'iot-embedded-systems-engineer',
    title: 'IoT & Embedded Systems Engineer (Biometrics & Edge Linux)',
    department: 'IoT & Hardware',
    location: 'Rudrapur, Uttarakhand',
    type: 'Full-Time',
    workplace: 'Hybrid',
    experience: '3 - 5 years',
    overview: 'Join our hardware engineering team to design, integrate, and optimize edge firmware for biometric terminals, smart access controllers, and IoT gateways.',
    responsibilities: [
      'Develop embedded C/C++ and Rust firmware for ARM-based Linux edge terminals.',
      'Integrate optical/capacitive fingerprint sensors, NIR cameras, and RFID Wiegand interfaces.',
      'Optimize edge inference runtimes (NCNN, ONNX Runtime) for facial recognition models.',
      'Implement resilient MQTT and WebSocket communication protocols with offline SQLite caching.',
      'Conduct hardware diagnostics, thermal testing, and EMC/FCC compliance verification.'
    ],
    requirements: [
      'Proficiency in Embedded C, C++, and Linux system programming.',
      'Experience with hardware communication buses: UART, SPI, I2C, RS-485, and Ethernet.',
      'Familiarity with camera pipelines (V4L2), image sensors, and edge AI accelerators.',
      'Understanding of cryptographic key storage and secure boot.'
    ]
  },
  {
    id: 'job-4',
    slug: 'senior-cloud-devops-engineer',
    title: 'Senior Cloud DevOps Engineer (Kubernetes, Terraform)',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-Time',
    workplace: 'Remote',
    experience: '4 - 8 years',
    overview: 'Own the infrastructure that powers thousands of enterprise transactions. You will maintain multi-region Kubernetes clusters, build automated CI/CD pipelines, and enforce zero-trust security.',
    responsibilities: [
      'Manage multi-cloud infrastructure using Terraform, Terragrunt, and AWS/GCP/Azure services.',
      'Operate high-availability Kubernetes (EKS/AKS) clusters with GitOps workflows using ArgoCD.',
      'Build observability pipelines using Prometheus, Grafana, OpenTelemetry, and Loki.',
      'Implement automated disaster recovery, database replication, and zero-downtime deployment strategies.',
      'Enforce security compliance, RBAC, network policies, and vulnerability scanning.'
    ],
    requirements: [
      'Deep hands-on experience with Kubernetes in production environments.',
      'Strong proficiency in Terraform and Infrastructure as Code (IaC) principles.',
      'Expertise in Linux system administration, networking (BGP, DNS, VPC peering), and TLS.',
      'Experience building GitHub Actions or GitLab CI/CD pipelines.'
    ]
  },
  {
    id: 'job-5',
    slug: 'lead-product-designer',
    title: 'Lead Product Designer (UI/UX & Design Systems)',
    department: 'Product & Design',
    location: 'Rudrapur, Uttarakhand / Remote',
    type: 'Full-Time',
    workplace: 'Hybrid',
    experience: '4 - 7 years',
    overview: 'Shape the visual language, design systems, and user experiences across Quantum Mesh web products, mobile applications, and enterprise dashboards.',
    responsibilities: [
      'Lead end-to-end design for complex enterprise workflows, simplifying data-dense dashboards.',
      'Maintain and expand our unified Figma design system, tokens, and component guidelines.',
      'Conduct user research, usability testing sessions, and translate insights into wireframes and prototypes.',
      'Partner closely with frontend engineers to ensure high design fidelity during implementation.',
      'Craft delightful micro-interactions, responsive layouts, and modern aesthetic visual assets.'
    ],
    requirements: [
      'Portfolio demonstrating exceptional craft in modern B2B SaaS and mobile applications.',
      'Mastery of Figma, component variants, auto-layout, and interactive prototyping.',
      'Deep understanding of accessibility standards (WCAG 2.1 AA) and responsive web design.',
      'Ability to communicate design rationales clearly to cross-functional stakeholders.'
    ]
  },
  {
    id: 'job-6',
    slug: 'enterprise-solutions-architect',
    title: 'Enterprise Solutions Architect (B2B SaaS & GovTech)',
    department: 'Sales & Solutions',
    location: 'Rudrapur, Uttarakhand / Hybrid',
    type: 'Full-Time',
    workplace: 'Hybrid',
    experience: '5 - 9 years',
    overview: 'Bridge technology and business value. You will partner with government departments, educational institutions, and healthcare enterprises to architect custom digital solutions.',
    responsibilities: [
      'Lead technical discovery sessions and RFP responses for enterprise and government clients.',
      'Architect solution blueprints spanning biometric hardware, cloud software, and mobile apps.',
      'Deliver compelling product demonstrations and technical proof-of-concept (PoC) pilots.',
      'Collaborate with product teams to relay market requirements into product roadmaps.',
      'Serve as trusted technical advisor through deployment and system go-live.'
    ],
    requirements: [
      'Proven background in technical pre-sales, solution architecture, or systems integration.',
      'Familiarity with enterprise procurement cycles, SLA definitions, and cloud deployments.',
      'Ability to present complex technical concepts clearly to executive and non-technical leaders.',
      'Willingness to travel for on-site client discovery and deployment reviews.'
    ]
  }
];
