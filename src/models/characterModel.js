import prisma from '../config/prisma.js';

export const createCharacter = async (data) => {
    return await prisma.character.create({ data });
};

export const getAllCharacters = async (page, pageSize) => {
    return await prisma.character.findMany({
        skip: (page - 1) * pageSize,
        take: pageSize,
    });
};

export const getCharacterCount = async () => {
    return await prisma.character.count();
};

export const getCharacterById = async (id) => {
    return await prisma.character.findUnique({ where: { id } });
};

export const updateCharacter = async (id, data) => {
    return await prisma.character.update({
        where: { id },
        data,
    });
};

export const deleteCharacter = async (id) => {
    return await prisma.character.delete({ where: { id } });
};
