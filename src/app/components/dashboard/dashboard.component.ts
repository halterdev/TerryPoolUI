import { ViewEncapsulation, Component } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css', '../../app.component.css'],
    encapsulation: ViewEncapsulation.Native
})

export class DashboardComponent {

}
