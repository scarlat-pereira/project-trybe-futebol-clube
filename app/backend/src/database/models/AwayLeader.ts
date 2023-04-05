import Stats from '../../interfaces/stats';
import AwayStats from './AwayStats';
import Matches from './MatchModel';
import Teams from './TeamModel';

export default class AwayLeader {
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
        const stats = new AwayStats(match, this._matches);
        const { matches, team, ...rest } = stats;
        return rest;
      });
  }
}
