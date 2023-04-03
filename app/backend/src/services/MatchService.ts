import { ModelStatic } from 'sequelize';
import NewMatch from '../interfaces/newMatch';
import Teams from '../database/models/TeamModel';
import Matches from '../database/models/MatchModel';

export default class MatchesService {
  matchModel: ModelStatic<Matches>;
  teamModel: ModelStatic<Teams>;

  constructor(
    matchModel: ModelStatic<Matches>,
    teamModel: ModelStatic<Teams>,
  ) {
    this.matchModel = matchModel;
    this.teamModel = teamModel;
  }

  getAll = async (): Promise<Matches[]> => {
    const allMatches = await this.matchModel.findAll({
      include: [
        {
          model: this.teamModel,
          as: 'awayTeam',
          attributes: { exclude: ['id'] },
        },
        {
          model: this.teamModel,
          as: 'homeTeam',
          attributes: { exclude: ['id'] },
        }],
    });

    return allMatches;
  };

  getInProgress = async (inProgress: string): Promise<Matches[]> => {
    const matches = await this.matchModel.findAll({
      where: { inProgress: JSON.parse(inProgress.toLowerCase()) },
      include: [
        {
          model: this.teamModel,
          as: 'awayTeam',
          attributes: { exclude: ['id'] },
        },
        {
          model: this.teamModel,
          as: 'homeTeam',
          attributes: { exclude: ['id'] },
        }],

    });

    return matches;
  };

  getById = async (id: number) => {
    const match = await this.matchModel.findOne({ where: { id } });
    match?.update({
      inProgress: false,
    });
  };

  updateMatch = async (bodyA: number, bodyB: number, id: number) => {
    await this.matchModel.update(
      {
        homeTeamGoals: bodyA,
        awayTeamGoals: bodyB,
      },
      { where: { id } },
    );
  };

  createMatches = async (body: NewMatch) => {
    const matchTrue = true;
    const create = await this.matchModel
      .create({ ...body, inProgress: matchTrue });

    return create;
  };
}
