import * as z from 'zod';

export const registerSchema = z.object({
    username: z.string().min(3, 'El nombre de usuario debe tener al menos 3 caracteres.'),
    password: z.string().min(6, 'La contraseña debe tener al menos 6 caracteres.'),
    role: z.string().optional(),
});

export const loginSchema = z.object({
    username: z.string().min(3, 'El nombre de usuario es requerido.'),
    password: z.string().min(6, 'La contraseña es requerida.'),
});
