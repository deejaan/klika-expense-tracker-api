import { body } from 'express-validator';

import { validateResult } from './validateResult';

export const getExpenseValidator = [
  body('categoryId').exists(),
  body('name').isLength({ min: 1 }).exists().isLength({ max: 50 }),
  body('description').isLength({ min: 0 }).exists().isLength({ max: 255 }),
  body('amount').isNumeric(),
  validateResult,
];
