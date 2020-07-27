import { Router } from 'express';

import { getUsers } from '../controllers/users';
import { authenticate } from '../middlewares/authenticate';

const router = Router();

router.use(authenticate);

router.get('/', getUsers);

export default router;
