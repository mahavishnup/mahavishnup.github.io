// ─── Static Projects & Services ─────────────────────────────────────
// These are hardcoded instead of DB-backed to save free-tier usage.
// Edit this file directly to add / remove / update items.

export interface Project {
  id: string
  title: string
  slug: string
  description: string
  techStack: string[]
  githubUrl?: string
  liveUrl?: string
  coverImage: string
  featured: boolean
  createdAt: string // ISO date string for compatibility
}

export interface Service {
  id: string
  title: string
  slug: string
  description: string
  icon: string
  features: string[]
}

// ─── Projects ───────────────────────────────────────────────────────

export const projects: Project[] = [
  {
    id: '1',
    title: 'AI-Powered Agentic Legal System',
    slug: 'ai-agentic-legal-system',
    description:
      'A sophisticated multi-agent system designed for legal document analysis, semantic search, and RAG (Retrieval-Augmented Generation). Built using LangChain and LangGraph for complex agentic workflows, with Pinecone as a vector database.',
    techStack: [
      'FastAPI',
      'LangChain',
      'LangGraph',
      'Pinecone',
      'OpenAI',
      'PostgreSQL',
    ],
    coverImage: '/assets/legal-agentic-system.png',
    featured: true,
    createdAt: '2024-10-01T00:00:00Z',
  },
  {
    id: '2',
    title: 'Smart Vehicle Monitoring & Management Dashboard',
    slug: 'smart-vehicle-monitoring-management',
    description:
      'A specialized enterprise solution for real-time motor vehicle overload detection and AI-driven accident summarization. Features a high-throughput architecture using RabbitMQ for event processing and a responsive Laravel-based management dashboard.',
    techStack: ['Laravel', 'FastAPI', 'RabbitMQ', 'MySQL', 'Python', 'React'],
    coverImage: '/assets/vehicle-monitoring.png',
    featured: true,
    createdAt: '2024-07-15T00:00:00Z',
  },
  {
    id: '3',
    title: 'Enterprise Tourism & Booking Suite',
    slug: 'enterprise-tourism-booking-suite',
    description:
      'A massive production suite encompassing 20+ specialized modules for hotel management, ferry booking, tour package creation, and cab services. Serving 25,000+ monthly users with real-time availability and automated WhatsApp confirmations.',
    techStack: [
      'Laravel',
      'React.js',
      'Inertia.js',
      'MySQL',
      'Razorpay',
      'DigitalOcean',
    ],
    coverImage: '/assets/tourism-suite.png',
    featured: true,
    createdAt: '2023-11-20T00:00:00Z',
  },
  {
    id: '4',
    title: 'Custom Tour Package & Quotation Engine',
    slug: 'tour-package-quotation-engine',
    description:
      'A specialized engine for generating dynamic tour packages and real-time quotations. Features a complex logic for pricing, itinerary building, and automated PDF generation for client proposals.',
    techStack: ['Laravel', 'PHP', 'MySQL', 'JavaScript', 'FPDF'],
    coverImage: '/assets/tour-package-engine.png',
    featured: false,
    createdAt: '2023-04-10T00:00:00Z',
  },
  {
    id: '5',
    title: 'Digital Brand Presence & SEO Analytics',
    slug: 'digital-brand-seo-analytics',
    description:
      'A platform designed to manage digital brand presence and track SEO performance. Includes content management features, performance analytics dashboards, and automated reporting tools.',
    techStack: ['React', 'Next.js', 'Node.js', 'Tailwind CSS'],
    coverImage: '/assets/seo-analytics.png',
    featured: false,
    createdAt: '2022-08-15T00:00:00Z',
  },
  {
    id: '6',
    title: 'Secure Library & Real-time Biometrics Portal',
    slug: 'library-biometrics-portal',
    description:
      'Integrated real-time biometric face detection into a specialized cataloguing and member management system. Features automated alerts, multi-frame verification, and secure session management.',
    techStack: ['ReactJS', 'PostgreSQL', 'JavaScript', 'FaceAPI', 'PHP'],
    githubUrl: 'https://github.com/mahavishnup',
    coverImage: '/assets/elibirary-php.png',
    featured: false,
    createdAt: '2021-11-20T00:00:00Z',
  },
  {
    id: 'search-engine',
    title: 'Private & Anonymous PHP Search Engine',
    slug: 'private-anonymous-php-search-engine',
    description:
      'A privacy-focused internal search application built with PHP. Designed for secure, anonymous data retrieval within enterprise environments, focusing on speed and data confidentiality.',
    techStack: ['PHP', 'MySQL', 'JavaScript', 'Tailwind CSS'],
    coverImage: '/assets/search-engine.png',
    featured: true,
    createdAt: '2021-04-15T00:00:00Z',
  },
  {
    id: 'nlp-chatbot',
    title: 'NLP-based Chatbot',
    slug: 'nlp-based-chatbot',
    description:
      'An AI-powered chatbot using Natural Language Processing (NLP) techniques and conversational workflows to provide intelligent responses and task automation.',
    techStack: ['Python', 'NLP', 'OpenAI', 'FastAPI'],
    coverImage: '/assets/nlp-chatbot.png',
    featured: true,
    createdAt: '2022-03-10T00:00:00Z',
  },
  {
    id: 'library-mgmt',
    title: 'PHP Library Management System',
    slug: 'php-library-management-system',
    description:
      'A comprehensive administrative dashboard for book tracking, lending, and member management. Features real-time availability status and automated overdue notifications.',
    techStack: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
    coverImage: '/assets/library-mgmt.png',
    featured: false,
    createdAt: '2020-05-10T00:00:00Z',
  },
  {
    id: '7',
    title: 'Scalable Real-time Chat & Collaboration Engine',
    slug: 'real-time-chat-collaboration-engine',
    description:
      'A high-concurrency messaging engine built for real-time collaboration. Features WebSocket-based instant messaging, presence tracking, and end-to-end data synchronization.',
    techStack: ['Node.js', 'Socket.io', 'React', 'Redis', 'MongoDB'],
    coverImage: '/assets/chat-engine.png',
    featured: false,
    createdAt: '2021-08-15T00:00:00Z',
  },
  {
    id: '8',
    title: 'Automated Attendance & HR Management Portal',
    slug: 'automated-attendance-hr-portal',
    description:
      'An enterprise-grade HR portal for tracking employee attendance, leave management, and payroll processing. Includes automated reporting and a comprehensive admin dashboard.',
    techStack: ['Laravel', 'MySQL', 'JavaScript', 'Inertia.js'],
    coverImage: '/assets/fees-php.png',
    featured: false,
    createdAt: '2021-05-10T00:00:00Z',
  },
  {
    id: '9',
    title: 'Interactive Multi-Property CMS',
    slug: 'multi-property-cms',
    description:
      'A headless-ready CMS designed for managing multiple properties and dynamic content across various platforms. Features a modular architecture and flexible content modeling.',
    techStack: ['Laravel', 'FilamentPHP', 'MySQL', 'Tailwind CSS'],
    coverImage: '/assets/multi-property-cms.png',
    featured: false,
    createdAt: '2020-12-01T00:00:00Z',
  },
  {
    id: '10',
    title: 'Dynamic Event Ticketing System',
    slug: 'event-ticketing-system',
    description:
      'A robust ticketing platform for large-scale events and attractions. Features real-time inventory management, QR code generation for entries, and automated sales reporting.',
    techStack: ['Laravel', 'MySQL', 'React', 'Inertia.js'],
    coverImage: '/assets/event-ticketing.png',
    featured: false,
    createdAt: '2020-08-20T00:00:00Z',
  },
  {
    id: '11',
    title: 'Multi-Vendor E-commerce Marketplace',
    slug: 'multi-vendor-ecommerce-marketplace',
    description:
      'A complex e-commerce platform supporting multiple vendors with individual dashboards. Features global search, secure checkout, and vendor-specific payout management.',
    techStack: ['Laravel', 'React', 'MySQL', 'Redis', 'DigitalOcean'],
    coverImage: '/assets/multivendor-marketplace.png',
    featured: false,
    createdAt: '2020-05-15T00:00:00Z',
  },
  {
    id: '12',
    title: 'Automated Survey & Feedback Portal',
    slug: 'automated-survey-feedback-portal',
    description:
      'A specialized data collection tool for gathering and analyzing user feedback at scale. Features dynamic form building, real-time analytics, and automated response summaries.',
    techStack: ['PHP', 'MySQL', 'JavaScript', 'Chart.js'],
    coverImage: '/assets/survey-portal.png',
    featured: false,
    createdAt: '2019-11-10T00:00:00Z',
  },
  {
    id: '13',
    title: 'Cross-Platform Mobile Utility Suite',
    slug: 'mobile-utility-suite',
    description:
      'A collection of high-performance mobile utilities built with React Native. Features smooth animations, native device integration, and a highly responsive calculator engine.',
    techStack: ['React Native', 'TypeScript', 'JavaScript', 'Expo'],
    coverImage: '/assets/calculator-rn.png',
    featured: false,
    createdAt: '2019-06-15T00:00:00Z',
  },
  {
    id: '14',
    title: 'Mobile Productivity & UI Kit',
    slug: 'mobile-productivity-ui-kit',
    description:
      'A premium mobile UI kit focusing on dark-mode aesthetics and productivity workflows. Optimized for both iOS and Android with custom-built components and theme management.',
    techStack: ['React Native', 'Styled Components', 'TypeScript'],
    coverImage: '/assets/darkmode-rn.png',
    featured: false,
    createdAt: '2019-02-10T00:00:00Z',
  },
  {
    id: 'mcp-server',
    title: 'Custom MCP Server for Enterprise Context',
    slug: 'custom-mcp-server-enterprise-context',
    description:
      'A specialized Model Context Protocol (MCP) server designed to securely expose enterprise databases and internal APIs to AI agents. Features granular permission control, query sanitization, and seamless integration with Claude Desktop and custom LangGraph agents.',
    techStack: ['Node.js', 'TypeScript', 'MCP SDK', 'PostgreSQL', 'Docker'],
    coverImage: '/assets/mcp-header.png',
    featured: true,
    createdAt: '2024-11-10T00:00:00Z',
  },
]

