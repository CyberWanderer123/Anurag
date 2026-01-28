export const caseStudies = [
  {
    slug: "saas-dashboard-pro",
    name: "SaaS Dashboard Pro",
    type: "SaaS Platform",
    client: "US Startup",
    duration: "6 weeks",
    problem: "The client needed a scalable analytics dashboard ...",
    process: [
      "Defined data architecture and user roles",
      "Developed interactive charts with Recharts",
      "Deployed using Vercel + PostgreSQL on Supabase"
    ],
    solution: "Built with Next.js and Prisma, supporting multi-tenancy and role-based access.",
    outcome: "40% faster load times, 95% satisfaction, 1K+ users in the first month.",
    tech: ["Next.js", "PostgreSQL", "Prisma", "Tailwind"],
    coverImage: "/images/saas-dashboard.jpg"
  },
  {
    slug: "founderhub",
    name: "FounderHub",
    type: "MVP Platform",
    client: "Indian Founder",
    duration: "4 weeks",
    problem: "Needed to validate idea quickly with a working MVP.",
    process: [
      "Mapped minimal feature set",
      "Implemented auth + dashboard",
      "Integrated payments via Stripe"
    ],
    solution: "Delivered MVP in 4 weeks, ready for demo.",
    outcome: "Secured $50K seed funding, 200+ beta users.",
    tech: ["React", "Firebase", "Stripe", "Material-UI"],
    coverImage: "/images/founderhub.jpg"
  },
  // more case studies...
];
