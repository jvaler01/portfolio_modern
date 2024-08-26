import type { APIRoute } from 'astro';

const robotsTxt = `
User-agent: *
Allow: /
Sitemap: ${new URL('sitemap-index.xml', 'https://jvaler01.github.io')}
`.trim();

export const GET: APIRoute = () => {
  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};