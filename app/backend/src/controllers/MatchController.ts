import { Request, Response } from 'express';
import MatchesService from '../services/MatchService';

export default class MatchesController {
  _service: MatchesService;

  constructor(service: MatchesService) {
    this._service = service;
  }

  // getAll = async (_req: Request, res: Response) => {
  //   const allMatches = await this._service.getAll();
  //   return res.status(200).json(allMatches);
  // };

  getAllMatches = async (req: Request, res: Response) => {
    const { inProgress } = req.query;
    if (inProgress) {
      const matches = await this._service.getInProgress(inProgress as string);
      return res.status(200).json(matches);
    }
    const allMatches = await this._service.getAll();
    return res.status(200).json(allMatches);
  };
}
