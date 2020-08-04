import { Router } from 'express';
import userRoutes from './user.routes';
import { getUserValidator } from '../validations/user.validation';

const router = Router();

// Test
router.get('/test', () => {
  console.log('test');
});

// User routes
router.use('/users', userRoutes);

//api v1 main router
export default router.use('/api/v1', router);
