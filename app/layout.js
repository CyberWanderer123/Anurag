import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
    url: "https://anurag-iota.vercel.app/",
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


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
