import express from 'express';
import { register, login } from '../controllers/authController.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';
import { checkPermissions } from '../middlewares/permissionMiddleware.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/protected', authMiddleware, checkPermissions(['admin']), (req, res) => {
    res.json({ message: 'You have access to this protected route!' });
});

export default router;
