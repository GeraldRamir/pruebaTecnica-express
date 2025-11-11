import z from "zod"
export const countrySchema= z.object({
    name: z.string(),
    capital: z.string().optional(),
    region: z.string().optional(),
    population: z.number().optional(),
    flag: z.string().url().optional()

})
export type countryDTO= z.infer<typeof countrySchema>;