'use client'
import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Code, Rocket, Users, Menu, X, Star, ChevronRight, Mail, Linkedin, Github, Twitter, Zap, Target, CheckCircle, Briefcase, Cloud, DollarSign, Coffee, MessageSquare, Layout, Clock, Award, TrendingUp, Shield, Lightbulb, Database, Server, Palette, Smartphone } from 'lucide-react';

// Navigation Component
function Navigation({ activeSection, isMenuOpen, setIsMenuOpen, scrollToSection }) {
  const navItems = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Featured Project', id: 'featured' },
  { label: 'Case Studies', id: 'cases' },
  { label: 'Portfolio', id: 'portfolio' },
  { label: 'Skills', id: 'skills' },
  { label: 'Services', id: 'services' },
  { label: 'Contact', id: 'contact' },
];

  return (
    <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold text-white">
            Anurag Sagar
          </div>
          
          <div className="hidden md:flex space-x-8">
  {navItems.map(({ label, id }) => (
    <button
      key={id}
      onClick={() => scrollToSection(id)}
      className={`text-sm font-medium transition-colors relative ${
        activeSection === id
          ? 'text-white'
          : 'text-slate-400 hover:text-white'
      }`}
    >
      {label}
      {activeSection === id && (
        <span className="absolute -bottom-5 left-0 w-full h-0.5 bg-white" />
      )}
    </button>
  ))}
</div>


          <button
            className="md:hidden text-slate-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

     {isMenuOpen && (
  <div className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-800/50">
    <div className="px-4 py-4 space-y-2">
      {navItems.map(({ label, id }) => (
        <button
          key={id}
          onClick={() => scrollToSection(id)}
          className={`block w-full text-left px-4 py-3 rounded-lg transition-all ${
            activeSection === id
              ? 'bg-slate-800 text-white'
              : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  </div>
)}

    </nav>
  );
}

// Hero Section Component
function HeroSection({ scrollToSection, techStack }) {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
  {/* Availability Badge */}
  <div className="mb-6 inline-block">
    <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-full text-sm text-slate-300">
      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
      Available for new projects
    </div>
  </div>

  {/* New Headline */}
  <h1 className="text-3xl sm:text-2xl lg:text-4xl font-bold mb-6 leading-tight text-white">
    I Help Teams Turn Ideas Into Reliable, Production-Ready Web Products
  </h1>

  {/* Subtext */}
  <p className="text-xl text-slate-400 mb-8 leading-relaxed">
  I help teams turn requirements into reliable web products —
from marketing websites to internal tools and early-stage platforms.
Clear scope, predictable delivery, and systems that are actually used.
  </p>

  {/* CTA Buttons */}
  <div className="flex flex-col sm:flex-row gap-4 mb-12">
    <button
      onClick={() => window.open('https://cal.com/anurag4518/intro-call', '_blank')}
      className="group px-8 py-4 bg-white text-black rounded-lg font-medium hover:bg-slate-100 transition-all flex items-center justify-center gap-2"
    >
      Have a quick intro call
      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
    </button>

    <button
      onClick={() => scrollToSection('case studies')}
      className="px-8 py-4 border border-slate-700 rounded-lg font-medium hover:bg-slate-800/50 transition-colors text-slate-300"
    >
      See Case Studies
    </button>
  </div>

  {/* Tech Tags */}
  <div className="flex flex-wrap gap-3">
    {techStack.slice(0, 5).map((tech, idx) => (
      <span
        key={tech}
        className="px-3 py-1 bg-slate-800/50 border border-slate-700/50 rounded-full text-sm text-slate-400"
        style={{ animationDelay: `${idx * 0.1}s` }}
      >
        {tech}
      </span>
    ))}
  </div>
</div>


        <div className="hidden lg:block">
          <div className="relative w-full h-[500px] animate-float">
            <svg viewBox="0 0 400 400" className="w-full h-full">
              <rect x="40" y="60" width="320" height="280" rx="8" fill="#1e293b" stroke="#334155" strokeWidth="2"/>
              <rect x="40" y="60" width="320" height="30" rx="8" fill="#0f172a"/>
              <circle cx="60" cy="75" r="4" fill="#ef4444"/>
              <circle cx="75" cy="75" r="4" fill="#f59e0b"/>
              <circle cx="90" cy="75" r="4" fill="#10b981"/>
              
              <line x1="60" y1="110" x2="200" y2="110" stroke="#60a5fa" strokeWidth="2" className="code-line" style={{animationDelay: '0.5s'}}/>
              <line x1="60" y1="130" x2="250" y2="130" stroke="#a78bfa" strokeWidth="2" className="code-line" style={{animationDelay: '0.7s'}}/>
              <line x1="80" y1="150" x2="220" y2="150" stroke="#34d399" strokeWidth="2" className="code-line" style={{animationDelay: '0.9s'}}/>
              <line x1="80" y1="170" x2="280" y2="170" stroke="#60a5fa" strokeWidth="2" className="code-line" style={{animationDelay: '1.1s'}}/>
              <line x1="60" y1="190" x2="180" y2="190" stroke="#f472b6" strokeWidth="2" className="code-line" style={{animationDelay: '1.3s'}}/>
              <line x1="80" y1="210" x2="240" y2="210" stroke="#a78bfa" strokeWidth="2" className="code-line" style={{animationDelay: '1.5s'}}/>
              <line x1="80" y1="230" x2="200" y2="230" stroke="#34d399" strokeWidth="2" className="code-line" style={{animationDelay: '1.7s'}}/>
              <line x1="60" y1="250" x2="260" y2="250" stroke="#60a5fa" strokeWidth="2" className="code-line" style={{animationDelay: '1.9s'}}/>
              
              <rect x="60" y="280" width="280" height="80" rx="8" fill="#0f172a" stroke="#334155" strokeWidth="2"/>
              <text x="75" y="305" fill="#10b981" fontSize="12" fontFamily="monospace">$ npm run build</text>
              <text x="75" y="325" fill="#60a5fa" fontSize="10" fontFamily="monospace">Building for production...</text>
              <text x="75" y="345" fill="#10b981" fontSize="10" fontFamily="monospace">✓ Compiled successfully</text>
              
              <circle cx="100" cy="40" r="8" fill="#60a5fa" opacity="0.6">
                <animate attributeName="cy" values="40;30;40" dur="2s" repeatCount="indefinite"/>
              </circle>
              <circle cx="340" cy="300" r="6" fill="#a78bfa" opacity="0.6">
                <animate attributeName="cy" values="300;310;300" dur="2.5s" repeatCount="indefinite"/>
              </circle>
              <circle cx="350" cy="100" r="10" fill="#34d399" opacity="0.4">
                <animate attributeName="cy" values="100;90;100" dur="3s" repeatCount="indefinite"/>
              </circle>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

// Client Logos Section Component
function ClientLogosSection() {
  const clients = [
    { name: "Guardian Media", logo: "/assets/Guardian_Logo.png" },
    { name: "The Adynex", logo: "/assets/Logo.png" },
    {name: 'DTL Energy Solutions', logo: '/assets/DTL.webp'},
    {name: 'Fingerring Matrimony', logo: '/assets/fingerring.jpg'},
    {name: 'Unisoft', logo: '/assets/unisoft2.png'},
  ];

  // Double the logos for seamless infinite scroll
  const doubledClients = [...clients, ...clients];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800/50 overflow-hidden">
      <style>{`
        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(59, 130, 246, 0.6);
          }
        }
        
        .scroll-container {
          display: flex;
          animation: scrollLeft 20s linear infinite;
        }
        
        .scroll-container:hover {
          animation-play-state: paused;
        }
        
        .logo-item {
          flex-shrink: 0;
          transition: all 0.3s ease;
        }
        
        .logo-item:hover {
          z-index: 10;
        }
        
        .logo-item:hover .logo-card {
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1));
          border-color: rgba(59, 130, 246, 0.5);
          animation: pulse-glow 2s ease-in-out infinite;
        }
        
        .fade-edge {
          pointer-events: none;
        }
        
        .fade-edge-left {
          background: linear-gradient(to right, rgb(15, 23, 42), transparent);
        }
        
        .fade-edge-right {
          background: linear-gradient(to left, rgb(15, 23, 42), transparent);
        }
      `}</style>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-slate-400 text-sm uppercase tracking-wider mb-2">Clients I’ve worked with</p>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="relative">
          {/* Fade edges */}
          <div className="fade-edge fade-edge-left absolute left-0 top-0 w-32 h-full z-10"></div>
          <div className="fade-edge fade-edge-right absolute right-0 top-0 w-32 h-full z-10"></div>
          
          {/* Scrolling logos */}
          <div className="flex overflow-hidden">
            <div className="scroll-container">
              {doubledClients.map((client, idx) => (
                <div key={idx} className="logo-item px-8">
                  <div className="logo-card bg-slate-800/50 rounded-xl border border-slate-700/50 p-6 backdrop-blur-sm">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="h-16 w-32 object-contain filter  transition-all duration-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// About Section Component
function AboutSection({ counters, aboutRef }) {
  return (
    <section id="about" ref={aboutRef} className="py-32 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in-scroll">
          <p className="text-slate-400 text-xl max-w-3xl mx-auto leading-relaxed">
        I work as a hands-on execution partner, helping turn ideas and requirements
into reliable systems that support real business operations.

My focus is on clarity, predictable delivery, and building only what actually
matters — so products don’t fall apart once real users start using them.
          </p>
        </div>

        {/* Value Props Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-20 fade-in-scroll">
          <div className="group p-8 bg-gradient-to-br from-slate-900/80 to-slate-900/40 border border-slate-800/50 rounded-2xl hover:border-blue-500/30 transition-all">
            <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <Zap className="w-7 h-7 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Fast Turnaround</h3>
            <p className="text-slate-400 leading-relaxed">
              Launch MVPs in 3-6 weeks. I focus on what matters most to get you live quickly without cutting corners on quality.
            </p>
          </div>

          <div className="group p-8 bg-gradient-to-br from-slate-900/80 to-slate-900/40 border border-slate-800/50 rounded-2xl hover:border-purple-500/30 transition-all">
            <div className="w-14 h-14 rounded-xl bg-purple-500/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <Shield className="w-7 h-7 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Built to Scale</h3>
            <p className="text-slate-400 leading-relaxed">
              From day one, your codebase is clean, documented, and ready to grow. No technical debt, no nasty surprises.
            </p>
          </div>

          <div className="group p-8 bg-gradient-to-br from-slate-900/80 to-slate-900/40 border border-slate-800/50 rounded-2xl hover:border-emerald-500/30 transition-all">
            <div className="w-14 h-14 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
              <Lightbulb className="w-7 h-7 text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Product-Minded</h3>
            <p className="text-slate-400 leading-relaxed">
              I think beyond code. From UX flows to feature prioritization, I help shape products that users actually love.
            </p>
          </div>
        </div>

        {/* Stats with Better Design */}
        <div className="relative fade-in-scroll">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-3xl blur-2xl" />
          <div className="relative grid md:grid-cols-2 gap-8 p-8 bg-slate-900/50 border border-slate-800/50 rounded-2xl">
            <div className="text-center">
              <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                {counters.projects}+
              </div>
              <div className="text-slate-400 font-medium">Projects completed</div>
              <p className="text-sm text-slate-500 mt-2">From idea to production</p>
            </div>

            <div className="text-center">
              <div className="text-5xl font-bold bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent mb-2">
                100%
              </div>
              <div className="text-slate-400 font-medium">Delivery reliability</div>
              <p className="text-sm text-slate-500 mt-2">Deadlines respected</p>
            </div>
          </div>
        </div>

        {/* Personal Story */}
        <div className="mt-20 max-w-4xl mx-auto fade-in-scroll">
          <div className="p-8 bg-gradient-to-br from-slate-900/50 to-slate-900/30 border border-slate-800/50 rounded-2xl">
            <p className="text-lg text-slate-300 leading-relaxed mb-4">
              <span className="text-white font-semibold">Here&apos;s how I work:</span> We start with a clear scope call where I make sure I understand your goals, users, and constraints. Then I break the project into weekly milestones so you always know what&apos;s happening.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              Every Friday, you get a demo. Every commit is clean. And when we launch, you get full documentation and 
              support to make sure your team can take it from there. <span className="text-white font-semibold">No handoff nightmares.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedSystem() {
  return (
    <section
      id="featured"
      className="py-32 px-4 sm:px-6 lg:px-8 bg-slate-900/40 border-b border-slate-800/50"
    >
       <span
        id="featured-anchor"
        className="absolute top-0"
        aria-hidden
      />
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl text-center font-bold text-white mb-4">
         Featured Project
        </h2>
        <p className="text-slate-400 mb-12 text-center">
          A production-grade full-stack platform showcasing system-level thinking,
          backend ownership, and real-world workflows.
        </p>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Video */}
          <div className="lg:col-span-3">
            <div className="aspect-video rounded-2xl overflow-hidden border border-slate-800">
              <iframe
                src="https://www.youtube.com/embed/cXiIUS1Tqts"
                frameBorder={0}
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
  className="w-full h-full"
              />
            </div>
            <p className="text-xs text-slate-500 mt-2">
              System workflow preview (admin side omitted due to NDA)
            </p>
          </div>

          {/* Context */}
          <div className="lg:col-span-2 space-y-6 mt-16">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Code Marathi — Course Platform
              </h3>
              <p className="text-slate-400 text-sm">
                Built for a YouTuber as a scalable learning platform with admin
                control, student dashboards, progress tracking, and certification logic.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wide mb-3">
                System Scope
              </h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>• Admin-managed courses, lessons, blogs, coding problems</li>
                <li>• Student dashboards with progress & gated access</li>
                <li>• Admin-side student progress & certification tracking</li>
                <li>• Backend APIs and evolvable data models</li>
                <li>• Performance & SEO optimization</li>
              </ul>
            </div>
             {/* Live link */}
            <div className="pt-4">
              <a
                href="https://codemarathi.com" // replace with actual URL
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500/10 border border-blue-500/30 rounded-lg text-blue-400 hover:bg-blue-500/20 transition-colors"
              >
                View Live Platform
              </a>
              <p className="text-xs text-slate-500 mt-2">
                Live student-facing platform. Admin access is restricted.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Skills Section Component
function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Palette,
      color: "from-blue-500 to-cyan-500",
      skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML/CSS", "Responsive Design"]
    },
    {
      title: "Backend Development",
      icon: Server,
      color: "from-purple-500 to-pink-500",
      skills: ["Node.js", "REST APIs", "Authentication", "WebSockets"]
    },
    {
      title: "Database & Storage",
      icon: Database,
      color: "from-emerald-500 to-teal-500",
      skills: ["PostgreSQL", "MongoDB", "Prisma", "Database Design", "Query Optimization"]
    },
    {
      title: "Cloud Services",
      icon: Cloud,
      color: "from-orange-500 to-red-500",
      skills: ["AWS", "Vercel", "Nginx", "Google Cloud / Firebase"]
    }
  ];

  return (
    <section id="skills" className="py-32 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-center text-white fade-in-scroll">
          Implementation Capabilities
        </h2>
        <p className="text-center text-slate-400 mb-16 fade-in-scroll">
          Full-stack expertise across modern technologies
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="group p-8 bg-slate-900/50 border border-slate-800/50 rounded-2xl hover:border-slate-700 transition-all fade-in-scroll"
              style={{ transitionDelay: `${idx * 0.1}s` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg text-sm text-slate-300 hover:bg-slate-800 hover:border-slate-600 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Case Studies Component
function CaseStudiesSection({ caseStudies, expandedCase, setExpandedCase }) {
  return (
    <section id="cases" className="py-32 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-center text-white fade-in-scroll">
          Case Studies
        </h2>
        <p className="text-center text-slate-400 mb-16 fade-in-scroll">Real projects, real results — detailed breakdowns of my work</p>
        
        <div className="space-y-8">
          {caseStudies.map((study, idx) => (
            <div
              key={study.id}
              className="group bg-slate-900/50 border border-slate-800/50 rounded-2xl overflow-hidden hover:border-slate-700 transition-all fade-in-scroll"
              style={{transitionDelay: `${idx * 0.1}s`}}
            >
              <div className="p-6 sm:p-8">
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className={`w-full lg:w-80 h-64 rounded-xl bg-gradient-to-br ${study.color} flex-shrink-0 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-500`}>
                    <div className="absolute inset-0 bg-black/20" />
                    <Code className="w-20 h-20 text-white/80" />
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-2 text-white">{study.name}</h3>
                        <div className="flex flex-wrap gap-3 text-sm text-slate-400">
                          <span className="px-3 py-1 bg-slate-800/50 border border-slate-700/50 rounded-full">{study.type}</span>
                          <span className="px-3 py-1 bg-slate-800/50 border border-slate-700/50 rounded-full">{study.duration}</span>
                          <span className="px-3 py-1 bg-slate-800/50 border border-slate-700/50 rounded-full">{study.client}</span>
                        </div>
                      </div>
                      <button 
                        onClick={() => setExpandedCase(expandedCase === study.id ? null : study.id)}
                        className="flex items-center gap-1 text-sm font-medium px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-full text-white hover:bg-slate-800 transition-colors"
                      >
                        {expandedCase === study.id ? 'Show Less' : 'Read Full Case Study'}
                        <ChevronRight size={16} className={`transition-transform ${expandedCase === study.id ? 'rotate-90' : ''}`} />
                      </button>
                    </div>

                    <div className="mb-4">
                      <p className="text-slate-400 leading-relaxed">{study.overview}</p>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {study.highlights.map((highlight) => (
                        <span key={highlight} className="px-3 py-1 bg-slate-800/30 border border-slate-700/30 rounded-full text-sm text-slate-300 flex items-center gap-1">
                          <CheckCircle size={14} className="text-green-400" />
                          {highlight}
                        </span>
                      ))}
                    </div>

                    {expandedCase === study.id && (
                      <div className="space-y-6 mt-8 pt-8 border-t border-slate-800">
                        <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800/50">
                          <h4 className="font-bold text-xl text-white mb-4 flex items-center gap-2">
                            <Target size={20} className="text-red-400" /> The Challenge
                          </h4>
                          <p className="text-slate-300 leading-relaxed mb-4">{study.problem}</p>
                          {study.challenges && (
                            <ul className="space-y-2">
                              {study.challenges.map((challenge, i) => (
                                <li key={i} className="text-slate-400 flex items-start gap-2">
                                  <span className="text-red-400 mt-1">•</span>
                                  <span>{challenge}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>

                        <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800/50">
                          <h4 className="font-bold text-xl text-white mb-4 flex items-center gap-2">
                            <Code size={20} className="text-blue-400" /> The Solution
                          </h4>
                          <p className="text-slate-300 leading-relaxed mb-6">{study.solution}</p>
                          
                          {study.features && (
                            <div className="space-y-4">
                              <h5 className="font-semibold text-white text-sm uppercase tracking-wide">Key Features Built:</h5>
                              <div className="grid md:grid-cols-2 gap-4">
                                {study.features.map((feature, i) => (
                                  <div key={i} className="flex items-start gap-3 p-3 bg-slate-800/30 rounded-lg">
                                    <Zap size={16} className="text-blue-400 mt-1 flex-shrink-0" />
                                    <div>
                                      <div className="font-medium text-white text-sm mb-1">{feature.title}</div>
                                      <div className="text-slate-400 text-sm">{feature.desc}</div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {study.technicalDetails && (
                            <div className="mt-6 p-4 bg-slate-950/50 rounded-lg border border-slate-700/30">
                              <h5 className="font-semibold text-white text-sm uppercase tracking-wide mb-3">Technical Implementation:</h5>
                              <ul className="space-y-2">
                                {study.technicalDetails.map((detail, i) => (
                                  <li key={i} className="text-slate-400 text-sm flex items-start gap-2">
                                    <span className="text-blue-400 mt-1">→</span>
                                    <span>{detail}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>

                        <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-xl p-6 border border-green-500/20">
                          <h4 className="font-bold text-xl text-white mb-4 flex items-center gap-2">
                            <TrendingUp size={20} className="text-green-400" /> The Results
                          </h4>
                          <p className="text-slate-300 leading-relaxed mb-4">{study.outcome}</p>
                          
                          {study.metrics && (
                            <div className="grid md:grid-cols-3 gap-4 mt-6">
                              {study.metrics.map((metric, i) => (
                                <div key={i} className="text-center p-4 bg-slate-900/50 rounded-lg border border-slate-800/50">
                                  <div className="text-3xl font-bold text-green-400 mb-2">{metric.value}</div>
                                  <div className="text-sm text-slate-400">{metric.label}</div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>

                        <div>
                          <h5 className="font-semibold text-white text-sm uppercase tracking-wide mb-3">Technology Stack:</h5>
                          <div className="flex flex-wrap gap-2">
                            {study.tech.map((tech) => (
                              <span key={tech} className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-sm text-slate-300 font-medium">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {study.testimonial && (
                          <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800/50">
                            <div className="flex gap-1 mb-3">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                              ))}
                            </div>
                            <p className="text-slate-300 italic mb-4">&quot;{study.testimonial.text}&quot;</p>
                            <div className="text-sm text-slate-500">— {study.testimonial.author}</div>
                          </div>
                        )}

                        {study.liveUrl && (
                          <div className="text-center pt-4">
                            <a 
                              href={study.liveUrl} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors"
                            >
                              View Live Website <ArrowRight size={18} />
                            </a>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 fade-in-scroll">
          <p className="text-slate-400 mb-6">
            Want to see more work or discuss your project?
          </p>
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-lg font-medium hover:bg-slate-100 transition-colors">
            Schedule a Call <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}

function PortfolioProjectsSection({ portfolioProjects }) {
  return (
    <section id="portfolio" className="py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-center text-white fade-in-scroll">
          Portfolio Projects
        </h2>
        <p className="text-center text-slate-400 mb-16 fade-in-scroll">
          Personal projects and experiments showcasing different technologies
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioProjects.map((project, idx) => (
            <article
              key={project.id}
              className="group bg-slate-900/50 border border-slate-800/50 rounded-2xl overflow-hidden hover:border-slate-700 transition-all fade-in-scroll"
              style={{ transitionDelay: `${idx * 0.06}s` }}
            >
              <div className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.name} preview`}
                    className="absolute inset-0 w-full h-full object-contain"
                    loading="lazy"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-16 h-16 text-white/90 opacity-80"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M3 3h18v18H3z" />
                    </svg>
                  </div>
                )}

                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a
                    href={project.demoUrl || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 text-sm text-white hover:bg-white/20"
                  >
                    Preview
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                  {project.name}
                </h3>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-slate-800/50 border border-slate-700/50 rounded-full text-xs text-slate-400">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-4 border-t border-slate-800/50">
                  {project.demoUrl ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 rounded-lg text-sm text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <ArrowRight size={16} />
                      Demo
                    </a>
                  ) : (
                    <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-lg text-sm text-blue-300 cursor-not-allowed" disabled>
                      <ArrowRight size={16} />
                      Demo
                    </button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection({ services }) {
  return (
    <section id="services" className="py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-center text-white fade-in-scroll">
          Services
        </h2>
        <p className="text-center text-slate-400 mb-16 fade-in-scroll">Choose the package that fits your needs</p>
        
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group p-8 bg-slate-900/50 border border-slate-800/50 rounded-2xl hover:border-slate-700 hover:bg-slate-900/70 transition-all fade-in-scroll"
              style={{transitionDelay: `${idx * 0.1}s`}}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <service.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-white">{service.title}</h3>
              <p className="text-slate-400 mb-6">{service.desc}</p>
              
              <div className="space-y-2 mb-6">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-slate-400">
                    <CheckCircle size={16} className="text-green-400" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection({ testimonials }) {
  return (
    <section id="testimonials" className="py-32 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold mb-16 text-center text-white fade-in-scroll">
          What Clients Say
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((test, idx) => (
            <div
              key={idx}
              className="p-6 bg-slate-900/50 border border-slate-800/50 rounded-2xl hover:border-slate-700 transition-all fade-in-scroll"
              style={{transitionDelay: `${idx * 0.1}s`}}
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-slate-400 mb-6 italic">&quot;{test.text}&quot;</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                  {test.avatar}
                </div>
                <div>
                  <div className="font-semibold text-white">{test.author}</div>
                  <div className="text-sm text-slate-500">{test.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const openCalCom = () => {
    window.open("https://cal.com/anurag4518/intro-call", "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="relative bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-3xl p-12 text-center overflow-hidden fade-in-scroll">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />

          <div className="relative">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
             Let’s Talk About Your Project

            </h2>

            <p className="text-xl text-slate-400 mb-8">
              Ready to launch your MVP or scale your SaaS? Book a free strategy call.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={openCalCom}
                className="px-8 py-4 bg-white text-black rounded-lg font-medium hover:bg-slate-100 transition-colors"
              >
                <span className="flex items-center justify-center gap-2">
                  Book a Free Call <ArrowRight />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


function Footer() {
  return (
    <footer className="border-t border-slate-800/50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-slate-500 text-sm">
            © 2025 Anurag Sagar — Built with Next.js & Tailwind
          </div>
          <div className="flex gap-6">
            <a href="mailto:hello@anuragsagar.com" className="w-10 h-10 bg-slate-800/50 border border-slate-700/50 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-600 transition-all">
              <Mail size={20} />
            </a>
            <a href="#" className="w-10 h-10 bg-slate-800/50 border border-slate-700/50 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-600 transition-all">
              <Linkedin size={20} />
            </a>
            <a href="#" className="w-10 h-10 bg-slate-800/50 border border-slate-700/50 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-600 transition-all">
              <Github size={20} />
            </a>
            <a href="#" className="w-10 h-10 bg-slate-800/50 border border-slate-700/50 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-600 transition-all">
              <Twitter size={20} />
            </a>
          </div>
          <a href="#" className="text-slate-500 hover:text-white text-sm transition-colors">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [expandedCase, setExpandedCase] = useState(null);
  const [counters, setCounters] = useState({ projects: 0, weeks: 0, rating: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
    const sections = [
  'home',
  'about',
  'featured-anchor',
  'cases',
  'portfolio',
  'skills',
  'services',
  'testimonials',
  'contact',
];

     const offset = 120; // navbar height + buffer
let currentSection = null;

for (const section of sections) {
  const el = document.getElementById(section);
  if (!el) continue;

  const rect = el.getBoundingClientRect();
  if (rect.top - offset <= 0) {
    currentSection = section;
  }
}

if (currentSection === 'featured-anchor') {
  setActiveSection('featured');
} else if (currentSection) {
  setActiveSection(currentSection);
}


      if (current) setActiveSection(current);

      if (aboutRef.current && !hasAnimated) {
        const rect = aboutRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setHasAnimated(true);
          animateCounters();
        }
      }

      const fadeElements = document.querySelectorAll('.fade-in-scroll');
      fadeElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.85) {
          el.classList.add('visible');
        }
      });
    };

    const animateCounters = () => {
      const duration = 2000;
      const steps = 60;
      const interval = duration / steps;
      
      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        
        setCounters({
          projects: Math.floor(10 * progress),
          weeks: Math.floor(4 * progress),
          rating: (5.0 * progress).toFixed(1)
        });
        
        if (step >= steps) {
          clearInterval(timer);
          setCounters({ projects: 10, weeks: 4, rating: 5.0 });
        }
      }, interval);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasAnimated]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const caseStudies = [
    {
      id: 1,
      name: "Matrimonial Platform",
      slug: "matrimonial-platform",
      type: "MVP - Dating/Matchmaking",
      duration: "8 weeks",
      client: "Marriage Bureau (India)",
      overview: "Transformed a traditional marriage bureau from manual Excel-based operations into a modern, scalable matrimonial platform with 300+ active users.",
      problem: "Client ran a traditional marriage bureau for 15+ years using manual processes—basic registration forms, Excel sheets for matches, and phone calls for everything. With competitors launching online platforms, they were losing clients to tech-savvy matrimonial sites. They needed to digitize without losing their personal touch.",
      challenges: [
        "Zero technical infrastructure - starting from complete scratch",
        "Complex matching logic based on religion, caste, education, location, salary, family background",
        "Need for real-time communication between prospects",
        "Payment processing for premium memberships",
        "Admin needed full control without technical knowledge"
      ],
      solution: "Built a complete matrimonial platform from scratch with modern architecture and traditional matchmaking values. Started with user research to understand the marriage bureau workflow, then designed a system that automated repetitive tasks while keeping human oversight.",
      features: [
        {
          title: "Smart Registration & Profiles",
          desc: "Multi-step form with photo uploads, family details, horoscope data. Built-in verification system for admins to approve profiles."
        },
        {
          title: "Advanced Matching Algorithm",
          desc: "Weighted matching based on 15+ parameters. Auto-suggests compatible profiles while allowing manual admin overrides."
        },
        {
          title: "Real-time Chat System",
          desc: "Socket.io-based instant messaging. Users can connect after mutual interest. Chat history stored securely."
        },
        {
          title: "Payment Gateway",
          desc: "Razorpay integration for premium plans (₹999/month, ₹4999/year). Automated subscription management and renewal reminders."
        },
        {
          title: "Admin Dashboard",
          desc: "Complete control panel for profile approval, match management, payment tracking, user analytics, and customer support."
        },
        {
          title: "Privacy Controls",
          desc: "Users control who sees their contact info. Blur/hide photos until approval. Report/block functionality."
        }
      ],
      technicalDetails: [
        "Next.js 13 with App Router for SEO-friendly profile pages",
        "PostgreSQL with complex queries for multi-parameter matching",
        "Socket.io for real-time chat with Redis for session management",
        "AWS S3 for secure photo storage with automatic image optimization",
        "Razorpay webhook integration for payment confirmations",
        "JWT-based authentication with refresh tokens",
        "Responsive design - 70% traffic from mobile devices"
      ],
      outcome: "Successfully launched and replaced all manual operations. Client now focuses on customer service instead of data entry.",
      metrics: [
        { value: "300+", label: "Active Profiles" },
        { value: "50+", label: "Premium Members" },
        { value: "90%", label: "Time Saved" }
      ],
      tech: ["Next.js", "Node.js", "PostgreSQL", "Socket.io", "Razorpay", "AWS S3", "Redis"],
      color: "from-pink-500 to-rose-500",
      highlights: ["Real-time chat", "Payment integration", "Match algorithm", "Admin dashboard"],
      testimonial: {
        text: "Anurag understood our business deeply. He didn't just build a website, he built a system that works exactly how we need it to. Our clients love the modern experience, and we've cut our workload by 90%.",
        author: "Business Owner"
      },
      liveUrl: null
    },
    {
      id: 2,
      name: "Private Resort Network",
      slug: "resort-network",
      type: "MVP - Private Community",
      duration: "6 weeks",
      client: "Resort Owners Group",
      overview: "Built a secure private network for 25+ resort owners to share insights, coordinate bookings, and manage shared resources—replacing scattered WhatsApp groups.",
      problem: "A group of 25+ resort owners across different locations needed better coordination. They were using WhatsApp groups for everything—sharing vendor contacts, discussing occupancy rates, coordinating joint marketing, managing shared amenities. Messages got lost, files were scattered, and sensitive business info wasn't secure.",
      challenges: [
        "Needed enterprise-level security for sensitive business data",
        "Multiple user roles - owners, managers, staff with different access levels",
        "File sharing for large documents (contracts, invoices, marketing materials)",
        "Booking coordination for shared resources (event spaces, equipment)",
        "Had to replace existing workflow without steep learning curve"
      ],
      solution: "Developed a private forum-style platform that centralized all communication and resources. Focused on simplicity—if it's harder than WhatsApp, they won't use it. Built familiar interfaces with enhanced security and organization.",
      features: [
        {
          title: "Member Authentication",
          desc: "Invitation-only system. Email verification + admin approval. Each member linked to their property profile."
        },
        {
          title: "Discussion Boards",
          desc: "Topic-based forums (Marketing, Operations, Vendor Reviews, etc.). Threaded conversations with @ mentions and notifications."
        },
        {
          title: "Secure Document Vault",
          desc: "Organized file library with folders. Version control for contracts. Search by tags and categories. 200+ files uploaded in first month."
        },
        {
          title: "Shared Calendar",
          desc: "Booking system for shared amenities (event spaces, equipment). Color-coded by property. Email reminders for reservations."
        },
        {
          title: "Direct Messaging",
          desc: "Private 1-on-1 and group chats. File sharing in DMs. Read receipts and online status indicators."
        },
        {
          title: "Role-Based Permissions",
          desc: "Owners: full access. Managers: limited to their property. Staff: view-only in most sections."
        }
      ],
      technicalDetails: [
        "React SPA with React Router for smooth navigation",
        "Express.js REST API with comprehensive validation",
        "MongoDB for flexible schema (discussion threads, nested comments)",
        "Cloudinary for document storage with automatic previews",
        "JWT authentication with role-based middleware",
        "Redis caching for frequently accessed data (user lists, active threads)",
        "Socket.io for real-time notifications and online presence",
        "Implemented rate limiting to prevent spam"
      ],
      outcome: "Platform became the central hub for all resort operations. Eliminated the chaos of WhatsApp groups while maintaining the ease of use.",
      metrics: [
        { value: "25+", label: "Properties Connected" },
        { value: "80%", label: "Reduced Email Volume" },
        { value: "200+", label: "Documents Shared" }
      ],
      tech: ["React", "Express", "MongoDB", "Redis", "JWT Auth", "Cloudinary", "Socket.io"],
      color: "from-emerald-500 to-teal-500",
      highlights: ["Member authentication", "Forum system", "File sharing", "Private messaging"],
    }
  ];

  const portfolioProjects = [
    {
      id: 1,
      name: "Guardian Media",
      description: "A company that designs theme parks.",
      tech: ["React", "Tailwind"],
      color: "from-gray-100 to-white",
      image: "/assets/Guardian_Logo.png",
      demoUrl: "https://www.guardian.media/",
    },
    {
      id: 2,
      name: "DTL Energy Solutions",
      description: "Landing page for a Lighting solutions provider..",
      tech: ["Next.js", "Tailwind"],
      color: "from-blue-500 to-cyan-500",
      image: "/assets/DTL.webp",
      demoUrl: "https://www.dtlenergysolutions.com/",
    },
    {
      id: 3,
      name: "The Adynex",
      description: "Landing page for a marketing agency.",
      tech: ["Next.js", "Tailwind"],
      color: "from-orange-500 to-yellow-500",
      image: "/assets/Logo.png",
      demoUrl: "https://adynex-1.vercel.app",
    }
  ];

  const services = [
    {
      title: "Web Development",
      desc: "End-to-end development support for web products and internal tools. Best for teams that need reliable execution without long-term hiring.",
      features: ["Full-stack development", "Database design", "Authentication", "Payment integration"],
      icon: Rocket,
      price: "From $5,000"
    },
    {
      title: "SaaS Development",
      desc: "Scalable multi-tenant applications with modern architecture.",
      features: ["Cloud infrastructure", "Admin dashboards", "API development", "Third-party integrations"],
      icon: Code,
      price: "From $10,000"
    },
    {
      title: "Landing Pages",
      desc: "High-converting pages that turn visitors into customers.",
      features: ["Responsive design", "SEO optimization", "Analytics setup", "A/B testing ready"],
      icon: Users,
      price: "From $2,000"
    }
  ];

  const techStack = [
    "React", "Next.js", "Node.js", "TypeScript", "Tailwind", "PostgreSQL", "MongoDB", "Prisma", "AWS", "Vercel"
  ];

  const testimonials = [
    {
      text: `Working with Anurag was one of the best decisions we made for our product. He didn’t just ‘build a web app’ — he helped us architect a full-fledged, large-scale platform that is now the backbone of our operations. His understanding of complex requirements, attention to detail, and willingness to refine things until they work perfectly is rare.

What stood out the most is his problem-solving mindset. Every time we hit a roadblock, Anurag came back with a smarter and cleaner solution. He works like a true tech partner, not just a developer. We’ll continue working with him as we scale.`,
      author: "Nitesh Ghodke",
      role: "Founder, Helpmate Collaborator LLP",
      avatar:"NG"
    },
    {
      text: `I approached Anurag for a landing page, and he delivered something far beyond what I expected. The design, the copy, the structure — everything looked clean, modern, and conversion-focused. He understood my brand instantly and built a page that helped us look premium and professional from day one.

His process was smooth, fast, and extremely reliable. I’ve already recommended him to multiple people in my network.`,
      author: "Jayesh Pingle",
      role: "Founder, Adynex",
      avatar: "JP"
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes drawLine {
          to { stroke-dashoffset: 0; }
        }
        .fade-in-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .fade-in-scroll.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .code-line {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: drawLine 2s ease-out forwards;
        }
      `}</style>

      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        <Navigation 
          activeSection={activeSection}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          scrollToSection={scrollToSection}
        />

        <HeroSection 
          scrollToSection={scrollToSection}
          techStack={techStack}
        />

        <ClientLogosSection />

        <AboutSection 
          counters={counters}
          aboutRef={aboutRef}
        />

      <FeaturedSystem/>

        <CaseStudiesSection 
          caseStudies={caseStudies}
          expandedCase={expandedCase}
          setExpandedCase={setExpandedCase}
        />

        <PortfolioProjectsSection portfolioProjects={portfolioProjects} />
          <SkillsSection />

        <ServicesSection services={services} />

        <TestimonialsSection testimonials={testimonials} />

        <ContactSection scrollToSection={scrollToSection} />

        <Footer />
      </div>
    </div>
  );
}