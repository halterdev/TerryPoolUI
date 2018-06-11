import { Component, ViewEncapsulation, OnInit } from '@angular/core';

import { IUser } from '../../structures/user';
import { UserService } from '../../services/user.service';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'app-login',
    templateUrl: './login.component.html',
    encapsulation: ViewEncapsulation.Native,
    providers: [UserService]
})

export class LoginComponent implements OnInit {

    constructor(private userService: UserService) { }

    ngOnInit(): void {
        const user: IUser = {
            id: 0,
            email: 'test@test.com',
            token: ''
        };

        this.userService.addUser(user)
            .subscribe(u => {
                localStorage.setItem('token', u.token);
            });
    }
}
