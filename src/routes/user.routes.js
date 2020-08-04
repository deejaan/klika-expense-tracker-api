import { Router } from 'express';
import { getUserValidator } from '../validations/user.validation';
import { createUserController } from '../controllers/users';
const router = Router();
router.post('/', getUserValidator, createUserController);

export default router;
