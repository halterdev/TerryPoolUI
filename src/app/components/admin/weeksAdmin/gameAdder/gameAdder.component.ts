import { Component, ViewEncapsulation, Input, ViewChildren, QueryList, EventEmitter, Output } from '@angular/core';
import { IGame } from '../../../../structures/games/game';
import { TeamDropdownComponent } from '../../../teamDropdown/teamDropdown.component';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'app-gameAdder',
    templateUrl: './gameAdder.component.html',
    styleUrls: ['./gameAdder.component.css', '../../../../app.component.css'],
    encapsulation: ViewEncapsulation.Native
})

export class GameAdderComponent {

    @Input() game: IGame;
    @Output() gameChanged: EventEmitter<IGame> = new EventEmitter<IGame>();

    @ViewChildren(TeamDropdownComponent) teamDropdownComponents: QueryList<TeamDropdownComponent>;

    awayTeamChanged(teamId: string): void {
        this.game.awayTeamId = +teamId;
    }

    homeTeamChanged(teamId: string): void {
        this.game.homeTeamId = +teamId;
    }
}
