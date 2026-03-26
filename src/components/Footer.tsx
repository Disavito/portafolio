import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background py-12 border-t border-border text-textSecondary">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <a href="#hero" className="flex items-center justify-center gap-2 text-3xl font-bold text-primary hover:text-accent transition-colors duration-300 mb-6">
          <span>Diego Villanueva T.</span>
        </a>
        <p className="mb-8 text-lg">
          Diseño Gráfico & Estrategia de Marketing
        </p>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Diego Villanueva T. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
