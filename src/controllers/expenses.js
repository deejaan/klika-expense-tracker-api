import { getExpensesByUserId } from '../services/db/expenses';

export const getExpensesController = async (req, res, next) => {
  try {
    const id = req.id;
    const expenses = await getExpensesByUserId(id);
    res.status(200).send({ expenses: expenses });
  } catch (error) {
    next(error);
  }
};
