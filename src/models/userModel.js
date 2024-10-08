import prisma from '../config/prisma.js';

export const findUserByUsername = async (username) => {
    return await prisma.user.findUnique({ where: { username } });
};

export const createUser = async (data) => {
    return await prisma.user.create({ data });
};
