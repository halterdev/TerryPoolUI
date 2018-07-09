import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GameService } from '../../../services/games/game.service';
import { IGame } from '../../../structures/games/game';
import { Constants } from '../../../constants';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'app-results',
    templateUrl: './results.component.html',
    styleUrls: ['./results.component.css', '../../../app.component.css'],
    encapsulation: ViewEncapsulation.Native
})

export class ResultsComponent implements OnInit {

    seasonId = Constants.CURRENT_SEASON_ID;
    weekId = Constants.CURRENT_WEEK_ID;

    games: IGame[];

    constructor(private gameService: GameService) { }

    ngOnInit(): void {
        this.loadGames();
    }

    private loadGames(): void {
        this.gameService.getGames(this.weekId)
            .subscribe(g => {
                this.games = g;
            });
    }
}
