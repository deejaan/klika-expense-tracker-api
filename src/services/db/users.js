import User from '../../models/User';

export const dbGetAllUsers = async () => {
  return User.query();
};
export const createUser = async user => {
  const addeduser = await User.query().insert({
    email: user.email,
    password: user.password,
    first_name: user.first_name,
    last_name: user.last_name,
  });
  return addeduser;
};
