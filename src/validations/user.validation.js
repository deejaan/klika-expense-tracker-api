import { param } from 'express-validator';

import { validateResult } from './validateResult';

export const getUserValidator = [
  param('id').exists().isNumeric(),
  validateResult,
];
