import { ModelStatic } from 'sequelize';
import Teams from '../database/models/indexModel';

// async function getAll(): Promise<Teams[]> {
//   const teams = await TeamModel.findAll();
//   return teams;
// }

// async function getAllTeamById(id: number) {
//   const team = await TeamModel.findByPk(id);
//   return team;
// }

// export default {
//   getAll,
//   getAllTeamById,
// };

export default class TeamService {
  _model: ModelStatic<Teams>;

  constructor(model: ModelStatic<Teams>) {
    this._model = model;
  }

  getAll = async (): Promise<Teams[]> => {
    const allTeams = await this._model.findAll();
    return allTeams;
  };

  getTeam = async (id: number) => {
    const team = await this._model.findByPk(id);
    return team;
  };
}
