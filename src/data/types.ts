export enum EducationDegreeEnum {
  HIGH_SCHOOL = "HIGH_SCHOOL",
  TECHNICAL = "TECHNICAL",
  BACHELOR = "BACHELOR",
  POST_GRADUATE = "POST_GRADUATE",
  MASTER = "MASTER",
  DOCTORATE = "DOCTORATE",
  COURSE = "COURSE",
}

export enum SkillLevelEnum {
  JUNIOR = "JUNIOR",
  PLENO = "PLENO",
  SENIOR = "SENIOR",
  EXPERT = "EXPERT",
}

export enum SkillCategoryEnum {
  BACKEND = "BACKEND",
  FRONTEND = "FRONTEND",
  MOBILE = "MOBILE",
  DEVOPS = "DEVOPS",
  DATABASE = "DATABASE",
  AI = "AI",
  MANAGEMENT = "MANAGEMENT",
  SOFT_SKILL = "SOFT_SKILL",
  DESIGN = "DESIGN",
}

export interface Education {
  id: number;
  institutionName: string;
  degree: string;
  degreeLevel: EducationDegreeEnum;
  startDate: Date;
  endDate?: Date;
  description: string;
}

export interface Experience {
  id: number;
  companyName: string;
  role: string;
  startDate: Date;
  endDate?: Date;
  description: string;
}

export interface PortfolioItem {
  id: number;
  name: string;
  show: boolean;
  description: string;
  technologies: string;
  link: string;
  photos?: PortfolioPhoto[];
}

export interface PortfolioPhoto {
  id: number;
  photoUrl: string;
}

export interface Profile {
  eneagram: { name: string; code: string; description: string };
  disc: { name: string; code: string; description: string };
  personality16: { name: string; code: string; description: string };
  temperaments: { name: string; code: string; description: string };
}

export interface Resume {
  id: number;
  title: string;
  summary: string;
}

export interface Skill {
  id: number;
  name: string;
  level: SkillLevelEnum;
  category: SkillCategoryEnum;
  link: string;
}

export interface SuccessCase {
  id: number;
  title: string;
  role: string;
  segment: string;
  narrative: string;
  businessImpact: string;
}

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

/* --- Axis & Pixel Vault ancillary types (não em requisito, mas necessários) --- */
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