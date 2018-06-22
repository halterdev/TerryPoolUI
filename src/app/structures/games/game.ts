import { ITeam } from '../teams/team';
import { IWeek } from '../weeks/week';

export interface IGame {
    id: number;
    weekId: number;
    awayTeamId: number;
    homeTeamId: number;
    awayTeam: ITeam;
    homeTeam: ITeam;
    week: IWeek;
}
