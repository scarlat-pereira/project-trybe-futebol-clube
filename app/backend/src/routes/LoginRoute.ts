import express = require('express');
import validationLoginBody from '../middlewares/UserValidation';
import loginController from '../controllers/LoginController';

const loginRoutes = express.Router();

loginRoutes.post('/', validationLoginBody, loginController.loginUser);

export default loginRoutes;
