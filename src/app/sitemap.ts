import type { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/config/site';

const ROUTES = ['/', '/terms', '/privacy', '/community-guidelines', '/account-deletion', '/support'];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((route) => ({
    url: `${SITE_CONFIG.siteUrl}${route}`,
    changeFrequency: 'monthly',
    priority: route === '/' ? 1 : 0.7,
  }));
}
