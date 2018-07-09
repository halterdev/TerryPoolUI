import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { WeeksAdminComponent } from './weeksAdmin/weeksAdmin.component';
import { AdminMenuComponent } from './adminMenu/adminMenu.component';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css', '../../app.component.css'],
    encapsulation: ViewEncapsulation.Native
})

export class AdminComponent {

    @ViewChild(WeeksAdminComponent) weeksAdminComponent: WeeksAdminComponent;

    module = 'weeks';

    menuEvent(module: string): void {
        this.module = module;
    }
}
