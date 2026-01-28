import Link from "next/link";
import { caseStudies } from "@/data/caseStudies";
import { ArrowRight, Code } from "lucide-react";

export default function CasesPage() {
  return (
    <section className="min-h-screen py-32 px-6 bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-8 text-center">Case Studies</h1>
        <p className="text-slate-400 text-lg text-center max-w-3xl mx-auto mb-16">
          A deeper look into how I helped startups launch, scale, and grow through design, code, and strategy.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {caseStudies.map((c) => (
            <Link
              key={c.slug}
              href={`/cases/${c.slug}`}
              className="group block bg-slate-900/50 border border-slate-800/50 rounded-2xl overflow-hidden hover:border-slate-700 transition-all"
            >
              <div className="h-56 bg-slate-800 relative">
                <img src={c.coverImage} alt={c.name} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-2">{c.name}</h2>
                <p className="text-slate-400 mb-4">{c.type} — {c.client}</p>
                <p className="text-slate-400 line-clamp-2">{c.problem}</p>
                <div className="mt-6 flex items-center text-blue-400 font-medium group-hover:translate-x-1 transition-transform">
                  Read Case Study <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
