import * as z from 'zod';

// Esquema de validación para categorías
export const categorySchema = z.object({
    name: z.string().min(1, 'El nombre es requerido.'),
});