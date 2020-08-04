import { body } from 'express-validator';

import { validateResult } from './validateResult';

export const getUserValidator = [
  body('email').exists().isEmail(),
  body('password').isLength({ min: 6 }).exists().isLength({ max: 39 }),
  body('first_name').isLength({ min: 3 }).exists().isLength({ max: 39 }),
  body('last_name').isLength({ min: 3 }).exists().isLength({ max: 39 }),
  validateResult,
];
