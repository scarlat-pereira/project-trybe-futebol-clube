import { Request, Response } from 'express';
import leaderboardService from '../services/LeaderboardService';

export default class LeaderboardController {
  _service: leaderboardService;

  constructor(service: leaderboardService) {
    this._service = service;
  }

  getHomeTeam = async (req: Request, res: Response) => {
    const oi = await this._service.getHomeTeam();
    return res.status(200).json(oi);
  };
}
