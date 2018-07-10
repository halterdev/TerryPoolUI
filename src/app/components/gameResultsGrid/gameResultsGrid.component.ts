import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { GameService } from '../../services/games/game.service';
import { Constants } from '../../constants';
import { IGame } from '../../structures/games/game';
import { GameResultService } from '../../services/games/gameResult.service';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'app-gameResultsGrid',
    templateUrl: './gameResultsGrid.component.html',
    styleUrls: ['./gameResultsGrid.component.css', '../../app.component.css'],
    encapsulation: ViewEncapsulation.Native
})

export class GameResultsGridComponent implements OnInit {

    adding = true;

    weekId = Constants.CURRENT_WEEK_ID;

    games: IGame[];

    constructor(private gameResultService: GameResultService, private gameService: GameService) { }

    ngOnInit(): void {
        this.loadGames();
    }

    save(): void {
        this.gameResultService.upsert(this.games)
            .subscribe(g => this.games = g);
    }

    private loadGames(): void {
        this.gameService.getGames(this.weekId)
            .subscribe(g => this.games = g);
    }
}
