import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { GameService } from '../../services/games/game.service';
import { IGame } from '../../structures/games/game';
import { SelectionService } from '../../services/selections/selection.service';
import { IUserSelection } from '../../structures/users/userSelection';
import { ITeam } from '../../structures/teams/team';
import { Constants } from '../../constants';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'app-gamePicker',
    templateUrl: './gamePicker.component.html',
    styleUrls: ['./gamePicker.component.css', '../../app.component.css'],
    encapsulation: ViewEncapsulation.Native
})

export class GamePickerComponent implements OnInit {

    seasonId = Constants.CURRENT_SEASON_ID;
    weekId = Constants.CURRENT_WEEK_ID;

    games: IGame[];
    userSelection: IUserSelection;

    constructor(private gameService: GameService, private selectionService: SelectionService) { }

    ngOnInit(): void {
        this.loadGames();
    }

    save(): void {
        const selection: IUserSelection = {
            id: 0,
            teamId: 0,
            weekId: this.weekId
        };

        for (let i = 0; i < this.games.length; i++) {
            const game = this.games[i];

            if (game.awayTeam.isSelected) {
                selection.teamId = game.awayTeam.id;
                break;
            } else if (game.homeTeam.isSelected) {
                selection.teamId = game.homeTeam.id;
                break;
            }
        }

        this.selectionService.upsert(selection).subscribe();
    }

    teamSelected(selectedTeam: ITeam): void {
        for (let i = 0; i < this.games.length; i++) {
            const game = this.games[i];

            game.awayTeam.isSelected =
                (game.awayTeam.id === selectedTeam.id);
            game.homeTeam.isSelected =
                (game.homeTeam.id === selectedTeam.id);
        }
    }

    private loadGames(): void {
        this.gameService.getGames(1)
            .subscribe(g => {
                this.games = g;

                this.loadUserSelection();
            });
    }

    private loadUserSelection(): void {
        this.selectionService.get(1)
            .subscribe(u => {
                this.userSelection = u;

                if (this.userSelection) {
                    this.setSelectedTeam();
                }
            });
    }

    private setSelectedTeam(): void {
        for (let i = 0; i < this.games.length; i++) {
            const game = this.games[i];

            if (game.awayTeam.id === this.userSelection.teamId) {
                game.awayTeam.isSelected = true;
                break;
            } else if (game.homeTeam.id === this.userSelection.teamId) {
                game.homeTeam.isSelected = true;
                break;
            }
        }
    }
}
