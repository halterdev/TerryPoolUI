import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Service } from './service';

// tslint:disable-next-line:import-blacklist
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { IUser } from '../structures/user';

@Injectable({ providedIn: 'root' })
export class UserService extends Service {

    private _loginUserUrl = 'http://localhost/TerryPoolApi/api/account/login';
    private _registerUserUrl = 'http://localhost/TerryPoolApi/api/account/register';

    constructor(private http: HttpClient) { super(); }

    addUser(user: IUser): Observable<IUser> {
        const httpOptions = {
            headers: this.getHeaders()
        };

        return this.http.post<IUser>(this._registerUserUrl, user, httpOptions).pipe(
            tap((u: IUser) => this.log(`added user w/ id=${u.id}`)),
            catchError(this.handleError<IUser>('addUser'))
        );
    }

    loginUser(user: IUser): Observable<IUser> {
        const httpOptions = {
            headers: this.getHeaders()
        };

        return this.http.post<IUser>(this._loginUserUrl, user, httpOptions).pipe(
            tap((u: IUser) => this.log(`logged in user w/ id=${u.id}`)),
            catchError(this.handleError<IUser>('loginUser'))
        );
    }
}
