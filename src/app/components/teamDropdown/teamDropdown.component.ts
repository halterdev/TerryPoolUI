import { Component, ViewEncapsulation, OnInit } from '@angular/core';
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

    teams: ITeam[];

    constructor(private teamService: TeamService) { }

    ngOnInit(): void {
        this.getTeams();
    }

    private getTeams(): void {
        this.teamService.getTeams()
            // tslint:disable-next-line:no-debugger
            .subscribe(t => { this.teams = t; debugger; });
    }
}
