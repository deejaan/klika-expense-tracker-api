import { Router } from 'express';
import { authenticate } from '../middlewares/authenticate';
import {
  getExpensesController,
  addExpenseController,
  deleteExpenseController,
} from '../controllers/expenses';
import { getExpenseValidator } from '../validations/expense.validation';

const router = Router();
router.use(authenticate);
router.get('/', getExpensesController);
router.post('/', getExpenseValidator, addExpenseController);
router.delete('/:id', deleteExpenseController);

export default router;
