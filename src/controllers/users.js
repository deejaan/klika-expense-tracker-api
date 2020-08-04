import generateHashPassword from '../utils/generate.hash';
import { createUser } from '../services/db/users';
import { Stats } from 'fs-extra';

export const createUserController = async (req, res) => {
  const user = req.body;
  const hashedPassword = await generateHashPassword(user.password);
  user.password = hashedPassword;
  const newUser = await createUser(user);
  res.send(newUser);
};
