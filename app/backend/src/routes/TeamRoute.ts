import express = require('express');
import TeamController from '../controllers/TeamController';
import TeamService from '../services/TeamService';
import Teams from '../database/models/TeamModel';

const teamService = new TeamService(Teams);
const teamController = new TeamController(teamService);

const teamRoutes = express.Router();

teamRoutes.get('/', teamController.getAll);
teamRoutes.get('/:id', teamController.getTeam);

export default teamRoutes;
