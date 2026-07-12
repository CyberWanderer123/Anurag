'use client'
import { useState, useEffect } from 'react';
import { ArrowRight, Code, Rocket, Users, Menu, X, Star, ChevronRight, Mail, Linkedin, Github, Twitter, Zap, Target, CheckCircle, Database, Server, Smartphone, ExternalLink, Shield, ChevronDown, Briefcase, Lightbulb, TrendingUp } from 'lucide-react';

// ------------------------------------------------------------------------------------------------
// 1. NAVIGATION
// ------------------------------------------------------------------------------------------------
function Navigation({ activeSection, isMenuOpen, setIsMenuOpen, scrollToSection }) {
  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Flagship Work', id: 'flagship' },
    { label: 'Process', id: 'process' },
    { label: 'Other Cases', id: 'cases' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-[#050505]/70 backdrop-blur-xl border-b border-white/5 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="text-xl font-bold tracking-tight text-white flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-emerald-500 flex items-center justify-center">
              <span className="text-[#050505] text-sm">AS</span>
            </div>
            Anurag Sagar
          </div>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-300 ${activeSection === id
                  ? 'text-white bg-white/10'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
              >
                {label}
              </button>
            ))}
            <button
              onClick={() => window.open('https://cal.com/anurag4518/intro-call', '_blank')}
              className="ml-4 px-6 py-2.5 bg-white text-black text-sm font-semibold rounded-full hover:bg-slate-200 transition-colors nav-cta-glow"
            >
              Book a Call
            </button>
          </div>

          <button
            className="md:hidden text-slate-400 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-[#0a0a0a] border-t border-white/5 absolute w-full left-0">
          <div className="px-4 py-6 space-y-2">
            {navItems.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => { scrollToSection(id); setIsMenuOpen(false); }}
                className="block w-full text-left px-6 py-4 rounded-xl text-lg font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-all"
              >
                {label}
              </button>
            ))}
            <button
              onClick={() => { window.open('https://cal.com/anurag4518/intro-call', '_blank'); setIsMenuOpen(false); }}
              className="block w-full mt-4 px-6 py-4 bg-white text-black text-lg font-bold rounded-xl text-center"
            >
              Book a Call
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

// ------------------------------------------------------------------------------------------------
// FLOATING MOBILE CTA (visible after scrolling on mobile)
// ------------------------------------------------------------------------------------------------
function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 md:hidden z-50 p-4 bg-gradient-to-t from-[#050505] via-[#050505]/95 to-transparent pt-8">
      <button
        onClick={() => window.open('https://cal.com/anurag4518/intro-call', '_blank')}
        className="w-full py-4 bg-white text-black rounded-full font-bold text-lg flex items-center justify-center gap-2 shadow-2xl shadow-white/10 active:scale-95 transition-transform"
      >
        Book a Free Strategy Call
        <ArrowRight size={20} />
      </button>
      <p className="text-center text-xs text-slate-500 mt-2">Free 30-min · No commitment</p>
    </div>
  );
}

