import { Component, ViewEncapsulation, QueryList, OnInit, ViewChildren } from '@angular/core';
import { IGame } from '../../../structures/games/game';
import { GameAdderComponent } from './gameAdder/gameAdder.component';
import { GameService } from '../../../services/games/game.service';
import { Constants } from '../../../constants';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'app-weeksAdmin',
    templateUrl: './weeksAdmin.component.html',
    styleUrls: ['./weeksAdmin.component.css', '../../../app.component.css'],
    encapsulation: ViewEncapsulation.Native
})

export class WeeksAdminComponent implements OnInit {

    @ViewChildren(GameAdderComponent) gameAdderComponents: QueryList<GameAdderComponent>;

    seasonId = Constants.CURRENT_SEASON_ID;
    weekId = Constants.CURRENT_WEEK_ID;

    games: IGame[];

    constructor(private gameService: GameService) { }

    ngOnInit(): void {
        this.loadGames();
    }

    loadGames(): void {
        this.games = [];

        this.gameService.getGames(this.weekId)
            .subscribe(g => {
                this.games = [];

                for (let i = 0; i < g.length; i++) {
                    this.games.push(g[i]);
                }
             });
    }

    addGame(): void {
        if (!this.games) {
            this.games = [];
        }

        const game: IGame = {
            id: 0,
            weekId: this.weekId,
            awayTeamId: 0,
            homeTeamId: 0,
            awayTeam: null,
            homeTeam: null,
            week: null
        };

        this.games.push(game);
    }

    weekChanged(weekId: number): void {
        this.weekId = weekId;
    }

    save(): void {
        const gamesToSave: IGame[] = [];
        this.gameAdderComponents.toArray().forEach(g => {
            gamesToSave.push(g.game);
        });

        this.gameService.addGames(this.games)
            .subscribe();
    }
}
