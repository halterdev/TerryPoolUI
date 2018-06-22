import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { GameService } from '../../services/games/game.service';
import { IGame } from '../../structures/games/game';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'app-gamePicker',
    templateUrl: './gamePicker.component.html',
    styleUrls: ['./gamePicker.component.css', '../../app.component.css'],
    encapsulation: ViewEncapsulation.Native
})

export class GamePickerComponent implements OnInit {

    seasonId = 1;
    weekId: number;

    games: IGame[];

    constructor(private gameService: GameService) { }

    ngOnInit(): void {
        this.loadGames();
    }

    save(): void {

    }

    private loadGames(): void {
        this.gameService.getGames(1)
            .subscribe(g => {
                this.games = g;
            });
    }
}
