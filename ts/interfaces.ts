export {};
interface TechStack {
  id: number;
  name: string;
}

declare global {
  interface Work {
    id: number;
    name: string;
    img: string;
    github?: string;
    live?: string;
    techStack?: Array<TechStack>;
  }
}
