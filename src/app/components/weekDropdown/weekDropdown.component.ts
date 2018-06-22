import { Component, ViewEncapsulation, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { WeekService } from '../../services/weeks/week.service';
import { IWeek } from '../../structures/weeks/week';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'app-weekDropdown',
    templateUrl: './weekDropdown.component.html',
    styleUrls: ['../../app.component.css'],
    encapsulation: ViewEncapsulation.Native
})

export class WeekDropdownComponent implements OnInit {

    @Input() seasonId: number;
    @Output() weekChange: EventEmitter<number> = new EventEmitter<number>();

    weeks: IWeek[];

    selectedWeekId = 1;

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

