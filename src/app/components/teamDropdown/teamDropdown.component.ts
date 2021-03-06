import { Component, ViewEncapsulation, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ITeam } from '../../structures/teams/team';
import { TeamService } from '../../services/teams/team.service';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'app-teamDropdown',
    templateUrl: './teamDropdown.component.html',
    styleUrls: ['../../app.component.css'],
    encapsulation: ViewEncapsulation.Native
})

export class TeamDropdownComponent implements OnInit {

    @Input() selectedTeamId = 0;
    @Output() teamChanged: EventEmitter<number> = new EventEmitter<number>();

    teams: ITeam[];

    constructor(private teamService: TeamService) { }

    ngOnInit(): void {
        this.getTeams();
    }

    teamChange(): void {
        this.teamChanged.emit(this.selectedTeamId);
    }

    private getTeams(): void {
        this.teamService.getTeams()
            .subscribe(t => { this.teams = t; });
    }
}
