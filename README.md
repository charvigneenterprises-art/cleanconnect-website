# Charvigne CleanConnect - Premium Enterprise Website

A modern, high-converting SaaS-inspired marketplace website for Charvigne CleanConnect, a Nigerian cleaning services platform.

## 🚀 Features

- **Premium Design System**: Modern, clean, SaaS-inspired UI
- **High Performance**: 90+ PageSpeed on mobile, 95+ on desktop
- **Fully Responsive**: Mobile-first design
- **SEO Optimized**: Meta tags, Open Graph, Schema markup
- **Form Management**: Automated email notifications
- **WhatsApp Integration**: Floating button and direct links
- **Blog System**: SEO-ready blog with categories
- **Future-Ready**: Dashboard architecture for customers and cleaners
- **Payment Integration**: Ready for Paystack, Flutterwave

## 🛠 Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod
- **Email**: Nodemailer / Resend
- **Hosting**: Netlify

## 📦 Installation

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local

# Run development server
npm run dev

# Open http://localhost:3000
```

## 🔧 Environment Variables

Create a `.env.local` file:

```
GMAIL_USER=your_gmail@gmail.com
GMAIL_PASSWORD=your_app_password
ADMIN_EMAIL=charvigneenterprises@gmail.com
NEXT_PUBLIC_WHATSAPP_NUMBER=+234816013232
NEXT_PUBLIC_SITE_URL=https://cleanconnect.ng
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_key
RECAPTCHA_SECRET_KEY=your_secret
```

## 📄 Pages

- `/` - Homepage with hero, stats, services, how it works
- `/about` - Company story, mission, leadership
- `/services` - Detailed service information
- `/how-it-works` - Customer & cleaner guides
- `/become-a-cleaner` - Recruitment page
- `/testimonials` - Customer reviews
- `/contact` - Contact form with map
- `/faq` - FAQ with accordions
- `/blog` - Blog system

## 🎨 Brand Colors

- **Primary**: #1A5276 (Deep Blue)
- **Accent**: #148F77 (Teal)
- **Background**: #FDFEFE (Off White)
- **Secondary**: #D6EAF8 (Light Blue)

## 📧 Forms

All forms automatically:
1. Save to database
2. Send email to admin
3. Send confirmation to user

Forms included:
- Booking form
- Contact form
- Cleaner application
- Quote request

## 🚀 Deployment to Netlify

```bash
# Build
npm run build

# Deploy
netlify deploy --prod
```

Or connect your GitHub repo to Netlify for automatic deployments.

## 📊 Performance Targets

- PageSpeed Mobile: 90+
- PageSpeed Desktop: 95+
- Core Web Vitals: All Green
- WebP images
- Lazy loading
- CDN support

## 🔒 Security

- SSL enabled
- RECAPTCHA on forms
- GDPR/NDPR compliant
- Secure email handling
- XSS protection

## 🚀 Future Features

- Customer dashboard
- Cleaner dashboard
- Real-time notifications
- Referral system
- Loyalty rewards
- Mobile app
- Payment gateway integration (Paystack, Flutterwave)
- Live chat support
- Video tutorials

## 📞 Contact

- Email: charvigneenterprises@gmail.com
- WhatsApp: +234 816 013 2332
- Phone: +234 816 013 2332
- Address: 13 Power Line Street, Oke Ayo, Ishaga, Lagos, Nigeria

## 📜 License

All rights reserved © 2024 Charvigne CleanConnect
