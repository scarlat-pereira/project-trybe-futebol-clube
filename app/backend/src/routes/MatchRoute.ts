import express = require('express');
import Teams from '../database/models/TeamModel';
import Matches from '../database/models/MatchModel';
import MatchesController from '../controllers/MatchController';
import MatchesService from '../services/MatchService';
import validateToken from '../middlewares/validateToken';

const matchesService = new MatchesService(Matches, Teams);
const matchesController = new MatchesController(matchesService);

const matchesRoutes = express.Router();

matchesRoutes.get('/', matchesController.getAllMatches);
matchesRoutes.patch('/:id/finish', validateToken, matchesController.getById);
matchesRoutes.patch('/:id', validateToken, matchesController.updateMatch);

export default matchesRoutes;