// ------------------------------------------------------------------------------------------------
// SECTION CTA (reusable momentum CTA placed between major sections)
// ------------------------------------------------------------------------------------------------
function SectionCTA({ headline, subtext }) {
  return (
    <div className="py-16 px-6 lg:px-8 bg-[#050505] fade-in-scroll">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-2xl sm:text-3xl font-bold text-white mb-4 tracking-tight">{headline}</p>
        {subtext && <p className="text-slate-400 mb-8 text-lg">{subtext}</p>}
        <button
          onClick={() => window.open('https://cal.com/anurag4518/intro-call', '_blank')}
          className="px-8 py-4 bg-white/5 border border-white/10 rounded-full font-semibold text-white hover:bg-white hover:text-black transition-all duration-300 inline-flex items-center gap-2 group"
        >
          {"Let's Talk"}
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}

// ------------------------------------------------------------------------------------------------
// 2. HERO — Updated with urgency badge + risk-reduction microcopy
// ------------------------------------------------------------------------------------------------
function HeroSection({ scrollToSection }) {
  return (
    <section id="home" className="relative min-h-[90vh] flex flex-col justify-center px-6 lg:px-8 pt-32 pb-20 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] opacity-50 mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-[120px] opacity-50 mix-blend-screen pointer-events-none" />

      <div className="relative max-w-5xl mx-auto z-10 w-full">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-slate-300 font-medium mb-8 backdrop-blur-sm slide-up-fade">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          {/* UPDATE THIS with your real availability */}
          Only 2 client slots open for the month
        </div>

        <h1 className="text-5xl sm:text-7xl lg:text-[5.5rem] font-bold tracking-tighter text-white mb-8 leading-[1.05] slide-up-fade" style={{ animationDelay: '100ms' }}>
          I architect & build <br className="hidden lg:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-emerald-400">production-ready platforms.</span>
        </h1>

        <p className="text-xl sm:text-2xl text-slate-400 mb-12 leading-relaxed max-w-3xl slide-up-fade" style={{ animationDelay: '200ms' }}>
          I act as an independent technical partner. I handle system architecture and end-to-end execution so you can focus on your business, not technical debt.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 mb-4 slide-up-fade" style={{ animationDelay: '300ms' }}>
          <button
            onClick={() => window.open('https://cal.com/anurag4518/intro-call', '_blank')}
            className="group px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-slate-200 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
          >
            Book a Strategy Call
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => scrollToSection('flagship')}
            className="px-8 py-4 bg-white/5 border border-white/10 rounded-full font-medium text-lg text-white hover:bg-white/10 transition-colors flex items-center justify-center"
          >
            View Flagship Work
          </button>
        </div>

        {/* Risk-reduction microcopy — removes friction from the CTA */}
        <p className="text-sm text-slate-500 mb-16 slide-up-fade flex items-center gap-4 flex-wrap" style={{ animationDelay: '350ms' }}>
          <span className="flex items-center gap-1.5"><CheckCircle size={14} className="text-emerald-500/70" /> Free 30-min call</span>
          <span className="flex items-center gap-1.5"><CheckCircle size={14} className="text-emerald-500/70" /> No commitment</span>
          <span className="hidden sm:flex items-center gap-1.5"><CheckCircle size={14} className="text-emerald-500/70" /> Actionable insights guaranteed</span>
        </p>

        {/* Featured Testimonial moved directly under Hero */}
        <div className="max-w-2xl border-l-2 border-emerald-500/50 pl-6 slide-up-fade" style={{ animationDelay: '400ms' }}>
          <p className="text-slate-300 italic text-lg mb-4">
            "He didn't just build a web app — he helped us architect a full-fledged, large-scale platform. He works like a true tech partner, not just a developer."
          </p>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-500 flex items-center justify-center text-white font-bold text-xs">NG</div>
            <div>
              <div className="text-white font-medium text-sm">Nitesh Ghodke</div>
              <div className="text-slate-500 text-xs uppercase tracking-wider">Founder, Helpmate</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

// ------------------------------------------------------------------------------------------------
// 3. SOCIAL PROOF BAND — with lazy-loaded images
// ------------------------------------------------------------------------------------------------
function TrustBand() {
  const clients = [
    { name: "Guardian Media", logo: "/assets/Guardian_Logo.png" },
    { name: "The Adynex", logo: "/assets/Logo.png" },
    { name: 'DTL Energy Solutions', logo: '/assets/DTL.webp' },
    { name: 'Fingerring Matrimony', logo: '/assets/fingerring.jpg' },
    { name: 'Unisoft', logo: '/assets/unisoft2.png' },
  ];

  return (
    <section className="py-8 border-y border-white/5 bg-[#0a0a0a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-slate-500 uppercase tracking-widest mb-6">Trusted by fast-growing companies</p>
        <div className="w-full overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10"></div>

          <div className="flex w-max animate-scroll-left hover:pause-animation items-center">
            {[...clients, ...clients, ...clients].map((client, idx) => (
              <div key={idx} className="px-12 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                <img src={client.logo} alt={client.name} className="h-8 object-contain max-w-[120px]" loading="lazy" width={120} height={32} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ------------------------------------------------------------------------------------------------
// 4. FLAGSHIP CONSULTING PROJECTS
// ------------------------------------------------------------------------------------------------
function FlagshipProjects() {
  const projects = [
    {
      name: "Maynaa",
      type: "PropTech Platform",
      description: "A property due diligence platform streamlining legal reviews and customer onboarding. Replaced manual document sharing with a secure digital portal.",
      metrics: [
        { label: "Inquiries in Month 1", value: "100+" },
        { label: "Processing Time Cut By", value: "60%" },
        { label: "Extra Tech Hires Needed", value: "0" }
      ],
      tech: ["React", "Node.js", "Express", "AWS S3", "WebSockets"],
      image: "/assets/maynaa.png",
      url: "https://maynaa.com",
      color: "from-orange-500/20 to-red-500/20",
      borderColor: "border-orange-500/20",
      accentText: "text-orange-400"
    },
    {
      name: "Code Marathi",
      type: "Learning Management System",
      description: "A localized EdTech platform built to support rapid content rollout. Features a high-performance video delivery network, automated certifications, and a custom CMS requiring zero technical training for instructors.",
      metrics: [
        { label: "Time to Market", value: "10 Weeks" },
        { label: "Extra Tech Hires Needed", value: "0" },
        { label: "Reduced Cloud Spend", value: "40%" }
      ],
      tech: ["Next.js", "PostgreSQL", "AWS S3", "Prisma"],
      image: "/assets/codemarathi.png",
      url: "https://codemarathi.in",
      color: "from-blue-500/20 to-indigo-500/20",
      borderColor: "border-blue-500/20",
      accentText: "text-blue-400"
    }
  ];

  return (
    <section id="flagship" className="py-32 px-6 lg:px-8 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 fade-in-scroll">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-blue-500"></div>
            <span className="text-blue-400 font-medium uppercase tracking-widest text-sm">Selected Work</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-bold text-white tracking-tight mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl">
            Platforms architected and built to solve core business problems.
          </p>
        </div>

        <div className="space-y-40">
          {projects.map((project, idx) => (
            <div key={project.name} className={`flex flex-col lg:flex-row gap-16 items-center fade-in-scroll ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>

              {/* Image Side - Massive & Immersive */}
              <div className="w-full lg:w-[55%] relative group">
                <div className={`absolute inset-0 bg-gradient-to-tr ${project.color} blur-[100px] rounded-[3rem] opacity-50 group-hover:opacity-80 transition-opacity duration-700 pointer-events-none`} />
                <div className={`relative rounded-3xl overflow-hidden border ${project.borderColor} bg-[#0a0a0a] shadow-2xl group-hover:border-white/20 transition-colors duration-500`}>
                  <img src={project.image} alt={project.name} className="w-full object-contain aspect-[4/3] lg:aspect-[16/9] opacity-95 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" />

                  {/* Floating Action Button */}
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="absolute bottom-6 right-6 w-14 h-14 bg-white text-black rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300 z-20 group/btn">
                    <ExternalLink size={24} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-[45%] space-y-8">
                <div>
                  <div className={`inline-block font-mono text-sm tracking-wider uppercase mb-4 ${project.accentText}`}>
                    {project.type}
                  </div>
                  <h3 className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight">
                    {project.name}
                  </h3>
                  <p className="text-lg text-slate-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-6 py-8 border-y border-white/5">
                  {project.metrics.map((metric, i) => (
                    <div key={i}>
                      <div className="text-2xl sm:text-3xl font-bold text-white mb-1 tracking-tight">{metric.value}</div>
                      <div className="text-xs sm:text-sm text-slate-500 uppercase tracking-wider">{metric.label}</div>
                    </div>
                  ))}
                </div>

                <div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-slate-300 text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ------------------------------------------------------------------------------------------------
// TESTIMONIALS SECTION — Featured client result
// ------------------------------------------------------------------------------------------------
function TestimonialsSection() {
  // ADD MORE REAL TESTIMONIALS HERE — the section will automatically display them
  const testimonials = [
    {
      quote: "He didn't just build a web app — he helped us architect a full-fledged, large-scale platform. He works like a true tech partner, not just a developer.",
      name: "Nitesh Ghodke",
      role: "Founder, Helpmate",
      initials: "NG",
      gradient: "from-blue-500 to-indigo-500",
      metric: "100+ Inquiries in Month 1"
    },
    // To add more testimonials, copy this template:
    // {
    //   quote: "Client testimonial text here.",
    //   name: "Client Name",
    //   role: "Title, Company",
    //   initials: "CN",
    //   gradient: "from-emerald-500 to-teal-500",
    //   metric: "Key Result Metric"
    // },
  ];

  return (
    <section className="py-24 px-6 lg:px-8 bg-[#0a0a0a] border-y border-white/5">
      <div className="max-w-5xl mx-auto fade-in-scroll">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px w-12 bg-emerald-500"></div>
          <span className="text-emerald-400 font-medium uppercase tracking-widest text-sm">Client Results</span>
        </div>

        {/* Featured testimonial — large pull-quote format */}
        <div className="relative">
          <div className="absolute -top-6 -left-2 text-8xl text-white/5 font-serif select-none leading-none" aria-hidden="true">{"\u201C"}</div>
          <blockquote className="text-3xl sm:text-4xl font-bold text-white leading-snug tracking-tight mb-10 relative z-10">
            {testimonials[0].quote}
          </blockquote>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-full bg-gradient-to-tr ${testimonials[0].gradient} flex items-center justify-center text-white font-bold text-sm`}>
                {testimonials[0].initials}
              </div>
              <div>
                <div className="text-white font-semibold">{testimonials[0].name}</div>
                <div className="text-slate-500 text-sm">{testimonials[0].role}</div>
              </div>
            </div>
            <div className="sm:ml-auto flex items-center gap-1 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full w-fit">
              <TrendingUp size={16} className="text-emerald-400" />
              <span className="text-emerald-400 text-sm font-medium">{testimonials[0].metric}</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// ------------------------------------------------------------------------------------------------
// 5. THE CONSULTING PROCESS (Merged Services + About)
// ------------------------------------------------------------------------------------------------
function ConsultingProcess() {
  const steps = [
    {
      icon: Target,
      title: "1. Strategy & Architecture",
      desc: "I start by defining the exact scope and selecting the right architecture for your scale. No guesswork.",
    },
    {
      icon: Code,
      title: "2. Full-Cycle Engineering",
      desc: "I act as your hands-on CTO. From database design to frontend polish, I build secure, high-performance platforms with zero technical debt.",
    },
    {
      icon: Shield,
      title: "3. Delivery & Scaling",
      desc: "Code is deployed to a production-ready cloud infrastructure. You get complete documentation, handoff, and ongoing fractional leadership as you scale.",
    }
  ];

  return (
    <section id="process" className="py-32 px-6 lg:px-8 bg-[#0a0a0a] border-y border-white/5 relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          <div className="fade-in-scroll">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-emerald-500"></div>
              <span className="text-emerald-400 font-medium uppercase tracking-widest text-sm">How I Partner With You</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-8 leading-tight">
              My Technical <br />
              <span className="text-slate-500">Approach</span>
            </h2>
            <div className="space-y-6 text-lg text-slate-400 leading-relaxed">
              <p>
                As an independent technical consultant, I bridge the gap between your business strategy and technical execution.
              </p>
              <p>
                Whether you need a fractional CTO to guide your team, or a hands-on partner to architect and build a SaaS platform from scratch, I ensure predictable delivery and systems that don't fall apart when real users show up.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {steps.map((step, idx) => (
              <div key={idx} className="group p-8 bg-[#050505] border border-white/5 rounded-3xl hover:border-white/20 transition-all duration-300 fade-in-scroll" style={{ transitionDelay: `${idx * 100}ms` }}>
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300">
                    <step.icon size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{step.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

// ------------------------------------------------------------------------------------------------
// 6. OTHER CASE STUDIES (MVPs)
// ------------------------------------------------------------------------------------------------
function OtherCaseStudies() {
  const caseStudies = [
    {
      name: "Matrimonial Platform",
      type: "MVP - Matchmaking",
      client: "Marriage Bureau",
      overview: "Transformed a traditional marriage bureau from manual Excel-based operations into a modern, scalable platform.",
      highlights: ["Complex matching logic", "Real-time chat", "Payment integration", "Admin dashboard"],
      tech: ["Next.js", "PostgreSQL", "Socket.io", "Razorpay"],
    },
    {
      name: "Private Resort Network",
      type: "MVP - Private Community",
      client: "Resort Owners Group",
      overview: "Built a secure private network for 25+ resort owners to share insights, coordinate bookings, and manage shared resources.",
      highlights: ["Member authentication", "Forum system", "Secure File sharing", "Shared Calendar"],
      tech: ["React", "Express", "MongoDB", "Socket.io"],
    }
  ];

  return (
    <section id="cases" className="py-32 px-6 lg:px-8 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 fade-in-scroll">
          <h2 className="text-3xl font-bold text-white tracking-tight mb-4">
            Other MVP Projects
          </h2>
          <p className="text-slate-400 max-w-2xl">
            Early-stage platforms built rapidly to validate ideas and secure initial traction.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((study, idx) => (
            <div key={idx} className="p-8 bg-[#0a0a0a] border border-white/5 rounded-3xl hover:border-white/10 transition-colors fade-in-scroll">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="text-sm text-emerald-400 font-mono mb-2">{study.type}</div>
                  <h3 className="text-2xl font-bold text-white">{study.name}</h3>
                </div>
                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center">
                  <Code size={20} className="text-slate-400" />
                </div>
              </div>

              <p className="text-slate-400 mb-8 leading-relaxed min-h-[80px]">{study.overview}</p>

              <div className="space-y-6">
                <div>
                  <div className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">Key Features</div>
                  <ul className="space-y-2">
                    {study.highlights.map(h => (
                      <li key={h} className="flex items-center gap-2 text-sm text-slate-400">
                        <CheckCircle size={14} className="text-emerald-500/70" /> {h}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-white/5">
                  <div className="flex flex-wrap gap-2">
                    {study.tech.map(t => (
                      <span key={t} className="px-3 py-1 bg-white/5 rounded-md text-xs text-slate-300 font-mono">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ------------------------------------------------------------------------------------------------
// WHO I WORK WITH — helps visitors self-qualify
// ------------------------------------------------------------------------------------------------
function IdealClient() {
  const personas = [
    {
      icon: Lightbulb,
      title: "Non-Technical Founders",
      description: "You have the vision and domain expertise but need a technical partner to architect and build your platform from scratch.",
    },
    {
      icon: Rocket,
      title: "Startups Validating an MVP",
      description: "You need to get to market fast with a production-quality product — not a throwaway prototype you'll rebuild in 6 months.",
    },
    {
      icon: TrendingUp,
      title: "Growing Companies",
      description: "Your platform is live but struggling with scale, tech debt, or needs a senior engineering perspective to plan the next phase.",
    },
  ];

  return (
    <section className="py-32 px-6 lg:px-8 bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-in-scroll">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-blue-500"></div>
            <span className="text-blue-400 font-medium uppercase tracking-widest text-sm">Who I Work With</span>
            <div className="h-px w-12 bg-blue-500"></div>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-6">
            Is this you?
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            I work best with founders and teams who are serious about building something real.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {personas.map((persona, idx) => (
            <div key={idx} className="group p-8 bg-[#050505] border border-white/5 rounded-3xl hover:border-white/20 transition-all duration-300 text-center fade-in-scroll">
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300">
                <persona.icon size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{persona.title}</h3>
              <p className="text-slate-400 leading-relaxed">{persona.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ------------------------------------------------------------------------------------------------
// FAQ ITEM — collapsible accordion for common questions
// ------------------------------------------------------------------------------------------------
function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-5 text-left group"
      >
        <span className="text-white font-medium pr-4 group-hover:text-slate-200 transition-colors">{question}</span>
        <ChevronDown size={20} className={`text-slate-400 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-40 pb-5' : 'max-h-0'}`}>
        <p className="text-slate-400 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

// ------------------------------------------------------------------------------------------------
// 7. CONTACT — Enhanced with FAQ, email fallback, response-time guarantee
// ------------------------------------------------------------------------------------------------
function ContactSection() {
  const faqs = [
    {
      question: "What happens on the call?",
      answer: "We'll discuss your project, goals, and technical challenges. You'll walk away with actionable insights and a clear next step — whether or not we end up working together."
    },
    {
      question: "What does an engagement look like?",
      answer: "We jump straight into execution. After a quick scoping call, I can typically start within a few days. I offer both project-based pricing and monthly retainer models depending on your needs."
    },
    {
      question: "How quickly can you start?",
      answer: "Fast. Most projects kick off within a few days of agreement — I don't believe in long onboarding cycles. Current availability is shown at the top of this page."
    }
  ];

  return (
    <section id="contact" className="py-32 px-6 lg:px-8 bg-[#050505] border-t border-white/5">
      <div className="max-w-6xl mx-auto fade-in-scroll">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left: Primary CTA + email fallback */}
          <div>
            <h2 className="text-5xl sm:text-6xl font-bold text-white tracking-tight mb-8">
              Ready to scale?
            </h2>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed">
              Whether you need a technical co-pilot for your startup or a consultant to audit and scale your existing platform, let's talk.
            </p>
            <div className="space-y-4">
              <button
                onClick={() => window.open('https://cal.com/anurag4518/intro-call', '_blank')}
                className="w-full sm:w-auto px-10 py-5 bg-white text-black rounded-full font-bold text-xl hover:bg-slate-200 hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-3"
              >
                Book a Free Strategy Call
                <ArrowRight size={24} />
              </button>
              <p className="text-sm text-slate-500 flex items-center gap-4">
                <span className="flex items-center gap-1.5"><CheckCircle size={14} className="text-emerald-500/70" /> Free 30-min</span>
                <span className="flex items-center gap-1.5"><CheckCircle size={14} className="text-emerald-500/70" /> No commitment</span>
              </p>
            </div>
            <div className="mt-8 pt-8 border-t border-white/5">
              <p className="text-slate-500 text-sm mb-3">Prefer email?</p>
              <a href="mailto:sanurag4518@gmail.com" className="text-white font-medium hover:text-blue-400 transition-colors inline-flex items-center gap-2">
                <Mail size={18} /> sanurag4518@gmail.com
              </a>
              <p className="text-emerald-500/70 text-sm mt-2 flex items-center gap-1.5">
                <CheckCircle size={14} /> I reply within 24 hours
              </p>
            </div>
          </div>

          {/* Right: FAQ accordion */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 tracking-tight">Common Questions</h3>
            <div>
              {faqs.map((faq, idx) => (
                <FAQItem key={idx} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// ------------------------------------------------------------------------------------------------
// FOOTER
// ------------------------------------------------------------------------------------------------
function Footer() {
  return (
    <footer className="py-12 px-6 lg:px-8 bg-[#050505] border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-slate-500 text-sm font-medium">
          © {new Date().getFullYear()} Anurag Sagar. Product Strategy & Execution.
        </div>
        <div className="flex gap-4">
          <a href="mailto:sanurag4518@gmail.com" className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all">
            <Mail size={20} />
          </a>
          {/* TODO: Replace "#" with your real LinkedIn URL */}
          <a href="https://www.linkedin.com/in/anurag-sagar4518/" className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all">
            <Linkedin size={20} />
          </a>
          {/* TODO: Replace "#" with your real GitHub URL */}
          <a href="https://github.com/CyberWanderer123" className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all">
            <Github size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}

// ------------------------------------------------------------------------------------------------
// MAIN EXPORT
// ------------------------------------------------------------------------------------------------
export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'flagship', 'process', 'cases', 'contact'];
      const offset = 120;
      let currentSection = 'home';

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top - offset <= 0) {
            currentSection = section;
          }
        }
      }
      setActiveSection(currentSection);

      const fadeElements = document.querySelectorAll('.fade-in-scroll');
      fadeElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.85) {
          el.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger once on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-blue-500/30">
      <style>{`
        .fade-in-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .fade-in-scroll.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .slide-up-fade {
          opacity: 0;
          animation: slideUpFade 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes slideUpFade {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }
        .pause-animation {
          animation-play-state: paused;
        }
        /* Nav CTA subtle glow pulse */
        .nav-cta-glow {
          animation: ctaGlow 3s ease-in-out infinite;
        }
        @keyframes ctaGlow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(255, 255, 255, 0); }
          50% { box-shadow: 0 0 20px 4px rgba(255, 255, 255, 0.12); }
        }
      `}</style>

      <Navigation
        activeSection={activeSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrollToSection={scrollToSection}
      />

      <HeroSection scrollToSection={scrollToSection} />
      <TrustBand />
      <FlagshipProjects />
      <SectionCTA
        headline="Want results like these?"
        subtext="Let's discuss how I can help you build something great."
      />
      <TestimonialsSection />
      <ConsultingProcess />
      <SectionCTA
        headline="Ready to start?"
        subtext="Book a free strategy call and get actionable insights."
      />
      <OtherCaseStudies />
      <IdealClient />
      <ContactSection />
      <Footer />

      {/* Spacer so floating mobile CTA doesn't cover footer */}
      <div className="h-24 md:hidden bg-[#050505]" aria-hidden="true" />
      <FloatingCTA />
    </div>
  );
}