import { ModelStatic } from 'sequelize';
import Teams from '../database/models/TeamModel';
import Matches from '../database/models/MatchModel';
import LeaderBoard from '../database/models/Leader';
import AwayLeader from '../database/models/AwayLeader';

export default class LeaderboardService {
  matchModel: ModelStatic<Matches>;
  teamModel: ModelStatic<Teams>;

  constructor(
    matchModel: ModelStatic<Matches>,
    teamModel: ModelStatic<Teams>,
  ) {
    this.matchModel = matchModel;
    this.teamModel = teamModel;
  }

  getHomeTeam = async () => {
    const leaderboardHomeTeams = await this.teamModel.findAll();
    const leaderboardHomeMatches = await this.matchModel.findAll();
    const newBoard = new LeaderBoard(leaderboardHomeTeams, leaderboardHomeMatches);
    return newBoard.createBoard();
  };

  getAwayTeam = async () => {
    const leaderboardAwayTeams = await this.teamModel.findAll();
    const leaderboardAwayMatches = await this.matchModel.findAll();
    const newBoard = new AwayLeader(leaderboardAwayTeams, leaderboardAwayMatches);
    return newBoard.createBoard();
  };
}
