import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://cleanconnect.ng';
  const routes = [
    '',
    '/about',
    '/services',
    '/how-it-works',
    '/become-a-cleaner',
    '/testimonials',
    '/contact',
    '/faq',
    '/blog',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}
