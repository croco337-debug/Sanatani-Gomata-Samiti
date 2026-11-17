import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sanatanigomatasamiti.org';
  const lastModified = new Date();

  const routes = [
    '',
    '/about',
    '/gau-seva',
    '/agriculture',
    '/matri-shakti',
    '/animal-husbandry',
    '/activities',
    '/gallery',
    '/contact',
    '/privacy',
    '/terms',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === '' || route === '/activities' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : route.startsWith('/gau-seva') || route.startsWith('/matri-shakti') ? 0.9 : 0.8,
  }));
}
