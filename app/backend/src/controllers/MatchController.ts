import { Request, Response } from 'express';
import MatchesService from '../services/MatchService';

export default class MatchesController {
  _service: MatchesService;

  constructor(service: MatchesService) {
    this._service = service;
  }

  getAllMatches = async (req: Request, res: Response) => {
    const { inProgress } = req.query;
    if (inProgress) {
      const matches = await this._service.getInProgress(inProgress as string);
      return res.status(200).json(matches);
    }
    const allMatches = await this._service.getAll();
    return res.status(200).json(allMatches);
  };

  getById = async (req: Request, res: Response) => {
    const { id } = req.params;
    await this._service.getById(Number(id) as number);
    return res.status(200).json({ message: 'Finished' });
  };

  updateMatch = async (req: Request, res: Response) => {
    const { homeTeamGoals, awayTeamGoals } = req.body;
    const { id } = req.params;
    await this._service.updateMatch(homeTeamGoals, awayTeamGoals, Number(id) as number);
    return res.status(200).json({ message: 'ok' });
  };

  createMatches = async (req: Request, res: Response) => {
    const newMatch = req.body;
    const match = await this._service.createMatches(newMatch);
    return res.status(201).json(match);
  };
}
