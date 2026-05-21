import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Microscope, Activity, ChevronRight, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getAllPosts } from '@/utils/posts';

const Section = ({ title, children, id }: { title: string; children: React.ReactNode; id?: string }) => (
  <motion.section 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    id={id} 
    className="py-24 border-t border-foreground/5"
  >
    <div className="flex items-center gap-4 mb-12">
      <h2 className="text-sm font-mono tracking-widest uppercase text-foreground/40">{title}</h2>
      <div className="h-px flex-1 bg-foreground/5" />
    </div>
    {children}
  </motion.section>
);

const Home: React.FC = () => {
  const recentPosts = getAllPosts().slice(0, 3);

  return (
    <div className="relative min-h-screen">
      {/* --- BACKGROUND DECORATION --- */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute inset-0 grid-subtle opacity-50" />
        <div className="absolute inset-0 blur-gradient" />
      </div>

      {/* --- HERO SECTION --- */}
      <section className="min-h-[90vh] flex flex-col justify-center relative pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/20 bg-accent/5 text-accent text-xs font-mono mb-8">
            <Activity size={12} className="animate-pulse" />
            Geology · AI · Energy · Simulation
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8 leading-[1.1]">
            Acalculiaux<span className="text-accent/50">.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/60 max-w-2xl font-light leading-relaxed mb-12">
            Peking University researcher exploring the geometry of nature through 
            <span className="text-foreground font-normal"> structural geology</span> and 
            <span className="text-foreground font-normal"> scientific machine learning</span>.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link to="/blog" className="px-8 py-4 bg-foreground text-background rounded-full font-medium hover:opacity-90 transition-all flex items-center gap-2 group">
              Read Articles <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="#research" className="px-8 py-4 border border-foreground/10 rounded-full font-medium hover:bg-foreground/5 transition-all flex items-center gap-2">
              Research <Microscope size={18} />
            </a>
            <a href="https://github.com/Acalculiaux" target="_blank" className="px-8 py-4 border border-foreground/10 rounded-full font-medium hover:bg-foreground/5 transition-all flex items-center gap-2">
              GitHub
            </a>
          </div>
        </motion.div>
        
        {/* Subtle geometry decor */}
        <div className="absolute right-0 bottom-20 opacity-10 hidden lg:block">
          <svg width="400" height="400" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="0.5" />
            <path d="M50 2 L50 98 M2 50 L98 50" stroke="currentColor" strokeWidth="0.5" />
            <rect x="25" y="25" width="50" height="50" stroke="currentColor" strokeWidth="0.5" transform="rotate(45 50 50)" />
          </svg>
        </div>
      </section>

      {/* --- FEATURED RESEARCH --- */}
      <Section title="Featured Research" id="research">
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { title: "Geothermal Simulation", desc: "Modeling heat transfer and fluid flow in complex geothermal reservoirs using COMSOL and DFNWorks.", icon: <Cpu className="text-accent" /> },
            { title: "Fracture Networks", desc: "Structural analysis of discrete fracture networks (DFN) and their impact on reservoir permeability.", icon: <Activity className="text-accent" /> },
            { title: "AI for Geoscience", desc: "Applying Physics-Informed Neural Networks (PINN) to solve partial differential equations in geological contexts.", icon: <Terminal className="text-accent" /> },
            { title: "Deep Learning", desc: "Utilizing PyTorch for automated feature detection and uncertainty quantification in structural modeling.", icon: <Microscope className="text-accent" /> }
          ].map((item, index) => (
            <div key={index} className="p-8 border border-foreground/5 hover:border-accent/20 transition-all group rounded-2xl bg-foreground/[0.01]">
              <div className="mb-6 p-3 rounded-lg bg-foreground/5 w-fit group-hover:bg-accent/10 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-foreground/60 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* --- LATEST ARTICLES --- */}
      <Section title="Latest Articles">
        <div className="space-y-4">
          {recentPosts.map((post) => (
            <Link key={post.slug} to={`/blog/${post.slug}`} className="flex flex-col md:flex-row md:items-center justify-between p-8 border border-foreground/5 hover:border-foreground/20 rounded-2xl transition-all group bg-foreground/[0.01]">
              <div className="flex-1">
                <div className="text-xs font-mono text-foreground/40 mb-2">{post.date}</div>
                <h3 className="text-2xl font-bold group-hover:text-accent transition-colors">{post.title}</h3>
                <div className="flex gap-4 mt-4">
                  {post.tags?.map(tag => (
                    <span key={tag} className="text-xs font-mono text-foreground/40">#{tag}</span>
                  ))}
                </div>
              </div>
              <ChevronRight className="mt-4 md:mt-0 opacity-20 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
            </Link>
          ))}
        </div>
      </Section>

      {/* --- PROJECTS --- */}
      <Section title="Projects">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            "DFN Modeling Toolkit",
            "COMSOL Reservoir Plugin",
            "PINN Neural Operator",
            "Geo-Viz Tools"
          ].map((proj, i) => (
            <div key={i} className="aspect-square p-6 border border-foreground/5 rounded-2xl flex flex-col justify-between hover:bg-foreground/5 transition-all">
              <div className="h-2 w-2 rounded-full bg-accent" />
              <h3 className="font-bold text-lg leading-tight">{proj}</h3>
            </div>
          ))}
        </div>
      </Section>

      {/* --- TECH STACK --- */}
      <Section title="Tech Stack">
        <div className="p-8 rounded-2xl bg-[#0a0a0a] text-[#a0a0a0] font-mono text-sm border border-white/5 relative overflow-hidden group">
          <div className="flex gap-2 mb-6">
            <div className="w-3 h-3 rounded-full bg-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-amber-500/50" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Python", "PyTorch", "COMSOL", "MATLAB", "DFNWorks", "ArcGIS", "Hexo", "Git"].map(tech => (
              <div key={tech} className="flex items-center gap-2 group-hover:text-white transition-colors">
                <span className="text-accent opacity-50">$</span> {tech}
              </div>
            ))}
          </div>
          <div className="absolute right-0 top-0 p-8 opacity-5">
            <Terminal size={120} />
          </div>
        </div>
      </Section>

      {/* --- RESEARCH INTERESTS --- */}
      <Section title="Research Interests">
        <div className="columns-1 md:columns-2 gap-12">
          {[
            "Fracture Flow & Transport",
            "Heat Transfer in Porous Media",
            "Geothermal Energy Systems",
            "Scientific Machine Learning",
            "Energy Carbon Neutrality"
          ].map(interest => (
            <div key={interest} className="mb-8 break-inside-avoid">
              <h3 className="text-2xl font-light italic opacity-80 border-l-2 border-accent pl-6">{interest}</h3>
            </div>
          ))}
        </div>
      </Section>

      {/* --- PHOTOGRAPHY --- */}
      <Section title="Visual Aesthetics">
        <div className="relative group overflow-hidden rounded-3xl bg-foreground/5 aspect-[21/9] flex items-center justify-center">
           <div className="text-center z-10 px-6">
             <p className="text-xl font-light italic mb-2">"Observing nature through geometry and light."</p>
             <Link to="/photography" className="text-xs tracking-[0.2em] uppercase font-mono opacity-40 hover:opacity-100 transition-opacity">Enter Gallery →</Link>
           </div>
           <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?q=80&w=2070')] bg-cover bg-center opacity-20 grayscale group-hover:scale-105 transition-transform duration-1000" />
        </div>
      </Section>

      {/* --- TIMELINE --- */}
      <Section title="Timeline">
        <div className="space-y-12 relative before:absolute before:inset-y-0 before:left-0 before:w-px before:bg-foreground/5 pl-8">
          {[
            { date: "2022 - Present", title: "Peking University", desc: "BS in Geology. Researching structural geology and geothermal systems." },
            { date: "Current", title: "Research Focus", desc: "Developing PINN models for reservoir simulation." },
            { date: "Future", title: "MS Direction", desc: "Scientific Computing & Geoscience Intelligence." }
          ].map((item, i) => (
            <div key={i} className="relative">
              <div className="absolute -left-[36.5px] top-1.5 w-4 h-4 rounded-full border-4 border-background bg-accent" />
              <div className="text-xs font-mono text-accent mb-2">{item.date}</div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-foreground/60">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Home;
