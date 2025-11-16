// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content'

// 2. Import loader(s)
import { glob } from 'astro/loaders'

// 3. Define your collection(s)
const jobs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/jobs' }),
  schema: z.object({
    title: z.string(),
    department: z.string(),
    location: z.string(),
    salary: z.string().optional(),
    postedDate: z.string(),
    deadline: z.string().optional(),
    description: z.string(),
  }),
})

// 4. Export a single `collections` object to register your collection(s)
export const collections = { jobs }
