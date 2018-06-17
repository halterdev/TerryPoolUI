import { Component, ViewEncapsulation, OnInit } from '@angular/core';

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

}
