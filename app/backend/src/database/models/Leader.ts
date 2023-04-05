import Stats from '../../interfaces/stats';
import Matches from './MatchModel';
import Teams from './TeamModel';
import TeamStats from './TeamStats';

export default class LeaderBoard {
  private _teams: Teams[];
  private _matches: Matches[];
  private _board: Stats[];
  constructor(teams: Teams[], matches: Matches[]) {
    this._matches = matches;
    this._teams = teams;
    this._board = this.createBoard();
  }

  public get board(): Stats[] {
    return this._board;
  }

  public createBoard() {
    return this._teams
      .map((match) => {
        const stats = new TeamStats(match, this._matches);
        const { matches, team, ...rest } = stats;
        return rest;
      });
  }
}
