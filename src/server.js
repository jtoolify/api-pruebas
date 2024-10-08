import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import categoryRoutes from './routes/categoryRoutes.js';
import logger from './middlewares/logger.js';
import { configureCors } from './config/cors.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(logger);
app.use(cors(configureCors()));

app.use('/api/auth', authRoutes);
app.use('/api/categories', categoryRoutes); // Añadir rutas de categorías

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
