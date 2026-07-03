# Installation Guide

## Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Git installed

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/charvigneenterprises-art/cleanconnect-website.git
cd cleanconnect-website
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Configure Environment Variables

```bash
cp .env.example .env.local
```

Edit `.env.local` and add your values:

```bash
# Email Configuration
GMAIL_USER=your_gmail@gmail.com
GMAIL_PASSWORD=your_app_password
ADMIN_EMAIL=charvigneenterprises@gmail.com

# WhatsApp Configuration
NEXT_PUBLIC_WHATSAPP_NUMBER=+234816013232

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://cleanconnect.ng
NEXT_PUBLIC_SITE_NAME=Charvigne CleanConnect

# Security (Optional - for production)
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_recaptcha_site_key
RECAPTCHA_SECRET_KEY=your_recaptcha_secret_key
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Build for Production

```bash
npm run build
npm run start
```

## Deployment to Netlify

### Option 1: Using Netlify CLI

```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

### Option 2: Connect GitHub to Netlify

1. Go to [Netlify](https://netlify.com)
2. Click "New site from Git"
3. Select your GitHub repository
4. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
5. Set environment variables in Netlify dashboard
6. Deploy

## Gmail Configuration for Email Sending

### Step 1: Enable 2-Factor Authentication

1. Go to [myaccount.google.com](https://myaccount.google.com)
2. Select "Security" from the left menu
3. Enable "2-Step Verification"

### Step 2: Create App Password

1. Go to [Security Settings](https://myaccount.google.com/apppasswords)
2. Select "Mail" and "Windows Computer" (or your device)
3. Google will generate a 16-character password
4. Copy this password and use it as `GMAIL_PASSWORD` in `.env.local`

## Performance Optimization

### Image Optimization

- All images are automatically converted to WebP/AVIF
- Implement lazy loading with Next.js `Image` component
- Use optimized images for faster load times

### Code Splitting

- Next.js automatically splits code at page level
- Dynamic imports for heavy components

### Caching Strategy

- Static assets cached for 1 year
- API responses not cached
- Configured in `netlify.toml`

## SEO Checklist

- ✅ Meta tags on all pages
- ✅ Open Graph tags for social sharing
- ✅ Twitter cards configured
- ✅ XML sitemap generated
- ✅ robots.txt configured
- ✅ Canonical URLs
- ✅ Schema markup ready
- ✅ Mobile-friendly design

## Database Setup (Optional)

For storing form submissions, integrate with:

- **MongoDB Atlas**: Cloud database
- **Supabase**: PostgreSQL alternative
- **Firebase**: Google's backend

Update API routes to save data to your chosen database.

## API Routes

### Available Endpoints

- `POST /api/booking` - Create booking
- `POST /api/contact` - Contact form submission
- `POST /api/cleaner-application` - Cleaner application

## Monitoring & Analytics

### Google Analytics

1. Create a Google Analytics 4 property
2. Add your tracking ID to `.env.local`
3. Tracking automatically enabled via Next.js

## Support

For issues or questions:
- Email: charvigneenterprises@gmail.com
- WhatsApp: +234 816 013 2332
- Phone: +234 816 013 2332

## License

All rights reserved © 2024 Charvigne CleanConnect
