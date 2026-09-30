import { z } from "zod";

export const joinWaitlistSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

export type JoinWaitlistFormValues = z.infer<typeof joinWaitlistSchema>;
