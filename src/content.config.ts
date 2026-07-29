import { defineCollection, z } from "astro:content";

const projects = defineCollection({
	schema: z.object({
		title: z.string(),
		tags: z.array(z.string()).optional(),
		description: z.string(),
		links: z
			.array(
				z.object({
					label: z.string(),
					url: z.string(),
				})
			)
			.optional(),
		order: z.number().optional(),
		homepageOrder: z.number().optional(),
		featured: z.boolean().default(false),
		draft: z.boolean().default(false),
		status: z.string().optional(),
		projectType: z.string().optional(),
		relatedProjects: z.array(z.string()).optional(),
		highlights: z
			.array(
				z.object({
					title: z.string(),
					description: z.string(),
				})
			)
			.max(4)
			.optional(),
		bannerImage: z.string().optional(),
		bannerAlt: z.string().optional(),
	}),
});

const sections = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
	}),
});

export const collections = {
	projects,
	sections,
};
