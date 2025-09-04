import { LucideIcon } from 'lucide-react';

export interface NavLink {
  name: string;
  href: string;
}

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string; // Main thumbnail image
  link: string;
  detailedImages: string[]; // Array of images for the detailed view
  toolsUsed: string[]; // Array of tools used (e.g., 'Photoshop', 'Illustrator')
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  title: string;
  avatarUrl: string;
}
