import { categorySchema } from '../schemas/categorySchema.js';
import { 
    createCategory, 
    getAllCategories, 
    getCategoryById, 
    updateCategory, 
    deleteCategory 
} from '../models/categoryModel.js';

export const create = async (req, res) => {
    try {
        const validatedData = categorySchema.parse(req.body);
        const newCategory = await createCategory(validatedData);
        res.status(201).json(newCategory);
    } catch (error) {
        res.status(400).json({ message: error.errors });
    }
};

export const getAll = async (req, res) => {
    const categories = await getAllCategories();
    res.json(categories);
};

export const getById = async (req, res) => {
    const { id } = req.params;
    const category = await getCategoryById(parseInt(id));
    if (!category) {
        return res.status(404).json({ message: 'Categoría no encontrada.' });
    }
    res.json(category);
};

export const update = async (req, res) => {
    const { id } = req.params;
    try {
        const validatedData = categorySchema.parse(req.body);
        const updatedCategory = await updateCategory(parseInt(id), validatedData);
        res.json(updatedCategory);
    } catch (error) {
        res.status(400).json({ message: error.errors });
    }
};

export const remove = async (req, res) => {
    const { id } = req.params;
    try {
        await deleteCategory(parseInt(id));
        res.status(200).json({ message: 'Categoría eliminada con éxito.' });
    } catch (error) {
        res.status(404).json({ message: 'Categoría no encontrada.' });
    }
};

