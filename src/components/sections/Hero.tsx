
import React, { useEffect, useRef } from 'react';
import { ArrowDown, Code, Github, Linkedin } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { width, height } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - width / 2) / 40;
      const y = (clientY - height / 2) / 40;
      
      heroRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-10 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-48 w-96 h-96 bg-portfolio-teal/10 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-1/3 -left-48 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl opacity-60"></div>
      </div>
      
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
          <div className="lg:col-span-3 space-y-6 text-center lg:text-left">
            <div className="inline-block glass-effect px-4 py-2 rounded-full text-sm mb-4 animate-fade-in">
              <span className="text-portfolio-gray font-medium">Computer Science Student</span>
            </div>
            
            <h1 ref={heroRef} className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter">
              Building <span className="text-gradient">digital products</span>, brands, and experiences
            </h1>
            
            <p className="text-lg text-portfolio-gray max-w-2xl mx-auto lg:mx-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              A passionate computer science student specializing in software development, 
              algorithm design, and creating elegant solutions to complex problems.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <a href="#contact" className="btn-primary flex items-center gap-2">
                Get in touch
                <ArrowDown size={16} className="animate-bounce-light" />
              </a>
              <a href="#projects" className="btn-secondary">View my work</a>
            </div>
            
            <div className="flex gap-4 mt-8 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-portfolio-navy/5 hover:bg-portfolio-navy/10 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-portfolio-navy/5 hover:bg-portfolio-navy/10 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="#" 
                className="p-2 rounded-full bg-portfolio-navy/5 hover:bg-portfolio-navy/10 transition-colors"
                aria-label="Code"
              >
                <Code size={20} />
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-2 relative animate-scale-up">
            <div className="relative z-10 aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-xl glass-effect flex items-center justify-center">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path fill="#38B2AC" d="M46.5,-58.5C59.3,-51.3,68.2,-36.5,72,-20.5C75.9,-4.6,74.6,12.6,68.1,27.9C61.6,43.2,49.8,56.7,35.3,63.1C20.8,69.5,3.6,68.8,-13.2,65.7C-30,62.5,-46.3,56.9,-56.5,45.1C-66.7,33.3,-70.7,15.4,-71.9,-3.5C-73.1,-22.4,-71.5,-42.5,-60.6,-50.5C-49.8,-58.5,-29.7,-54.6,-12.9,-52C3.9,-49.3,33.7,-65.8,46.5,-58.5Z" transform="translate(100 100)" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1288&q=80" 
                    alt="Portfolio" 
                    className="w-full h-full object-cover mix-blend-overlay opacity-90"
                  />
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 glass-effect p-4 rounded-xl shadow-md animate-fade-in">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <p className="text-sm font-medium">Available for opportunities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-light">
        <a 
          href="#about" 
          className="flex flex-col items-center justify-center text-sm text-portfolio-gray hover:text-portfolio-navy transition-colors"
        >
          <span className="mb-2">Scroll down</span>
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
