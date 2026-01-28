import { notFound } from "next/navigation";
import { caseStudies } from "@/data/caseStudies";
import { ArrowLeft, Code, Target, Zap } from "lucide-react";
import Link from "next/link";

export default function CaseStudyPage({ params }) {
  const study = caseStudies.find((c) => c.slug === params.slug);
  if (!study) return notFound();

  return (
    <section className="min-h-screen py-32 px-6 bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto">
        <Link href="/cases" className="inline-flex items-center text-slate-400 hover:text-white mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to all cases
        </Link>

        <img src={study.coverImage} alt={study.name} className="w-full h-80 object-cover rounded-2xl mb-10 opacity-80" />

        <h1 className="text-5xl font-bold mb-4">{study.name}</h1>
        <p className="text-slate-400 mb-8">{study.type} — {study.client}</p>

        <div className="space-y-10">
          <div>
            <h3 className="text-2xl font-semibold mb-3 flex items-center gap-2">
              <Target className="w-5 h-5 text-blue-400" /> The Challenge
            </h3>
            <p className="text-slate-400 leading-relaxed">{study.problem}</p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-3 flex items-center gap-2">
              <Code className="w-5 h-5 text-purple-400" /> The Solution
            </h3>
            <p className="text-slate-400 leading-relaxed">{study.solution}</p>
            <ul className="mt-4 space-y-2 text-slate-400 list-disc pl-5">
              {study.process.map((step, idx) => (
                <li key={idx}>{step}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-3 flex items-center gap-2">
              <Zap className="w-5 h-5 text-emerald-400" /> The Outcome
            </h3>
            <p className="text-slate-400 leading-relaxed">{study.outcome}</p>
          </div>

          <div className="flex flex-wrap gap-2 pt-8">
            {study.tech.map((tech) => (
              <span key={tech} className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-full text-sm text-slate-300">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
