import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'app-weekDropdown',
    templateUrl: './weekDropdown.component.html',
    styleUrls: ['../../app.component.css'],
    encapsulation: ViewEncapsulation.Native
})

export class WeekDropdownComponent {
    weeks: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
        14, 15, 16, 17];
}

