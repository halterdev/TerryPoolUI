import { Component, ViewEncapsulation, QueryList, ViewChildren, OnInit } from '@angular/core';
import { IGame } from '../../../structures/games/game';
import { GameAdderComponent } from './gameAdder/gameAdder.component';
import { GameService } from '../../../services/games/game.service';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'app-weeksAdmin',
    templateUrl: './weeksAdmin.component.html',
    styleUrls: ['./weeksAdmin.component.css', '../../../app.component.css'],
    encapsulation: ViewEncapsulation.Native
})

export class WeeksAdminComponent implements OnInit {

    @ViewChildren(GameAdderComponent) gameAdderComponents: QueryList<GameAdderComponent>;

    week: number;
    seasonId: number;

    games: IGame[];

    constructor(private gameService: GameService) { }

    ngOnInit(): void {
        this.games = [];

        this.loadGames();
    }

    loadGames(): void {
        this.gameService.getGames(this.seasonId, this.week)
            .subscribe(g => {
                // this.games = g;
                this.games = [];

                for (let i = 0; i < g.length; i++) {
                    this.games.push(g[i]);
                }
                // const gameAdderArray = this.gameAdderComponents.toArray();

                // for (let i = 0; i < this.games.length; i++) {
                //     const game = this.games[i];
                //     gameAdderArray[i].game.awayTeamId = game.awayTeamId;
                //     gameAdderArray[i].game.homeTeamId = game.homeTeamId;
                // }
             });
    }

    addGame(): void {
        if (!this.games) {
            this.games = [];
        }

        const game: IGame = {
            id: 0,
            awayTeamId: 0,
            homeTeamId: 0,
            week: this.week,
            seasonId: this.seasonId
        };

        this.games.push(game);
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
