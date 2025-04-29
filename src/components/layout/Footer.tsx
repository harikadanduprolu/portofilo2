
import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-portfolio-navy text-white py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold tracking-tight">
              <span className="text-white">Dev</span>
              <span className="text-portfolio-teal">Portfolio</span>
            </h3>
            <p className="text-white/70 max-w-xs">
              A computer science student passionate about creating elegant solutions to complex problems.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-medium">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#home" className="text-white/70 hover:text-white transition-colors">Home</a>
              <a href="#about" className="text-white/70 hover:text-white transition-colors">About</a>
              <a href="#projects" className="text-white/70 hover:text-white transition-colors">Projects</a>
              <a href="#skills" className="text-white/70 hover:text-white transition-colors">Skills</a>
              <a href="#contact" className="text-white/70 hover:text-white transition-colors">Contact</a>
            </nav>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-medium">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" aria-label="GitHub" className="text-white/70 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-white/70 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="text-white/70 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="Email" className="text-white/70 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-white/50 text-sm">
          <p>&copy; {currentYear} DevPortfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
