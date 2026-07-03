# Deployment Guide

## Pre-Deployment Checklist

- [ ] All environment variables configured
- [ ] Email service set up and tested
- [ ] WhatsApp number verified
- [ ] Domain connected
- [ ] SSL certificate installed
- [ ] Analytics configured
- [ ] Forms tested and working
- [ ] Performance optimized
- [ ] SEO tags verified
- [ ] Mobile responsiveness checked

## Deployment Steps

### 1. Prepare for Production

```bash
# Build the project
npm run build

# Test the production build locally
npm run start
```

### 2. Deploy to Netlify

**Via GitHub (Recommended)**

1. Push changes to GitHub
2. Netlify automatically builds and deploys
3. Preview before production deployment

**Via CLI**

```bash
netlify deploy --prod
```

### 3. Configure Domain

1. Go to Netlify site settings
2. Add custom domain
3. Update DNS records with your registrar
4. Enable HTTPS (automatic with Netlify)

### 4. Set Production Environment Variables

In Netlify Dashboard:

1. Go to Site settings → Environment
2. Add all variables from `.env.example`
3. Use production values
4. Redeploy site

### 5. Monitor Performance

```bash
# Check Lighthouse scores
# Target: Mobile 90+, Desktop 95+

# Tools:
# - PageSpeed Insights: https://pagespeed.web.dev
# - WebPageTest: https://webpagetest.org
# - GTmetrix: https://gtmetrix.com
```

## Post-Deployment

### Verify Everything Works

- [ ] Homepage loads correctly
- [ ] All pages accessible
- [ ] Forms submit and send emails
- [ ] WhatsApp links functional
- [ ] Images load quickly
- [ ] Mobile looks good
- [ ] No console errors

### Set Up Monitoring

1. Enable error tracking (Sentry recommended)
2. Set up uptime monitoring
3. Configure analytics
4. Set up email alerts

### Maintenance

- Monitor form submissions
- Check email delivery
- Review analytics monthly
- Update content regularly
- Keep dependencies updated

## Troubleshooting

### Emails not sending

- Verify Gmail credentials
- Check app password (not regular password)
- Verify ADMIN_EMAIL is correct
- Check email logs in Netlify

### Slow performance

- Run Lighthouse audit
- Optimize images
- Enable compression
- Use CDN
- Check database queries

### Forms not working

- Verify API routes deployed
- Check environment variables
- Test API endpoints directly
- Check browser console for errors

## Rollback Plan

If issues occur:

1. Netlify keeps deployment history
2. Click "Deploys" and select previous version
3. Click "Publish deploy"
4. Fix issues and redeploy

## Performance Targets

- **PageSpeed Mobile**: 90+
- **PageSpeed Desktop**: 95+
- **First Contentful Paint**: < 2s
- **Largest Contentful Paint**: < 4s
- **Cumulative Layout Shift**: < 0.1
- **Time to Interactive**: < 4s

## Security Checklist

- [ ] SSL/HTTPS enabled
- [ ] Security headers configured
- [ ] Rate limiting on APIs
- [ ] Input validation on forms
- [ ] CORS properly configured
- [ ] Sensitive data not in code
- [ ] Dependencies updated
- [ ] No secrets in git history

## Support

For deployment issues:
- Contact: charvigneenterprises@gmail.com
- WhatsApp: +234 816 013 2332
