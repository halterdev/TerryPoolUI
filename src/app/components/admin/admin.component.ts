import { Component, ViewEncapsulation } from '@angular/core';

import { SeasonService } from '../../services/seasons/season.service';
import { ISeason } from '../../structures/seasons/season';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css', '../../app.component.css'],
    encapsulation: ViewEncapsulation.Native
})

export class AdminComponent {

    public season: ISeason = {
        id: 0,
        year: 2018
    };

    constructor(private seasonService: SeasonService) { }

    addSeason(): void {
        this.seasonService.addSeason(this.season)
            .subscribe();
    }
}
