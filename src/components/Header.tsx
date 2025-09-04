import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-surface/90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'}`}>
      <nav className="container mx-auto flex items-center justify-between px-4 lg:px-8">
        <a href="#about" className="flex items-center gap-2 text-2xl font-bold text-primary hover:text-accent transition-colors duration-300">
          <span>Diego Villanueva T.</span>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            link.name === 'Portafolio' ? (
              <a
                key={link.name}
                href={link.href}
                className="bg-primary text-white px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-primary hover:bg-primary/90 shadow-lg shadow-primary/30 hover:shadow-glow-primary"
              >
                {link.name}
              </a>
            ) : (
              <a
                key={link.name}
                href={link.href}
                className="relative group text-textSecondary hover:text-primary transition-colors duration-300"
              >
                {link.name}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </a>
            )
          ))}
        </div>

        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-text hover:text-primary transition-colors duration-300">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 bg-background/95 backdrop-blur-md flex flex-col items-center justify-center gap-8 py-16 animate-fade-in">
          <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 text-text hover:text-primary transition-colors duration-300">
            <X size={32} />
          </button>
          {NAV_LINKS.map((link) => (
            link.name === 'Portafolio' ? (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="bg-primary text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-primary hover:bg-primary/90 shadow-lg shadow-primary/30 hover:shadow-glow-primary mt-8"
              >
                {link.name}
              </a>
            ) : (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-text text-3xl font-semibold hover:text-primary transition-colors duration-300"
              >
                {link.name}
              </a>
            )
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
