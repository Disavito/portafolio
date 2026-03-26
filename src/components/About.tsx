import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-surface text-text">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Columna del título */}
          <div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              ¡Hola!<br />
              Este es mi<br />
              <span className="text-yellow-400">PORTAFOLIO</span>
            </h2>
          </div>
          {/* Columna de la biografía y botón */}
          <div>
            <p className="text-lg text-textSecondary mb-8 leading-relaxed">
              Bachiller en Comunicaciones y Publicidad con más de 5 años de experiencia en diseño gráfico, branding y marketing
              digital. Especializado en la creación de piezas impresas y digitales, campañas para redes sociales y producción
              audiovisual. He trabajado en agencias, retail y servicios, desarrollo desde brochures y flyers hasta contenidos
              digitales y estrategias de marca. Manejo de Adobe Creative Suite (Illustrator, Photoshop, InDesign, After Effects) y
              plataformas digitales. Mi enfoque combina creatividad visual con estrategia de comunicación, logrando proyectos
              que impactan y cumplen objetivos de negocio.
            </p>
            {/* Botón "Ver Portafolio" */}
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-background bg-primary hover:bg-primary/90 transition-colors duration-300 ease-in-out shadow-lg transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface"
            >
              Ver Portafolio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
