import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void; // New prop to handle project selection
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  return (
    <div
      className="bg-surface rounded-xl overflow-hidden shadow-xl border border-border transform hover:scale-[1.02] transition-all duration-500 ease-in-out group cursor-pointer"
      onClick={() => onSelect(project)} // Make the entire card clickable
    >
      <div className="relative h-60 overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent"></div>
      </div>
      <div className="p-6">
        <span className="text-sm text-primary font-semibold mb-2 block">{project.category}</span>
        <h3 className="text-2xl font-bold text-white mb-3 leading-tight">{project.title}</h3>
        <p className="text-textSecondary mb-6 line-clamp-3">{project.description}</p>
        {/* The "Ver Proyecto" link is now handled by the modal for a unified experience */}
      </div>
    </div>
  );
};

export default ProjectCard;
