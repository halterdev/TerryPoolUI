import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Service } from './service';

// tslint:disable-next-line:import-blacklist
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { IUser } from '../structures/user';

@Injectable({ providedIn: 'root' })
export class UserService extends Service {

    private _registerUserUrl = 'http://localhost/TerryPoolApi/api/account/register';

    constructor(private http: HttpClient) { super(); }

    addUser(user: IUser): Observable<IUser> {

        const httpOptions = {
            headers: this.getHeaders()
        };

        return this.http.post<IUser>(this._registerUserUrl, user, httpOptions).pipe(
            tap((hero: IUser) => this.log(`added hero w/ id=${hero.id}`)),
            catchError(this.handleError<IUser>('addHero'))
        );
    }

    /**
  * Handle Http operation that failed.
  * Let the app continue.
  * @param operation - name of the operation that failed
  * @param result - optional value to return as the observable result
  */
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

    /** Log a HeroService message with the MessageService */
    private log(message: string) {
        // this.messageService.add('HeroService: ' + message);
    }
}
