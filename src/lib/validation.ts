import { z } from 'zod';

export const bookingFormSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(/^\+?234\d{10}$/, 'Invalid Nigerian phone number'),
  serviceType: z.string().min(1, 'Please select a service'),
  date: z.string().refine((date) => new Date(date) > new Date(), 'Date must be in the future'),
  time: z.string().min(1, 'Please select a time'),
  area: z.string().min(1, 'Please select your area'),
  address: z.string().min(5, 'Please provide your full address'),
  specialRequests: z.string().optional(),
  paymentMethod: z.string().min(1, 'Please select a payment method'),
});

export const contactFormSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(/^\+?234\d{10}$/, 'Invalid Nigerian phone number'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export const cleanerApplicationSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().regex(/^\+?234\d{10}$/, 'Invalid Nigerian phone number'),
  email: z.string().email('Invalid email address'),
  state: z.string().min(1, 'Please select your state'),
  area: z.string().min(1, 'Please provide your area'),
  experience: z.enum(['beginner', 'intermediate', 'expert']),
  serviceTypes: z.array(z.string()).min(1, 'Select at least one service type'),
  ownSupplies: z.boolean(),
  bio: z.string().min(10, 'Bio must be at least 10 characters'),
  referralSource: z.string().optional(),
});

export const quoteRequestSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(/^\+?234\d{10}$/, 'Invalid Nigerian phone number'),
  serviceType: z.string().min(1, 'Please select a service'),
  area: z.string().min(1, 'Please select your area'),
  description: z.string().min(10, 'Please describe your needs'),
});

export type BookingFormInputs = z.infer<typeof bookingFormSchema>;
export type ContactFormInputs = z.infer<typeof contactFormSchema>;
export type CleanerApplicationInputs = z.infer<typeof cleanerApplicationSchema>;
export type QuoteRequestInputs = z.infer<typeof quoteRequestSchema>;
