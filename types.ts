export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface Testimonial {
  id: number;
  text: string;
  author: string;
  role?: string;
}

export interface NavItem {
  label: string;
  href: string;
  isPrimary?: boolean;
}