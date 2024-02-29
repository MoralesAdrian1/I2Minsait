import { z } from "zod";

export const createTaskSchema = z.object({
  telefono: z.number({
    required_error: "Title is required",
  }),
  date: z.string().datetime().optional(),
  sexo: z.string().optional(),
  cp: z.number().optional(),
  pais: z.string().optional(),
  estado: z.string().optional(),
  ciudad: z.string().optional(),
});