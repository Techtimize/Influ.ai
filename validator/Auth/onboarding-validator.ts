import { z } from 'zod';

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const OnboardingFormSchema = z
    .object({
        company_name: z
            .string()
            .min(3, { message: 'Company name must be at least 3 characters long.' }),
        industry: z.string().min(2, { message: 'Industry must be at least 2 characters long.' }),
        services: z.string().min(2, { message: 'Services must be at least 2 characters long.' }),
        language: z.string().min(2, { message: 'Language must be at least 2 characters long.' }),
        websitelink: z.string().min(2, { message: 'Website link must be at least 2 characters long.' }),
    });


export type OnboardingFormValidator = z.infer<typeof OnboardingFormSchema>;
