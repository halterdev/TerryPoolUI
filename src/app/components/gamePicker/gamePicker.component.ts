import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { GameService } from '../../services/games/game.service';
import { IGame } from '../../structures/games/game';
import { SelectionService } from '../../services/selections/selection.service';
import { IUserSelection } from '../../structures/users/userSelection';

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

    constructor(private gameService: GameService, private selectionService: SelectionService) { }

    ngOnInit(): void {
        this.loadGames();
    }

    save(): void {
        const selection: IUserSelection = {
            id: 0,
            teamId: 25,
            weekId: 1
        };

        this.selectionService.add(selection).subscribe();
    }

    private loadGames(): void {
        this.gameService.getGames(1)
            .subscribe(g => {
                this.games = g;
            });
    }
}
