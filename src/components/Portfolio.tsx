import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import ProjectCard from './ProjectCard';
import ProjectDetailModal from './ProjectDetailModal'; // Import the new modal component
import { Project } from '../types'; // Import Project type

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectSelect = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-background text-text">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-6">
          Mi <span className="text-primary">Portafolio</span>
        </h2>
        <p className="text-lg text-textSecondary text-center max-w-3xl mx-auto mb-16">
          Explora una selección de mis trabajos más recientes en diseño gráfico, branding y marketing digital. Cada proyecto es una historia de creatividad y estrategia.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} onSelect={handleProjectSelect} />
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
};

export default Portfolio;
