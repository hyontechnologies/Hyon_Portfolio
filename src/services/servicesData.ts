export type ServiceDetail = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  heroGradient: string;
  accentColor: string;
  icon: string;
  overview: string;
  capabilities: {
    title: string;
    description: string;
    metric: string;
    metricLabel: string;
  }[];
  useCases: {
    industry: string;
    challenge: string;
    solution: string;
    outcome: string;
  }[];
  stats: { value: string; label: string }[];
  technologies: string[];
  process: { step: string; title: string; description: string }[];
  cta: { primary: string; secondary: string };
};

export const servicesData: ServiceDetail[] = [

  // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  // CATEGORY 1: SOFTWARE & WEB DEVELOPMENT
  // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

  {
    slug: "web-application-development",
    title: "Web Application Development",
    tagline: "Powerful Web Apps — Built to Scale",
    description:
      "End-to-end web applications engineered for performance, security, and seamless user experience across devices.",
    heroGradient: "from-blue-900 via-indigo-900 to-violet-900",
    accentColor: "blue",
    icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z",
    overview:
      "We design and develop high-performance web applications that solve real business problems. From dynamic dashboards to complex multi-user platforms, our web apps are built with modern frameworks, clean architecture, and a relentless focus on speed and reliability. Every project is crafted with mobile-first design and SEO-ready structure.",
    capabilities: [
      {
        title: "Full-Stack Development",
        description:
          "We handle frontend, backend, database, and deployment â€” delivering a complete, production-ready application without dependency on third-party vendors.",
        metric: "1 Team",
        metricLabel: "Full Ownership",
      },
      {
        title: "Performance-First Engineering",
        description:
          "Applications optimised for sub-second load times using server-side rendering, code splitting, and CDN delivery.",
        metric: "< 1s",
        metricLabel: "Average Load Time",
      },
      {
        title: "Scalable Architecture",
        description:
          "Built on microservices or modular monoliths depending on business size, ensuring the app grows with your user base without costly rewrites.",
        metric: "10x",
        metricLabel: "Scale Without Rewrite",
      },
      {
        title: "Security & Compliance",
        description:
          "OWASP-compliant development, role-based access control, encrypted data storage, and audit logging baked in from day one.",
        metric: "100%",
        metricLabel: "OWASP Compliant",
      },
    ],
    useCases: [
      {
        industry: "Logistics",
        challenge: "Manual shipment tracking via spreadsheets causing delays and customer complaints.",
        solution:
          "Built a real-time web portal with live GPS tracking, automated notifications, and driver management dashboard.",
        outcome: "60% reduction in support tickets. Customer satisfaction score jumped from 3.2 to 4.7.",
      },
      {
        industry: "Healthcare",
        challenge: "Clinics managing appointments, records, and billing across disconnected tools.",
        solution:
          "Developed an integrated web app combining patient records, appointment booking, and invoice generation.",
        outcome: "Staff admin time reduced by 4 hours/day. Zero data duplication errors.",
      },
      {
        industry: "Education",
        challenge: "A coaching institute with no online presence struggling during remote learning demands.",
        solution:
          "Delivered a full-featured learning portal with video lessons, progress tracking, and live test modules.",
        outcome: "Enrolled 3,000+ students in the first quarter. Revenue grew 220%.",
      },
    ],
    stats: [
      { value: "< 1s", label: "Load Time" },
      { value: "99.9%", label: "Uptime SLA" },
      { value: "100%", label: "Mobile Responsive" },
      { value: "10x", label: "Scalability Ready" },
    ],
    technologies: ["React", "Next.js", "Node.js", "PostgreSQL", "Redis", "Docker", "AWS"],
    process: [
      { step: "01", title: "Discover", description: "We study your business workflows, user journeys, and technical requirements to define the right scope." },
      { step: "02", title: "Design", description: "Wireframes, UI prototypes, and design systems crafted before a single line of code is written." },
      { step: "03", title: "Develop", description: "Agile sprints deliver working features every 2 weeks. You see progress, not just promises." },
      { step: "04", title: "Deploy", description: "CI/CD pipelines push updates automatically. You get a live, tested, monitored application." },
    ],
    cta: { primary: "Start Your Project", secondary: "View Portfolio" },
  },

  {
    slug: "ecommerce-development",
    title: "E-commerce Development",
    tagline: "Sell More â€” With a Store Built to Convert",
    description:
      "High-converting online stores with seamless checkout, inventory management, and payment integrations built for growth.",
    heroGradient: "from-emerald-900 via-teal-900 to-cyan-900",
    accentColor: "emerald",
    icon: "M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96C5 16.1 6.9 18 9 18h12v-2H9.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63H19c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1 1 0 0023.43 5H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z",
    overview:
      "We build e-commerce platforms that do more than display products â€” they guide customers smoothly from discovery to checkout. Whether you're launching a new brand or scaling an existing store, we deliver fast, beautiful, and conversion-optimised experiences with deep integrations to payment gateways, logistics, and inventory systems.",
    capabilities: [
      {
        title: "Conversion-Optimised UX",
        description:
          "Every page element â€” from product layouts to CTA placements â€” is designed using proven e-commerce UX patterns to maximise purchases.",
        metric: "35%",
        metricLabel: "Avg. Conversion Lift",
      },
      {
        title: "Multi-Payment Gateway",
        description:
          "Razorpay, Stripe, PayPal, UPI, COD, and BNPL integrations ensure customers can pay however they prefer.",
        metric: "10+",
        metricLabel: "Payment Methods",
      },
      {
        title: "Inventory & Order Management",
        description:
          "Real-time stock tracking, low-stock alerts, automated reorder triggers, and order lifecycle management built in.",
        metric: "Real-time",
        metricLabel: "Inventory Sync",
      },
      {
        title: "Mobile Commerce Ready",
        description:
          "Progressive Web App capabilities with offline browsing, push notifications, and app-like experience â€” without building a native app.",
        metric: "PWA",
        metricLabel: "Mobile-First Delivery",
      },
    ],
    useCases: [
      {
        industry: "Fashion Retail",
        challenge: "Brand selling only via Instagram DMs, losing orders due to manual processes.",
        solution:
          "Built a full D2C store with size guides, wishlist, COD, and Instagram Shopping integration.",
        outcome: "Monthly revenue grew from â‚¹80K to â‚¹4.2L in 5 months post-launch.",
      },
      {
        industry: "B2B Wholesale",
        challenge: "Distributor managing bulk orders over WhatsApp with frequent errors and delayed invoicing.",
        solution:
          "Developed a B2B portal with bulk ordering, tiered pricing by customer type, and auto-generated invoices.",
        outcome: "Order processing time reduced from 2 days to 4 hours. Zero billing disputes.",
      },
      {
        industry: "Food & Grocery",
        challenge: "Local grocery chain wanting to launch home delivery competing with Swiggy Instamart.",
        solution:
          "Built a hyperlocal e-commerce app with slot-based delivery scheduling and live order tracking.",
        outcome: "500+ daily orders within 3 months. 78% of customers are repeat buyers.",
      },
    ],
    stats: [
      { value: "35%", label: "Conversion Lift" },
      { value: "10+", label: "Payment Gateways" },
      { value: "< 2s", label: "Page Load Speed" },
      { value: "99.9%", label: "Checkout Uptime" },
    ],
    technologies: ["Next.js", "Shopify", "WooCommerce", "Razorpay", "Stripe", "Algolia", "Redis"],
    process: [
      { step: "01", title: "Catalogue", description: "We structure your product catalogue, categories, and attributes for search and browsing." },
      { step: "02", title: "Design", description: "Conversion-focused store design with brand-consistent UI and mobile-first layouts." },
      { step: "03", title: "Integrate", description: "Payments, shipping, GST, and inventory systems integrated and tested end-to-end." },
      { step: "04", title: "Launch", description: "Go live with SEO setup, analytics dashboards, and post-launch performance monitoring." },
    ],
    cta: { primary: "Launch Your Store", secondary: "See Demo Store" },
  },

  {
    slug: "enterprise-systems",
    title: "Enterprise Systems (ERP / CRM / HRMS / Inventory)",
    tagline: "One System â€” Every Operation Under Control",
    description:
      "Custom ERP, CRM, HRMS, and Inventory systems that unify your business operations and eliminate data silos.",
    heroGradient: "from-slate-900 via-blue-900 to-indigo-900",
    accentColor: "slate",
    icon: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z",
    overview:
      "Off-the-shelf enterprise software is built for everyone â€” which means it fits no one perfectly. We build custom ERP, CRM, HRMS, and Inventory systems precisely shaped to your workflows. No unnecessary modules, no workarounds, no per-seat licensing surprises. Just systems that work the way your business actually works.",
    capabilities: [
      {
        title: "Unified Data Layer",
        description:
          "Sales, HR, finance, and operations all share a single source of truth â€” no more exporting CSVs between tools.",
        metric: "1",
        metricLabel: "Single Source of Truth",
      },
      {
        title: "Role-Based Access Control",
        description:
          "Granular permissions ensure each team member sees exactly what they need â€” and nothing they shouldn't.",
        metric: "50+",
        metricLabel: "Permission Roles",
      },
      {
        title: "Custom Workflow Engine",
        description:
          "Business rules, approval chains, escalation paths, and automated triggers configured to match your exact processes.",
        metric: "100%",
        metricLabel: "Process Fit",
      },
      {
        title: "Deep Analytics & Reporting",
        description:
          "Pre-built KPI dashboards plus a custom report builder so leadership always has the numbers they need, instantly.",
        metric: "Real-time",
        metricLabel: "Reporting Engine",
      },
    ],
    useCases: [
      {
        industry: "Manufacturing",
        challenge: "Production, inventory, and finance managed across 6 disconnected tools causing reconciliation nightmares.",
        solution:
          "Built a unified ERP with production scheduling, raw material tracking, and financial reporting in one system.",
        outcome: "Month-end close reduced from 5 days to 6 hours. Inventory variance dropped to near zero.",
      },
      {
        industry: "Real Estate",
        challenge: "Sales team managing 200+ leads on spreadsheets with no visibility into pipeline health.",
        solution:
          "Custom CRM with lead scoring, follow-up automation, site visit scheduling, and deal stage tracking.",
        outcome: "Lead conversion rate improved by 40%. Sales director gets daily automated pipeline reports.",
      },
      {
        industry: "Staffing Agency",
        challenge: "HRMS for 300 contract staff across clients â€” attendance, payroll, and compliance were chaos.",
        solution:
          "Developed a multi-client HRMS with biometric attendance sync, automated payroll, and statutory compliance.",
        outcome: "Payroll processing time cut from 3 days to 2 hours. Zero compliance penalties.",
      },
    ],
    stats: [
      { value: "70%", label: "Ops Time Saved" },
      { value: "Real-time", label: "Cross-Dept Visibility" },
      { value: "50+", label: "Permission Roles" },
      { value: "0", label: "Data Silos" },
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Redis", "Elasticsearch", "Docker", "AWS RDS"],
    process: [
      { step: "01", title: "Audit", description: "We map every workflow, form, approval chain, and data point across your current operations." },
      { step: "02", title: "Architect", description: "System architecture is designed with future modules, integrations, and scale in mind from the start." },
      { step: "03", title: "Build", description: "Module-by-module development with team testing at each stage before moving forward." },
      { step: "04", title: "Transition", description: "Data migration, staff training, and phased rollout ensure zero disruption to daily operations." },
    ],
    cta: { primary: "Unify Your Operations", secondary: "Request a Demo" },
  },

  {
    slug: "micro-saas-development",
    title: "Micro SaaS Development",
    tagline: "Your SaaS Idea — Shipped Fast, Built Right",
    description:
      "We turn focused SaaS product ideas into revenue-generating platforms with subscription billing, multi-tenancy, and growth-ready architecture.",
    heroGradient: "from-violet-900 via-purple-900 to-fuchsia-900",
    accentColor: "violet",
    icon: "M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z",
    overview:
      "Micro SaaS is the fastest path from idea to recurring revenue. We specialise in building tightly scoped, highly focused SaaS products for niche markets. Our team handles the full product lifecycle â€” from architecture decisions like multi-tenancy and subscription billing to the product polish that earns 5-star reviews on launch day.",
    capabilities: [
      {
        title: "Multi-Tenant Architecture",
        description:
          "Each customer gets isolated data and configurable settings within a shared infrastructure â€” secure, scalable, and cost-efficient.",
        metric: "Isolated",
        metricLabel: "Per-Tenant Data",
      },
      {
        title: "Subscription Billing Engine",
        description:
          "Monthly, annual, usage-based, and freemium plans powered by Stripe or Razorpay with automated invoicing and dunning.",
        metric: "5+",
        metricLabel: "Billing Models",
      },
      {
        title: "Onboarding & Activation Flows",
        description:
          "Guided in-app onboarding, product tours, and empty state UX that turns signups into active users within minutes.",
        metric: "3x",
        metricLabel: "Activation Rate",
      },
      {
        title: "Admin & Analytics Dashboard",
        description:
          "Know your MRR, churn, active users, and feature usage in real-time. Make product decisions from data, not guesses.",
        metric: "Real-time",
        metricLabel: "SaaS Metrics",
      },
    ],
    useCases: [
      {
        industry: "HR Tech",
        challenge: "Founder had a validated idea for employee pulse survey tool but no tech team to build it.",
        solution:
          "Built the full SaaS product in 10 weeks â€” multi-tenant, Slack integration, anonymous surveys, and analytics.",
        outcome: "Launched with 12 paying customers. Reached â‚¹1.2L MRR within 6 months.",
      },
      {
        industry: "Legal Tech",
        challenge: "Contract review tool manually done by lawyers costing firms â‚¹50K+ per month in hours.",
        solution:
          "Built a micro SaaS with AI-powered contract clause detection and risk flagging as a subscription product.",
        outcome: "50+ law firms subscribed. $0 churn in the first year.",
      },
      {
        industry: "Marketing",
        challenge: "Agency wanted to productise their SEO audit process and sell it as a self-serve tool.",
        solution:
          "Developed a white-labelled SEO audit SaaS with tiered plans, PDF reports, and client portal.",
        outcome: "Tool became the agency's second revenue stream generating â‚¹80K/month passively.",
      },
    ],
    stats: [
      { value: "10 wks", label: "Avg. Time to Launch" },
      { value: "99.9%", label: "Platform Uptime" },
      { value: "5+", label: "Billing Models" },
      { value: "3x", label: "Activation Improvement" },
    ],
    technologies: ["Next.js", "Supabase", "Stripe", "Resend", "Vercel", "Prisma", "Clerk"],
    process: [
      { step: "01", title: "Scope", description: "We define the MVP ruthlessly â€” only what's needed to generate revenue and validate the market." },
      { step: "02", title: "Design", description: "Product UX designed for self-serve â€” users should activate without ever contacting support." },
      { step: "03", title: "Build", description: "10â€“12 week build cycle with weekly demos and tight feedback loops." },
      { step: "04", title: "Launch", description: "We set up analytics, error monitoring, and customer feedback loops before your first user signs up." },
    ],
    cta: { primary: "Build My SaaS", secondary: "See SaaS Examples" },
  },

  {
    slug: "mobile-application-development",
    title: "Mobile Application Development",
    tagline: "Apps People Actually Use â€” On Every Device",
    description:
      "Native and cross-platform mobile apps for iOS and Android, built for performance, retention, and business impact.",
    heroGradient: "from-sky-900 via-blue-900 to-indigo-900",
    accentColor: "sky",
    icon: "M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z",
    overview:
      "A mobile app is often the closest touchpoint between your brand and your customer. We build iOS and Android apps that are fast, beautiful, and genuinely useful â€” apps that earn ratings and drive retention. Whether you need a customer-facing app, a field operations tool, or an internal productivity app, we deliver on time and on spec.",
    capabilities: [
      {
        title: "Cross-Platform with Native Feel",
        description:
          "React Native and Flutter apps that share 90% of code across iOS and Android while maintaining native performance and platform conventions.",
        metric: "2x",
        metricLabel: "Faster Time to Market",
      },
      {
        title: "Offline-First Data Sync",
        description:
          "Apps work without internet and sync automatically when connectivity returns â€” critical for field teams and low-connectivity regions.",
        metric: "100%",
        metricLabel: "Offline Functional",
      },
      {
        title: "Push Notifications & Engagement",
        description:
          "Personalised push notifications, in-app messaging, and deep links that bring users back at the right moment.",
        metric: "40%",
        metricLabel: "Retention Improvement",
      },
      {
        title: "App Store Optimisation",
        description:
          "We handle App Store and Play Store submission, ASO, screenshots, and metadata to maximise organic downloads from day one.",
        metric: "Day 1",
        metricLabel: "Store Ready",
      },
    ],
    useCases: [
      {
        industry: "Field Services",
        challenge: "Technicians logging job completions on paper causing billing delays and lost records.",
        solution:
          "Built an offline-capable mobile app for job assignment, photo capture, digital sign-off, and GPS tracking.",
        outcome: "Billing cycle cut from 7 days to same-day. Zero lost job records.",
      },
      {
        industry: "Retail",
        challenge: "Supermarket chain wanted a loyalty app to compete with larger chains' rewards programs.",
        solution:
          "Developed a loyalty and offers app with barcode scanning, point tracking, and personalised offers.",
        outcome: "45,000 downloads in 60 days. Repeat purchase frequency increased by 28%.",
      },
      {
        industry: "Healthcare",
        challenge: "Clinic needed a patient app for appointment booking, reminders, and report downloads.",
        solution:
          "Built a HIPAA-friendly patient app with OTP login, slot booking, and encrypted report delivery.",
        outcome: "No-show rate dropped by 55%. Patient NPS improved from 62 to 84.",
      },
    ],
    stats: [
      { value: "iOS + Android", label: "Both Platforms" },
      { value: "< 3s", label: "App Launch Time" },
      { value: "40%", label: "Retention Boost" },
      { value: "4.5+", label: "Avg. Store Rating" },
    ],
    technologies: ["React Native", "Flutter", "Firebase", "Expo", "Fastlane", "RevenueCat", "OneSignal"],
    process: [
      { step: "01", title: "Prototype", description: "Clickable prototype built in Figma so you experience the app before development begins." },
      { step: "02", title: "Develop", description: "Feature-by-feature builds tested on real devices throughout the cycle â€” not just at the end." },
      { step: "03", title: "QA", description: "Device matrix testing, performance profiling, and crash monitoring before any submission." },
      { step: "04", title: "Release", description: "We manage store submissions, review responses, and post-launch monitoring for a smooth rollout." },
    ],
    cta: { primary: "Build My App", secondary: "View App Portfolio" },
  },

  {
    slug: "api-development-integrations",
    title: "API Development & System Integrations",
    tagline: "Connect Everything â€” Eliminate Manual Transfers",
    description:
      "Custom APIs and seamless third-party integrations that make your systems talk to each other automatically.",
    heroGradient: "from-indigo-900 via-blue-900 to-sky-900",
    accentColor: "indigo",
    icon: "M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z",
    overview:
      "Your tools should work together. We design and build RESTful and GraphQL APIs, and integrate your systems with third-party platforms â€” payment gateways, ERPs, CRMs, communication tools, and more. No more manual data entry between systems. No more exporting and importing CSVs. Just clean, automated data flow across your entire tech stack.",
    capabilities: [
      {
        title: "RESTful & GraphQL APIs",
        description:
          "Well-documented, versioned APIs with authentication, rate limiting, and developer-friendly error handling â€” built to integrate with anything.",
        metric: "< 100ms",
        metricLabel: "API Response Time",
      },
      {
        title: "Third-Party Integrations",
        description:
          "Pre-built connectors and custom integrations for Razorpay, Zoho, Tally, Shopify, WhatsApp Business, Google Workspace, and 100+ platforms.",
        metric: "100+",
        metricLabel: "Platforms Integrated",
      },
      {
        title: "Webhook & Event Systems",
        description:
          "Real-time event-driven architecture with webhooks ensures data flows instantly â€” no polling, no delays.",
        metric: "Real-time",
        metricLabel: "Event Processing",
      },
      {
        title: "API Monitoring & Alerting",
        description:
          "Every API we deliver includes uptime monitoring, latency alerts, and error dashboards so issues are caught before users notice.",
        metric: "24/7",
        metricLabel: "Monitored",
      },
    ],
    useCases: [
      {
        industry: "E-commerce",
        challenge: "Online store needed to sync orders to Tally ERP and dispatch via Shiprocket automatically.",
        solution:
          "Built a middleware API layer that syncs orders in real-time between Shopify, Tally, and Shiprocket.",
        outcome: "Zero manual data entry. Order-to-dispatch time reduced from 4 hours to 12 minutes.",
      },
      {
        industry: "Finance",
        challenge: "Fintech startup needed a secure payment API for their B2B invoicing platform.",
        solution:
          "Designed a PCI-compliant payment API with Razorpay, UPI, and NEFT integrations plus reconciliation endpoints.",
        outcome: "Processed â‚¹2.5 Cr in transactions in month 1 with zero failed reconciliations.",
      },
      {
        industry: "SaaS",
        challenge: "Product team needed a public API so enterprise customers could integrate data into their own systems.",
        solution:
          "Built a developer-facing REST API with OAuth 2.0, sandbox environment, and comprehensive documentation.",
        outcome: "12 enterprise customers integrated within 3 months. API became a key sales differentiator.",
      },
    ],
    stats: [
      { value: "< 100ms", label: "API Response" },
      { value: "100+", label: "Platforms Integrated" },
      { value: "99.99%", label: "API Uptime" },
      { value: "0", label: "Manual Data Transfers" },
    ],
    technologies: ["Node.js", "Express", "GraphQL", "PostgreSQL", "Redis", "Swagger", "Kong API Gateway"],
    process: [
      { step: "01", title: "Map", description: "We document every data flow, system boundary, and integration point in your current tech stack." },
      { step: "02", title: "Design", description: "API schema, authentication strategy, and data models agreed before development begins." },
      { step: "03", title: "Build & Test", description: "APIs built with comprehensive test suites â€” unit, integration, and load testing included." },
      { step: "04", title: "Document", description: "Swagger/OpenAPI docs, sandbox environment, and developer guides delivered with every API." },
    ],
    cta: { primary: "Connect My Systems", secondary: "API Documentation Demo" },
  },

  {
    slug: "custom-admin-dashboards",
    title: "Custom Admin Dashboards",
    tagline: "See Your Business â€” In One Glance",
    description:
      "Purpose-built admin dashboards that give your team complete visibility and control over operations, data, and users.",
    heroGradient: "from-cyan-900 via-teal-900 to-emerald-900",
    accentColor: "cyan",
    icon: "M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z",
    overview:
      "Most businesses run on scattered data â€” reports in email, metrics in spreadsheets, and status updates in chat. We build centralised admin dashboards that surface every number, status, and alert in one place. From operations teams to C-suite executives, everyone sees what matters, in real time, without asking the tech team for a report.",
    capabilities: [
      {
        title: "Real-Time Data Visualisation",
        description:
          "Live charts, KPI cards, and status boards that refresh automatically â€” no page reload, no stale numbers.",
        metric: "Real-time",
        metricLabel: "Data Refresh",
      },
      {
        title: "Custom Report Builder",
        description:
          "Non-technical users can slice data by date, region, team, product, or any custom dimension â€” no SQL required.",
        metric: "No-code",
        metricLabel: "Report Building",
      },
      {
        title: "Role-Based Views",
        description:
          "Sales sees the pipeline. Finance sees the numbers. Ops sees the fulfilment queue. One dashboard, multiple smart views.",
        metric: "âˆž",
        metricLabel: "Custom Views",
      },
      {
        title: "Alert & Anomaly Engine",
        description:
          "Set thresholds and get Slack, email, or SMS alerts the moment something breaks a rule â€” before it becomes a problem.",
        metric: "< 1 min",
        metricLabel: "Alert Latency",
      },
    ],
    useCases: [
      {
        industry: "D2C Brand",
        challenge: "Founder checking 4 platforms daily to piece together sales, inventory, and ad performance.",
        solution:
          "Built a unified ops dashboard pulling from Shopify, Meta Ads, Google Analytics, and WhatsApp into one view.",
        outcome: "Decision-making time for daily reviews dropped from 90 minutes to 10 minutes.",
      },
      {
        industry: "Logistics",
        challenge: "Operations team had no visibility into delivery SLA breaches until customers complained.",
        solution:
          "Developed a live operations dashboard with SLA countdown timers, breach alerts, and driver performance heatmaps.",
        outcome: "SLA breach rate dropped from 18% to 2.3% within 6 weeks of dashboard launch.",
      },
      {
        industry: "SaaS",
        challenge: "Product team needed a super-admin panel to manage users, subscriptions, and feature flags.",
        solution:
          "Built a comprehensive admin console with user impersonation, plan management, and feature flag controls.",
        outcome: "Support ticket resolution time cut by 65%. Zero need for direct database access by support team.",
      },
    ],
    stats: [
      { value: "Real-time", label: "Data Updates" },
      { value: "No-code", label: "Custom Reports" },
      { value: "65%", label: "Faster Decisions" },
      { value: "< 1 min", label: "Alert Response" },
    ],
    technologies: ["React", "Recharts", "D3.js", "Node.js", "PostgreSQL", "WebSockets", "Grafana"],
    process: [
      { step: "01", title: "Measure", description: "We identify every metric that matters to each team and how that data currently lives in your systems." },
      { step: "02", title: "Wireframe", description: "Dashboard layouts designed around decision workflows â€” not just data dumps." },
      { step: "03", title: "Connect", description: "Data pipelines built to aggregate from all your sources into a clean, queryable layer." },
      { step: "04", title: "Deploy", description: "Dashboard launched with user training, access management, and embedded documentation." },
    ],
    cta: { primary: "Build My Dashboard", secondary: "See Dashboard Examples" },
  },

  // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  // CATEGORY 2: AUTOMATION, AI & WORKFLOW
  // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

  {
    slug: "business-process-automation",
    title: "Business Process Automation",
    tagline: "Stop Doing Manually What Machines Can Do Better",
    description:
      "We identify and automate your most time-consuming business processes â€” saving hours every day and eliminating human error.",
    heroGradient: "from-rose-900 via-red-900 to-indigo-900",
    accentColor: "rose",
    icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z",
    overview:
      "Every hour your team spends on repetitive tasks is an hour not spent on growth. We audit your operations, identify automation opportunities, and build intelligent workflows that run 24/7 without breaks or errors. From document processing to approval chains to cross-system data sync, we automate the work so your team can focus on what only humans can do.",
    capabilities: [
      {
        title: "Process Audit & ROI Mapping",
        description:
          "Before we automate anything, we map every repetitive task and calculate its exact cost in time and money â€” so you know the ROI before signing off.",
        metric: "80%",
        metricLabel: "Avg. Time Saved",
      },
      {
        title: "Document & Form Automation",
        description:
          "Automatically extract data from forms, PDFs, and emails, then route, validate, and file it â€” zero manual handling.",
        metric: "Zero",
        metricLabel: "Manual Data Entry",
      },
      {
        title: "Approval Workflow Engine",
        description:
          "Multi-level approval chains with SLA tracking, escalations, and audit trails â€” accessible from web or mobile.",
        metric: "5x",
        metricLabel: "Faster Approvals",
      },
      {
        title: "Cross-System Orchestration",
        description:
          "Trigger actions across multiple platforms â€” CRM updates, invoice creation, Slack alerts, email sends â€” from a single business event.",
        metric: "100+",
        metricLabel: "System Triggers",
      },
    ],
    useCases: [
      {
        industry: "Manufacturing",
        challenge: "Purchase approval process involving 5 people took 3â€“5 days via email threads.",
        solution:
          "Built a digital approval workflow with mobile notifications, SLA timers, and auto-escalation to the next approver.",
        outcome: "Average approval time dropped from 4 days to 6 hours. Full audit trail for every decision.",
      },
      {
        industry: "Accounting",
        challenge: "Firm manually keying client-submitted expense forms into Tally â€” 3 hours daily.",
        solution:
          "Automated document ingestion with OCR, validation rules, and direct Tally API push.",
        outcome: "Eliminated 3 hours of daily data entry. Error rate reduced from 12% to 0.3%.",
      },
      {
        industry: "Real Estate",
        challenge: "Onboarding new tenants required collecting 11 documents, verifying them, and issuing agreements manually.",
        solution:
          "Automated the entire tenant onboarding flow â€” document collection, KYC verification, agreement generation, and e-signing.",
        outcome: "Onboarding time cut from 5 days to same-day. Legal team freed from routine document work.",
      },
    ],
    stats: [
      { value: "80%", label: "Time Saved" },
      { value: "Zero", label: "Manual Entry Errors" },
      { value: "5x", label: "Faster Approvals" },
      { value: "24/7", label: "Runs Automatically" },
    ],
    technologies: ["n8n", "Zapier", "Make.com", "Node.js", "Python", "Tesseract OCR", "AWS Lambda"],
    process: [
      { step: "01", title: "Audit", description: "We time-track your team's repetitive tasks for a week to calculate true automation ROI." },
      { step: "02", title: "Prioritise", description: "We rank automation opportunities by impact and complexity â€” quick wins first." },
      { step: "03", title: "Automate", description: "Workflows built, tested with real data, and refined before going live." },
      { step: "04", title: "Monitor", description: "Every automation monitored with error alerts, run logs, and monthly optimisation reviews." },
    ],
    cta: { primary: "Automate My Processes", secondary: "Get Free Process Audit" },
  },

  {
    slug: "workflow-automation",
    title: "Workflow Automation Systems",
    tagline: "Design Once — Run Forever",
    description: "Custom workflow automation systems that connect your tools, enforce business rules, and execute multi-step processes without human intervention.",
    heroGradient: "from-indigo-900 via-blue-900 to-violet-900",
    accentColor: "indigo",
    icon: "M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z",
    overview: "A workflow automation system is the operating backbone of a modern business. We design and build visual, rule-driven workflow engines that move data and tasks across your teams and tools automatically — handling approvals, notifications, data entry, document generation, and system updates without a single manual step.",
    capabilities: [
      { title: "Visual Workflow Designer", description: "Drag-and-drop workflow builder lets your ops team modify flows without engineering help — conditions, branches, loops, and delays all configurable.", metric: "No-code", metricLabel: "Flow Management" },
      { title: "Multi-System Triggers", description: "Workflows triggered from form submissions, CRM updates, calendar events, payment status changes, or any API event — automatically.", metric: "100+", metricLabel: "Trigger Sources" },
      { title: "Conditional Branching", description: "Complex if-then-else logic built into every workflow — different paths for different customers, amounts, departments, or priorities.", metric: "Unlimited", metricLabel: "Branch Conditions" },
      { title: "Error Handling & Retry", description: "Failed steps auto-retry with configurable backoff. Your team is alerted only when human intervention is actually needed.", metric: "Zero", metricLabel: "Silent Failures" },
    ],
    useCases: [
      { industry: "HR", challenge: "Employee onboarding involved 11 manual steps across IT, Finance, and HR — taking up to 5 days.", solution: "Built a triggered onboarding workflow that auto-creates accounts, sends welcome emails, assigns training, and notifies finance — all from a single form submission.", outcome: "New employee ready on Day 1 instead of Day 5. HR admin time per hire reduced by 85%." },
      { industry: "Finance", challenge: "Purchase request approvals routed via email with no tracking, SLAs, or accountability.", solution: "Automated multi-level approval workflow with amount-based routing, SLA timers, mobile approval, and full audit log.", outcome: "Average approval time: 4 days → 6 hours. Zero unapproved purchases going through." },
      { industry: "E-commerce", challenge: "Post-order workflow — confirmation, packing slip, warehouse notification, tracking update — all done manually.", solution: "End-to-end order workflow from payment confirmation to delivery update, connecting Shopify, warehouse WMS, and courier APIs.", outcome: "Order processing became fully hands-free. Fulfilment errors dropped to zero." },
    ],
    stats: [
      { value: "85%", label: "Admin Time Saved" },
      { value: "24/7", label: "Runs Automatically" },
      { value: "Zero", label: "Silent Failures" },
      { value: "100+", label: "Trigger Sources" },
    ],
    technologies: ["n8n", "Make.com", "Node.js", "Python", "Zapier", "AWS Step Functions", "Redis"],
    process: [
      { step: "01", title: "Map", description: "We document every step, decision point, and system involved in your current manual workflow." },
      { step: "02", title: "Design", description: "Workflow diagram built and reviewed before any development — every branch and edge case agreed upfront." },
      { step: "03", title: "Build", description: "Automated workflow built, tested with real data across all trigger conditions and error scenarios." },
      { step: "04", title: "Monitor", description: "Live monitoring dashboard shows every workflow run, step status, and failure alert in real time." },
    ],
    cta: { primary: "Automate My Workflows", secondary: "See Workflow Demo" },
  },

  {
    slug: "email-notification-automation",
    title: "Email & Notification Automation",
    tagline: "The Right Message — At the Perfect Moment",
    description: "Automated email and multi-channel notification systems that communicate with customers and teams based on real-time business events.",
    heroGradient: "from-sky-900 via-blue-900 to-indigo-900",
    accentColor: "sky",
    icon: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z",
    overview: "Manual follow-ups and missed notifications cost businesses customers every day. We build event-driven email and notification systems that send the right message at exactly the right moment — triggered by user actions, payment events, status changes, or time-based rules — across email, SMS, WhatsApp, and push simultaneously.",
    capabilities: [
      { title: "Event-Driven Triggers", description: "Notifications fired automatically when a customer signs up, pays, abandons a cart, or crosses any threshold you define in your system.", metric: "Real-time", metricLabel: "Event Response" },
      { title: "Multi-Channel Delivery", description: "Same workflow delivers via email, SMS, WhatsApp, and push notification — with fallback logic if one channel fails.", metric: "4 Channels", metricLabel: "Unified Delivery" },
      { title: "Drip Sequence Builder", description: "Time-delayed sequences nurture leads and onboard users with the right content across 7, 14, or 30-day journeys.", metric: "Unlimited", metricLabel: "Sequence Steps" },
      { title: "Analytics & Deliverability", description: "Open rates, click rates, bounce management, and deliverability monitoring — every message tracked end-to-end.", metric: "99%", metricLabel: "Deliverability Rate" },
    ],
    useCases: [
      { industry: "SaaS", challenge: "Trial users signing up and going cold — no onboarding emails, no feature nudges, high churn at trial end.", solution: "7-step email + in-app notification onboarding sequence based on feature usage triggers.", outcome: "Trial-to-paid conversion improved by 34%. Time-to-first-value cut from 5 days to 1 day." },
      { industry: "Healthcare", challenge: "Clinic losing revenue from appointment no-shows with no automated reminder system.", solution: "Multi-channel reminder sequence: email + WhatsApp + SMS at 48h, 24h, and 2h before appointment.", outcome: "No-show rate dropped from 28% to 9%. Revenue per day recovered by ₹18,000 on average." },
      { industry: "E-commerce", challenge: "Abandoned cart emails sent manually once a day — effectively useless for recovery.", solution: "Real-time abandoned cart email + WhatsApp sequence triggered 30 mins, 3 hours, and 24 hours after abandonment.", outcome: "Cart recovery rate improved from 2% to 14%. ₹4.2L additional monthly revenue recovered." },
    ],
    stats: [
      { value: "99%", label: "Deliverability Rate" },
      { value: "4 Channels", label: "Simultaneously" },
      { value: "Real-time", label: "Event Triggered" },
      { value: "34%", label: "Conversion Lift" },
    ],
    technologies: ["Resend", "SendGrid", "Twilio", "Node.js", "Redis", "n8n", "Firebase FCM"],
    process: [
      { step: "01", title: "Journey Map", description: "We map every customer and team touchpoint that deserves an automated message." },
      { step: "02", title: "Template", description: "Email templates and message copy written, designed, and approved before any automation is built." },
      { step: "03", title: "Automate", description: "Triggers, sequences, and channel fallback logic configured and tested with real user scenarios." },
      { step: "04", title: "Optimise", description: "A/B testing on subject lines and send times, with monthly deliverability and conversion reviews." },
    ],
    cta: { primary: "Automate My Comms", secondary: "See Notification Demo" },
  },

  {
    slug: "lead-management-automation",
    title: "Lead Management Automation",
    tagline: "Capture Every Lead — Convert More, Lose None",
    description: "End-to-end lead capture, scoring, nurturing, and assignment automation that turns your pipeline into a revenue engine.",
    heroGradient: "from-emerald-900 via-teal-900 to-cyan-900",
    accentColor: "emerald",
    icon: "M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z",
    overview: "Most businesses lose leads not because of bad products — but because of slow follow-up, inconsistent nurturing, and no system to prioritise who to call first. We build automated lead management systems that capture leads from every source, score them by conversion probability, route them to the right sales rep, and nurture them with personalised sequences until they're ready to buy.",
    capabilities: [
      { title: "Omnichannel Lead Capture", description: "Leads captured automatically from web forms, WhatsApp, Instagram DMs, email, and inbound calls — all centralised in one pipeline.", metric: "10+", metricLabel: "Lead Sources" },
      { title: "AI Lead Scoring", description: "Each lead scored automatically based on demographics, behaviour, source, and historical conversion patterns — hot leads surface instantly.", metric: "40%", metricLabel: "Higher Conversion" },
      { title: "Automated Assignment", description: "Leads routed to the right sales rep based on territory, product, language, or round-robin rules — instantly, without a manager touching it.", metric: "< 2 min", metricLabel: "Lead Response" },
      { title: "Nurture Sequences", description: "Cold leads enrolled in multi-step email and WhatsApp nurture sequences that warm them up over days or weeks automatically.", metric: "3x", metricLabel: "Pipeline Value" },
    ],
    useCases: [
      { industry: "Real Estate", challenge: "200+ daily leads from 5 portals manually distributed via WhatsApp with 4-hour average response times.", solution: "Automated lead aggregation, scoring, and instant assignment to territory-based sales reps with WhatsApp alert.", outcome: "Average lead response time: 4 hours → 8 minutes. Conversion rate improved by 38%." },
      { industry: "Education", challenge: "Admissions team manually qualifying every enquiry — spending equal time on serious and window-shopping leads.", solution: "Lead scoring model based on course interest, fee range, and engagement level — hot leads flagged for immediate call.", outcome: "Admissions team conversion rate up 45%. Call time spent on low-quality leads reduced by 60%." },
      { industry: "Insurance", challenge: "Leads from aggregator portals going cold because follow-up happened only when sales reps remembered.", solution: "Automated multi-step follow-up: immediate WhatsApp, 24h email, 48h SMS — plus CRM task auto-creation for the sales rep.", outcome: "Lead contact rate improved from 34% to 71%. Monthly policy issuance up 28%." },
    ],
    stats: [
      { value: "< 2 min", label: "Lead Response" },
      { value: "40%", label: "Conversion Lift" },
      { value: "10+", label: "Lead Sources Unified" },
      { value: "3x", label: "Pipeline Value" },
    ],
    technologies: ["Node.js", "PostgreSQL", "Redis", "n8n", "Meta API", "Twilio", "OpenAI"],
    process: [
      { step: "01", title: "Audit", description: "We map every lead source, current response time, and drop-off point in your existing pipeline." },
      { step: "02", title: "Score", description: "Lead scoring model built on your historical conversion data — or best-practice defaults for new pipelines." },
      { step: "03", title: "Automate", description: "Capture, score, assign, and nurture flows built and tested with live lead data before full rollout." },
      { step: "04", title: "Report", description: "Daily pipeline reports auto-sent to sales management — no manual pulling of numbers." },
    ],
    cta: { primary: "Automate My Pipeline", secondary: "See Lead System Demo" },
  },

  {
    slug: "no-code-low-code-automation",
    title: "No-code / Low-code Automation Solutions",
    tagline: "Powerful Automation — Without Writing a Single Line",
    description: "We build and deploy no-code and low-code automation solutions that give your team the power to automate without depending on developers.",
    heroGradient: "from-violet-900 via-purple-900 to-pink-900",
    accentColor: "violet",
    icon: "M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z",
    overview: "Not every automation needs a full custom development project. We specialise in deploying and configuring the best no-code and low-code platforms — Zapier, Make, n8n, Airtable, Notion, and more — to solve your business problems fast. For teams that need speed over custom code, we design, build, and handover automation systems your team can manage themselves.",
    capabilities: [
      { title: "Platform Selection & Setup", description: "We evaluate your needs and select the right no-code stack — then configure, connect, and test it so you start with a working system.", metric: "< 2 weeks", metricLabel: "Live Systems" },
      { title: "Team Empowerment", description: "We don't just build — we train your team to own, modify, and extend automations without needing to call us for every change.", metric: "100%", metricLabel: "Self-Manageable" },
      { title: "Integration Bridges", description: "When no-code platforms can't natively connect your tools, we build lightweight custom bridges that make them talk seamlessly.", metric: "500+", metricLabel: "Apps Connectable" },
      { title: "Governance & Documentation", description: "Every automation documented with purpose, trigger logic, and owner — so you never lose track of what runs your business.", metric: "Full", metricLabel: "Audit Trail" },
    ],
    useCases: [
      { industry: "Agency", challenge: "10-person agency spending 3 hours daily on client status updates, invoicing, and social scheduling.", solution: "No-code stack: Airtable for project management, Make.com for status emails, Notion for client portals — all integrated.", outcome: "3 hours of admin reclaimed daily. Client satisfaction improved from feedback on response speed." },
      { industry: "HR Consultancy", challenge: "Consultant tracking candidate pipelines, interview schedules, and client updates across emails and spreadsheets.", solution: "Airtable CRM + automated email sequences + calendar booking — all no-code, all manageable by the founder.", outcome: "Placed 40% more candidates per month with the same team. Zero leads lost to tracking failures." },
      { industry: "Non-Profit", challenge: "NGO coordinating volunteer scheduling, donation tracking, and donor communication manually.", solution: "Low-code volunteer portal + automated donor thank-you sequences + monthly impact report automation.", outcome: "Volunteer coordination time cut by 5 hours/week. Donor retention improved by 22%." },
    ],
    stats: [
      { value: "< 2 wks", label: "Deployed & Live" },
      { value: "500+", label: "Apps Connectable" },
      { value: "100%", label: "Team Manageable" },
      { value: "0", label: "Code Required" },
    ],
    technologies: ["Zapier", "Make.com", "n8n", "Airtable", "Notion", "Glide", "Bubble"],
    process: [
      { step: "01", title: "Assess", description: "We review your tools, team tech-literacy, and automation goals to recommend the right platforms." },
      { step: "02", title: "Build", description: "Workflows and automations built on selected platforms — fast, visual, and fully testable." },
      { step: "03", title: "Handover", description: "We walk your team through every automation with documentation, so they own it from day one." },
      { step: "04", title: "Support", description: "Optional retainer for ongoing changes, new automations, and quarterly optimisation reviews." },
    ],
    cta: { primary: "Build My No-code Stack", secondary: "Book a Free Assessment" },
  },

  {
    slug: "ai-chatbots-virtual-assistants",
    title: "AI Chatbots & Virtual Assistants",
    tagline: "Always On â€” Always Helpful",
    description:
      "Intelligent AI chatbots and virtual assistants that handle customer queries, qualify leads, and automate support 24/7.",
    heroGradient: "from-purple-900 via-violet-900 to-indigo-900",
    accentColor: "purple",
    icon: "M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z",
    overview:
      "Your customers don't wait â€” they expect answers now, even at 2am. We build AI-powered chatbots and virtual assistants that understand context, handle complex queries, and know when to hand off to a human. Whether deployed on your website, WhatsApp, or internal Slack, our chatbots reduce support load while improving customer experience.",
    capabilities: [
      {
        title: "Natural Language Understanding",
        description:
          "Powered by GPT-4 and fine-tuned on your business data â€” handles multi-turn conversations, intent detection, and context switching.",
        metric: "95%",
        metricLabel: "Query Resolution Rate",
      },
      {
        title: "Multi-Channel Deployment",
        description:
          "One chatbot brain, deployed across website, WhatsApp, Instagram, Messenger, and internal tools simultaneously.",
        metric: "6+",
        metricLabel: "Channels Supported",
      },
      {
        title: "Smart Human Handoff",
        description:
          "Detects frustration, complex issues, and escalation signals â€” transfers to a human agent with full conversation context.",
        metric: "Seamless",
        metricLabel: "Human Handoff",
      },
      {
        title: "CRM & Backend Integration",
        description:
          "Chatbot creates tickets, updates CRM records, checks order status, and books appointments â€” all in real time during the conversation.",
        metric: "Real-time",
        metricLabel: "Backend Actions",
      },
    ],
    useCases: [
      {
        industry: "E-commerce",
        challenge: "Support team overwhelmed with 'Where is my order?' queries â€” 60% of all tickets.",
        solution:
          "Deployed an AI chatbot integrated with order management system to answer order status, returns, and FAQs.",
        outcome: "Ticket volume reduced by 58%. Support team now handles only complex, high-value queries.",
      },
      {
        industry: "Education",
        challenge: "Admissions team manually answering the same 40 questions from prospective students daily.",
        solution:
          "Built a WhatsApp AI assistant that handles admissions FAQs, eligibility checks, and application status.",
        outcome: "Admissions team's daily manual query load reduced by 70%. Student response time: instant.",
      },
      {
        industry: "Banking",
        challenge: "Customer service calls averaging 8 minutes for routine balance and transaction queries.",
        solution:
          "Deployed a conversational AI on the mobile app for account queries, mini-statement, and block card requests.",
        outcome: "Average call volume reduced by 45%. Customer satisfaction score increased from 3.6 to 4.4.",
      },
    ],
    stats: [
      { value: "95%", label: "Query Resolution" },
      { value: "24/7", label: "Always Available" },
      { value: "60%", label: "Ticket Reduction" },
      { value: "6+", label: "Channels Deployed" },
    ],
    technologies: ["OpenAI GPT-4", "LangChain", "Pinecone", "WhatsApp Business API", "Twilio", "Node.js", "React"],
    process: [
      { step: "01", title: "Train", description: "We ingest your FAQs, product docs, policies, and past conversations to train the AI on your business." },
      { step: "02", title: "Design", description: "Conversation flows mapped for every intent â€” including edge cases and graceful fallbacks." },
      { step: "03", title: "Integrate", description: "Connected to your CRM, order system, and helpdesk before going live." },
      { step: "04", title: "Optimise", description: "Weekly analysis of unresolved queries to continuously improve response accuracy." },
    ],
    cta: { primary: "Deploy My Chatbot", secondary: "Try Live Demo" },
  },

  {
    slug: "whatsapp-automation",
    title: "WhatsApp Automation Systems",
    tagline: "India's Favourite App â€” Now Your Smartest Business Tool",
    description:
      "Automate customer communication, order updates, lead follow-ups, and support on WhatsApp using the official Business API.",
    heroGradient: "from-green-900 via-emerald-900 to-teal-900",
    accentColor: "green",
    icon: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z M11.5 2.001A9.5 9.5 0 1 0 21 11.5 9.51 9.51 0 0 0 11.5 2zm0 17.5A8 8 0 1 1 19.5 11.5 8.009 8.009 0 0 1 11.5 19.501z",
    overview:
      "With 500M+ users in India alone, WhatsApp is where your customers already are. We build enterprise-grade WhatsApp automation systems using the official Meta Business API â€” for order confirmations, payment reminders, lead nurturing, support bots, and mass campaigns â€” all personalised, all trackable, all compliant.",
    capabilities: [
      {
        title: "Automated Transactional Messages",
        description:
          "Order confirmations, payment receipts, delivery updates, and appointment reminders sent automatically from your systems.",
        metric: "98%",
        metricLabel: "Message Open Rate",
      },
      {
        title: "Lead Nurturing Sequences",
        description:
          "Multi-step drip sequences on WhatsApp that follow up with leads based on their actions â€” clicks, replies, and time delays.",
        metric: "3x",
        metricLabel: "Lead Conversion",
      },
      {
        title: "Bulk Campaign Manager",
        description:
          "Send personalised WhatsApp campaigns to segmented lists with template approval, analytics, and opt-out management.",
        metric: "10,000+",
        metricLabel: "Messages/Day",
      },
      {
        title: "Interactive Flows (Buttons & Lists)",
        description:
          "WhatsApp native buttons, list menus, and quick reply flows that feel like in-app experiences â€” no links, no friction.",
        metric: "Native",
        metricLabel: "Interactive UX",
      },
    ],
    useCases: [
      {
        industry: "D2C Brand",
        challenge: "Abandoned cart recovery emails getting only 2% click rate.",
        solution:
          "WhatsApp abandoned cart sequence with product image, personalised message, and one-tap checkout link.",
        outcome: "Abandoned cart recovery rate jumped to 18%. Revenue recovered: â‚¹6L in first month.",
      },
      {
        industry: "Real Estate",
        challenge: "Sales team manually following up with 200+ leads daily â€” inconsistent and exhausting.",
        solution:
          "Automated 7-day WhatsApp drip for new leads with property details, video tours, and site visit booking.",
        outcome: "Site visit booking rate improved by 60%. Sales team focuses only on warm, visit-confirmed leads.",
      },
      {
        industry: "Clinic",
        challenge: "30% no-show rate for appointments causing revenue loss.",
        solution:
          "Automated WhatsApp reminders 24h and 2h before appointments with one-tap confirm or reschedule.",
        outcome: "No-show rate dropped from 30% to 8%. Clinic fills cancelled slots faster with waitlist automation.",
      },
    ],
    stats: [
      { value: "98%", label: "Open Rate" },
      { value: "3x", label: "Conversion vs Email" },
      { value: "10,000+", label: "Messages/Day" },
      { value: "Official API", label: "Meta Verified" },
    ],
    technologies: ["Meta WhatsApp Business API", "Node.js", "Redis", "PostgreSQL", "Twilio", "360dialog", "n8n"],
    process: [
      { step: "01", title: "Verify", description: "We set up and verify your WhatsApp Business account and get templates approved by Meta." },
      { step: "02", title: "Map", description: "Message journeys designed for every customer touchpoint â€” from first enquiry to repeat purchase." },
      { step: "03", title: "Integrate", description: "Connected to your CRM, order system, or website to trigger messages from real events." },
      { step: "04", title: "Analyse", description: "Delivery, open, reply, and conversion rates tracked with A/B testing for continuous improvement." },
    ],
    cta: { primary: "Activate WhatsApp Automation", secondary: "See Message Templates" },
  },

  // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  // CATEGORY 3: DATA, ANALYTICS & INTELLIGENCE
  // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

  {
    slug: "data-analytics-business-insights",
    title: "Data Analytics & Business Insights",
    tagline: "Turn Your Data Into Decisions",
    description:
      "We collect, clean, and analyse your business data â€” delivering insights that drive smarter, faster decisions at every level.",
    heroGradient: "from-indigo-900 via-blue-900 to-cyan-900",
    accentColor: "indigo",
    icon: "M9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4zm2.5 2.1h-15V5h15v14.1zm0-16.1h-15c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z",
    overview:
      "Most businesses are sitting on a goldmine of data they can't read. We build end-to-end analytics solutions â€” from data pipelines and warehouses to interactive dashboards and AI-driven insights. Whether you need to understand why sales dropped last quarter or predict next month's demand, we turn raw data into business intelligence your team can act on.",
    capabilities: [
      {
        title: "Data Pipeline & Warehousing",
        description:
          "We collect data from every source â€” ERP, CRM, website, ads, POS â€” clean it, and store it in a queryable data warehouse.",
        metric: "50+",
        metricLabel: "Data Sources Connected",
      },
      {
        title: "Interactive BI Dashboards",
        description:
          "Drill-down dashboards with filters, date ranges, and export capabilities so every team gets the view they need.",
        metric: "Self-serve",
        metricLabel: "For Every Team",
      },
      {
        title: "Cohort & Funnel Analysis",
        description:
          "Understand where customers drop off, which segments retain best, and what drives your highest LTV cohorts.",
        metric: "Full Funnel",
        metricLabel: "Customer Visibility",
      },
      {
        title: "Automated Insight Reports",
        description:
          "Scheduled email reports with AI-generated commentary highlight anomalies and opportunities every Monday morning.",
        metric: "Weekly",
        metricLabel: "Auto-Insights",
      },
    ],
    useCases: [
      {
        industry: "Retail Chain",
        challenge: "Regional manager making inventory decisions based on gut feel â€” frequent stockouts and overstock.",
        solution:
          "Built a category performance dashboard with sell-through rates, days-of-stock, and branch-level comparisons.",
        outcome: "Stockout incidents reduced by 45%. Overstock holding costs down â‚¹18L per quarter.",
      },
      {
        industry: "SaaS",
        challenge: "High churn with no visibility into which users were at risk before they cancelled.",
        solution:
          "Built a churn prediction model on usage data, identifying at-risk users 30 days before likely cancellation.",
        outcome: "Proactive outreach saved 22% of flagged at-risk accounts. Churn reduced from 8% to 5.2%.",
      },
      {
        industry: "Hospital",
        challenge: "Management team waiting 2 weeks for monthly reports to be manually compiled from 5 systems.",
        solution:
          "Automated data pipeline connecting all systems into a real-time operations dashboard.",
        outcome: "Management gets daily automated reports. Data-informed decisions happening 14 days faster.",
      },
    ],
    stats: [
      { value: "50+", label: "Data Sources" },
      { value: "Real-time", label: "Dashboard Updates" },
      { value: "30 days", label: "Earlier Risk Detection" },
      { value: "14 days", label: "Faster Decisions" },
    ],
    technologies: ["dbt", "BigQuery", "Metabase", "Looker Studio", "Apache Airflow", "Snowflake", "Python"],
    process: [
      { step: "01", title: "Inventory", description: "We map all your data sources and define the key questions leadership needs answers to." },
      { step: "02", title: "Pipeline", description: "ETL pipelines built to extract, clean, and load data into a centralised warehouse." },
      { step: "03", title: "Visualise", description: "Dashboards and reports built with your team's decision workflows in mind." },
      { step: "04", title: "Train", description: "Your team trained to self-serve â€” no analyst needed for routine questions." },
    ],
    cta: { primary: "Unlock My Data", secondary: "See Analytics Demo" },
  },

  {
    slug: "predictive-analytics",
    title: "Predictive Analytics Solutions",
    tagline: "Know What's Coming â€” Before It Arrives",
    description:
      "Machine learning models that forecast demand, predict churn, score leads, and surface opportunities before your competitors see them.",
    heroGradient: "from-fuchsia-900 via-purple-900 to-violet-900",
    accentColor: "fuchsia",
    icon: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z",
    overview:
      "Reactive decisions cost money. Predictive decisions make money. We build and deploy machine learning models trained on your historical data to forecast what's going to happen next â€” whether that's which customers will churn, which leads will convert, or how much stock to order next month. Actionable predictions, not just interesting graphs.",
    capabilities: [
      {
        title: "Demand Forecasting",
        description:
          "Predict sales and inventory needs by SKU, region, and season â€” with confidence intervals to guide safe ordering decisions.",
        metric: "92%",
        metricLabel: "Forecast Accuracy",
      },
      {
        title: "Churn Prediction Model",
        description:
          "Identify which customers are likely to leave in the next 30 days so your retention team can act before it's too late.",
        metric: "30 days",
        metricLabel: "Early Warning",
      },
      {
        title: "Lead Scoring",
        description:
          "Rank inbound leads by conversion probability based on firmographics, behaviour signals, and historical patterns.",
        metric: "40%",
        metricLabel: "Higher Conversion",
      },
      {
        title: "Anomaly Detection",
        description:
          "Real-time alerts when metrics deviate from expected patterns â€” catch fraud, equipment failure, or performance drops instantly.",
        metric: "Real-time",
        metricLabel: "Anomaly Alerts",
      },
    ],
    useCases: [
      {
        industry: "FMCG Distribution",
        challenge: "Over-ordering seasonal products leading to â‚¹25L in expired stock annually.",
        solution:
          "Demand forecasting model trained on 3 years of sales data, seasonality, and regional weather patterns.",
        outcome: "Expired stock reduced by 80%. Stockout rate on fast-moving SKUs dropped to under 2%.",
      },
      {
        industry: "Telecom",
        challenge: "High-value customers churning without warning â€” discovered only when they ported out.",
        solution:
          "Churn prediction model on usage patterns, support interactions, and plan tenure to flag at-risk accounts.",
        outcome: "Retention team intervened with 68% of flagged customers. Churn reduced by 34%.",
      },
      {
        industry: "Insurance",
        challenge: "Sales team spending equal time on every lead regardless of quality.",
        solution:
          "Lead scoring model based on demographics, past enquiries, and policy type interest to prioritise hot leads.",
        outcome: "Sales team conversion rate improved from 12% to 19%. Call time on low-quality leads cut by 50%.",
      },
    ],
    stats: [
      { value: "92%", label: "Forecast Accuracy" },
      { value: "30 days", label: "Churn Warning Lead Time" },
      { value: "40%", label: "Conversion Improvement" },
      { value: "Real-time", label: "Anomaly Detection" },
    ],
    technologies: ["Python", "Scikit-learn", "XGBoost", "TensorFlow", "MLflow", "BigQuery", "Grafana"],
    process: [
      { step: "01", title: "Analyse", description: "We assess your historical data quality, volume, and the business question to define the right model type." },
      { step: "02", title: "Engineer", description: "Feature engineering â€” the process of teaching the model which signals matter most." },
      { step: "03", title: "Train", description: "Model trained, validated, and benchmarked against a held-out test set before any production deployment." },
      { step: "04", title: "Deploy", description: "Model deployed as an API or embedded in your existing dashboard â€” and monitored for drift over time." },
    ],
    cta: { primary: "Build My Prediction Model", secondary: "See Use Case Library" },
  },

  // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  // CATEGORY 4: FINANCE, OPERATIONS & MANAGEMENT
  // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

  {
    slug: "kpi-performance-dashboards",
    title: "KPI & Performance Dashboards",
    tagline: "Every Number That Matters — In One View",
    description: "Purpose-built KPI dashboards that give executives and managers real-time visibility into the metrics that drive business performance.",
    heroGradient: "from-cyan-900 via-teal-900 to-emerald-900",
    accentColor: "cyan",
    icon: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z",
    overview: "Most executives make decisions based on last week's data. We build real-time KPI dashboards that surface every critical metric — revenue, margins, customer satisfaction, and operational efficiency — in a single view updated live. From boardroom strategy to daily operations, everyone always knows exactly where the business stands.",
    capabilities: [
      { title: "Real-time KPI Cards", description: "Live metric cards for revenue, conversion, churn, NPS, and any custom KPI — updated automatically from your data sources.", metric: "Real-time", metricLabel: "Data Refresh" },
      { title: "Goal & Target Tracking", description: "Set monthly, quarterly, and annual targets per KPI with visual progress bars, RAG status, and trend arrows.", metric: "Visual", metricLabel: "Target Tracking" },
      { title: "Role-Based Views", description: "CEO sees company-wide KPIs. Sales manager sees pipeline. Ops sees fulfilment. One system, smart filtered views per role.", metric: "Unlimited", metricLabel: "Role Views" },
      { title: "Automated KPI Reports", description: "Scheduled weekly email digests with KPI summaries, highlights, and alerts sent to stakeholders automatically.", metric: "Weekly", metricLabel: "Auto Reports" },
    ],
    useCases: [
      { industry: "D2C Brand", challenge: "Founder reviewing 6 platforms daily to assess business health — taking 90 minutes every morning.", solution: "Unified KPI dashboard pulling from Shopify, Meta Ads, Google Analytics, and fulfilment tools into one executive view.", outcome: "Morning review time cut from 90 minutes to 8 minutes. Decisions made on real data, not gut." },
      { industry: "SaaS", challenge: "Investor board meetings requiring 2-day manual report preparation by the finance team.", solution: "Automated board reporting dashboard with MRR, churn, CAC, LTV, and burn rate — updated live.", outcome: "Board pack preparation eliminated. Investors access live dashboard directly before meetings." },
      { industry: "Manufacturing", challenge: "Plant manager unaware of production efficiency issues until end-of-day shift reports.", solution: "Real-time production KPI dashboard with OEE, downtime alerts, output vs target, and quality metrics.", outcome: "Production issues identified and corrected within the shift. OEE improved by 12%." },
    ],
    stats: [
      { value: "Real-time", label: "KPI Updates" },
      { value: "Unlimited", label: "Role Views" },
      { value: "8 min", label: "Morning Review" },
      { value: "Weekly", label: "Auto Reports" },
    ],
    technologies: ["React", "D3.js", "Recharts", "Node.js", "PostgreSQL", "WebSockets", "Grafana"],
    process: [
      { step: "01", title: "Define", description: "We work with leadership to define the exact KPIs, targets, and alert thresholds that matter most." },
      { step: "02", title: "Connect", description: "Data pipelines built to pull from all your sources into a clean, reliable analytics layer." },
      { step: "03", title: "Design", description: "Dashboard layouts designed for each role — executives, managers, and front-line teams." },
      { step: "04", title: "Deploy", description: "Dashboard launched with embedded documentation and training for every user group." },
    ],
    cta: { primary: "Build My KPI Dashboard", secondary: "See Dashboard Demo" },
  },

  {
    slug: "sales-operational-analytics",
    title: "Sales & Operational Analytics",
    tagline: "Understand Your Numbers — Improve Your Results",
    description: "Deep sales and operations analytics that reveal what's working, what's not, and exactly where to focus to drive growth.",
    heroGradient: "from-indigo-900 via-blue-900 to-sky-900",
    accentColor: "indigo",
    icon: "M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z",
    overview: "Sales reports that show revenue are a start. Analytics that show why deals are won or lost, which reps need coaching, which campaigns drive the highest LTV customers, and which operational bottlenecks cost you margin — that's a competitive advantage. We build analytics systems that answer the questions leadership needs to drive real performance.",
    capabilities: [
      { title: "Sales Pipeline Analytics", description: "Stage-by-stage conversion rates, average deal velocity, win/loss analysis, and rep performance in one view.", metric: "Full Funnel", metricLabel: "Pipeline Visibility" },
      { title: "Revenue Attribution", description: "Know exactly which channels, campaigns, and touchpoints drive closed revenue — stop guessing what's working.", metric: "Accurate", metricLabel: "Attribution Model" },
      { title: "Ops Bottleneck Detection", description: "Process timing analysis across fulfilment, support, and production to surface where time and money are being lost.", metric: "Real-time", metricLabel: "Ops Visibility" },
      { title: "Forecasting & Planning", description: "Sales forecast models based on pipeline data, historical patterns, and seasonality — credible numbers for planning.", metric: "+-8%", metricLabel: "Forecast Accuracy" },
    ],
    useCases: [
      { industry: "B2B Sales", challenge: "Sales director unable to identify why Q3 revenue missed target — no visibility into pipeline health mid-quarter.", solution: "Sales analytics dashboard with weekly pipeline snapshots, deal velocity tracking, and stage conversion rates.", outcome: "Mid-quarter course corrections became possible. Q4 target hit for the first time in 3 years." },
      { industry: "Logistics", challenge: "Operations team not knowing which routes, drivers, or time slots caused 90% of SLA breaches.", solution: "Operational analytics segmenting delivery SLA performance by route, driver, and time window.", outcome: "Identified 3 problematic routes causing 67% of breaches. Improvements implemented within 2 weeks." },
      { industry: "Retail Chain", challenge: "Marketing spending equally across all channels with no idea which drove actual purchases.", solution: "Revenue attribution model linking offline purchase data to digital campaign touchpoints.", outcome: "Reallocated 40% of budget to top-performing channels. Revenue increased 22% with same spend." },
    ],
    stats: [
      { value: "Full Funnel", label: "Sales Visibility" },
      { value: "+-8%", label: "Forecast Accuracy" },
      { value: "22%", label: "Revenue Improvement" },
      { value: "Real-time", label: "Ops Monitoring" },
    ],
    technologies: ["dbt", "BigQuery", "Metabase", "Python", "Looker Studio", "PostgreSQL", "Airflow"],
    process: [
      { step: "01", title: "Define KQs", description: "We identify the key questions leadership needs answered — not just metrics to display." },
      { step: "02", title: "Source Data", description: "Data from CRM, ERP, marketing, and ops systems unified into a clean analytics warehouse." },
      { step: "03", title: "Model", description: "Analytics models built to calculate attribution, velocity, and forecasts correctly." },
      { step: "04", title: "Activate", description: "Dashboards and automated reports deployed with training for each team." },
    ],
    cta: { primary: "Unlock Sales Analytics", secondary: "Book a Demo" },
  },

  {
    slug: "data-visualization-platforms",
    title: "Data Visualization Platforms",
    tagline: "Data That Speaks — Insights Anyone Can See",
    description: "Interactive data visualization platforms that transform complex datasets into intuitive charts, maps, and dashboards anyone can explore and understand.",
    heroGradient: "from-fuchsia-900 via-pink-900 to-rose-900",
    accentColor: "fuchsia",
    icon: "M11 2v20c-5.07-.5-9-4.79-9-10s3.93-9.5 9-10zm2.03 0v8.99H22c-.47-4.74-4.24-8.52-8.97-8.99zm0 11.01V22c4.74-.47 8.5-4.25 8.97-8.99h-8.97z",
    overview: "Numbers in tables don't inspire action. Visual stories built from your data do. We design and build interactive data visualization platforms — from executive dashboards to customer-facing analytics portals — that transform raw numbers into clear, compelling visual narratives that drive decisions at every level of an organisation.",
    capabilities: [
      { title: "Interactive Charts & Maps", description: "Drill-down bar charts, geo heat maps, sankey flows, treemaps, and scatter plots that respond to user exploration.", metric: "30+", metricLabel: "Chart Types" },
      { title: "Embedded Analytics", description: "Visualization components embedded directly into your product or customer portal — white-labelled and multi-tenant.", metric: "White-label", metricLabel: "Embedded Ready" },
      { title: "Self-Serve Exploration", description: "Business users filter, segment, and explore data independently using intuitive controls — no SQL, no analyst needed.", metric: "No-code", metricLabel: "Data Exploration" },
      { title: "Export & Sharing", description: "One-click PDF and Excel exports, shareable links with access controls, and scheduled report delivery.", metric: "Instant", metricLabel: "Export & Share" },
    ],
    useCases: [
      { industry: "PropTech", challenge: "Property platform needed interactive market data visualizations for their agent-facing portal.", solution: "Built embedded geo heat maps showing price trends, inventory levels, and demand by area — filterable by property type.", outcome: "Agents spend 40% more time on platform. Product differentiation drove 25% increase in subscriptions." },
      { industry: "FMCG", challenge: "Regional sales data in spreadsheets — no one could see geographic performance patterns.", solution: "Interactive India district-level heat map showing sell-through rates, distributor coverage, and growth vs prior year.", outcome: "Sales leadership identified 3 high-potential underserved districts. Distribution expanded within a quarter." },
      { industry: "Fintech", challenge: "Customers unable to understand their spending patterns — poor app engagement.", solution: "Interactive spending visualization with category breakdowns, trends, and peer benchmarks built into the mobile app.", outcome: "App engagement increased by 58%. Feature became top-rated in user reviews." },
    ],
    stats: [
      { value: "30+", label: "Chart Types" },
      { value: "White-label", label: "Embeddable" },
      { value: "No-code", label: "Self-Serve" },
      { value: "58%", label: "Engagement Lift" },
    ],
    technologies: ["D3.js", "Recharts", "Mapbox", "React", "Apache ECharts", "Vega-Lite", "PostgreSQL"],
    process: [
      { step: "01", title: "Story", description: "We define what story your data needs to tell and who the audience is before designing anything." },
      { step: "02", title: "Prototype", description: "Interactive prototype built to validate chart selection and layout with stakeholders before development." },
      { step: "03", title: "Build", description: "Visualization components built, connected to real data, and optimised for performance at scale." },
      { step: "04", title: "Embed", description: "Deployed to your platform or portal with access controls, theming, and user documentation." },
    ],
    cta: { primary: "Visualise My Data", secondary: "See Visualization Demo" },
  },

  {
    slug: "ai-recommendation-systems",
    title: "AI-based Recommendation Systems",
    tagline: "Show Every User Exactly What They Need",
    description: "Personalised AI recommendation engines that increase revenue, engagement, and retention by surfacing the most relevant products, content, or actions for each user.",
    heroGradient: "from-violet-900 via-indigo-900 to-blue-900",
    accentColor: "violet",
    icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z",
    overview: "Generic experiences drive generic results. Personalisation drives revenue. We build AI recommendation systems trained on your user behaviour, purchase history, and content interactions — powering product recommendations, content feeds, next-best-action suggestions, and personalised email content that feels curated by hand for each user.",
    capabilities: [
      { title: "Collaborative Filtering", description: "Recommends based on what similar users liked — surfaces products or content your customer hasn't found but will love.", metric: "35%", metricLabel: "Revenue per User" },
      { title: "Content-Based Matching", description: "Matches users to items based on attribute similarity — ideal for catalogues with sparse interaction data.", metric: "High", metricLabel: "Cold Start Handling" },
      { title: "Real-time Personalisation", description: "Recommendations update based on current session behaviour — what users do right now influences what they see next.", metric: "Real-time", metricLabel: "Session Aware" },
      { title: "A/B Testing Engine", description: "Built-in experimentation framework to test recommendation algorithms against each other with statistical rigour.", metric: "Continuous", metricLabel: "Model Improvement" },
    ],
    useCases: [
      { industry: "E-commerce", challenge: "Product catalogue of 8,000 SKUs — customers seeing the same bestsellers on every visit, low discovery.", solution: "Collaborative filtering recommendation engine trained on browse and purchase history, serving personalised homepage and email recommendations.", outcome: "Average order value increased 28%. Email click-through on recommended products: 18% vs 3% for manual picks." },
      { industry: "EdTech", challenge: "Learning platform with 500 courses — students not knowing what to take next after completing a course.", solution: "Course recommendation model based on completed courses, quiz performance, and peer pathways.", outcome: "Course completion rate improved by 42%. Student LTV increased as they stayed on the platform longer." },
      { industry: "Media", challenge: "News platform losing subscribers who couldn't find relevant articles in a feed of 200 daily stories.", solution: "Personalised content feed based on reading history, time-on-article signals, and topic affinity model.", outcome: "Daily active users increased 34%. Average session length grew from 4 minutes to 11 minutes." },
    ],
    stats: [
      { value: "35%", label: "Revenue per User" },
      { value: "Real-time", label: "Personalisation" },
      { value: "42%", label: "Engagement Lift" },
      { value: "Continuous", label: "Model Learning" },
    ],
    technologies: ["Python", "TensorFlow", "Scikit-learn", "Redis", "PostgreSQL", "FastAPI", "Kafka"],
    process: [
      { step: "01", title: "Data Audit", description: "We assess your interaction data volume, quality, and user/item attributes to select the best algorithm." },
      { step: "02", title: "Train", description: "Recommendation model trained and evaluated on held-out data before any production exposure." },
      { step: "03", title: "Integrate", description: "Model served via API — plugged into your website, app, and email platform with minimal engineering work." },
      { step: "04", title: "Experiment", description: "A/B tests running continuously to measure lift and improve model accuracy over time." },
    ],
    cta: { primary: "Build My Recommendation Engine", secondary: "See Personalisation Demo" },
  },

  {
    slug: "invoice-management-system",
    title: "Invoice Management System",
    tagline: "Get Paid Faster â€” With Zero Invoice Chaos",
    description:
      "End-to-end invoice management: generation, tracking, reminders, reconciliation, and reporting â€” all automated.",
    heroGradient: "from-amber-900 via-indigo-900 to-red-900",
    accentColor: "amber",
    icon: "M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 14H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z",
    overview:
      "Late payments and lost invoices are silent killers of cash flow. We build invoice management systems that automate the entire billing lifecycle â€” from professional invoice generation to payment tracking, automated reminders, and reconciliation with your accounting software. Your finance team stops chasing payments and starts analysing cash flow.",
    capabilities: [
      {
        title: "Automated Invoice Generation",
        description:
          "Generate branded invoices from orders, contracts, or subscriptions with GST calculations, line items, and digital signatures.",
        metric: "< 10 sec",
        metricLabel: "Invoice Creation",
      },
      {
        title: "Payment Status Tracking",
        description:
          "Real-time payment status for every invoice â€” paid, partial, overdue, and disputed â€” with aging analysis.",
        metric: "Real-time",
        metricLabel: "Payment Visibility",
      },
      {
        title: "Automated Payment Reminders",
        description:
          "Scheduled WhatsApp, email, and SMS reminders at 7 days, 3 days, due date, and overdue intervals â€” personalised per customer.",
        metric: "40%",
        metricLabel: "Faster Collections",
      },
      {
        title: "Tally / Zoho Integration",
        description:
          "Two-way sync with Tally, QuickBooks, or Zoho Books â€” invoices raised in the system appear instantly in your accounting software.",
        metric: "Instant",
        metricLabel: "Accounting Sync",
      },
    ],
    useCases: [
      {
        industry: "IT Services",
        challenge: "Agency manually creating 80+ invoices monthly in Word and chasing payments via WhatsApp.",
        solution:
          "Automated invoice generation from project milestones, with payment links and auto-reminders.",
        outcome: "Average collection time reduced from 32 days to 14 days. Finance admin time cut by 6 hours/week.",
      },
      {
        industry: "Wholesale Trading",
        challenge: "Distributor had â‚¹40L in receivables with no clear visibility on what was overdue.",
        solution:
          "Built receivables dashboard with customer-level aging, dispute flags, and automated escalation to sales reps.",
        outcome: "â‚¹28L collected in first 60 days post-launch. Bad debt reduced significantly.",
      },
    ],
    stats: [
      { value: "< 10s", label: "Invoice Creation" },
      { value: "40%", label: "Faster Collections" },
      { value: "Zero", label: "Lost Invoices" },
      { value: "GST Ready", label: "Compliant by Default" },
    ],
    technologies: ["Node.js", "React", "PostgreSQL", "PDFKit", "Razorpay", "Tally API", "Twilio"],
    process: [
      { step: "01", title: "Audit", description: "We review your current billing process, GST requirements, and accounting integrations." },
      { step: "02", title: "Template", description: "Invoice templates designed with your branding, GST details, and payment terms." },
      { step: "03", title: "Automate", description: "Triggers, reminders, and reconciliation rules configured for your business rules." },
      { step: "04", title: "Integrate", description: "Connected to your accounting software, CRM, and payment gateway before go-live." },
    ],
    cta: { primary: "Automate My Billing", secondary: "See Invoice Demo" },
  },

  {
    slug: "attendance-management-system",
    title: "Attendance Management System",
    tagline: "Know Who's In â€” Automatically",
    description:
      "Digital attendance tracking with biometric integration, leave management, and payroll-ready reports for teams of any size.",
    heroGradient: "from-teal-900 via-cyan-900 to-sky-900",
    accentColor: "teal",
    icon: "M20 6h-2.18c.07-.44.18-.88.18-1.35C18 2.54 15.96.5 13.45.5c-1.3 0-2.48.56-3.33 1.44L9 3.05l-1.12-1.1A4.44 4.44 0 004.55.5C2.04.5 0 2.54 0 4.65c0 .47.11.91.18 1.35H0v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-5 3c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-6 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm8 8H7v-2h10v2z",
    overview:
      "Paper registers and manual punch-ins belong in the past. We build modern attendance management systems that track presence through biometrics, mobile apps, or QR codes, manage leave requests digitally, and produce payroll-ready reports with zero manual compilation. For single-office SMEs or multi-location enterprises, we scale to fit.",
    capabilities: [
      {
        title: "Multi-Mode Attendance Capture",
        description:
          "Biometric device integration, mobile GPS check-in, QR code punch, and web-based manual entry â€” all in one system.",
        metric: "4 Modes",
        metricLabel: "Flexible Capture",
      },
      {
        title: "Leave & Holiday Management",
        description:
          "Employees apply for leave via app. Managers approve or reject with reasons. Balance automatically adjusted.",
        metric: "Self-serve",
        metricLabel: "For Employees",
      },
      {
        title: "Shift & Roster Management",
        description:
          "Define shift patterns, assign employees to rosters, and get overtime and under-hour calculations automatically.",
        metric: "Auto",
        metricLabel: "Overtime Calculation",
      },
      {
        title: "Payroll-Ready Reports",
        description:
          "One-click payroll reports with present days, LOP days, OT hours, and late entries â€” exportable to your payroll system.",
        metric: "1-click",
        metricLabel: "Payroll Export",
      },
    ],
    useCases: [
      {
        industry: "BPO",
        challenge: "800 employees across 3 shifts with attendance tracked on paper â€” payroll errors every month.",
        solution:
          "Deployed biometric-integrated attendance system with shift rostering and automated payroll data export.",
        outcome: "Payroll errors dropped to zero. HR team saves 2 full days every payroll cycle.",
      },
      {
        industry: "School",
        challenge: "Teachers marking attendance in registers, late submissions causing admin chaos.",
        solution:
          "Mobile attendance app for teachers with class-wise student marking, absentee SMS to parents, and monthly reports.",
        outcome: "100% on-time attendance submission. Parent satisfaction improved significantly.",
      },
    ],
    stats: [
      { value: "4 Modes", label: "Capture Methods" },
      { value: "Zero", label: "Payroll Errors" },
      { value: "1-click", label: "Payroll Export" },
      { value: "Real-time", label: "Presence Visibility" },
    ],
    technologies: ["React Native", "Node.js", "PostgreSQL", "ZKTeco SDK", "Firebase", "AWS", "Redis"],
    process: [
      { step: "01", title: "Configure", description: "Shift patterns, leave types, holiday calendars, and overtime rules configured for your policies." },
      { step: "02", title: "Integrate", description: "Biometric devices connected and mobile app enrolled for all employees." },
      { step: "03", title: "Test", description: "Pilot run with one department before full rollout to catch edge cases." },
      { step: "04", title: "Go Live", description: "Full deployment with manager and employee training and on-site support for first payroll cycle." },
    ],
    cta: { primary: "Modernise Attendance", secondary: "Get a Demo" },
  },

  // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  // CATEGORY 5: PRODUCTIVITY & COMMUNICATION
  // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

  {
    slug: "subscription-billing-platform",
    title: "Subscription Billing Platform",
    tagline: "Bill Automatically — Grow Recurring Revenue",
    description: "End-to-end subscription billing systems that handle plan management, automated renewals, dunning, and revenue recognition for subscription businesses.",
    heroGradient: "from-green-900 via-emerald-900 to-teal-900",
    accentColor: "green",
    icon: "M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z",
    overview: "Managing subscriptions manually — tracking renewal dates, chasing failed payments, handling upgrades and downgrades — doesn't scale. We build subscription billing platforms that automate the entire recurring revenue lifecycle: plan creation, automated billing, failed payment recovery, proration, and revenue dashboards that keep your MRR growing.",
    capabilities: [
      { title: "Flexible Plan Management", description: "Create monthly, annual, usage-based, tiered, and freemium plans with proration logic and upgrade/downgrade handling.", metric: "5+", metricLabel: "Billing Models" },
      { title: "Automated Payment Collection", description: "Recurring payments collected automatically via Stripe, Razorpay, or UPI — with automatic retries on failure.", metric: "99%", metricLabel: "Collection Rate" },
      { title: "Smart Dunning Engine", description: "Intelligent failed payment recovery with escalating retry intervals, customer notifications, and grace period management.", metric: "60%", metricLabel: "Revenue Recovered" },
      { title: "Revenue Analytics", description: "Real-time MRR, ARR, churn, and expansion revenue dashboards — the financial pulse of your subscription business.", metric: "Real-time", metricLabel: "Revenue Metrics" },
    ],
    useCases: [
      { industry: "SaaS", challenge: "Founder manually chasing renewal invoices for 200 customers every month — 3 days of work.", solution: "Full subscription billing automation with Stripe, auto-invoicing, dunning sequences, and MRR dashboard.", outcome: "Billing became zero-touch. Failed payment recovery rate: 58%. Monthly admin time saved: 3 days." },
      { industry: "EdTech", challenge: "Online course platform offering no subscription option — losing recurring revenue to competitors.", solution: "Subscription billing system with monthly access plans, annual discounts, and cohort enrolment billing.", outcome: "MRR grew from zero to ₹6.2L in 4 months from subscription plans alone." },
      { industry: "B2B SaaS", challenge: "Usage-based billing calculated manually in spreadsheets every month — prone to errors and disputes.", solution: "Usage-metered billing platform that tracks API calls, seats, or storage and bills automatically at month-end.", outcome: "Zero billing disputes. Finance team freed from manual calculations entirely." },
    ],
    stats: [
      { value: "99%", label: "Collection Rate" },
      { value: "60%", label: "Failed Payment Recovery" },
      { value: "5+", label: "Billing Models" },
      { value: "Real-time", label: "MRR Visibility" },
    ],
    technologies: ["Stripe", "Razorpay", "Node.js", "PostgreSQL", "React", "Prisma", "Resend"],
    process: [
      { step: "01", title: "Plan Design", description: "We design your subscription plan structure, pricing tiers, and proration logic before building." },
      { step: "02", title: "Integrate", description: "Payment gateway integrated with your product — webhooks, subscription lifecycle events all handled." },
      { step: "03", title: "Dunning", description: "Failed payment recovery sequences configured and tested against real failure scenarios." },
      { step: "04", title: "Reporting", description: "Revenue dashboards connected to live billing data before you onboard your first subscriber." },
    ],
    cta: { primary: "Automate My Billing", secondary: "See Billing Platform Demo" },
  },

  {
    slug: "tax-management-tools",
    title: "Tax Management Tools",
    tagline: "Stay Compliant — Without the Tax Season Panic",
    description: "Custom tax management tools that automate GST calculation, return filing data preparation, and tax reporting so compliance is always under control.",
    heroGradient: "from-slate-900 via-gray-900 to-zinc-900",
    accentColor: "slate",
    icon: "M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm-1 7V3.5L18.5 9H13zm-2 8H7v-2h4v2zm2-4H7v-2h6v2zm0-4H7V7h6v2z",
    overview: "Tax compliance is non-negotiable — but it doesn't have to be painful. We build tax management tools that automatically calculate GST across transaction types, generate GSTR-ready reports, reconcile input tax credit, and flag discrepancies before your CA has to deal with them. Stay audit-ready every day, not just at year-end.",
    capabilities: [
      { title: "Automated GST Calculation", description: "GST calculated correctly on every transaction — CGST, SGST, IGST, and exemptions applied based on your product/service catalogue.", metric: "Zero", metricLabel: "Tax Errors" },
      { title: "GSTR Return Preparation", description: "GSTR-1, GSTR-3B, and annual return data auto-compiled and exported in the exact format for portal upload.", metric: "1-click", metricLabel: "Return Ready" },
      { title: "Input Tax Credit Reconciliation", description: "Auto-match purchase invoices against GSTR-2A to identify ITC mismatches before filing.", metric: "100%", metricLabel: "ITC Reconciled" },
      { title: "Multi-State Compliance", description: "Handle inter-state supplies, reverse charge mechanism, e-way bill generation, and HSN code management across all GST rules.", metric: "All India", metricLabel: "Multi-State Ready" },
    ],
    useCases: [
      { industry: "Manufacturing", challenge: "Finance team spending 5 days each month manually compiling GST data from sales and purchase records.", solution: "Automated GST calculation and GSTR preparation tool integrated with existing ERP and billing system.", outcome: "Monthly compliance work reduced from 5 days to 4 hours. Zero penalties in 2 years post-implementation." },
      { industry: "E-commerce", challenge: "Marketplace seller managing GST across 8 product categories with different rates — frequent errors.", solution: "Category-mapped GST engine with automatic invoice generation, quarterly summary, and GSTR-1 export.", outcome: "Category-wise GST accuracy: 100%. Seller onboarding to the tool took 2 hours per merchant." },
      { industry: "Services", challenge: "Consulting firm manually preparing GST invoices and reconciling ITC against vendor bills.", solution: "Services-specific GST tool with professional invoice generation, ITC tracker, and monthly reconciliation.", outcome: "ITC claims improved by ₹3.2L per quarter previously missed due to manual reconciliation gaps." },
    ],
    stats: [
      { value: "Zero", label: "Tax Errors" },
      { value: "1-click", label: "Return Ready" },
      { value: "100%", label: "ITC Reconciled" },
      { value: "All India", label: "GST Compliant" },
    ],
    technologies: ["Node.js", "React", "PostgreSQL", "PDFKit", "Redis", "Tally API", "GSTIN API"],
    process: [
      { step: "01", title: "Catalogue", description: "We map every product and service to the correct HSN/SAC code and applicable GST rate." },
      { step: "02", title: "Integrate", description: "Tool connected to your billing, purchase, and inventory systems for automatic data capture." },
      { step: "03", title: "Validate", description: "Test-run against 3 months of historical data to validate calculation accuracy before go-live." },
      { step: "04", title: "File Ready", description: "Monthly return preparation workflow configured so your CA receives a ready-to-file package." },
    ],
    cta: { primary: "Automate My Tax Compliance", secondary: "Book a Tax Tool Demo" },
  },

  {
    slug: "budget-planning-system",
    title: "Budget Planning Systems",
    tagline: "Plan Your Finances — Control Your Future",
    description: "Digital budget planning systems that replace spreadsheets with collaborative, real-time budgeting, scenario modelling, and variance tracking.",
    heroGradient: "from-indigo-900 via-violet-900 to-purple-900",
    accentColor: "indigo",
    icon: "M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z",
    overview: "Annual budgeting in Excel with 15 versions floating around email is a recipe for bad decisions. We build digital budget planning systems where teams submit budgets into a single platform, finance consolidates and approves in real time, and actuals are tracked automatically against plan throughout the year — with variance alerts before overspend happens.",
    capabilities: [
      { title: "Collaborative Budget Submission", description: "Department heads submit budgets in structured templates — finance reviews, queries, and approves without a single email.", metric: "10x", metricLabel: "Faster Consolidation" },
      { title: "Scenario Modelling", description: "Build optimistic, base, and conservative scenarios side-by-side and model the impact of key assumptions changing.", metric: "Unlimited", metricLabel: "Scenarios" },
      { title: "Actuals vs Budget Tracking", description: "Actual spend pulled from your accounting software nightly — variance vs budget visible to every department head in real time.", metric: "Real-time", metricLabel: "Variance Tracking" },
      { title: "Reforecast & Rolling Budget", description: "Mid-year reforecasting tool lets you update outlook without losing original budget targets for year-end comparison.", metric: "Flexible", metricLabel: "Reforecast Ready" },
    ],
    useCases: [
      { industry: "Mid-size Enterprise", challenge: "Annual budget process taking 6 weeks with 40+ spreadsheets emailed between finance and department heads.", solution: "Centralised budget platform with department submission portals, consolidated views, and approval workflows.", outcome: "Budget cycle shortened to 2 weeks. Zero version control issues. Finance team's review time halved." },
      { industry: "Retail Chain", challenge: "Store managers overspending on discretionary budgets with no visibility until month-end reports.", solution: "Real-time budget tracker per store with WhatsApp alerts when spend crosses 80% of monthly budget.", outcome: "Budget overruns reduced by 65%. Finance team intervenes before — not after — overspend happens." },
      { industry: "Non-Profit", challenge: "Project budgets managed across multiple donor-funded initiatives in separate spreadsheets.", solution: "Donor-project budget tracking with ring-fenced funds, grant utilisation reports, and compliance documentation.", outcome: "Annual audit preparation time cut from 3 weeks to 3 days. Zero compliance findings post-implementation." },
    ],
    stats: [
      { value: "10x", label: "Faster Consolidation" },
      { value: "Real-time", label: "Variance Tracking" },
      { value: "65%", label: "Overspend Reduction" },
      { value: "Unlimited", label: "Scenarios" },
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Redis", "Tally API", "Excel Export", "Recharts"],
    process: [
      { step: "01", title: "Structure", description: "We design your chart of accounts, cost centres, and budget hierarchy before any development." },
      { step: "02", title: "Build", description: "Submission portal, approval workflows, and actuals integration built to your exact process." },
      { step: "03", title: "Load", description: "Historical actuals and prior year budgets loaded for baseline comparison on day one." },
      { step: "04", title: "Train", description: "Finance team and department heads trained — most are self-sufficient after a 30-minute walkthrough." },
    ],
    cta: { primary: "Modernise My Budgeting", secondary: "See Budget Tool Demo" },
  },

  {
    slug: "expense-tracking",
    title: "Expense Tracking Solutions",
    tagline: "Every Rupee Accounted For — Automatically",
    description: "Digital expense management systems that replace paper receipts with automated capture, approval workflows, policy enforcement, and real-time budget visibility.",
    heroGradient: "from-rose-900 via-red-900 to-indigo-900",
    accentColor: "rose",
    icon: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8h16v10zm-7-7h5v2h-5v-2zm-6 4h4v2H7v-2zm0-4h4v2H7V11zm6 4h5v2h-5v-2z",
    overview: "Expense reports submitted two weeks late on crumpled receipts drain your finance team and cloud your cash flow visibility. We build digital expense tracking systems that let employees capture receipts on mobile, route claims through approval workflows, enforce spending policies automatically, and sync approved expenses directly to your accounting software.",
    capabilities: [
      { title: "Mobile Receipt Capture", description: "Employees photograph receipts on their phone — OCR automatically extracts amount, date, vendor, and category.", metric: "OCR", metricLabel: "Auto-Extraction" },
      { title: "Policy Enforcement", description: "Spending limits, category restrictions, and receipt requirements enforced automatically — non-compliant claims flagged instantly.", metric: "Zero", metricLabel: "Policy Violations" },
      { title: "Approval Workflow", description: "Claims routed to the right approver based on amount, department, and expense type — with mobile approval.", metric: "50%", metricLabel: "Faster Reimbursement" },
      { title: "Accounting Integration", description: "Approved expenses synced directly to Tally, QuickBooks, or Zoho Books — no manual re-entry.", metric: "Instant", metricLabel: "Accounting Sync" },
    ],
    useCases: [
      { industry: "Consulting", challenge: "Field consultants submitting handwritten expense vouchers 3 weeks late — finance reconciliation a monthly nightmare.", solution: "Mobile expense app with receipt scan, category selection, and digital submission — desktop approval workflow for managers.", outcome: "Average claim submission time: 3 weeks → same day. Reimbursement cycle cut from 30 days to 7 days." },
      { industry: "Construction", challenge: "Site supervisors advancing petty cash with no digital record causing audit failures.", solution: "Petty cash digitisation with mobile expense logging, photo receipts, and project-code tagging.", outcome: "100% of site expenses tracked digitally. Audit findings related to petty cash: zero." },
      { industry: "Sales Team", challenge: "No visibility into sales travel and entertainment spend until month-end — no ability to control overspend.", solution: "Real-time expense dashboard with budget vs actual tracking per sales rep, region, and category.", outcome: "Sales expense overruns identified mid-month for the first time. Annual expense budget adherence at 94%." },
    ],
    stats: [
      { value: "OCR", label: "Auto-Capture" },
      { value: "50%", label: "Faster Reimbursements" },
      { value: "Zero", label: "Policy Violations" },
      { value: "Instant", label: "Accounting Sync" },
    ],
    technologies: ["React Native", "Node.js", "PostgreSQL", "Tesseract OCR", "AWS S3", "Tally API", "Firebase"],
    process: [
      { step: "01", title: "Policy Map", description: "We document your expense categories, spending limits, approval hierarchy, and accounting codes." },
      { step: "02", title: "Build", description: "Mobile app and web portal built with your exact approval workflow and policy rules baked in." },
      { step: "03", title: "Integrate", description: "Accounting system sync configured and tested with a sample batch of real expenses." },
      { step: "04", title: "Rollout", description: "Employee onboarding with a 15-minute app walkthrough — most are self-sufficient from day one." },
    ],
    cta: { primary: "Digitise My Expenses", secondary: "See Expense App Demo" },
  },

  {
    slug: "work-hour-tracking",
    title: "Work Hour Tracking Systems",
    tagline: "Know Where Every Hour Goes — And Bill For Every One",
    description: "Work hour tracking systems for teams, freelancers, and agencies that capture billable hours, project time allocation, and productivity analytics automatically.",
    heroGradient: "from-teal-900 via-cyan-900 to-sky-900",
    accentColor: "teal",
    icon: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z",
    overview: "Time is the most valuable asset in any service business — but most businesses can't tell you where it actually goes. We build work hour tracking systems that let employees log time against projects and tasks with minimal friction, generate accurate timesheets, calculate billable vs non-billable ratios, and produce client invoices automatically from approved hours.",
    capabilities: [
      { title: "Frictionless Time Logging", description: "One-click timers, manual entry, and calendar-based time import — employees log time in seconds, not minutes.", metric: "< 30s", metricLabel: "Per Entry" },
      { title: "Project & Task Allocation", description: "Time logged against specific projects, tasks, and clients — giving managers precise cost and profitability per engagement.", metric: "Real-time", metricLabel: "Project Costs" },
      { title: "Billable Hours Reports", description: "Automatic timesheet generation, billable vs non-billable analysis, and utilisation rates per employee and team.", metric: "1-click", metricLabel: "Invoice Ready" },
      { title: "Payroll Integration", description: "Approved timesheets exported directly to payroll — no manual compilation of hours for contract or hourly staff.", metric: "Automated", metricLabel: "Payroll Ready" },
    ],
    useCases: [
      { industry: "Digital Agency", challenge: "Agency billing clients on monthly retainers but unable to prove hours delivered — client disputes escalating.", solution: "Detailed time tracking per client and project with team-level timesheets and client-shareable reports.", outcome: "Client disputes eliminated. Agency discovered 22% of time was being given away unbilled." },
      { industry: "Law Firm", challenge: "Associates billing by the hour but tracking time in notebooks — significant under-billing.", solution: "Legal time tracking system with matter codes, activity types, and automatic timesheet generation for billing.", outcome: "Billable hours captured increased by 18%. Annual revenue increased by ₹28L from the same team." },
      { industry: "IT Staffing", challenge: "Contract staff timesheets collected via email, manually verified, and fed to payroll — 2-day process.", solution: "Digital timesheet portal with manager approval workflow and direct payroll data export.", outcome: "Timesheet-to-payroll cycle cut from 2 days to 3 hours. Zero timesheet disputes with clients." },
    ],
    stats: [
      { value: "< 30s", label: "Per Time Entry" },
      { value: "18%", label: "More Billable Hours" },
      { value: "1-click", label: "Invoice Generation" },
      { value: "Real-time", label: "Project Cost Visibility" },
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Redis", "PDFKit", "Google Calendar API", "Tally API"],
    process: [
      { step: "01", title: "Configure", description: "Projects, clients, task categories, and billing rates configured to match your business model." },
      { step: "02", title: "Integrate", description: "Calendar, project management, and payroll systems connected for seamless data flow." },
      { step: "03", title: "Rollout", description: "Team onboarded with browser extension or mobile app — adoption typically hits 90% in week one." },
      { step: "04", title: "Report", description: "Utilisation reports and billable hour dashboards go live — management has project profitability from day one." },
    ],
    cta: { primary: "Track My Team's Hours", secondary: "See Time Tracking Demo" },
  },

  {
    slug: "order-shipment-tracking",
    title: "Order & Shipment Tracking Systems",
    tagline: "Full Visibility — From Factory to Customer Door",
    description: "End-to-end order and shipment tracking systems that give customers real-time visibility and operations teams proactive control over every shipment.",
    heroGradient: "from-blue-900 via-indigo-900 to-violet-900",
    accentColor: "blue",
    icon: "M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z",
    overview: "Customers who can't track their order will call your support team. Operations teams who can't see their shipments can't fix problems before they become complaints. We build order and shipment tracking systems that give customers a real-time tracking portal and operations teams a live dispatch dashboard — with automated notifications at every status change.",
    capabilities: [
      { title: "Real-time Shipment Tracking", description: "Live tracking from dispatch to delivery with GPS updates, status milestones, and estimated delivery time.", metric: "Real-time", metricLabel: "Shipment Visibility" },
      { title: "Multi-Courier Integration", description: "Shiprocket, Delhivery, BlueDart, FedEx, and custom fleet all tracked in one unified panel — no portal switching.", metric: "10+", metricLabel: "Couriers Integrated" },
      { title: "Customer Notifications", description: "Automated WhatsApp, email, and SMS updates at dispatch, out-for-delivery, and delivered milestones.", metric: "70%", metricLabel: "Support Call Reduction" },
      { title: "Exception Alerting", description: "SLA breach alerts, delay predictions, and failed delivery notifications sent to ops team before customers complain.", metric: "Proactive", metricLabel: "Issue Detection" },
    ],
    useCases: [
      { industry: "E-commerce", challenge: "Support team handling 400+ 'Where is my order?' queries daily — all resolvable with basic tracking.", solution: "Customer-facing tracking portal with WhatsApp tracking link sent automatically at dispatch.", outcome: "WISMO support queries reduced by 72%. Customer satisfaction scores improved to 4.5/5." },
      { industry: "B2B Distribution", challenge: "Distributors shipping 200 orders daily with no visibility into delivery status until customer calls.", solution: "Operations dashboard aggregating all courier tracking data with SLA monitoring and exception alerts.", outcome: "Delivery SLA compliance improved from 78% to 94%. Exception resolution time cut by 60%." },
      { industry: "Cold Chain", challenge: "Temperature-sensitive shipments with no real-time monitoring — frequent quality complaints and wastage.", solution: "IoT-integrated tracking system with temperature logging, deviation alerts, and chain-of-custody reporting.", outcome: "Temperature deviations detected in transit. Spoilage claims reduced by 85%." },
    ],
    stats: [
      { value: "Real-time", label: "Live Tracking" },
      { value: "10+", label: "Couriers Integrated" },
      { value: "72%", label: "Support Calls Reduced" },
      { value: "Proactive", label: "Exception Alerts" },
    ],
    technologies: ["React", "Node.js", "WebSockets", "PostgreSQL", "Shiprocket API", "Twilio", "Redis"],
    process: [
      { step: "01", title: "Integrate", description: "Courier APIs connected and webhook events mapped to your order management system." },
      { step: "02", title: "Notifications", description: "Customer notification templates designed and tested across WhatsApp, email, and SMS channels." },
      { step: "03", title: "Dashboard", description: "Operations dashboard configured with SLA rules, alert thresholds, and escalation contacts." },
      { step: "04", title: "Go Live", description: "Tracking portal embedded in your website or sent as a branded link with every order confirmation." },
    ],
    cta: { primary: "Build My Tracking System", secondary: "See Tracking Demo" },
  },

  {
    slug: "helpdesk-ticketing-system",
    title: "Helpdesk & Ticketing System",
    tagline: "Every Issue Tracked â€” Nothing Slips Through",
    description:
      "Custom helpdesk platforms that capture, route, and resolve customer and internal support tickets with SLA enforcement and full audit trails.",
    heroGradient: "from-blue-900 via-sky-900 to-cyan-900",
    accentColor: "blue",
    icon: "M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z",
    overview:
      "When support requests arrive via email, WhatsApp, phone, and social media simultaneously, things fall through the cracks. Our custom helpdesk systems centralise every request into a single queue with automatic classification, routing, SLA timers, and escalation rules. Your team resolves faster, customers feel heard, and management gets the metrics to keep improving.",
    capabilities: [
      {
        title: "Omnichannel Ticket Capture",
        description:
          "Tickets created automatically from email, WhatsApp, web forms, and phone calls â€” all routed into one unified queue.",
        metric: "5+ Channels",
        metricLabel: "All Sources Captured",
      },
      {
        title: "SLA Management & Escalation",
        description:
          "Define response and resolution SLAs by ticket type and customer tier. Automatic escalation when timers breach.",
        metric: "Auto",
        metricLabel: "SLA Escalation",
      },
      {
        title: "Knowledge Base Integration",
        description:
          "Agents get AI-suggested responses from your knowledge base. Customers get self-service deflection before tickets are created.",
        metric: "40%",
        metricLabel: "Deflection Rate",
      },
      {
        title: "CSAT & Performance Analytics",
        description:
          "Post-resolution customer satisfaction surveys, agent performance reports, and trend analysis to identify systemic issues.",
        metric: "Full",
        metricLabel: "Team Visibility",
      },
    ],
    useCases: [
      {
        industry: "SaaS",
        challenge: "Support team managing 200+ daily tickets across email, Intercom, and WhatsApp with no unified view.",
        solution:
          "Built a custom helpdesk aggregating all channels, with AI-suggested responses and SLA dashboards.",
        outcome: "First response time improved from 6 hours to 47 minutes. CSAT score reached 4.6/5.",
      },
      {
        industry: "Manufacturing",
        challenge: "Internal IT helpdesk with no ticket system â€” issues raised verbally, frequently forgotten.",
        solution:
          "Deployed internal helpdesk with department-based routing, priority tiers, and monthly SLA reports to management.",
        outcome: "IT issue resolution time dropped by 55%. Management now has data to justify IT headcount decisions.",
      },
    ],
    stats: [
      { value: "5+", label: "Source Channels" },
      { value: "40%", label: "Ticket Deflection" },
      { value: "55%", label: "Faster Resolution" },
      { value: "SLA", label: "Always Enforced" },
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Redis", "OpenAI", "Twilio", "SendGrid"],
    process: [
      { step: "01", title: "Map", description: "We document every support channel, ticket category, and SLA expectation across your organisation." },
      { step: "02", title: "Configure", description: "Routing rules, team queues, SLAs, and escalation paths set up before training begins." },
      { step: "03", title: "Integrate", description: "Email, WhatsApp, and web form connectors tested end-to-end before launch." },
      { step: "04", title: "Optimise", description: "Monthly ticket analysis sessions to tune routing, improve deflection, and identify training gaps." },
    ],
    cta: { primary: "Build My Helpdesk", secondary: "See Helpdesk Demo" },
  },

  {
    slug: "appointment-booking-system",
    title: "Appointment Booking System",
    tagline: "Book Smart â€” Reduce No-Shows, Fill Every Slot",
    description:
      "Online appointment booking systems with calendar sync, automated reminders, and payment collection built for any service business.",
    heroGradient: "from-violet-900 via-purple-900 to-pink-900",
    accentColor: "violet",
    icon: "M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z",
    overview:
      "Phone-based appointment booking is inefficient, error-prone, and unavailable outside business hours. We build smart booking systems that let customers self-schedule 24/7, send automatic reminders to reduce no-shows, and give staff a clean calendar view with zero double-bookings. From clinics and salons to consultants and gyms, we customise for your exact workflow.",
    capabilities: [
      {
        title: "24/7 Self-Booking",
        description:
          "Customers book, reschedule, and cancel from your website or WhatsApp â€” no phone call, no waiting, no staff needed.",
        metric: "24/7",
        metricLabel: "Always Bookable",
      },
      {
        title: "Calendar Sync",
        description:
          "Two-way sync with Google Calendar and Outlook â€” staff never double-book and always see their day in their preferred tool.",
        metric: "2-way",
        metricLabel: "Calendar Sync",
      },
      {
        title: "Automated Reminders",
        description:
          "WhatsApp and SMS reminders 24h and 2h before appointment with one-tap confirm, reschedule, or cancel.",
        metric: "60%",
        metricLabel: "No-Show Reduction",
      },
      {
        title: "Pre-Booking Payments",
        description:
          "Collect full payment or deposits at booking time to confirm intent â€” integrated with Razorpay and UPI.",
        metric: "Zero",
        metricLabel: "Unpaid No-Shows",
      },
    ],
    useCases: [
      {
        industry: "Dermatology Clinic",
        challenge: "Receptionist handling 60+ calls/day for bookings with frequent scheduling errors.",
        solution:
          "Online booking system with doctor-wise availability, service selection, and automated reminders.",
        outcome: "Receptionist call volume reduced by 70%. No-show rate dropped from 22% to 7%.",
      },
      {
        industry: "Fitness Studio",
        challenge: "Class bookings managed via WhatsApp group causing confusion and overbooking.",
        solution:
          "Class booking platform with capacity limits, waitlist, advance payment, and class credits.",
        outcome: "Zero overbookings. Revenue improved as cancellations captured by automatic waitlist filling.",
      },
    ],
    stats: [
      { value: "24/7", label: "Self-Booking Available" },
      { value: "60%", label: "No-Show Reduction" },
      { value: "70%", label: "Fewer Incoming Calls" },
      { value: "Zero", label: "Double Bookings" },
    ],
    technologies: ["React", "Node.js", "Google Calendar API", "Razorpay", "Twilio", "PostgreSQL", "Redis"],
    process: [
      { step: "01", title: "Configure", description: "Services, durations, staff, availability rules, and buffer times set up precisely." },
      { step: "02", title: "Integrate", description: "Calendar sync, payment gateway, and reminder channels tested end-to-end." },
      { step: "03", title: "Brand", description: "Booking page styled to match your brand â€” embeddable in your website or as a standalone link." },
      { step: "04", title: "Launch", description: "Staff trained on the admin calendar view and customer-facing link activated." },
    ],
    cta: { primary: "Set Up Booking System", secondary: "Try Demo Booking" },
  },

  // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  // CATEGORY 6: INDUSTRY-SPECIFIC PLATFORMS
  // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

  {
    slug: "live-chat-system",
    title: "Live Chat Systems",
    tagline: "Be There When Customers Need You — Instantly",
    description: "Custom live chat systems that connect your support and sales teams directly with website visitors and app users in real time.",
    heroGradient: "from-blue-900 via-sky-900 to-cyan-900",
    accentColor: "blue",
    icon: "M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z",
    overview: "Website visitors who can't get a quick answer leave — and they don't come back. We build custom live chat systems that let your team engage prospects and customers in real time, route conversations to the right department, capture lead data automatically, and hand off to AI chatbot when agents are unavailable. Every conversation becomes a captured opportunity.",
    capabilities: [
      { title: "Real-time Messaging", description: "Sub-second message delivery via WebSockets — chat feels as fast as WhatsApp for both your agents and your customers.", metric: "< 1s", metricLabel: "Message Delivery" },
      { title: "Smart Routing", description: "Incoming chats routed to the right team based on page URL, customer segment, or chatbot pre-qualification answers.", metric: "Auto", metricLabel: "Intelligent Routing" },
      { title: "Agent Dashboard", description: "Agents manage multiple simultaneous chats with full conversation history, canned responses, and file sharing.", metric: "5x", metricLabel: "Agent Efficiency" },
      { title: "CRM Integration", description: "Every conversation logged to your CRM automatically — leads captured, contacts created, and deals updated without agent data entry.", metric: "Auto", metricLabel: "CRM Sync" },
    ],
    useCases: [
      { industry: "E-commerce", challenge: "Visitors abandoning product pages with purchase intent questions unanswered — high bounce on high-value pages.", solution: "Proactive chat triggers on product pages above ₹5,000 with purchase-assist offer from agent.", outcome: "Assisted conversions up 28%. Average order value from chat-assisted sales: 42% higher than unassisted." },
      { industry: "B2B SaaS", challenge: "Trial users getting stuck during onboarding with no way to ask for help inside the product.", solution: "In-app live chat with contextual routing to the relevant product specialist based on current page.", outcome: "Trial-to-paid conversion improved by 19%. Time-to-activation for new trials cut by 2 days." },
      { industry: "Healthcare", challenge: "Patients calling to ask basic appointment and insurance questions — lines jammed, staff frustrated.", solution: "Live chat on clinic website routing patient queries to front desk — with chatbot handling FAQs after hours.", outcome: "Phone call volume reduced by 45%. Patient satisfaction with response speed: 4.6/5." },
    ],
    stats: [
      { value: "< 1s", label: "Message Delivery" },
      { value: "28%", label: "Conversion Lift" },
      { value: "45%", label: "Phone Load Reduction" },
      { value: "Auto", label: "CRM Sync" },
    ],
    technologies: ["React", "Node.js", "WebSockets", "PostgreSQL", "Redis", "OpenAI", "SendGrid"],
    process: [
      { step: "01", title: "Configure", description: "Team queues, routing rules, canned responses, and business hours configured before launch." },
      { step: "02", title: "Integrate", description: "CRM, helpdesk, and notification systems connected so every chat is logged where it matters." },
      { step: "03", title: "Embed", description: "Chat widget installed on your website or in-app with custom branding and proactive trigger rules." },
      { step: "04", title: "Train", description: "Agents trained on the dashboard — most are productive within 30 minutes." },
    ],
    cta: { primary: "Add Live Chat to My Site", secondary: "See Live Chat Demo" },
  },

  {
    slug: "team-communication-platform",
    title: "Team Communication Platforms",
    tagline: "Your Team — Always Aligned, Always Informed",
    description: "Custom internal communication platforms that centralise team messaging, announcements, and collaboration — built around your workflows.",
    heroGradient: "from-violet-900 via-purple-900 to-indigo-900",
    accentColor: "violet",
    icon: "M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z",
    overview: "Team communication scattered across WhatsApp groups, email threads, and informal calls is a productivity killer. We build structured internal communication platforms that organise conversations by department, project, or topic — with announcements, file sharing, notifications, and task linking in one place. Your team knows what's happening — without being overwhelmed.",
    capabilities: [
      { title: "Organised Channels", description: "Department and project channels keep conversations structured — no more searching WhatsApp for the file someone sent last Tuesday.", metric: "Zero", metricLabel: "Lost Messages" },
      { title: "Broadcast Announcements", description: "Leadership can push important announcements to the whole company or specific departments — with read receipts.", metric: "100%", metricLabel: "Reach Rate" },
      { title: "File & Knowledge Sharing", description: "Files, SOPs, and documents shared in context — searchable forever, not buried in chat history.", metric: "Instant", metricLabel: "Document Access" },
      { title: "Notification Control", description: "Employees set their own notification preferences — reducing noise while ensuring critical messages always get through.", metric: "Smart", metricLabel: "Notifications" },
    ],
    useCases: [
      { industry: "Retail Chain", challenge: "Store managers receiving policy updates via WhatsApp groups — no confirmation of receipt, frequent non-compliance.", solution: "Internal comms platform with announcement broadcasts, mandatory acknowledgement, and read tracking.", outcome: "Policy compliance improved from 71% to 96%. HR team has proof of communication for every update." },
      { industry: "Construction", challenge: "30 site supervisors across 5 projects sharing updates in one large WhatsApp group — total chaos.", solution: "Project-segmented communication platform with site-specific channels, photo sharing, and daily report templates.", outcome: "Cross-project confusion eliminated. Daily status reporting time per supervisor dropped from 45 min to 10 min." },
      { industry: "Healthcare", challenge: "Clinical staff, admin, and management communicating on personal WhatsApp — no audit trail, data privacy risk.", solution: "HIPAA-friendly internal platform with department channels, patient-safe communication, and admin controls.", outcome: "Personal device usage for work communication eliminated. Audit compliance achieved." },
    ],
    stats: [
      { value: "Zero", label: "Lost Messages" },
      { value: "100%", label: "Announcement Reach" },
      { value: "96%", label: "Policy Compliance" },
      { value: "Instant", label: "Document Access" },
    ],
    technologies: ["React", "Node.js", "WebSockets", "PostgreSQL", "Redis", "AWS S3", "Firebase FCM"],
    process: [
      { step: "01", title: "Structure", description: "We design your channel hierarchy — departments, projects, and cross-functional groups — before building." },
      { step: "02", title: "Build", description: "Platform built with your org structure, roles, and notification policies configured." },
      { step: "03", title: "Migrate", description: "Key documents and SOPs migrated into the platform on day one — not a blank slate." },
      { step: "04", title: "Onboard", description: "Company-wide rollout with department champions trained to guide their teams." },
    ],
    cta: { primary: "Build My Internal Comms", secondary: "See Platform Demo" },
  },

  {
    slug: "meeting-scheduling-system",
    title: "Meeting & Scheduling Systems",
    tagline: "Less Time Scheduling — More Time Doing",
    description: "Smart meeting and scheduling platforms that eliminate back-and-forth, automate calendar management, and reduce no-shows for teams and service businesses.",
    heroGradient: "from-emerald-900 via-teal-900 to-cyan-900",
    accentColor: "emerald",
    icon: "M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z",
    overview: "Finding a meeting time that works for multiple people is one of the most frustrating wastes of working time. We build smart scheduling systems that let contacts book directly into your calendar based on live availability, handle multi-person scheduling coordination, send automated reminders, and sync with Google Calendar and Outlook — so your team focuses on meetings, not arranging them.",
    capabilities: [
      { title: "Availability-Based Scheduling", description: "Share a link — contacts see your real availability and book in one click. No email chains. No double bookings.", metric: "Zero", metricLabel: "Scheduling Emails" },
      { title: "Round-Robin Assignment", description: "Inbound meeting requests distributed automatically across your team by availability, workload, or round-robin rules.", metric: "Fair", metricLabel: "Workload Distribution" },
      { title: "Automated Reminders", description: "WhatsApp, email, and SMS reminders sent 24h and 1h before every meeting — with one-tap rescheduling link.", metric: "50%", metricLabel: "No-Show Reduction" },
      { title: "CRM & Workflow Integration", description: "Every scheduled meeting logged to your CRM automatically — with pre-meeting prep notes and post-meeting follow-up triggers.", metric: "Auto", metricLabel: "CRM Logging" },
    ],
    useCases: [
      { industry: "Sales Team", challenge: "SDRs spending 2 hours daily on back-and-forth scheduling with prospects — time stolen from selling.", solution: "Scheduling link integrated into email signatures and LinkedIn outreach — prospects book instantly.", outcome: "Meetings booked per SDR increased 35%. SDR productive selling time reclaimed by 2 hours/day." },
      { industry: "Consulting", challenge: "Partners managing client meeting schedules manually — conflicts, last-minute changes, and no-shows common.", solution: "Partner-specific scheduling pages with buffers, pre-meeting forms, and automated Zoom link generation.", outcome: "Scheduling conflicts eliminated. No-show rate dropped from 18% to 5%. Client satisfaction improved." },
      { industry: "Healthcare", challenge: "Specialist clinic with 8 doctors, each managing their own appointment calendars differently.", solution: "Unified scheduling system with doctor-wise availability, care team routing, and patient reminders.", outcome: "Appointment utilisation improved from 76% to 92%. Reception call volume reduced by 60%." },
    ],
    stats: [
      { value: "Zero", label: "Scheduling Emails" },
      { value: "50%", label: "No-Show Reduction" },
      { value: "35%", label: "More Meetings Booked" },
      { value: "Auto", label: "CRM Logging" },
    ],
    technologies: ["React", "Node.js", "Google Calendar API", "Outlook API", "Zoom SDK", "Twilio", "PostgreSQL"],
    process: [
      { step: "01", title: "Configure", description: "Availability rules, buffer times, meeting types, and team routing logic all set up precisely." },
      { step: "02", title: "Integrate", description: "Calendar sync, CRM, and video conferencing tools connected and tested." },
      { step: "03", title: "Brand", description: "Scheduling pages branded to match your identity — embeddable on your website or as shareable links." },
      { step: "04", title: "Launch", description: "Team trained and scheduling links distributed — usually live within 2 days." },
    ],
    cta: { primary: "Automate My Scheduling", secondary: "Try Scheduling Demo" },
  },

  {
    slug: "resource-management-system",
    title: "Resource Management Systems",
    tagline: "Right People, Right Place, Right Time",
    description: "Digital resource management platforms that give project managers full visibility into team capacity, availability, and allocation across all active projects.",
    heroGradient: "from-amber-900 via-indigo-900 to-red-900",
    accentColor: "amber",
    icon: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z",
    overview: "Overallocated teams burn out. Underutilised teams drain cost. Without visibility into who's working on what and when, project managers guess — and guesses cost money. We build resource management systems that show real-time capacity across your entire team, highlight conflicts before they happen, and help leadership make staffing decisions based on actual data.",
    capabilities: [
      { title: "Capacity Planning", description: "See available vs allocated hours per person, per team, and per project — weeks or months ahead — so you can plan without surprises.", metric: "Real-time", metricLabel: "Capacity View" },
      { title: "Resource Conflict Detection", description: "Automatic alerts when someone is booked beyond capacity — before projects start slipping, not after.", metric: "Proactive", metricLabel: "Conflict Alerts" },
      { title: "Skills-Based Allocation", description: "Match project requirements to team member skill profiles — find the right person for the job in seconds.", metric: "Smart", metricLabel: "Skills Matching" },
      { title: "Utilisation Analytics", description: "Weekly and monthly utilisation rates per person and team — identify who is consistently overloaded or underutilised.", metric: "Full", metricLabel: "Utilisation Reports" },
    ],
    useCases: [
      { industry: "Engineering Firm", challenge: "Project managers unaware of conflicts until engineers started missing deadlines — reactive chaos.", solution: "Resource planning dashboard with multi-project visibility, capacity heatmap, and conflict alerts 4 weeks in advance.", outcome: "Project delivery on-time rate improved from 62% to 88%. Zero resource double-bookings in 12 months." },
      { industry: "Creative Agency", challenge: "Designers and developers constantly over-allocated — burnout and attrition affecting delivery quality.", solution: "Real-time team capacity dashboard with workload balance alerts and project priority weighting.", outcome: "Average weekly overtime hours reduced by 70%. Team attrition dropped from 35% to 12% annually." },
      { industry: "IT Services", challenge: "Account managers promising delivery timelines without checking if the team actually had capacity.", solution: "Client-facing project capacity tool integrated with internal resource allocation — sales and delivery aligned.", outcome: "Overpromising incidents reduced to zero. Customer satisfaction during delivery improved to 4.4/5." },
    ],
    stats: [
      { value: "Real-time", label: "Capacity View" },
      { value: "88%", label: "On-Time Delivery" },
      { value: "70%", label: "Overtime Reduction" },
      { value: "Proactive", label: "Conflict Alerts" },
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Redis", "D3.js", "Google Calendar API", "Recharts"],
    process: [
      { step: "01", title: "Structure", description: "We configure your org hierarchy, project types, skill taxonomies, and allocation rules." },
      { step: "02", title: "Populate", description: "Existing projects and team members loaded with current allocation data for immediate value." },
      { step: "03", title: "Integrate", description: "Connected to your project management and HR systems for live data sync." },
      { step: "04", title: "Train", description: "Project managers and department leads trained on capacity planning workflows." },
    ],
    cta: { primary: "Plan My Resources Better", secondary: "See Resource Dashboard" },
  },

  {
    slug: "internal-collaboration-tools",
    title: "Internal Collaboration Tools",
    tagline: "Work Smarter Together — From Anywhere",
    description: "Custom internal collaboration platforms that bring documents, tasks, wikis, and team communication into a single connected workspace.",
    heroGradient: "from-sky-900 via-blue-900 to-indigo-900",
    accentColor: "sky",
    icon: "M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z",
    overview: "Most teams operate with their knowledge scattered across email, Google Drive folders no one can find, and WhatsApp messages that disappear under new chats. We build internal collaboration platforms that give teams a single source of truth — documents, SOPs, project trackers, and team discussions all connected, searchable, and always up to date.",
    capabilities: [
      { title: "Unified Document Workspace", description: "Live collaborative documents, wikis, and SOPs organised in a searchable library — no more hunting through Drive folders.", metric: "Instant", metricLabel: "Knowledge Access" },
      { title: "Task & Project Tracking", description: "Tasks created from conversations, assigned to owners, and tracked to completion — with status updates visible to every stakeholder.", metric: "Full", metricLabel: "Task Visibility" },
      { title: "Cross-Team Integration", description: "Comments link to tasks, tasks link to projects, projects link to goals — context never gets lost between tools.", metric: "Connected", metricLabel: "No Context Loss" },
      { title: "Access & Permission Control", description: "Granular permissions ensure sensitive documents are visible only to the right people — with full audit trail.", metric: "Secure", metricLabel: "Permission Control" },
    ],
    useCases: [
      { industry: "Product Company", challenge: "Product spec documents in Notion, tasks in Jira, discussions in Slack, decisions in email — nothing connected.", solution: "Unified product workspace linking specs to tasks, tasks to decisions, and decisions to outcome tracking.", outcome: "Onboarding time for new engineers halved. Zero 'I didn't know that was decided' incidents post-implementation." },
      { industry: "Law Firm", challenge: "Case files, precedents, and client correspondence spread across email and local drives — hard to find, easy to lose.", solution: "Legal collaboration platform with matter-based workspaces, document versioning, and client-specific access controls.", outcome: "Document retrieval time reduced from 15 minutes to 30 seconds. Zero document version conflicts." },
      { industry: "Operations Team", challenge: "SOPs written in Word documents on SharePoint no one ever read — audit findings citing outdated procedures.", solution: "Interactive SOP wiki with version history, mandatory read confirmation, and task-linked step validation.", outcome: "SOP compliance improved to 98%. Audit finding count reduced by 80% in first year." },
    ],
    stats: [
      { value: "Instant", label: "Knowledge Access" },
      { value: "Full", label: "Task Visibility" },
      { value: "Connected", label: "Tools & Context" },
      { value: "Secure", label: "Permission Control" },
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Redis", "AWS S3", "WebSockets", "ElasticSearch"],
    process: [
      { step: "01", title: "Audit", description: "We map where your team's knowledge, tasks, and documents currently live and what's missing." },
      { step: "02", title: "Architecture", description: "Workspace structure, permission model, and integration points designed before development." },
      { step: "03", title: "Migrate", description: "Existing documents and SOPs migrated with proper tagging, versioning, and ownership set." },
      { step: "04", title: "Adopt", description: "Department-by-department rollout with champions trained to drive adoption from within each team." },
    ],
    cta: { primary: "Build My Team Workspace", secondary: "See Collaboration Demo" },
  },

  {
    slug: "restaurant-management-system",
    title: "Restaurant Management System",
    tagline: "From Kitchen to Table â€” Fully Digital",
    description:
      "All-in-one restaurant platform: digital menus, POS, KOT, table management, delivery integration, and analytics â€” built for modern F&B.",
    heroGradient: "from-red-900 via-rose-900 to-indigo-900",
    accentColor: "red",
    icon: "M18.06 22.99h1.66c.84 0 1.53-.64 1.63-1.46L23 5.05h-5V1h-1.97v4.05h-4.97l.3 2.34c1.71.47 3.31 1.32 4.27 2.26 1.44 1.42 2.43 2.89 2.43 5.29v8.05zM1 21.99V21h15.03v.99c0 .55-.45 1-1.01 1H2.01c-.56 0-1.01-.45-1.01-1zm15.03-7c0-8.15-15.03-8.15-15.03 0h15.03zM1.02 17h15v2h-15z",
    overview:
      "Running a restaurant means managing chaos â€” tables, orders, kitchen, delivery, and billing simultaneously. We build integrated restaurant management platforms that bring every operation onto a single system: QR-based digital menus, point-of-sale, kitchen order tickets, table reservations, Swiggy/Zomato sync, and daily P&L reports. Less chaos. More covers.",
    capabilities: [
      {
        title: "QR Menu & Digital Ordering",
        description:
          "Customers scan a QR code, browse the menu, and place orders directly from their phone â€” no app download, no waiting.",
        metric: "Zero",
        metricLabel: "App Download Needed",
      },
      {
        title: "Kitchen Order Ticket (KOT) System",
        description:
          "Orders instantly appear on kitchen display screens with time tracking, modification alerts, and course-by-course firing.",
        metric: "Instant",
        metricLabel: "Order to Kitchen",
      },
      {
        title: "Table & Reservation Management",
        description:
          "Visual floor plan with real-time table status, walk-in and pre-booking management, and turning optimisation.",
        metric: "Real-time",
        metricLabel: "Floor Visibility",
      },
      {
        title: "Aggregator Integration",
        description:
          "Swiggy, Zomato, and direct orders all appear in one POS queue â€” no missed online orders, no manual re-entry.",
        metric: "Unified",
        metricLabel: "All Channels",
      },
    ],
    useCases: [
      {
        industry: "QSR Chain",
        challenge: "3-outlet QSR chain with paper KOTs causing kitchen confusion and wrong orders.",
        solution:
          "Deployed digital KOT system with kitchen display screens, order timers, and void management.",
        outcome: "Order errors reduced by 78%. Kitchen speed improved by 25%. Food wastage down significantly.",
      },
      {
        industry: "Fine Dining",
        challenge: "Reservation management via phone calls with no digital record, frequent double-bookings.",
        solution:
          "Custom reservation system with covers management, special requests tracking, and CRM integration.",
        outcome: "Zero double-bookings since launch. Special request fulfilment rate improved to 94%.",
      },
    ],
    stats: [
      { value: "78%", label: "Order Error Reduction" },
      { value: "Instant", label: "Order to Kitchen" },
      { value: "Unified", label: "All Order Channels" },
      { value: "Real-time", label: "P&L Visibility" },
    ],
    technologies: ["React", "React Native", "Node.js", "PostgreSQL", "WebSockets", "Razorpay", "Swiggy API"],
    process: [
      { step: "01", title: "Menu Setup", description: "Full digital menu created with categories, modifiers, combos, and pricing for all channels." },
      { step: "02", title: "Hardware", description: "KOT screens, receipt printers, and POS hardware configured and tested on your network." },
      { step: "03", title: "Train", description: "Kitchen staff, servers, and managers trained on their respective screens in one day." },
      { step: "04", title: "Go Live", description: "On-site support during the first weekend to handle any live service issues instantly." },
    ],
    cta: { primary: "Digitalise My Restaurant", secondary: "See Live Demo" },
  },

  {
    slug: "learning-management-system",
    title: "Learning Management System (LMS)",
    tagline: "Train Anyone â€” Anywhere, at Any Scale",
    description:
      "Custom LMS platforms for corporate training, coaching institutes, and online course creators â€” with rich content delivery, assessments, and certification.",
    heroGradient: "from-sky-900 via-indigo-900 to-violet-900",
    accentColor: "sky",
    icon: "M12 3L1 9l11 6 9-4.91V17h2V9M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z",
    overview:
      "Education and training have moved online â€” and generic platforms like Moodle and Teachable don't fit every need. We build fully custom LMS platforms shaped around your curriculum, your learners, and your business model. From live cohort-based learning to self-paced video courses, corporate compliance training to skill certification â€” we engineer the platform your content deserves.",
    capabilities: [
      {
        title: "Rich Content Delivery",
        description:
          "Video lessons, PDFs, quizzes, SCORM packages, live Zoom sessions, and interactive assignments â€” all in one learner portal.",
        metric: "10+",
        metricLabel: "Content Types",
      },
      {
        title: "Assessments & Certification",
        description:
          "Timed quizzes, auto-graded assignments, and automatically generated certificates on course completion.",
        metric: "Auto",
        metricLabel: "Certificate Generation",
      },
      {
        title: "Learner Progress Tracking",
        description:
          "Instructors see individual completion rates, quiz scores, time-on-content, and engagement heatmaps per student.",
        metric: "Full",
        metricLabel: "Progress Visibility",
      },
      {
        title: "Monetisation Engine",
        description:
          "Course selling with one-time purchase, subscription, batch enrolment, and corporate bulk licensing â€” built in.",
        metric: "4 Models",
        metricLabel: "Revenue Options",
      },
    ],
    useCases: [
      {
        industry: "Corporate Training",
        challenge: "Company with 500 employees needing annual compliance training â€” flying trainers to 8 locations.",
        solution:
          "Built a corporate LMS with role-based course assignment, video content, quizzes, and compliance tracking.",
        outcome: "Training cost reduced by 65%. 100% completion rates with automated reminders. Zero travel cost.",
      },
      {
        industry: "EdTech",
        challenge: "Online coaching founder delivering content via WhatsApp and Google Drive â€” no structure, no tracking.",
        solution:
          "Custom LMS with batch management, video hosting, live class scheduling, and student performance reports.",
        outcome: "Enrolled 1,200 paid students in 90 days. Student satisfaction score: 4.7/5.",
      },
    ],
    stats: [
      { value: "10+", label: "Content Types" },
      { value: "65%", label: "Training Cost Saved" },
      { value: "100%", label: "Completion Tracking" },
      { value: "Auto", label: "Certification" },
    ],
    technologies: ["React", "Node.js", "AWS S3", "CloudFront", "Zoom SDK", "Razorpay", "PostgreSQL"],
    process: [
      { step: "01", title: "Curriculum Map", description: "We structure your course content, learning paths, and assessment frameworks before building." },
      { step: "02", title: "Content Upload", description: "Your existing content migrated and structured into the new platform with proper categorisation." },
      { step: "03", title: "Configure", description: "Enrolment rules, pricing, access controls, and certification criteria all configured." },
      { step: "04", title: "Launch", description: "Beta launch with a small learner cohort to validate UX before full rollout." },
    ],
    cta: { primary: "Build My LMS", secondary: "See LMS Demo" },
  },

  {
    slug: "gym-management-platform",
    title: "Gym Management Platform",
    tagline: "Run Your Gym â€” Not Just Work In It",
    description:
      "All-in-one gym management: member onboarding, membership billing, attendance, trainer management, and retention tools.",
    heroGradient: "from-zinc-900 via-neutral-900 to-stone-900",
    accentColor: "zinc",
    icon: "M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29z",
    overview:
      "Running a gym without the right software means chasing renewals on WhatsApp, tracking attendance in notebooks, and losing members to competitors. We build gym management platforms that automate membership renewals, track attendance via biometrics or QR, manage trainer schedules, and send personalised retention campaigns â€” so you spend your energy on coaching, not admin.",
    capabilities: [
      {
        title: "Membership & Billing Automation",
        description:
          "Membership plans created, sold, and renewed automatically. Payment collected via UPI or card with automated receipts.",
        metric: "Zero",
        metricLabel: "Missed Renewals",
      },
      {
        title: "Attendance & Biometric Integration",
        description:
          "Members check in via biometric, QR code, or app â€” attendance linked directly to membership validity.",
        metric: "Real-time",
        metricLabel: "Attendance Tracking",
      },
      {
        title: "Trainer Management",
        description:
          "Trainer schedules, client assignments, session logging, and performance tracking â€” all in one system.",
        metric: "Full",
        metricLabel: "Trainer Visibility",
      },
      {
        title: "Retention & Re-engagement",
        description:
          "Automated WhatsApp messages to members who haven't visited in 7+ days, expiry reminders, and birthday offers.",
        metric: "30%",
        metricLabel: "Better Retention",
      },
    ],
    useCases: [
      {
        industry: "Multi-Branch Gym",
        challenge: "3-branch gym tracking members in separate Excel sheets with no cross-branch visibility.",
        solution:
          "Built a unified multi-location management system with centralised member records and branch-level analytics.",
        outcome: "Management sees all-branch performance daily. Duplicate memberships detected and resolved.",
      },
    ],
    stats: [
      { value: "Zero", label: "Missed Renewals" },
      { value: "30%", label: "Retention Improvement" },
      { value: "Real-time", label: "Member Attendance" },
      { value: "Multi-Branch", label: "Scalable" },
    ],
    technologies: ["React", "React Native", "Node.js", "PostgreSQL", "ZKTeco SDK", "Razorpay", "Firebase"],
    process: [
      { step: "01", title: "Setup", description: "Membership plans, trainer schedules, and branch configurations loaded before launch." },
      { step: "02", title: "Hardware", description: "Biometric or QR check-in devices installed and tested at entry points." },
      { step: "03", title: "Migrate", description: "Existing member data imported with membership history and expiry dates intact." },
      { step: "04", title: "Go Live", description: "Staff trained on reception desk workflows and mobile app for trainers." },
    ],
    cta: { primary: "Upgrade My Gym Ops", secondary: "Get a Free Demo" },
  },

  {
    slug: "salon-management-system",
    title: "Salon Management System",
    tagline: "Run Your Salon Like a Premium Brand",
    description: "All-in-one salon management: appointment booking, stylist management, client history, loyalty programs, and revenue analytics — for single chairs to multi-location chains.",
    heroGradient: "from-pink-900 via-rose-900 to-fuchsia-900",
    accentColor: "pink",
    icon: "M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z",
    overview: "Running a salon without proper software means double bookings, stylist schedule confusion, no-shows eating into revenue, and clients who feel forgotten between visits. We build salon management systems that digitalise your appointment book, track client preferences and history, automate loyalty rewards, and give your front desk a tool that looks as premium as your services.",
    capabilities: [
      { title: "Online Appointment Booking", description: "Clients book their preferred stylist and service from your website or WhatsApp — 24/7, no calls, no waiting.", metric: "24/7", metricLabel: "Always Bookable" },
      { title: "Stylist Schedule Management", description: "Individual stylist calendars with working days, breaks, service durations, and capacity limits — zero double bookings.", metric: "Zero", metricLabel: "Double Bookings" },
      { title: "Client Profile & History", description: "Every client's service history, preferred stylist, colour formulas, and special requests stored and surfaced at each visit.", metric: "Full", metricLabel: "Client Memory" },
      { title: "Loyalty & Retention", description: "Automated loyalty points, birthday messages, re-visit reminders when a client hasn't booked in 6 weeks — retention on autopilot.", metric: "30%", metricLabel: "Better Retention" },
    ],
    useCases: [
      { industry: "Multi-Location Salon Chain", challenge: "4-salon chain tracking bookings in paper diaries — double bookings and no-shows costing ₹2L/month.", solution: "Unified salon management system with online booking, stylist calendars, and automated WhatsApp reminders.", outcome: "No-show rate dropped from 22% to 6%. Double bookings: zero. Monthly revenue increased 18%." },
      { industry: "Premium Salon", challenge: "High-end salon with no system to track client colour formulas — new stylists causing client complaints.", solution: "Client profile system capturing service details, product notes, and photos — accessible to any stylist.", outcome: "Client complaint rate reduced by 85%. New stylist onboarding time to client-ready: 1 day instead of 1 week." },
      { industry: "Barbershop", challenge: "Walk-in barbershop wanting to shift to appointment model to reduce waiting and improve revenue predictability.", solution: "WhatsApp-based appointment system with queue management and estimated wait time display.", outcome: "Revenue predictability improved. Average wait time eliminated. Client satisfaction score: 4.7/5." },
    ],
    stats: [
      { value: "24/7", label: "Online Booking" },
      { value: "Zero", label: "Double Bookings" },
      { value: "30%", label: "Client Retention" },
      { value: "18%", label: "Revenue Uplift" },
    ],
    technologies: ["React", "React Native", "Node.js", "PostgreSQL", "Twilio", "Razorpay", "Firebase"],
    process: [
      { step: "01", title: "Setup", description: "Services, durations, stylists, working hours, and pricing configured for every location." },
      { step: "02", title: "Book", description: "Online booking page and WhatsApp booking flow tested and activated." },
      { step: "03", title: "Migrate", description: "Existing client database loaded with historical service data and preferences." },
      { step: "04", title: "Launch", description: "Front desk and stylists trained — typically live within 3 days." },
    ],
    cta: { primary: "Digitalise My Salon", secondary: "See Salon System Demo" },
  },

  {
    slug: "travel-tourism-platform",
    title: "Travel & Tourism Platforms",
    tagline: "Book Experiences — Not Just Tickets",
    description: "Custom travel and tourism platforms for agents, operators, and tour companies — with itinerary management, live availability, booking engines, and customer portals.",
    heroGradient: "from-sky-900 via-blue-900 to-cyan-900",
    accentColor: "sky",
    icon: "M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z",
    overview: "Travel businesses run on complex, time-sensitive operations — managing availability across hotels, flights, and experiences, coordinating guides, handling dynamic pricing, and keeping customers excited from booking to return. We build travel platforms that automate the operational complexity while delivering a customer experience that builds loyalty and repeat bookings.",
    capabilities: [
      { title: "Dynamic Booking Engine", description: "Real-time availability for packages, hotels, and experiences with instant confirmation and payment collection.", metric: "Real-time", metricLabel: "Live Availability" },
      { title: "Itinerary Builder", description: "Visual day-by-day itinerary tool that customers can view, share, and use as their trip companion — with offline access.", metric: "Digital", metricLabel: "Itinerary Delivery" },
      { title: "Supplier & Vendor Management", description: "Centralised portal for hotel, transport, and activity suppliers to update availability, pricing, and confirmations.", metric: "Unified", metricLabel: "Supplier Portal" },
      { title: "Customer Journey Automation", description: "Pre-trip information, day-of guides, check-in reminders, and post-trip feedback — all automated via WhatsApp and email.", metric: "Automated", metricLabel: "Guest Journey" },
    ],
    useCases: [
      { industry: "Tour Operator", challenge: "Manually managing bookings via phone and WhatsApp for 50+ group tours annually — errors and cancellations costing ₹8L.", solution: "Online booking platform with tour availability, group size management, payment, and automated confirmation.", outcome: "Booking errors eliminated. Operator revenue grew 35% serving the same demand with less admin." },
      { industry: "Destination Resort", challenge: "Resort managing packages, activities, dining, and spa bookings across 4 separate systems — chaotic guest experience.", solution: "Unified guest portal for all services with digital itinerary, real-time activity booking, and spend tracking.", outcome: "Guest ancillary spend per visit up 28%. Resort NPS improved from 61 to 79 in first 6 months." },
      { industry: "Travel Agency", challenge: "Agency losing clients to online platforms because their booking and communication experience felt outdated.", solution: "Branded customer portal with itinerary viewer, document storage, and automated pre-trip communication.", outcome: "Client retention improved by 34%. Agency attracted 3 corporate accounts wanting managed travel services." },
    ],
    stats: [
      { value: "Real-time", label: "Live Availability" },
      { value: "35%", label: "Revenue Growth" },
      { value: "28%", label: "Ancillary Spend Uplift" },
      { value: "Automated", label: "Guest Journey" },
    ],
    technologies: ["React", "React Native", "Node.js", "PostgreSQL", "Stripe", "Razorpay", "AWS S3"],
    process: [
      { step: "01", title: "Catalogue", description: "Tours, packages, room types, and activity inventory structured for the booking engine." },
      { step: "02", title: "Build", description: "Booking engine, supplier portal, and customer-facing platform built in parallel." },
      { step: "03", title: "Integrate", description: "Payment gateway, supplier APIs, and communication channels connected and tested." },
      { step: "04", title: "Launch", description: "Platform soft-launched with a sample season of bookings before full marketing push." },
    ],
    cta: { primary: "Build My Travel Platform", secondary: "See Travel Demo" },
  },

  {
    slug: "school-management-system",
    title: "School Management System",
    tagline: "Empower Your Institution — Automate Academic Excellence",
    description: "A comprehensive digital ecosystem for educational institutions to manage students, staff, fees, and academic performance with ease.",
    heroGradient: "from-indigo-900 via-blue-900 to-sky-900",
    accentColor: "indigo",
    icon: "M12 3L1 9l11 6 9-4.91V17h2V9M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z",
    overview: "Managing a modern educational institution involves a complex web of student records, fee collections, academic schedules, and parent communication. We build unified school management platforms that digitize the entire campus. From student onboarding and automated attendance to fee portals and examination management, our systems provide leadership with real-time visibility while reducing administrative overhead.",
    capabilities: [
      { title: "Student Lifecycle Management", description: "Manage students from enquiry and admission through to graduation and alumni tracking — all in one unified record.", metric: "Full", metricLabel: "Student Lifecycle" },
      { title: "Fee & Financial Automation", description: "Automated fee invoicing, online collections, scholarship management, and detailed financial reporting.", metric: "Zero", metricLabel: "Fee Leakage" },
      { title: "Academic & Exam Management", description: "Digital gradebooks, automated report card generation, and secure online examination modules.", metric: "Smart", metricLabel: "Academic Tracking" },
      { title: "Parent-Teacher Engagement", description: "Dedicated mobile app and portal for parents to track progress, attendance, and school announcements in real-time.", metric: "Real-time", metricLabel: "Communication" },
    ],
    useCases: [
      { industry: "K-12 School", challenge: "School managing 1,500 students with manual fee records and paper report cards causing administrative chaos.", solution: "Integrated school platform with automated fee collection and digital academic tracking.", outcome: "Fee recovery improved by 18%. Staff administrative work reduced by 60%." },
    ],
    stats: [
      { value: "Zero", label: "Fee Leakage" },
      { value: "60%", label: "Admin Time Saved" },
      { value: "100%", label: "Digital Records" },
      { value: "Auto", label: "Results Ready" },
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Redis", "PDFKit", "Razorpay"],
    process: [
      { step: "01", title: "Setup", description: "Student cohorts, classes, fee structures, and staff roles configured before launch." },
      { step: "02", title: "Migrate", description: "Existing student and financial records imported with full history preservation." },
      { step: "03", title: "Train", description: "Teachers, admin staff, and management trained on their respective platform views." },
      { step: "04", title: "Go Live", description: "Parent login links activated and seasonal fee collection automated." },
    ],
    cta: { primary: "Modernise My School", secondary: "Request School Demo" },
  },

  {
    slug: "healthcare-clinic-system",
    title: "Healthcare & Clinic System",
    tagline: "Patient-First Care — Powered by Digital Precision",
    description: "A secure, compliant healthcare platform that unifies patient records, appointment booking, billing, and lab results for clinics and hospitals.",
    heroGradient: "from-blue-900 via-sky-900 to-cyan-900",
    accentColor: "blue",
    icon: "M19 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 11h-4v4h-2v-4H8v-2h4V8h2v4h4v2z",
    overview: "In the fast-paced healthcare environment, clinicians and administrators need a single source of truth for patient health. We build comprehensive healthcare and clinic systems that integrate electronic medical records (EMR), appointment scheduling, billing, and lab results into one secure, compliant platform. Our tools enhance patient care by reducing paper trails and ensuring critical information is always at your fingertips.",
    capabilities: [
      { title: "EMR & Patient Records", description: "Complete digital medical history, clinical notes, prescription history, and visit records in a secure environment.", metric: "Full", metricLabel: "Medical History" },
      { title: "Intelligent Scheduling", description: "Multi-doctor appointment scheduling with automated reminders and patient self-booking portal.", metric: "60%", metricLabel: "Fewer No-shows" },
      { title: "Billing & Insurance", description: "Integrated billing with insurance claim tracking, pharmacy sales, and lab service invoicing.", metric: "Instant", metricLabel: "Invoicing" },
      { title: "Tele-medicine Ready", description: "Built-in video consultation capability with patient chat and secure document sharing.", metric: "Ready", metricLabel: "Tele-health" },
    ],
    useCases: [
      { industry: "Multi-Speciality Clinic", challenge: "Doctors spending more time on paper files than patients; front desk overwhelmed by calls.", solution: "EMR-first clinic system with patient self-booking and automated lab result delivery.", outcome: "Patient wait time reduced by 40%. Doctor daily productivity increased by 22%." },
    ],
    stats: [
      { value: "40%", label: "Wait Time Reduction" },
      { value: "60%", label: "Fewer No-shows" },
      { value: "100%", label: "Secure Records" },
      { value: "24/7", label: "Patient Access" },
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Redis", "AWS S3", "Twilio", "WebRTC"],
    process: [
      { step: "01", title: "Audit", description: "Clinic workflows, speciality requirements, and reporting needs mapped precisely." },
      { step: "02", title: "Configure", description: "Medical forms, ICD codes, and doctor schedules set up for the clinic." },
      { step: "03", title: "Secure", description: "GDPR/HIPAA compliance checks and data encryption protocols activated." },
      { step: "04", title: "Switch", description: "Phased rollout starting with front-desk followed by doctor and lab modules." },
    ],
    cta: { primary: "Upgrade My Clinic", secondary: "See Healthcare Demo" },
  },

  {
    slug: "real-estate-platform",
    title: "Real-estate Platform",
    tagline: "Sell Faster — Manage Smarter",
    description: "An end-to-end real estate ecosystem for developers and agencies to manage inventory, leads, site visits, and sales closures.",
    heroGradient: "from-emerald-900 via-teal-900 to-cyan-900",
    accentColor: "emerald",
    icon: "M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z",
    overview: "The real estate industry thrives on leads, inventory management, and relationship building. We create end-to-end real estate platforms that connect agents, builders, and buyers seamlessly. From property listing management and automated lead scoring to site visit tracking and digital agreement generation, our systems give your sales team the edge they need to close deals in a competitive market.",
    capabilities: [
      { title: "Inventory Management", description: "Real-time tracking of property units, status (booked/sold/available), and pricing across multiple projects.", metric: "Live", metricLabel: "Unit Inventory" },
      { title: "Smart Lead Scoring", description: "Capture leads from websites and portals, scoring them automatically to prioritise high-intent buyers.", metric: "Auto", metricLabel: "Lead Prioritisation" },
      { title: "Site Visit Coordinator", description: "Digital logging of site visits, feedback collection, and automated follow-up triggers for sales reps.", metric: "40%", metricLabel: "More Closures" },
      { title: "Agreement Automation", description: "Generate booking forms and sale agreements automatically from approved lead data.", metric: "Instant", metricLabel: "Agreement Ready" },
    ],
    useCases: [
      { industry: "Property Developer", challenge: "Sales team managing 500+ daily leads via spreadsheets; inventory status frequently outdated.", solution: "Real-time inventory dashboard with automated lead routing and pipeline tracking.", outcome: "Inventory sales velocity increased by 25%. Zero double-booking errors." },
    ],
    stats: [
      { value: "Live", label: "Inventory Tracker" },
      { value: "40%", label: "Faster Closings" },
      { value: "Zero", label: "Booking Errors" },
      { value: "24/7", label: "Lead Capture" },
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Redis", "PDFKit", "WhatsApp Business API"],
    process: [
      { step: "01", title: "Map", description: "Inventory structure, sales stages, and lead sources mapped for the platform." },
      { step: "02", title: "Build", description: "Project dashboards, inventory engines, and lead portals customised for your brand." },
      { step: "03", title: "Connect", description: "Portals (99acres, Magicbricks, etc.) and social channels connected for lead sync." },
      { step: "04", title: "Sell", description: "Sales team onboarded and live dashboard activated for leadership overview." },
    ],
    cta: { primary: "Accelerate My Sales", secondary: "Request Real Estate Demo" },
  },

  {
    slug: "event-venue-management",
    title: "Event Venue Management Systems",
    tagline: "Every Event Delivered Flawlessly",
    description: "Custom event venue management platforms that handle bookings, client coordination, vendor management, layout planning, and revenue analytics for event spaces.",
    heroGradient: "from-purple-900 via-violet-900 to-indigo-900",
    accentColor: "purple",
    icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z",
    overview: "Managing event bookings across multiple spaces, coordinating vendors, tracking security deposits, generating event-specific proposals, and ensuring operational readiness requires a system purpose-built for the complexity. We build event venue management platforms that give your sales team a beautiful booking experience and your ops team the control to execute flawlessly.",
    capabilities: [
      { title: "Multi-Space Booking Calendar", description: "Visual calendar across all your event spaces — hall, lawn, rooftop — with capacity, tentative hold, and confirmed booking management.", metric: "Zero", metricLabel: "Booking Conflicts" },
      { title: "Event Proposal Builder", description: "Beautiful branded proposals with venue layout options, menu packages, AV add-ons, and pricing — generated in minutes.", metric: "10 min", metricLabel: "Proposal Creation" },
      { title: "Client & Payment Tracking", description: "Event lifecycle tracking from enquiry to event day — advance collection, balance reminders, and client communication all in one view.", metric: "Full", metricLabel: "Deal Visibility" },
      { title: "Vendor Coordination", description: "Catering, decor, AV, and photography vendor assignments tracked per event — with confirmation status and contact details centralised.", metric: "Unified", metricLabel: "Vendor Tracking" },
    ],
    useCases: [
      { industry: "Hotel Banquets", challenge: "Hotel with 6 event spaces managed across Excel, phone calls, and email — double bookings causing relationship damage.", solution: "Unified event booking system with hold management, multi-space conflict detection, and automated client confirmations.", outcome: "Double bookings: zero since launch. Proposal turnaround time from 2 days to 45 minutes." },
      { industry: "Standalone Venue", challenge: "Wedding venue losing leads because inquiry follow-up and proposal generation took 3-4 days.", solution: "CRM with automated inquiry response, availability check, and one-click proposal generation.", outcome: "Inquiry-to-proposal time: 3 days → same day. Venue booking conversion rate up 42%." },
      { industry: "Corporate Event Space", challenge: "Corporate venue unable to show clients accurate availability or provide detailed proposals during site visits.", solution: "Tablet-ready booking and proposal tool for sales managers to show and book on the spot during client meetings.", outcome: "On-site conversion rate improved from 18% to 34%. Revenue from corporate bookings up 28%." },
    ],
    stats: [
      { value: "Zero", label: "Booking Conflicts" },
      { value: "10 min", label: "Proposal Creation" },
      { value: "42%", label: "Conversion Lift" },
      { value: "Full", label: "Event Visibility" },
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Redis", "PDFKit", "Razorpay", "Google Calendar API"],
    process: [
      { step: "01", title: "Catalogue", description: "Event spaces, capacity configurations, package options, and pricing loaded before go-live." },
      { step: "02", title: "Build", description: "Booking calendar, proposal builder, and CRM built to your sales and ops workflow." },
      { step: "03", title: "Integrate", description: "Payment gateway, client notification system, and vendor management connected." },
      { step: "04", title: "Train", description: "Sales team trained on the proposal tool — ops team trained on the event execution dashboard." },
    ],
    cta: { primary: "Digitise My Venue", secondary: "See Venue Management Demo" },
  },

];

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return servicesData.find((s) => s.slug === slug);
}

// Quick lookup: all slugs
export const allServiceSlugs = servicesData.map((s) => s.slug);
