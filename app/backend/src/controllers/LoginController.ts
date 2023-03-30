import { Request, Response } from 'express';
import { createToken } from '../utils/jwtFunctions';
import UserService from '../services/LoginService';

const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await UserService.loginUser(email, password);
  if (!user) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }
  if (user) {
    const token = createToken(user);
    return res.status(200).json({ token });
  }
};

export default { loginUser };
