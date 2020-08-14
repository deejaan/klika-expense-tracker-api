import Expense from '../../models/Expense';

export const getExpensesByUserId = async id => {
  const expenses = await Expense.query()
    .withGraphJoined('category')
    .where({ user_id: id });
  return expenses;
};

export const deleteExpense = async id => {
  const numDeleted = await Expense.query().deleteById(id);
  return numDeleted;
};
