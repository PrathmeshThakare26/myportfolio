import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import Modal from './Modal';

interface Project {
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  image: string;
  links: {
    github: string;
    live: string;
  };
}

const projects: Project[] = [
  {
    title: "ENSPIER Event Website",
    description: "Developed the official website for our departmental event ENSPIER.",
    longDescription: "A comprehensive event management platform that streamlines registration, schedule tracking, and participant engagement. Features include real-time updates, interactive event schedule, and seamless registration process.",
    tags: ["HTML", "CSS", "js"],
    image: "https://enspier.stvincentngp.edu.in/infinityquest.jpg",
    links: {
      github: "#",
      live: "#"
    }
  },
  {
    title: "Canteen Management System",
    description: "A web application for streamlining canteen operations.",
    longDescription: "A full-stack application that modernizes canteen operations with features like digital menu management, order tracking, and inventory management. Includes real-time order updates and analytics dashboard.",
    tags: ["React", "php", "Mysql"],
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=2000",
    links: {
      github: "#",
      live: "#"
    }
  },
  {
    title: "MEDCONNECT",
    description: "A healthcare platform connecting users with hospitals.",
    longDescription: "A comprehensive healthcare platform that bridges the gap between patients and healthcare providers. Features include hospital search, appointment booking, and real-time availability tracking.",
    tags: ["PHP", "MySQL", "HTML & CSS "],
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=2000",
    links: {
      github: "#",
      live: "#"
    }
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-gray-900 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title || ''}
      >
        {selectedProject && (
          <div className="space-y-6">
            <img 
              src={selectedProject.image} 
              alt={selectedProject.title}
              className="w-full h-64 object-cover rounded-lg"
            />
            <p className="text-gray-600">
              {selectedProject.longDescription}
            </p>
            <div className="flex flex-wrap gap-2">
              {selectedProject.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a 
                href={selectedProject.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800"
              >
                <Github size={20} />
                View Source
              </a>
              <a 
                href={selectedProject.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                <ExternalLink size={20} />
                Live Demo
              </a>
              
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Projects;