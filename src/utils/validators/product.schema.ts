import { z } from "zod";

export const productSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "O nome é obrigatório."),

  category: z
    .string()
    .trim()
    .min(1, "A categoria é obrigatória."),

  description: z
    .string()
    .trim()
    .min(1, "A descrição é obrigatória."),

  price: z
    .number({
      error: "Informe um preço válido.",
    })
    .min(0.01, "O preço deve ser maior que zero."),

  quantity: z
    .number({
      error: "Informe uma quantidade válida.",
    })
    .min(0, "A quantidade não pode ser negativa."),

  image: z
    .instanceof(File)
    .optional(),
});

export type ProductFormData = z.infer<typeof productSchema>;