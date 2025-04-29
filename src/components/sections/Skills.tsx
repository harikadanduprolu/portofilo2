
import React from 'react';
import SkillBar from '../ui/SkillBar';
import { Brain, Code, Database, Layout, ShieldCheck, Terminal } from 'lucide-react';

const Skills = () => {
  const programmingSkills = [
    { name: 'Java', percentage: 90 },
    { name: 'Python', percentage: 85 },
    { name: 'JavaScript/TypeScript', percentage: 88 },
    { name: 'C++', percentage: 75 },
    { name: 'SQL', percentage: 80 },
  ];

  const developmentSkills = [
    { name: 'React', percentage: 85 },
    { name: 'Node.js', percentage: 80 },
    { name: 'RESTful APIs', percentage: 85 },
    { name: 'Responsive Design', percentage: 90 },
    { name: 'DevOps', percentage: 70 },
  ];

  const skillCategories = [
    { 
      icon: <Code size={28} />, 
      name: 'Software Development', 
      skills: ['Object-Oriented Programming', 'Test-Driven Development', 'Agile Methodologies'] 
    },
    { 
      icon: <Layout size={28} />, 
      name: 'Front-end', 
      skills: ['UI/UX Design', 'Responsive Design', 'Single Page Applications'] 
    },
    { 
      icon: <Database size={28} />, 
      name: 'Back-end', 
      skills: ['API Design', 'Database Management', 'Server Architecture'] 
    },
    { 
      icon: <Terminal size={28} />, 
      name: 'Tools', 
      skills: ['Git', 'Docker', 'CI/CD', 'AWS/Cloud Services'] 
    },
    { 
      icon: <Brain size={28} />, 
      name: 'Machine Learning', 
      skills: ['Data Analysis', 'Neural Networks', 'Reinforcement Learning'] 
    },
    { 
      icon: <ShieldCheck size={28} />, 
      name: 'Security', 
      skills: ['Authentication', 'Authorization', 'Data Protection'] 
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-50 to-white relative">
      <div className="section-container">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-sm uppercase tracking-wider text-portfolio-gray font-medium mb-4">
            My Skills
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Technical Expertise
          </h2>
          <p className="max-w-2xl text-portfolio-gray">
            A comprehensive overview of my technical skills and proficiencies developed through
            academic study, personal projects, and industry experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="glass-effect p-8 rounded-xl shadow-card">
            <h3 className="text-xl font-semibold mb-6">Programming Languages</h3>
            
            {programmingSkills.map((skill, index) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                percentage={skill.percentage}
                delay={index * 200}
              />
            ))}
          </div>
          
          <div className="glass-effect p-8 rounded-xl shadow-card">
            <h3 className="text-xl font-semibold mb-6">Development Skills</h3>
            
            {developmentSkills.map((skill, index) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                percentage={skill.percentage}
                color="bg-blue-500"
                delay={index * 200}
              />
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {skillCategories.map((category, index) => (
            <div 
              key={category.name} 
              className="glass-effect p-6 rounded-xl card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-3 bg-portfolio-navy/5 rounded-lg inline-block mb-4 text-portfolio-navy">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{category.name}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, idx) => (
                  <li key={idx} className="flex items-center text-portfolio-gray">
                    <div className="w-1.5 h-1.5 rounded-full bg-portfolio-teal mr-2"></div>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
