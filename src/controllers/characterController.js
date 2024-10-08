import { characterSchema } from '../schemas/characterSchema.js'; 
import { 
    createCharacter, 
    getAllCharacters, 
    getCharacterById, 
    updateCharacter, 
    deleteCharacter,
    getCharacterCount // Asegúrate de incluir esta línea
} from '../models/characterModel.js';

export const create = async (req, res) => {
    try {
        const validatedData = characterSchema.parse(req.body);
        const newCharacter = await createCharacter(validatedData);
        res.status(201).json(newCharacter);
    } catch (error) {
        res.status(400).json({ message: error.errors });
    }
};

export const getAll = async (req, res) => {
    const page = parseInt(req.query.page) || 1; // Número de página
    const pageSize = 4; // Número de personajes por página

    const [characters, totalCount] = await Promise.all([
        getAllCharacters(page, pageSize), // Obtener personajes de la página
        getCharacterCount() // Obtener el total de personajes
    ]);

    const totalPages = Math.ceil(totalCount / pageSize);
    const response = {
        info: {
            count: totalCount,
            pages: totalPages,
            next: page < totalPages ? `http://localhost:3000/api/characters?page=${page + 1}` : null,
            prev: page > 1 ? `http://localhost:3000/api/characters?page=${page - 1}` : null,
        },
        results: characters,
    };

    res.json(response);
};

export const getById = async (req, res) => {
    const { id } = req.params;
    const character = await getCharacterById(parseInt(id));
    if (!character) {
        return res.status(404).json({ message: 'Personaje no encontrado.' });
    }
    res.json(character);
};

export const update = async (req, res) => {
    const { id } = req.params;
    try {
        const validatedData = characterSchema.parse(req.body);
        const updatedCharacter = await updateCharacter(parseInt(id), validatedData);
        res.json(updatedCharacter);
    } catch (error) {
        res.status(400).json({ message: error.errors });
    }
};

export const remove = async (req, res) => {
    const { id } = req.params;
    try {
        await deleteCharacter(parseInt(id));
        res.status(200).json({ message: 'Personaje eliminado con éxito.' });
    } catch (error) {
        res.status(404).json({ message: 'Personaje no encontrado.' });
    }
};
