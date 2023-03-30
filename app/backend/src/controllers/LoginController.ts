import { Request, Response } from 'express';
import { createToken } from '../utils/jwtFunctions';
import LoginService from '../services/LoginService';

const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await LoginService.loginUser(email, password);
  if (!user) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }
  if (user) {
    const token = createToken(user);
    return res.status(200).json({ token });
  }
};

const userRole = async (req: Request, res: Response) => {
  const { payload } = req.body.user;
  const { id } = payload;
  const role = await LoginService.userRole(id);

  return res.status(200).json({ role });
};

export default { loginUser, userRole };
