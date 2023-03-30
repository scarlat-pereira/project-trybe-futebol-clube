import { Request, Response, NextFunction } from 'express';

const validateLoginBody = (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  if (!email) {
    return res.status(400)
      .send({ message: 'All fields must be filled' });
  }
  if (!password) {
    return res.status(400)
      .send({ message: 'All fields must be filled' });
  }
  next();
};

export default validateLoginBody;
