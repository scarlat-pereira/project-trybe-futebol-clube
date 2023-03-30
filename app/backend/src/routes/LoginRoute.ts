import express = require('express');
import validateToken from '../middlewares/validateToken';
import validationLoginBody from '../middlewares/UserValidation';
import loginController from '../controllers/LoginController';

const loginRoutes = express.Router();

loginRoutes.post('/', validationLoginBody, loginController.loginUser);
loginRoutes.get('/role', validateToken, loginController.userRole);

export default loginRoutes;
