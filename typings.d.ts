interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updateAt: string;
}

interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface PageInfo extends SanityBody {
  [x: string]: any;
  _type: "pageInfo";
  address: string;
  backgroundInformations: string;
  email: string;
  role: string;
  heroImage: Image;
  name: string;
  phoneNumber: string;
  profilePic: Image;
}

export interface Technology extends SanityBody {
  _type: "skill";
  image: Image;
  progress: number;
  title: string;
}

export interface Skill extends SanityBody {
  _type: "skill";
  image: Image;
  progress: number;
  title: string;
}

export interface Project extends SanityBody {
  _type: "project";
  image: Image;
  linkToBuild: string;
  technologies: Technology[];
  title: string;
  summary: string;
}

export interface Experience extends SanityBody {
  _type: "experience";
  compagny: "string";
  companyImage: Image;
  dateEnded: Date;
  dateStarted: Date;
  isCurrentlyWorkingHere: boolean;
  jobTitle: string;
  points: string[];
  technologies: Technology[];
}

export interface Social extends SanityBody {
  _type: "social";
  title: string;
  url: string;
}
