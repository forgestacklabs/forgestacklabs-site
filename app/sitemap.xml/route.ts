import { NextResponse } from 'next/server'

export async function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://forgestacklabs.com/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
    <url>
    <loc>https://forgestacklabs.com/technology</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://forgestacklabs.com/about</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://forgestacklabs.com/principles</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://forgestacklabs.com/contact</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://forgestacklabs.com/privacy</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
    <url>
    <loc>https://forgestacklabs.com/terms</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>`

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}