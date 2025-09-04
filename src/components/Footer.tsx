import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { Sparkles } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background py-12 border-t border-border text-textSecondary">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <a href="#hero" className="flex items-center justify-center gap-2 text-3xl font-bold text-primary hover:text-accent transition-colors duration-300 mb-6">
          <span>Diego Villanueva T.</span>
        </a>
        <p className="mb-6 text-lg">
          Diseño Gráfico & Estrategia de Marketing
        </p>
        <div className="flex justify-center gap-6 mb-8">
          {SOCIAL_LINKS.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className="text-textSecondary hover:text-primary transition-colors duration-300 transform hover:scale-110"
            >
              <link.icon className="w-7 h-7" />
            </a>
          ))}
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Diego Villanueva T. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
