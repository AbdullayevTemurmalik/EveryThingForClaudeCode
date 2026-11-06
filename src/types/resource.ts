export type ResourceCategory =
  | "Barchasi"
  | "AI Developer Tools"
  | "AI Gateway"
  | "UI/UX & Design"
  | "Context Optimization"
  | "Free AI APIs"
  | "AI Memory"
  | "Cybersecurity";

export interface Resource {
  id: string;
  name: string;
  slug: string;
  owner: string;
  repo: string;
  url: string;
  cloneUrl: string;
  category: ResourceCategory;
  license: string;
  technologies: string[];
  shortDescription: string;
  fullDescription: string;
  features: string[];
  installCommands: string[];
  recommendedUse: string;
  warning?: string;
  antigravityCompatibility: string;
}

export interface GitHubRepoStats {
  stars: number | null;
  forks: number | null;
  openIssues: number | null;
  error?: boolean;
}
