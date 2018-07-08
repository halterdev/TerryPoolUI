import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Service } from '../service';

// tslint:disable-next-line:import-blacklist
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { IUserSelection } from '../../structures/users/userSelection';

@Injectable({ providedIn: 'root' })
export class SelectionService extends Service {

    private _upsertUserSelectionUrl = 'http://localhost/TerryPoolApi/api/selections/upsert';

    private _getUserSelectionUrl = 'http://localhost/TerryPoolApi/api/selections/get';

    constructor(private http: HttpClient) { super(); }

    upsert(selection: IUserSelection): Observable<IUserSelection> {
        const httpOptions = {
            headers: this.getHeaders()
        };

        return this.http.post<IUserSelection>(this._upsertUserSelectionUrl, selection, httpOptions).pipe(
            tap((s: IUserSelection) => this.log(``)),
            catchError(this.handleError<IUserSelection>('addSelection'))
        );
    }

    get(weekId: number): Observable<IUserSelection> {
        const httpOptions = {
            headers: this.getHeaders()
        };

        const url = this._getUserSelectionUrl + '/' + weekId;

        return this.http.get<IUserSelection>(url, httpOptions);
    }
}
