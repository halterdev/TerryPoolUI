import { ViewEncapsulation, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css']
})

export class NavComponent {

    constructor(private router: Router) { }

    logout(): void {
        localStorage.clear();

        this.router.navigate(['/login']);
    }
}
