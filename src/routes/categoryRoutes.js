import express from 'express';
import { create, getAll, getById, update, remove } from '../controllers/categoryController.js';

const router = express.Router();

router.post('/', create); // Crear categoría
router.get('/', getAll); // Obtener todas las categorías
router.get('/:id', getById); // Obtener categoría por ID
router.put('/:id', update); // Actualizar categoría por ID
router.delete('/:id', remove); // Eliminar categoría por ID

export default router;
