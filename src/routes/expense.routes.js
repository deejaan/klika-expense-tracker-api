import { Router } from 'express';
import { authenticate } from '../middlewares/authenticate';
import { getExpensesController } from '../controllers/expenses';

const router = Router();
router.use(authenticate);
router.get('/', getExpensesController);

export default router;
