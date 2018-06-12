import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Service } from '../service';

// tslint:disable-next-line:import-blacklist
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { ISeason } from '../../structures/seasons/season';

@Injectable({ providedIn: 'root' })
export class SeasonService extends Service {

    private _loginUserUrl = 'http://localhost/TerryPoolApi/api/season/add';

    constructor(private http: HttpClient) { super(); }

    addSeason(season: ISeason): Observable<ISeason> {
        const httpOptions = {
            headers: this.getHeaders()
        };

        return this.http.post<ISeason>(this._loginUserUrl, season, httpOptions).pipe(
            tap((s: ISeason) => this.log(`added season w/ id=${s.id}`)),
            catchError(this.handleError<ISeason>('addSeason'))
        );
    }
}
