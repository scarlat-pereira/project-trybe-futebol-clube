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

  getById = async (req: Request, res: Response) => {
    const { id } = req.params;
    await this._service.getById(Number(id) as number);
    return res.status(200).json({ message: 'Finished' });
  };

  updateMatch = async (req: Request, res: Response) => {
    const { homeTeamGoals, awayTeamGoals } = req.body;
    const { id } = req.params;
    // const match = await this
    //   ._service.updateMatch(homeTeamGoals, awayTeamGoals, Number(id) as number);
    // return res.status(200).json(match);
    await this._service.updateMatch(homeTeamGoals, awayTeamGoals, Number(id) as number);
    return res.status(200).json({ message: 'ok' });
  };

  createMatches = async (req: Request, res: Response) => {
    // const { body } = req;
    // const { homeTeamId, awayTeamId, homeTeamGoals, awayTeamGoals } = body;
    // const match = await this._service
    //   .createMatches(
    //     homeTeamId as number,
    //     awayTeamId as number,
    //     homeTeamGoals as number,
    //     awayTeamGoals as number,
    //   );
    // if (match === false) {
    //   return res.status(404).json({ message: 'There is no team with such id!' });
    // }
    const newMatch = req.body;
    const match = await this._service.createMatches(newMatch);
    return res.status(201).json(match);
  };
}
