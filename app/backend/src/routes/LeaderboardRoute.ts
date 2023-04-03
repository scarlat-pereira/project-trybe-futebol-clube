import express = require('express');
import Matches from '../database/models/MatchModel';
import LeaderboardController from '../controllers/LeaderboardController';
import LeaderboardService from '../services/LeaderboardService';
import Teams from '../database/models/TeamModel';

const leaderboardService = new LeaderboardService(Matches, Teams);
const leaderboardController = new LeaderboardController(leaderboardService);

const leaderRoutes = express.Router();

leaderRoutes.get('/home', leaderboardController.getHomeTeam);

export default leaderRoutes;
