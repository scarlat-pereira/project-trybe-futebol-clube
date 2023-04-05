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

    const newboard = new LeaderBoard(leaderboardHomeTeams, leaderboardHomeMatches);
    const result = newboard.createBoard();
    const sorted = result.sort((a, b) => {
      if (a.totalPoints > b.totalPoints) { return -1; }
      if (a.totalPoints < b.totalPoints) { return 1; }

      if (a.totalVictories > b.totalVictories) { return -1; }
      if (a.totalVictories < b.totalVictories) { return 1; }

      if (a.goalsBalance > b.goalsBalance) { return -1; }
      if (a.goalsBalance < b.goalsBalance) { return 1; }

      if (a.goalsFavor > b.goalsFavor) { return -1; }
      if (a.goalsFavor < b.goalsFavor) { return 1; }

      return 0;
    });
    return sorted;
  };

  getAwayTeam = async () => {
    const leaderboardHomeTeams = await this.teamModel.findAll();
    const leaderboardHomeMatches = await this.matchModel.findAll();
    const newBoard = new AwayLeader(leaderboardHomeTeams, leaderboardHomeMatches);
    return newBoard.createBoard();
  };
}
