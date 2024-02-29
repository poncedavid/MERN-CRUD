import {z} from "zod";

export const createTaskSchema = z.object({
    title: 
    z.string({
        required_error: "title is required",
    }).min(5),
    description: 
    z.string({
        required_error: "description is required",
    }).min(5),
    date:
    z.string().datetime().optional(),

    });