import express from 'express';
import { create, getAll, getById, update, remove } from '../controllers/characterController.js';

const router = express.Router();

router.post('/', create); // Crear personaje
router.get('/', getAll); // Obtener todos los personajes
router.get('/:id', getById); // Obtener personaje por ID
router.put('/:id', update); // Actualizar personaje por ID
router.delete('/:id', remove); // Eliminar personaje por ID

export default router;
