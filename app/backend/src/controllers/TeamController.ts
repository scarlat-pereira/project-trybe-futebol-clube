import { Request, Response } from 'express';
import TeamService from '../services/TeamService';

// const getAll = async (_req: Request, res: Response) => {
//   const teams = await TeamService.getAll();
//   return res.status(200).json(teams);
// };

// const getAllTeamById = async (req: Request, res: Response) => {
//   const { id } = req.params;
//   const team = await TeamService.getAllTeamById(Number(id));
//   return res.status(200).json(team);
// };

// export default { getAll, getAllTeamById };

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