// ─── Services ───────────────────────────────────────────────────────

export const services: Service[] = [
  {
    id: 'full-stack',
    title: 'Full-Stack Web App Development',
    slug: 'full-stack-web-app-development',
    description:
      'End-to-end development of scalable web applications using Laravel, React.js, Inertia.js, or Next.js stack.',
    icon: 'Globe',
    features: [
      'Custom SaaS Platforms',
      'E-commerce Solutions',
      'CMS Development',
      'Real-time Applications',
    ],
  },
  {
    id: 'laravel',
    title: 'Laravel Architecture & APIs',
    slug: 'laravel-architecture-apis',
    description:
      'Robust backend systems built with Laravel. Focusing on performance, security, and clean architecture patterns.',
    icon: 'Server',
    features: [
      'RESTful APIs',
      'Database Design (MySQL/PostgreSQL)',
      'Job Queues & Caching',
      'Third-party Integrations',
    ],
  },
  {
    id: 'frontend',
    title: 'Modern Frontend Engineering',
    slug: 'modern-frontend-engineering',
    description:
      'Crafting pixel-perfect, responsive, and accessible user interfaces using React, Next.js, and Tailwind CSS.',
    icon: 'Layout',
    features: [
      'Single Page Applications (SPA)',
      'Server Side Rendering (SSR)',
      'Interactive UI/UX',
      'Performance Optimization',
    ],
  },
  {
    id: 'consulting',
    title: 'Technical Consulting & Code Review',
    slug: 'technical-consulting-code-review',
    description:
      'Helping businesses make the right technology choices and improving existing codebases for better maintainability.',
    icon: 'Code2',
    features: [
      'System Architecture Design',
      'Code Audits & Refactoring',
      'Performance Tuning',
      'DevOps & Deployment Strategy',
    ],
  },
  {
    id: 'ai-solutions',
    title: 'Agentic AI & LLM Solutions',
    slug: 'agentic-ai-llm-solutions',
    description:
      'Building next-generation AI systems that go beyond simple chat. Designing intelligent agents that can reason, use tools, and execute complex workflows.',
    icon: 'Bot',
    features: [
      'Multi-agent Workflows (LangGraph)',
      'RAG & Vector Search (Pinecone)',
      'Custom LLM & OpenAI Integrations',
      'Model Context Protocol (MCP) Implementation',
      'Intelligent Task Automation',
    ],
  },
  {
    id: 'integrations',
    title: 'Enterprise Integrations & Automation',
    slug: 'enterprise-integrations-automation',
    description:
      'Seamlessly connecting your platform with third-party services to automate business processes and enhance user engagement.',
    icon: 'Puzzle',
    features: [
      'Payment Gateways (Razorpay/Stripe)',
      'WhatsApp & SMS Automation (DoubleTick)',
      'Real-time Notifications',
      'Third-party API Orchestration',
    ],
  },
]
