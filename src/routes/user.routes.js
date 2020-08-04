import { Router } from 'express';
import { getUserValidator } from '../validations/user.validation';
import { createUser } from '../controllers/users';
const router = Router();
router.post('/', getUserValidator, createUser);

export default router;
