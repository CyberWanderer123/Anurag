export const metadata = {
  title: {
    default: "Anurag Sagar — Full-Stack Web Developer",
    template: "%s | Anurag Sagar",
  },
  description:
    "Full-stack developer helping startups and teams build production-ready web products. MVPs, SaaS platforms, and scalable web systems with clear scope and predictable delivery.",

  metadataBase: new URL("https://anurag-iota.vercel.app/"),

  openGraph: {
    title: "Anurag Sagar — Full-Stack Web Developer",
    description:
      "I help teams turn ideas into reliable, production-ready web products — from MVPs to scalable SaaS platforms.",
    url: "https://anuragsagar.com",
    siteName: "Anurag Sagar",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Anurag Sagar — Full-Stack Web Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Anurag Sagar — Full-Stack Web Developer",
    description:
      "Building production-ready MVPs, SaaS platforms, and scalable web systems for startups and teams.",
    images: ["/og.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};
