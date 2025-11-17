import { defineCollection, z } from 'astro:content'

const jobsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    department: z.string(),
    location: z.string(),
    postedDate: z.string(),
    deadline: z.string(),
    description: z.string(),
    salary: z.string(),
    roleType: z.string(),
  }),
})

export const collections = {
  jobs: jobsCollection,
}
