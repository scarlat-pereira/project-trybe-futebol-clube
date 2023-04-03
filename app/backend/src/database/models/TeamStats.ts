import Stats from '../../interfaces/stats';
import Matches from './MatchModel';
import Teams from './TeamModel';

export default class TeamStats implements Stats {
  name: string;
  totalGames: number;
  totalPoints: number;
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
    this.efficiency = (this.totalPoints / (this.totalGames * 3)) * 100;
  }

  getTotalGames() {
    let value = 0;
    this.matches.forEach((match) => {
      if (this.team.id === match.homeTeamId && match.inProgress === false) {
        value += 1;
      }
    });
    return value;
  }

  getTotalVictories() {
    let value = 0;
    this.matches.forEach((match) => {
      if (match.inProgress === false
        && this.team.id === match.homeTeamId
        && match.awayTeamGoals) {
        value += 1;
      }
    });
    return value;
  }

  getTotalLosses() {
    let value = 0;
    this.matches.forEach((match) => {
      if (match.inProgress === false && this.team.id === match.homeTeamId) {
        value += 1;
      }
    });
    return value;
  }

  getTotalDraws() {
    let value = 0;
    this.matches.forEach((match) => {
      if (match.homeTeamGoals === match.awayTeamGoals
         && match.inProgress === false && this.team.id === match.homeTeamId) {
        value += 1;
      }
    });
    return value;
  }

  getgoalsFavor() {
    let value = 0;
    this.matches.forEach((match) => {
      if (this.team.id === match.homeTeamId && match.inProgress === false) {
        value += match.homeTeamGoals;
      }
    });
    return value;
  }

  getgoalsOwn() {
    let value = 0;
    this.matches.forEach((match) => {
      if (this.team.id === match.homeTeamId && match.inProgress === false) {
        value += match.awayTeamGoals;
      }
    });
    return value;
  }
}
