import { registerSchema, loginSchema } from '../schemas/userSchema.js';
import { createUser, findUserByUsername } from '../models/userModel.js';
import bcrypt from 'bcrypt';
import { generateToken } from '../config/jwt.js';

export const register = async (req, res) => {
    try {
        const validatedData = registerSchema.parse(req.body);
        const { username, password, role } = validatedData;

        const existingUser = await findUserByUsername(username);
        if (existingUser) {
            return res.status(409).json({ message: 'El nombre de usuario ya está en uso.' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await createUser({ username, password: hashedPassword, role });

        res.status(201).json({ message: 'Usuario registrado con éxito', user });
    } catch (error) {
        res.status(400).json({ message: 'Error de validación', errors: error.errors || [] });
    }
};

export const login = async (req, res) => {
    try {
        const validatedData = loginSchema.parse(req.body);
        const { username, password } = validatedData;

        const user = await findUserByUsername(username);
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado.' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Contraseña incorrecta.' });
        }

        const token = generateToken(user.id, user.role);
        res.json({ message: 'Inicio de sesión exitoso', token });
    } catch (error) {
        res.status(400).json({ message: 'Error de validación', errors: error.errors || [] });
    }
};
