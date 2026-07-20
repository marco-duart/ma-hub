export interface User {
  id: number;
  name: string;
  birthday: Date;
  email: string;
  businessEmail: string;
  phone: string;
  whatsapp: string;
  github: string;
  linkedin: string;
  instagram: string;
  threads: string;
  google: string;
  youtube: string;
  facebook: string;
  address: string;
  bioTitle: string;
  bio: Array<{ title: string; text: string; image: string }>;
}

export interface ConsultoriaProfessional {
  id: number;
  name: string;
  photoUrl: string;
  roleTitle: string;
  problemSolverTagline: string;
  specialtiesSummary: string;
  curriculumValueNote: string;
  mainActingAreas: string[];
  strongPoints: string[];
  contactLinks?: {
    linkedin?: string;
    github?: string;
    whatsapp?: string;
  };
}

export interface AxisSolution {
  id: number;
  name: string;
  tagline: string;
  description: string;
  status: "LIVE" | "BETA" | "IN_DEVELOPMENT";
  technologies: string[];
  highlights: string[];
  link?: string;
}

export interface PixelProduct {
  id: number;
  name: string;
  category: string;
  price: number;
  fandom: string;
  description: string;
  material: string;
  dimensions: string;
  stock: number;
  image_url: string;
}