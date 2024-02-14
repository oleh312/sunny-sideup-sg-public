/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  collections: {
    projects: Project;
    images: Image;
    users: User;
  };
  globals: {
    settings: Setting;
    navigation: Navigation;
    favicon: Favicon;
    footer: Footer;
    homepage: Homepage;
    about: About;
    contact: Contact;
    projectsHero: ProjectsHero;
  };
}
export interface Project {
  id: string;
  title: string;
  thumbnail: string | Image;
  heroImage: string | Image;
  clientName: string;
  shortDescription?: string;
  projectYear: string;
  mainDescription: {
    [k: string]: unknown;
  }[];
  links?: {
    label: string;
    url: string;
    id?: string;
  }[];
  scope?: string;
  credits?: string;
  tags?: {
    tag: string;
    id?: string;
  }[];
  sections?: (
    | {
        leftColumn?: {
          heading?: string;
          content?: {
            [k: string]: unknown;
          }[];
        };
        rightColumn?: {
          heading?: string;
          content?: {
            [k: string]: unknown;
          }[];
        };
        id?: string;
        blockName?: string;
        blockType: 'textBlock';
      }
    | {
        images?: {
          image: string | Image;
          id?: string;
        }[];
        id?: string;
        blockName?: string;
        blockType: 'imagesBlock';
      }
  )[];
  slug?: string;
  updatedAt: string;
  createdAt: string;
  _status?: 'draft' | 'published';
}
export interface Image {
  id: string;
  altText?: string;
  imagekit?: {
    fileId?: string;
    thumbnailUrl?: string;
    name?: string;
    url?: string;
  };
  updatedAt: string;
  createdAt: string;
  url?: string;
  filename?: string;
  mimeType?: string;
  filesize?: number;
  width?: number;
  height?: number;
}
export interface User {
  id: string;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string;
  resetPasswordExpiration?: string;
  salt?: string;
  hash?: string;
  loginAttempts?: number;
  lockUntil?: string;
  password?: string;
}
export interface Setting {
  id: string;
  siteTitle: string;
  siteBranding: string;
  siteDescription: string;
  updatedAt?: string;
  createdAt?: string;
}
export interface Navigation {
  id: string;
  topNavigation?: {
    label: string;
    url: string;
    newTab?: boolean;
    hide?: boolean;
    id?: string;
  }[];
  contactLink: {
    label: string;
    hide?: boolean;
  };
  updatedAt?: string;
  createdAt?: string;
}
export interface Favicon {
  id: string;
  favicon?: string | Image;
  updatedAt?: string;
  createdAt?: string;
}
export interface Footer {
  id: string;
  contact: {
    title: string;
    text: string;
    image?: string | Image;
    contactButton: {
      label: string;
      link: string;
      newTab?: boolean;
    };
  };
  socialMediaLinks?: {
    label: string;
    url: string;
    newTab?: boolean;
    hide?: boolean;
    id?: string;
  }[];
  bottomTitle?: string;
  updatedAt?: string;
  createdAt?: string;
}
export interface Homepage {
  id: string;
  hero: {
    mainHeading: string;
    subHeading: string;
    backgroundImage?: string | Image;
    showcase?: string | Image;
    timezones?: {
      label: string;
      codeLabel: string;
      timezone: string;
      id?: string;
    }[];
    heroLinks?: {
      label: string;
      url: string;
      newTab?: boolean;
      hide?: boolean;
      id?: string;
    }[];
  };
  workShowcase: {
    heading: string;
    subHeading: string;
    workShowcase: {
      work?: string | Project;
      media?: string | Image;
      id?: string;
    }[];
  };
  workSpotlight: {
    workSpotlight: {
      title: string;
      image: string | Image;
      process?: {
        title?: string;
        id?: string;
      }[];
      completionTime: string;
    };
  };
  testimonials: {
    testimonials?: {
      clientName: string;
      clientRole: string;
      clientImage: {
        image: string | Image;
        imagePosition?: 'center' | 'bottom';
      };
      clientTestimonial: string;
      id?: string;
    }[];
  };
  workProcess: {
    heading: string;
    subHeading: string;
    workProcess?: {
      title: string;
      description: string;
      id?: string;
    }[];
  };
  socialMediaLinks: {
    socialMediaLinks?: {
      label: string;
      url: string;
      newTab?: boolean;
      hide?: boolean;
      id?: string;
    }[];
  };
  updatedAt?: string;
  createdAt?: string;
}
export interface About {
  id: string;
  hero: {
    heroHeading: string;
    heroText: string;
    heroImage?: string | Image;
  };
  intro: {
    sections?: {
      heading: string;
      content: {
        [k: string]: unknown;
      }[];
      id?: string;
    }[];
    scrollingText: string;
  };
  expertise: {
    heading: string;
    sections?: {
      title: string;
      items: string;
      image: string | Image;
      id?: string;
    }[];
  };
  team: {
    heading: string;
    people?: {
      image: string | Image;
      name: string;
      title: string;
      id?: string;
    }[];
  };
  partners: {
    heading: string;
    partner?: {
      image: string | Image;
      name: string;
      id?: string;
    }[];
  };
  clients: {
    heading: string;
    sections?: {
      heading: string;
      clientsList: string;
      id?: string;
    }[];
  };
  recognition: {
    heading: string;
    image: string | Image;
    awards?: {
      textLeft: string;
      textRight: string;
      id?: string;
    }[];
  };
  work: {
    background: string | Image;
    buttonLabel: string;
  };
  updatedAt?: string;
  createdAt?: string;
}
export interface Contact {
  id: string;
  heading: string;
  description: {
    [k: string]: unknown;
  }[];
  email: string;
  updatedAt?: string;
  createdAt?: string;
}
export interface ProjectsHero {
  id: string;
  heading: string;
  subHeading?: string;
  backgroundGradient: string;
  updatedAt?: string;
  createdAt?: string;
}
