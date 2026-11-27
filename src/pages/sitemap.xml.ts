import type { APIRoute } from "astro";
import { getProjects } from "../lib/projects";

const escapeXml = (value: string) => value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");

export const GET: APIRoute = async ({ site }) => {
	if (!site) throw new Error("Set Astro's site option before generating the sitemap");

	const projects = await getProjects();
	const paths = ["/", "/projects/", "/uses/", ...projects.map(({ slug }) => `/projects/${slug}/`)];
	const urls = paths.map((path) => `  <url><loc>${escapeXml(new URL(path, site).href)}</loc></url>`);

	return new Response([
		'<?xml version="1.0" encoding="UTF-8"?>',
		'<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
		...urls,
		"</urlset>",
		"",
	].join("\n"), { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
