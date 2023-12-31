import {z} from "zod";

export const createProductSchema = z.object({
    title: z.string({
        required_error: "Title is required",
    }),
    description: z.string({
        required_error: "Description must be a string"
    }),
    price: z.string({
        required_error: "Price is required",
    }),
})