import { Component, ViewEncapsulation, ViewChild, OnInit } from '@angular/core';
import { WeeksAdminComponent } from './weeksAdmin/weeksAdmin.component';
import { AdminMenuComponent } from './adminMenu/adminMenu.component';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css', '../../app.component.css'],
    encapsulation: ViewEncapsulation.Native
})

export class AdminComponent implements OnInit {

    @ViewChild(WeeksAdminComponent) weeksAdminComponent: WeeksAdminComponent;

    ngOnInit(): void {
        this.weeksAdminComponent.weekId = 1;
    }
}
