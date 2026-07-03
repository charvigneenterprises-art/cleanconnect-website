export interface BookingFormData {
  fullName: string;
  email: string;
  phone: string;
  serviceType: string;
  date: string;
  time: string;
  area: string;
  address: string;
  specialRequests?: string;
  paymentMethod: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface CleanerApplicationData {
  fullName: string;
  phone: string;
  email: string;
  state: string;
  area: string;
  experience: string;
  serviceTypes: string[];
  ownSupplies: boolean;
  bio: string;
  referralSource?: string;
}

export interface QuoteRequestData {
  fullName: string;
  email: string;
  phone: string;
  serviceType: string;
  area: string;
  description: string;
}
