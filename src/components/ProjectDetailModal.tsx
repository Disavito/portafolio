import React from 'react';
import { Project } from '../types';
import { X, ExternalLink } from 'lucide-react';
import Button from './ui/Button';
import { TOOL_LOGOS } from '../constants/toolLogos'; // Importar el mapeo de logos

interface ProjectDetailModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ project, isOpen, onClose }) => {
  if (!isOpen || !project) return null;

  const isVideo = (url: string) => {
    return url.endsWith('.mp4') || url.endsWith('.gifv');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75 backdrop-blur-sm animate-fade-in">
      <div className="relative bg-surface rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col border border-border animate-scale-in">
        <div className="flex justify-between items-center p-6 border-b border-border">
          <h3 className="text-3xl font-bold text-white">{project.title}</h3>
          <button
            onClick={onClose}
            className="text-textSecondary hover:text-primary transition-colors duration-300 p-2 rounded-full hover:bg-background"
            aria-label="Cerrar"
          >
            <X size={28} />
          </button>
        </div>

        <div className="overflow-y-auto p-6 flex-grow custom-scrollbar">
          <p className="text-lg text-primary font-semibold mb-4">{project.category}</p>
          <p className="text-textSecondary mb-6 leading-relaxed">{project.description}</p>

          {project.toolsUsed && project.toolsUsed.length > 0 && (
            <div className="mb-8">
              <h4 className="text-xl font-bold text-white mb-3">Herramientas Utilizadas</h4>
              <div className="flex flex-wrap gap-3">
                {project.toolsUsed.map((tool, index) => (
                  <span
                    key={index}
                    className="flex items-center bg-background text-textSecondary px-4 py-2 rounded-full text-sm border border-border shadow-sm"
                  >
                    {TOOL_LOGOS[tool] ? (
                      <img src={TOOL_LOGOS[tool]} alt={tool} className="w-5 h-5 mr-2" />
                    ) : null}
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          )}

          {project.detailedImages && project.detailedImages.length > 0 && (
            <div className="mb-8">
              <h4 className="text-xl font-bold text-white mb-4">Galería del Proyecto</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {project.detailedImages.map((imgSrc, index) => (
                  <div key={index} className="rounded-lg overflow-hidden shadow-md border border-border bg-background flex items-center justify-center">
                    {isVideo(imgSrc) ? (
                      <video
                        src={imgSrc}
                        controls
                        autoPlay
                        muted
                        loop
                        className="w-full h-auto object-cover"
                        aria-label={`Video del proyecto ${project.title}`}
                      />
                    ) : (
                      <img
                        src={imgSrc}
                        alt={`${project.title} - Imagen ${index + 1}`}
                        className="w-full h-auto object-cover"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {project.link && project.link !== '#' && (
            <div className="mt-8 text-center">
              <Button
                variant="primary"
                size="lg"
                onClick={() => window.open(project.link, '_blank')}
                className="inline-flex items-center"
              >
                Ver Proyecto en Vivo <ExternalLink className="ml-2" size={20} />
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailModal;
