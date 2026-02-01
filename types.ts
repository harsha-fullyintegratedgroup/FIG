
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface SubIndustry {
  name: string;
  items: string[];
}

export interface Industry {
  id: string;
  name: string;
  path: string;
  subIndustries: SubIndustry[];
}
