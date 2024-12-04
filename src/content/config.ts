import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      author: z.string(),
      tags: z.array(z.string()),
      description: z.string(),
      pubDate: z.string().transform((str) => new Date(str)),
      imgUrl: image(),
      draft: z.boolean().optional().default(false),
    }),
});

const servicesCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      descrition: z.string(),
      price: z.string(),
      duration: z.string(),
    }),
});

export const collections = {
  blog: blogCollection,
  services: servicesCollection,
};
