import { Briefcase, Layout, Megaphone, Palette, Code, Users, Mail, Linkedin, Instagram, ArrowRight } from 'lucide-react';
import { NavLink, Service, Project, Testimonial } from '../types';

export const NAV_LINKS: NavLink[] = [
  { name: 'Sobre Mí', href: '#about' },
  { name: 'Portafolio', href: '#portfolio' },
  { name: 'Contacto', href: '#contact' },
];

export const SERVICES: Service[] = [
  {
    icon: Megaphone,
    title: 'Diseño Gráfico para Redes Sociales',
    description: 'Creación de contenido visual impactante y estratégico para Facebook, Instagram y LinkedIn, optimizado para maximizar el engagement y fortalecer tu marca.',
  },
  {
    icon: Palette,
    title: 'Fotografía de Producto Profesional',
    description: 'Sesiones fotográficas de alta calidad para e-commerce y catálogos, destacando la estética y los detalles de tus productos para impulsar las ventas.',
  },
  {
    icon: Layout,
    title: 'Diseño Web UI/UX para E-commerce',
    description: 'Diseño de tiendas online intuitivas, atractivas y de alto rendimiento que convierten visitantes en clientes, enfocadas en una experiencia de compra fluida.',
  },
  {
    icon: Briefcase,
    title: 'Branding y Estrategia Digital',
    description: 'Desarrollo integral de identidad de marca y estrategias digitales que aseguran una presencia coherente y memorable en todos tus canales.',
  },
];

