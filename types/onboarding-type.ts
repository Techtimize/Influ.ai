export type OnboardingRequestProps = {
  company_name: string;
  industry: string;
  services: string;
  language: string;
  websitelink: string;
}

export type OnboardingResponseProps = {
  message: string;
  data: {
    company_name: string;
    industry: string;
    services: string;
    language: string;
    websitelink: string;
  };
};
