import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-surface text-text">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-6">
          Hablemos de tu <span className="text-primary">Próximo Proyecto</span>
        </h2>
        <p className="text-lg text-textSecondary text-center max-w-3xl mx-auto mb-16">
          ¿Tienes una idea en mente o necesitas ayuda para potenciar tu marca? ¡Estoy aquí para escucharte!
        </p>

        <div className="max-w-3xl mx-auto"> {/* Adjusted layout for single column */}
          {/* Contact Info */}
          <div className="bg-background p-8 md:p-10 rounded-xl shadow-xl border border-border mb-8">
            <h3 className="text-3xl font-bold text-white mb-8">Información de Contacto</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Mail className="w-7 h-7 text-primary flex-shrink-0" /> {/* Icon color changed to primary */}
                <div>
                  <p className="text-textSecondary">Email</p>
                  <a href="mailto:Dsvt98@gmai.com" className="text-white text-lg hover:text-primary transition-colors duration-300">
                    Dsvt98@gmai.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-7 h-7 text-primary flex-shrink-0" /> {/* Icon color changed to primary */}
                <div>
                  <p className="text-textSecondary">Teléfono</p>
                  <a href="tel:+51940286266" className="text-white text-lg hover:text-primary transition-colors duration-300">
                    +51940286266
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="w-7 h-7 text-primary flex-shrink-0" /> {/* Icon color changed to primary */}
                <div>
                  <p className="text-textSecondary">Ubicación</p>
                  <p className="text-white text-lg">Lima, Perú</p>
                </div>
              </div>
            </div>
          </div>

          {/* Socials */}
          <div className="bg-background p-8 md:p-10 rounded-xl shadow-xl border border-border">
            <h3 className="text-3xl font-bold text-white mb-8">Sígueme</h3>
            <div className="flex flex-wrap gap-6 justify-center md:justify-start">
              {SOCIAL_LINKS.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="p-4 bg-surface rounded-full text-textSecondary hover:text-primary hover:bg-primary/20 transition-all duration-300 transform hover:scale-110 shadow-md"
                >
                  <link.icon className="w-7 h-7" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