export const PROJECTS: Project[] = [
  {
    id: '7',
    title: 'Campaña Publicitaria "Million Zeus 2" para Apuesta Total',
    category: 'Diseño Gráfico, Publicidad Digital',
    description: 'Creación de gráficos impactantes para la campaña "Million Zeus 2" de Apuesta Total, utilizando Photoshop para el montaje y la composición visual, optimizando para redes sociales y banners web.',
    imageUrl: 'https://i.imgur.com/tyvL9N3.jpeg', // Enlace directo de Imgur
    link: '#',
    detailedImages: [
      'https://i.imgur.com/tyvL9N3.jpeg',
      'https://i.imgur.com/uK5c1hg.jpeg',
    ],
    toolsUsed: ['Illustrator', 'Photoshop'],
  },
  {
    id: '9',
    title: 'Diseño de Branding y Contenido para UBI',
    category: 'Branding, Diseño Gráfico, Social Media',
    description: 'Desarrollo integral de identidad visual y contenido para la marca UBI, abarcando diseño gráfico para redes sociales y elementos de branding.',
    imageUrl: 'https://i.imgur.com/T8H3JR2.jpeg', // Primera imagen como portada
    link: '#',
    detailedImages: [
      'https://i.imgur.com/T8H3JR2.jpeg',
      'https://i.imgur.com/gT2R2NV.jpeg',
      'https://i.imgur.com/LUhgTJm.jpeg',
      'https://i.imgur.com/HO1tnPZ.jpeg',
      'https://i.imgur.com/OXLs8Jq.jpeg',
    ],
    toolsUsed: ['Illustrator', 'Photoshop', 'Canva'],
  },
  {
    id: '10',
    title: 'Proyecto Fotográfico "Artisant"',
    category: 'Fotografía, Edición de Imagen',
    description: 'Serie fotográfica para la marca Artisant, con enfoque en la edición y post-producción para realzar la estética y el detalle de cada imagen, utilizando Adobe Lightroom.',
    imageUrl: 'https://i.imgur.com/st0zaTJ.jpeg', // Primera imagen como portada
    link: '#',
    detailedImages: [
      'https://i.imgur.com/st0zaTJ.jpeg',
      'https://i.imgur.com/Wmy89Gm.jpeg',
      'https://i.imgur.com/csfLWsL.jpeg',
      'https://i.imgur.com/P4Vl4qy.jpeg',
      'https://i.imgur.com/ZtStXPK.jpeg',
      'https://i.imgur.com/W5Z5dyg.jpeg',
      'https://i.imgur.com/PC8gMFG.jpeg',
      'https://i.imgur.com/09uzWVu.jpeg',
      'https://i.imgur.com/QNEX3zf.jpeg',
      'https://i.imgur.com/TtvrOl6.jpeg',
      'https://i.imgur.com/24oUzIO.jpeg',
      'https://i.imgur.com/dEqnbdv.jpeg',
      'https://i.imgur.com/OGhh3xQ.jpeg',
      'https://i.imgur.com/BrBx537.jpeg',
      'https://i.imgur.com/QNtensl.jpeg',
      'https://i.imgur.com/Y10EqV9.jpeg',
      'https://i.imgur.com/DwzwFVf.jpeg',
    ],
    toolsUsed: ['Lightroom'],
  },
  {
    id: '15',
    title: 'Diseño y Desarrollo Web E-commerce para Artisant',
    category: 'Diseño Web, E-commerce, WordPress, WooCommerce',
    description: 'Creación y desarrollo de una tienda online completa para Artisant utilizando WordPress y WooCommerce, enfocada en una experiencia de usuario intuitiva y un diseño atractivo para maximizar las ventas de productos.',
    imageUrl: 'https://imgur.com/FNJr5ny.jpeg',
    link: 'https://artisantpe.com/',
    detailedImages: [
      'https://imgur.com/FNJr5ny.jpeg',
    ],
    toolsUsed: ['WordPress', 'WooCommerce', 'Photoshop'],
  },
  {
    id: '11',
    title: 'Diseño de Logo para Dogtor Medical',
    category: 'Branding, Diseño de Logo',
    description: 'Propuesta de diseño de logo para Dogtor Medical, enfocándose en una identidad visual profesional y memorable para el sector médico-veterinario.',
    imageUrl: 'https://i.imgur.com/cgGiKzW.jpeg', // Primera imagen como portada
    link: '#',
    detailedImages: [
      'https://i.imgur.com/cgGiKzW.jpeg',
      'https://i.imgur.com/EcAoFKO.jpeg',
      'https://i.imgur.com/uFWN6jT.jpeg',
      'https://i.imgur.com/4tNPIOb.jpeg',
    ],
    toolsUsed: ['Illustrator', 'Photoshop'],
  },
  {
    id: '12',
    title: 'Diseño para "El Laboratorio" - Escuela de Creativos',
    category: 'Branding, Diseño Gráfico, Educación',
    description: 'Diseño de identidad visual y material promocional para "El Laboratorio", una escuela de creativos, enfocándose en una estética innovadora y educativa que resuene con la comunidad artística.',
    imageUrl: 'https://i.imgur.com/9jW4Z4C.jpeg', // ¡Imagen de portada actualizada!
    link: '#',
    detailedImages: [
      'https://i.imgur.com/N57mCRh.jpeg',
      'https://i.imgur.com/xI1XDSd.jpeg',
      'https://i.imgur.com/mUkkKns.jpeg',
      'https://i.imgur.com/1maw7yL.jpeg',
      'https://i.imgur.com/V3wRkUs.jpeg',
      'https://i.imgur.com/DKfQ50K.jpeg',
      'https://i.imgur.com/LhbFRFc.jpeg',
      'https://i.imgur.com/0XAwqhU.jpeg',
      'https://i.imgur.com/9jW4Z4C.jpeg',
      'https://i.imgur.com/6AiGUDK.jpeg',
    ],
    toolsUsed: ['Illustrator', 'Photoshop'], // Figma eliminado
  },
  {
    id: '13',
    title: 'Campaña Digital "IDCert"',
    category: 'Diseño Gráfico, Video Marketing, Social Media',
    description: 'Creación de contenido visual y video para la campaña digital de IDCert, incluyendo posts para LinkedIn y un video promocional, utilizando herramientas de diseño gráfico y edición de video.',
    imageUrl: 'https://i.imgur.com/EB5MuyM.jpeg', // Primera imagen de LinkedIn como portada
    link: '#',
    detailedImages: [
      'https://i.imgur.com/A2aGe43.mp4', // Video
      'https://i.imgur.com/EB5MuyM.jpeg',
      'https://i.imgur.com/xvriouw.jpeg',
      'https://i.imgur.com/y5mBjy5.jpeg',
      'https://i.imgur.com/rPQBeRc.jpeg',
      'https://i.imgur.com/bdxnRt2.jpeg',
    ],
    toolsUsed: ['Illustrator', 'Photoshop', 'Canva'], // Premiere Pro y After Effects eliminados, Canva añadido
  },
  {
    id: '14',
    title: 'Gestión de Redes Sociales y Creación de Arte para LJHConstruction',
    category: 'Social Media, Diseño Gráfico, Branding',
    description: 'Desarrollo y ejecución de estrategias de contenido visual para las redes sociales de LJHConstruction, una empresa canadiense. Incluyó la creación de artes gráficos personalizados para campañas y publicaciones, fortaleciendo su presencia digital y engagement con la audiencia.',
    imageUrl: 'https://imgur.com/VV5BTlm.jpeg', // Primera imagen de Imgur como portada
    link: '#',
    detailedImages: [
      'https://imgur.com/VV5BTlm.jpeg',
      'https://imgur.com/UBdq7zH.jpeg',
      'https://imgur.com/Op4GYj0.jpeg',
      'https://imgur.com/1o1hPMF.jpeg',
      'https://imgur.com/PcKgar5.jpeg',
      'https://imgur.com/Ia0T12O.jpeg',
      'https://imgur.com/TzfK2qY.jpeg',
    ],
    toolsUsed: ['Illustrator', 'Photoshop', 'Canva'],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    quote: 'El diseño para nuestras redes sociales superó nuestras expectativas. Vimos un aumento inmediato en la interacción y el reconocimiento de marca. ¡Un trabajo excepcional!',
    author: 'Ana García',
    title: 'Fundadora, HealthyBites',
    avatarUrl: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '2',
    quote: 'Las fotografías de producto para nuestra nueva línea de cosméticos son simplemente perfectas. Capturaron la esencia de nuestra marca y lucen increíbles en nuestra web.',
    author: 'Carlos Ruiz',
    title: 'Directora de Marketing, Glow Cosmetics',
    avatarUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: '3',
    quote: 'El rediseño de nuestro e-commerce fue un éxito rotundo. La navegación es mucho más intuitiva y hemos notado un incremento significativo en nuestras ventas online.',
    author: 'María López',
    title: 'CEO, UrbanThreads',
    avatarUrl: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];

export const SOCIAL_LINKS = [
  { icon: Linkedin, href: 'https://www.linkedin.com/in/diegovillanuevato/', name: 'LinkedIn' },
  { icon: Instagram, href: 'https://www.instagram.com/diesanti/', name: 'Instagram' },
  { icon: Mail, href: 'mailto:dsvt98@gmail.com', name: 'Email' },
];
