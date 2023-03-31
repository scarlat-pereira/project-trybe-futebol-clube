import express = require('express');
import validateToken from '../middlewares/validateToken';
import validationLoginBody from '../middlewares/UserValidation';
import LoginController from '../controllers/LoginController';
import LoginService from '../services/LoginService';
import Users from '../database/models/UserModel';

const loginService = new LoginService(Users);
const loginController = new LoginController(loginService);

const loginRoutes = express.Router();

loginRoutes.post('/', validationLoginBody, loginController.login);
loginRoutes.get('/role', validateToken, loginController.getRole);

export default loginRoutes;
