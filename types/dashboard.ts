export type Tone = "green" | "orange" | "purple" | "teal";
export type VitalStatus = "good" | "needs" | "poor";
export type Device = "mobile" | "desktop";

export type UserSummary = { name: string; avatarSrc?: string };
export type NavItem = { id: string; label: string; icon: string; href: string };

export type CompanyLink = { id: string; label: string; iconSrc: string; href?: string };
export type Competitor = { id: string; name: string; logoSrc: string };
export type Company = {
  name: string;
  tagline: string;
  logoSrc: string;
  tags: string[];
  description: string;
  links: CompanyLink[];
  competitors: Competitor[];
};

export type DocItem = { id: string; title: string; subtitle: string; icon: string; href: string };

export type Metric = {
  id: string;
  label: string;
  score: number;
  change: string;
  icon: string;
  tone: Tone;
};

export type OverallPerformance = {
  summary: string;
  score: number;
  mobile: number;
  desktop: number;
};

export type Integration = {
  id: string;
  title: string;
  subtitle: string;
  logoSrc: string;
  previewColor: string; // placeholder chart color until the real chart exists
  locked?: boolean;
};

export type Vital = { id: string; label: string; value: string; status: VitalStatus };
export type VitalsGroup = { id: string; title: string; summary: string; vitals: Vital[] };

export type AnalyticsData = {
  sources: string[];
  metrics: Metric[];
  overall: OverallPerformance;
  integrations: Integration[];
  vitals: VitalsGroup[];
};

export type DashboardData = {
  user: UserSummary;
  company: Company;
  docs: DocItem[];
  analytics: AnalyticsData;
};