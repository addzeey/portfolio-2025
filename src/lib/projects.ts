import { getCollection } from "astro:content";

/** Returns published projects in portfolio navigation order. */
export async function getProjects() {
	const projects = await getCollection("projects", ({ data }) => !data.draft);
	return projects.sort((a, b) => (a.data.order ?? 99) - (b.data.order ?? 99));
}

/** Returns projects selected for the homepage in explicit editorial order. */
export async function getHomepageProjects(limit = 4) {
	const projects = await getProjects();
	return projects
		.filter(({ data }) => data.homepageOrder !== undefined)
		.sort((a, b) => (a.data.homepageOrder ?? 99) - (b.data.homepageOrder ?? 99))
		.slice(0, limit);
}
