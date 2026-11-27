import type { APIRoute } from "astro";

export const GET: APIRoute = ({ site }) => {
	if (!site) throw new Error("Set Astro's site option before generating the sitemap index");

	return new Response(`<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap><loc>${new URL("/sitemap.xml", site).href}</loc></sitemap>
</sitemapindex>
`, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
