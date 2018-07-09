import { Component, ViewEncapsulation, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { WeekService } from '../../services/weeks/week.service';
import { IWeek } from '../../structures/weeks/week';
import { Constants } from '../../constants';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'app-weekDropdown',
    templateUrl: './weekDropdown.component.html',
    styleUrls: ['../../app.component.css'],
    encapsulation: ViewEncapsulation.Native
})

export class WeekDropdownComponent implements OnInit {

    seasonId = Constants.CURRENT_SEASON_ID;

    weeks: IWeek[];

    selectedWeekId = Constants.CURRENT_WEEK_ID;

    @Output() weekChange: EventEmitter<number> = new EventEmitter<number>();

    constructor(private weekService: WeekService) {}

    ngOnInit(): void {
        this.loadWeeks();
    }

    weekChanged(): void {
        this.weekChange.emit(this.selectedWeekId);
    }

    private loadWeeks(): void {
        this.weekService.getWeeks(this.seasonId)
            .subscribe(w => {
                this.weeks = w;
            });
    }
}

