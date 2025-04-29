
import React, { useState } from 'react';
import ProjectCard, { ProjectCardProps } from '../ui/ProjectCard';

const Projects = () => {
  const projects: ProjectCardProps[] = [
    {
      title: 'AI Chess Assistant',
      description: 'A machine learning system that analyzes chess games and suggests optimal moves using reinforcement learning techniques.',
      image: 'https://images.unsplash.com/photo-1528819622765-d6bcf132f793?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
      tags: ['Python', 'TensorFlow', 'ML', 'Game Development'],
      githubUrl: '#',
      liveUrl: '#',
      featured: true
    },
    {
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce solution with admin dashboard, payment integration, and responsive design.',
      image: 'https://images.unsplash.com/photo-1561997968-aa846c2bf255?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      githubUrl: '#',
      liveUrl: '#'
    },
    {
      title: 'Task Management App',
      description: 'A productivity application with drag-and-drop functionality, reminders, and collaborative features.',
      image: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
      tags: ['TypeScript', 'React', 'Firebase', 'CSS'],
      githubUrl: '#',
      liveUrl: '#'
    },
    {
      title: 'Algorithm Visualizer',
      description: 'An interactive tool for visualizing common algorithms including sorting, pathfinding, and graph traversal.',
      image: 'https://images.unsplash.com/photo-1580894912989-0bc892f4efd0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
      tags: ['JavaScript', 'Data Structures', 'Algorithms', 'Canvas'],
      githubUrl: '#',
      liveUrl: '#'
    },
    {
      title: 'Social Media Dashboard',
      description: 'An analytics dashboard that tracks engagement across multiple social media platforms.',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
      tags: ['Vue.js', 'D3.js', 'API Integration', 'Tailwind CSS'],
      githubUrl: '#',
      liveUrl: '#',
      featured: true
    }
  ];

  const [visibleProjects, setVisibleProjects] = useState(4);
  const [filter, setFilter] = useState('all');

  const filters = [
    { value: 'all', label: 'All Projects' },
    { value: 'ML', label: 'Machine Learning' },
    { value: 'React', label: 'React' },
    { value: 'Python', label: 'Python' },
    { value: 'JavaScript', label: 'JavaScript' }
  ];

  const filteredProjects = projects.filter(project => 
    filter === 'all' || project.tags.includes(filter)
  );

  const loadMore = () => {
    setVisibleProjects(prev => Math.min(prev + 2, filteredProjects.length));
  };

  return (
    <section id="projects" className="py-20 bg-white relative">
      <div className="section-container">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-sm uppercase tracking-wider text-portfolio-gray font-medium mb-4">
            My Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Featured Projects
          </h2>
          <p className="max-w-2xl text-portfolio-gray mb-8">
            Explore a collection of my recent projects spanning various technologies and domains, 
            from machine learning applications to responsive web platforms.
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {filters.map(item => (
              <button
                key={item.value}
                onClick={() => {
                  setFilter(item.value);
                  setVisibleProjects(4);
                }}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  filter === item.value
                    ? 'bg-portfolio-navy text-white'
                    : 'bg-portfolio-navy/5 text-portfolio-navy hover:bg-portfolio-navy/10'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.slice(0, visibleProjects).map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
            />
          ))}
        </div>
        
        {visibleProjects < filteredProjects.length && (
          <div className="mt-12 text-center">
            <button
              onClick={loadMore}
              className="btn-secondary"
            >
              Load More Projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
