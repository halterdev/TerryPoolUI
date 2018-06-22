import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Service } from '../service';

// tslint:disable-next-line:import-blacklist
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { IWeek } from '../../structures/weeks/week';

@Injectable({ providedIn: 'root' })
export class WeekService extends Service {

    private _getWeeksUrl = 'http://localhost/TerryPoolApi/api/week/get';

    constructor(private http: HttpClient) { super(); }

    getWeeks(seasonId: number): Observable<IWeek[]> {
        const httpOptions = {
            headers: this.getHeaders()
        };

        const url = this._getWeeksUrl + '/' + seasonId;

        return this.http.get<IWeek[]>(url, httpOptions);
    }
}
