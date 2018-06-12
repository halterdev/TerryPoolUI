import { Component, ViewEncapsulation, OnInit } from '@angular/core';

import { IUser } from '../../structures/user';
import { UserService } from '../../services/user.service';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'app-login',
    templateUrl: './loginRegister.component.html',
    styleUrls: ['./loginRegister.component.css', '../../app.component.css'],
    encapsulation: ViewEncapsulation.Native,
    providers: [UserService]
})

export class LoginRegisterComponent {

    public page = 'Login';

    public user: IUser = {
        id: 0,
        email: '',
        password: '',
        token: ''
    };

    constructor(private userService: UserService) { }

    registerClick(): void {
        this.page = 'Register';
    }

    submitClick(): void {
        if (this.isFormValid()) {
            if (this.page === 'Login') {
                this.login();
            } else {
                this.register();
            }
        }
    }

    login(): void {
        this.userService.loginUser(this.user)
            .subscribe(u => {
                localStorage.setItem('token', u.token);
            });
    }

    register(): void {
        this.userService.addUser(this.user)
            .subscribe(u => {
                localStorage.setItem('token', u.token);
            });
    }

    private isFormValid(): boolean {
        return this.user.email !== '' && this.user.password !== '';
    }
}
