import { getExpensesByUserId, deleteExpense } from '../services/db/expenses';
import { HttpError } from '../utils/httpError';

export const getExpensesController = async (req, res, next) => {
  try {
    const id = req.id;
    const expenses = await getExpensesByUserId(id);
    res.status(200).send({ expenses: expenses });
  } catch (error) {
    next(error);
  }
};

export const deleteExpenseController = async (req, res, next) => {
  try {
    const id = req.params.id;
    const numDeleted = await deleteExpense(id);
    if (numDeleted != 1)
      throw new HttpError(422, 'Error while trying to delete expense');
    res.status(200).send('Expense successfully deleted');
  } catch (error) {
    next(error);
  }
};
