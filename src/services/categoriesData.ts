export interface CategoryService {
  label: string;
  slug: string;
}

export interface CategoryDetail {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  overview: string;
  image: string;
  icon: string;
  services: CategoryService[];
}

export const categoriesData: CategoryDetail[] = [
  {
    id: "cat-1",
    slug: "custom-digital-systems",
    title: "Custom Digital Systems",
    tagline: "We design and develop robust, scalable digital systems tailored to your business.",
    overview: "In today's digital-first world, off-the-shelf software often forces businesses to compromise on their unique processes. We build fully custom, end-to-end digital systems that map exactly to your workflows. From complex web applications to comprehensive enterprise resource planning systems, our scalable architectures drive operational agility, reduce technical debt, and give you a distinct competitive advantage.",
    image: "/categories/custom-digital-systems.png",
    icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    services: [
      { label: "Web Application Development", slug: "web-application-development" },
      { label: "E-commerce Development", slug: "ecommerce-development" },
      { label: "Enterprise Systems", slug: "enterprise-systems" },
      { label: "Micro SaaS Development", slug: "micro-saas-development" },
      { label: "Mobile Application Development", slug: "mobile-application-development" },
      { label: "API Development & Integrations", slug: "api-development-integrations" },
      { label: "Custom Admin Dashboards", slug: "custom-admin-dashboards" },
    ],
  },
  {
    id: "cat-2",
    slug: "automation-ai-workflow",
    title: "Automation, AI & Workflow",
    tagline: "We transform manual operations into intelligent, automated workflows.",
    overview: "Repetitive manual tasks are the silent killers of productivity and profit margins. We engineer intelligent automation systems that connect your existing tools, automate data entry, trigger communications, and deploy AI agents to handle routine inquiries. The result is a leaner operation where your human talent focuses on high-value strategy while the systems run the day-to-day flawlessly.",
    image: "/categories/automation-ai-workflow.png",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    services: [
      { label: "Business Process Automation", slug: "business-process-automation" },
      { label: "Workflow Automation Systems", slug: "workflow-automation" },
      { label: "Email & Notification Automation", slug: "email-notification-automation" },
      { label: "Invoice & Billing Automation", slug: "invoice-billing-automation" },
      { label: "Lead Management Automation", slug: "lead-management-automation" },
      { label: "WhatsApp Automation Systems", slug: "whatsapp-automation" },
      { label: "AI Chatbots & Virtual Assistants", slug: "ai-chatbots-virtual-assistants" },
      { label: "No-code / Low-code Automation", slug: "no-code-low-code-automation" },
    ],
  },
  {
    id: "cat-3",
    slug: "data-analytics-intelligence",
    title: "Data, Analytics & Intelligence",
    tagline: "We enable data-driven decision making through powerful analytics.",
    overview: "Data is only valuable if you can understand and act on it. We transform fragmented data silos into unified, real-time intelligence platforms. By deploying beautiful KPI dashboards, predictive models, and deep operational analytics, we give leadership the clarity needed to spot trends, stop revenue leaks, and make confident decisions based on empirical truth, not intuition.",
    image: "/categories/data-analytics-intelligence.png",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    services: [
      { label: "Data Analytics & Business Insights", slug: "data-analytics-business-insights" },
      { label: "KPI & Performance Dashboards", slug: "kpi-performance-dashboards" },
      { label: "Sales & Operational Analytics", slug: "sales-operational-analytics" },
      { label: "Predictive Analytics Solutions", slug: "predictive-analytics" },
      { label: "Data Visualization Platforms", slug: "data-visualization-platforms" },
      { label: "AI-based Recommendation Systems", slug: "ai-recommendation-systems" },
    ],
  },
  {
    id: "cat-4",
    slug: "finance-operations-management",
    title: "Finance, Operations & Management",
    tagline: "Automated systems to manage operations, finances, and resources with precision.",
    overview: "Financial control and operational efficiency are the bedrock of any scaling enterprise. We build specialized tools that digitize the entire financial back-office: from automated subscription billing and tax compliance to multi-tier budget planning and receipt tracking. Our operational systems ensure every hour, rupee, and shipment is tracked, optimizing cash flow and removing bottlenecks.",
    image: "/categories/finance-operations-management.png",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    services: [
      { label: "Invoice Management System", slug: "invoice-management-system" },
      { label: "Subscription Billing Platform", slug: "subscription-billing-platform" },
      { label: "Tax Management Tools", slug: "tax-management-tools" },
      { label: "Budget Planning Systems", slug: "budget-planning-system" },
      { label: "Expense Tracking", slug: "expense-tracking" },
      { label: "Work Hour Tracking", slug: "work-hour-tracking" },
      { label: "Attendance Management", slug: "attendance-management-system" },
      { label: "Order & Shipment Tracking", slug: "order-shipment-tracking" },
    ],
  },
  {
    id: "cat-5",
    slug: "productivity-communication",
    title: "Productivity & Communication",
    tagline: "Internal tools that align your team and optimise how you work.",
    overview: "A disjointed team cannot deliver exceptional results. We create communication and productivity suites that centralize knowledge, align teams, and streamline internal support. Whether it's a unified company intranet, an intelligent helpdesk, or friction-free scheduling tools, we eliminate the endless email chains and app-switching that drain your team's daily potential.",
    image: "/categories/productivity-communication.png",
    icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
    services: [
      { label: "Helpdesk & Ticketing System", slug: "helpdesk-ticketing-system" },
      { label: "Appointment Booking System", slug: "appointment-booking-system" },
      { label: "Live Chat Systems", slug: "live-chat-system" },
      { label: "Team Communication Platforms", slug: "team-communication-platform" },
      { label: "Meeting & Scheduling Systems", slug: "meeting-scheduling-system" },
      { label: "Resource Management Systems", slug: "resource-management-system" },
      { label: "Internal Collaboration Tools", slug: "internal-collaboration-tools" },
    ],
  },
  {
    id: "cat-6",
    slug: "industry-specific-platforms",
    title: "Industry-Specific Platforms",
    tagline: "Purpose-built platforms for restaurants, schools, gyms, salons, and more.",
    overview: "Generic software rarely fits the nuanced demands of specialized industries. From table management in a busy restaurant and class scheduling in a school, to venue booking and travel itineraries, we build bespoke, vertical-specific platforms. Each system is designed around the exact realities of your physical operations, bridging the gap between your digital presence and on-the-ground service delivery.",
    image: "/categories/industry-specific-platforms.png",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
    services: [
      { label: "Restaurant Management System", slug: "restaurant-management-system" },
      { label: "School Management System", slug: "school-management-system" },
      { label: "Healthcare & Clinic System", slug: "healthcare-clinic-system" },
      { label: "Real-estate Platform", slug: "real-estate-platform" },
      { label: "Gym & Fitness Management", slug: "gym-management-platform" },
      { label: "Salon Management System", slug: "salon-management-system" },
      { label: "Travel & Tourism Platforms", slug: "travel-tourism-platform" },
      { label: "Event Venue Management", slug: "event-venue-management" },
    ],
  },
];

export function getCategoryBySlug(slug: string): CategoryDetail | undefined {
  return categoriesData.find((c) => c.slug === slug);
}
