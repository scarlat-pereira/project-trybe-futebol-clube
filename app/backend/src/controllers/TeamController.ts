import { Request, Response } from 'express';
import TeamService from '../services/TeamService';

export default class TeamController {
  _service: TeamService;

  constructor(service: TeamService) {
    this._service = service;
  }

  getAll = async (_req: Request, res: Response) => {
    const allTeams = await this._service.getAll();
    return res.status(200).json(allTeams);
  };

  getTeam = async (req: Request, res: Response) => {
    const { id } = req.params;
    const team = await this._service.getTeam(Number(id));
    return res.status(200).json(team);
  };
}
