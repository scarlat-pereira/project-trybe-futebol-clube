import Stats from '../../interfaces/stats';
import Matches from './MatchModel';
import Teams from './TeamModel';

export default class AwayStats implements Stats {
  name: string;
  totalPoints: number;
  totalGames: number;
  totalVictories: number;
  totalDraws: number;
  totalLosses: number;
  goalsFavor: number;
  goalsOwn: number;
  goalsBalance: number;
  efficiency: number;
  team: Teams;
  matches: Matches[];

  constructor(team: Teams, matches: Matches[]) {
    this.team = team;
    this.name = team.teamName;
    this.matches = matches;
    this.totalGames = this.getTotalGames();
    this.totalVictories = this.getTotalVictories();
    this.totalLosses = this.getTotalLosses();
    this.totalDraws = this.getTotalDraws();
    this.totalPoints = (this.totalVictories * 3) + this.totalDraws;
    this.goalsFavor = this.getgoalsFavor();
    this.goalsOwn = this.getgoalsOwn();
    this.goalsBalance = this.goalsFavor - this.goalsOwn;
    this.efficiency = Number(((this.totalPoints / (this.totalGames * 3)) * 100).toFixed(2));
  }

  getTotalGames() {
    let value = 0;
    this.matches.forEach((e) => {
      if (this.team.id === e.awayTeamId && e.inProgress === false) {
        value += 1;
      }
    });
    return value;
  }

  getTotalVictories() {
    let value = 0;
    this.matches.forEach((e) => {
      if (e.inProgress === false
         && this.team.id === e.awayTeamId && e.homeTeamGoals < e.awayTeamGoals) {
        value += 1;
      }
    });
    return value;
  }

  getTotalLosses() {
    let value = 0;
    this.matches.forEach((e) => {
      if (e.homeTeamGoals > e.awayTeamGoals
         && e.inProgress === false && this.team.id === e.awayTeamId) {
        value += 1;
      }
    });
    return value;
  }

  getTotalDraws() {
    let value = 0;
    this.matches.forEach((e) => {
      if (e.homeTeamGoals === e.awayTeamGoals
         && e.inProgress === false && this.team.id === e.awayTeamId) {
        value += 1;
      }
    });
    return value;
  }

  getgoalsFavor() {
    let value = 0;
    this.matches.forEach((e) => {
      if (this.team.id === e.awayTeamId && e.inProgress === false) {
        value += e.awayTeamGoals;
      }
    });
    return value;
  }

  getgoalsOwn() {
    let value = 0;
    this.matches.forEach((e) => {
      if (this.team.id === e.awayTeamId && e.inProgress === false) {
        value += e.homeTeamGoals;
      }
    });
    return value;
  }
}
