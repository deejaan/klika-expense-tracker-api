import User from '../../models/User';

export const dbGetAllUsers = async () => {
  return User.query();
};
