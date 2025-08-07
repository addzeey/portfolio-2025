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
