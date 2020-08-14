import { Router } from 'express';
import { authenticate } from '../middlewares/authenticate';
import {
  getExpensesController,
  deleteExpenseController,
} from '../controllers/expenses';

const router = Router();
router.use(authenticate);
router.get('/', getExpensesController);
router.delete('/:id', deleteExpenseController);

export default router;
