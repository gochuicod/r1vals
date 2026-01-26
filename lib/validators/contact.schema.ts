// This is the base validators for contact form
// Change this according to your project requirements

import { z } from 'zod';

export const contactSchema = z.object({
  fullName: z.string().min(2, 'Full Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(7, 'Phone number is required'),
  interest: z.string()
    .refine((val) => ['team', 'individual', 'sponsor'].includes(val), { 
      message: "Please select an interest" 
    }),

  teamName: z.string().optional().or(z.literal('')),
  social: z.string().optional().or(z.literal('')),
});

export type ContactFormData = z.infer<typeof contactSchema>;