import express = require('express');
import Teams from '../database/models/TeamModel';
import Matches from '../database/models/MatchModel';
import MatchesController from '../controllers/MatchController';
import MatchesService from '../services/MatchService';

const matchesService = new MatchesService(Matches, Teams);
const matchesController = new MatchesController(matchesService);

const matchesRoutes = express.Router();

matchesRoutes.get('/', matchesController.getAll);

export default matchesRoutes;
