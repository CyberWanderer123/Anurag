import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: {
    default: "Anurag Sagar — Product Strategy & Execution Consultant",
    template: "%s | Anurag Sagar",
  },
  description:
    "Independent technical consultant and execution partner. I bridge the gap between business strategy and technical implementation, helping companies architect scalable systems and avoid costly technical debt.",

  metadataBase: new URL("https://anurag-iota.vercel.app/"),

  openGraph: {
    title: "Anurag Sagar — Product Strategy & Execution Consultant",
    description:
      "I act as your technical consultant to turn ambitious ideas into robust, production-ready platforms that drive real business value.",
    url: "https://anurag-iota.vercel.app/",
    siteName: "Anurag Sagar",
    images: [
      {
        url: "/assets/og.png",
        width: 1200,
        height: 630,
        alt: "Anurag Sagar — Product Strategy & Execution Consultant",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Anurag Sagar — Product Strategy & Execution Consultant",
    description:
      "Building production-ready MVPs, SaaS platforms, and scalable web systems for startups and teams.",
    images: ["/assets/og.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Anurag Sagar",
    "description": "Independent technical consultant specializing in full-stack architecture, MVP development, and scalable platform engineering.",
    "url": "https://anurag-iota.vercel.app/",
    "founder": {
      "@type": "Person",
      "name": "Anurag Sagar",
      "jobTitle": "Technical Consultant & Full-Stack Architect"
    },
    "serviceType": ["Technical Consulting", "Full-Stack Development", "MVP Development", "System Architecture"],
    "areaServed": "Worldwide"
  };

  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased bg-[#050505] text-slate-300 selection:bg-blue-500/30 selection:text-white`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
