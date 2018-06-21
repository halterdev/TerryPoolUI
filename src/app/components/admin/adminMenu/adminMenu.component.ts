import { Component, ViewEncapsulation, OnInit, Output, EventEmitter } from '@angular/core';
import { SeasonService } from '../../../services/seasons/season.service';
import { ISeason } from '../../../structures/seasons/season';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'app-adminMenu',
    templateUrl: './adminMenu.component.html',
    styleUrls: ['./adminMenu.component.css', '../../../app.component.css'],
    encapsulation: ViewEncapsulation.Native
})

export class AdminMenuComponent implements OnInit {

    @Output() seasonChange: EventEmitter<number> = new EventEmitter<number>();

    seasons: ISeason[];
    selectedSeasonId: number;

    constructor(private seasonService: SeasonService) { }

    ngOnInit(): void {
        this.getSeasons();
    }

    getSeasons(): void {
        this.seasonService.getSeasons()
            .subscribe(s => {
                this.seasons = s;
                this.selectedSeasonId = this.seasons[0].id;
                this.seasonChange.emit(this.selectedSeasonId);
            });
    }
}
