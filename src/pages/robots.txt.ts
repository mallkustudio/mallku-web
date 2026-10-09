import type { APIRoute } from 'astro';
import { siteConfig } from '../config/site';

export const GET: APIRoute = () => {
  const lines = siteConfig.allowIndexing
    ? ['User-agent: *', 'Allow: /', `Sitemap: ${siteConfig.url}/sitemap-index.xml`]
    : ['User-agent: *', 'Disallow: /'];

  return new Response(lines.join('\n') + '\n', {
    headers: { 'Content-Type': 'text/plain' },
  });
};
