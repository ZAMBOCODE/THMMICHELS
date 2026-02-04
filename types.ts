
export interface ProjectPlannerState {
  category: string;
  mobility: string;
  features: string[];
  contact: {
    name: string;
    email: string;
    message: string;
  };
}

export interface BentoItem {
  id: string;
  title: string;
  description: string;
  image: string;
  gridClass: string;
  label: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  problem: string;
  solution: string;
  image: string;
  specs: string[];
}
