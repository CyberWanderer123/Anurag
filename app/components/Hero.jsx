
import { ArrowRight } from "lucide-react"

export default function Hero() {
    return (
        <div>
            {/* Hero Section */}
            <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
                <div className="max-w-5xl mx-auto text-center">
                    <div className="mb-6 inline-block">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-full text-sm text-slate-300">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                            Available for new projects
                        </div>
                    </div>

                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-white">
                        Full-Stack Developer
                        <br />
                        <span className="text-slate-400">Building Digital Products</span>
                    </h1>

                    <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                        I help startups and businesses launch web applications from concept to production.
                        Clean code, scalable architecture, delivered on time.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="group relative px-8 py-4 bg-white text-black rounded-lg font-medium hover:bg-slate-100 transition-colors"
                        >
                            <span className="flex items-center justify-center gap-2">
                                Get in Touch <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </span>
                        </button>

                        <button
                            onClick={() => scrollToSection('cases')}
                            className="px-8 py-4 border border-slate-700 rounded-lg font-medium hover:bg-slate-800/50 transition-colors text-slate-300"
                        >
                            View Work
                        </button>
                    </div>

                    <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-8 border-t border-slate-800">
                        <div>
                            <div className="text-3xl font-bold text-white mb-1">10+</div>
                            <div className="text-sm text-slate-500">Projects Delivered</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-white mb-1">4 Weeks</div>
                            <div className="text-sm text-slate-500">Avg. Timeline</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-white mb-1">5.0★</div>
                            <div className="text-sm text-slate-500">Client Rating</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}