
import React from 'react';
import { Award, BookOpen, Code, Coffee, Laptop } from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'Years of Experience', value: '3+' },
    { label: 'Projects Completed', value: '20+' },
    { label: 'Technologies', value: '12+' },
    { label: 'Certifications', value: '5' },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50 relative">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background to-transparent"></div>
      
      <div className="section-container">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-sm uppercase tracking-wider text-portfolio-gray font-medium mb-4">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Passionate about technology<br />and problem-solving
          </h2>
          <div className="w-20 h-1 bg-portfolio-teal rounded"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative overflow-hidden rounded-2xl shadow-card">
            <div className="absolute inset-0 bg-gradient-to-tr from-portfolio-navy/60 to-portfolio-teal/40 mix-blend-overlay"></div>
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
              alt="About me" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="space-y-6">
            <p className="text-lg text-portfolio-gray">
              Hello! I'm <span className="font-semibold text-portfolio-navy">Alexander Chen</span>, a computer science student with a passion for 
              software development and algorithm design. My journey in technology started when I built my first gaming PC at 14, 
              and that curiosity has evolved into a dedicated pursuit of computer science excellence.
            </p>
            
            <p className="text-portfolio-gray">
              Currently pursuing a <span className="font-medium">Bachelor's degree in Computer Science</span> with a focus on 
              artificial intelligence and software engineering. I balance my academic studies with practical 
              project experience, constantly seeking to apply theoretical knowledge to real-world problems.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-4">
              {stats.map((stat, index) => (
                <div key={index} className="glass-effect p-4 rounded-xl text-center card-hover">
                  <p className="text-2xl font-bold text-portfolio-navy">{stat.value}</p>
                  <p className="text-sm text-portfolio-gray">{stat.label}</p>
                </div>
              ))}
            </div>
            
            <div className="pt-4">
              <a href="#skills" className="btn-primary">View my skills</a>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {[
            { icon: <Code className="text-portfolio-teal" size={24} />, title: 'Software Development', description: 'Building efficient, maintainable applications with clean architecture.' },
            { icon: <Laptop className="text-portfolio-teal" size={24} />, title: 'Front-end Engineering', description: 'Creating responsive, intuitive user interfaces with modern frameworks.' },
            { icon: <Award className="text-portfolio-teal" size={24} />, title: 'Algorithm Design', description: 'Developing optimized solutions for complex computational problems.' },
            { icon: <BookOpen className="text-portfolio-teal" size={24} />, title: 'Continuous Learning', description: 'Always exploring new technologies and expanding my knowledge base.' },
          ].map((item, index) => (
            <div 
              key={index} 
              className="glass-effect p-6 rounded-xl card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-3 bg-portfolio-teal/10 rounded-lg inline-block mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-portfolio-gray">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
