import { z } from "zod";

export const createDatosPSchema = z.object({
  telefono: z.number({
    required_error: "Telefono es requerido",
  }),
  date: z.string().datetime().optional(),
  sexo: z.string().optional(),
  cp: z.number().optional(),
  pais: z.string().optional(),
  estado: z.string().optional(),
  ciudad: z.string().optional(),
});