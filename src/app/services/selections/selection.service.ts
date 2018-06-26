import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Service } from '../service';

// tslint:disable-next-line:import-blacklist
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { IUserSelection } from '../../structures/users/userSelection';

@Injectable({ providedIn: 'root' })
export class SelectionService extends Service {

    private _addUserSelectionUrl = 'http://localhost/TerryPoolApi/api/selections/add';

    constructor(private http: HttpClient) { super(); }

    add(selection: IUserSelection): Observable<IUserSelection> {
        const httpOptions = {
            headers: this.getHeaders()
        };

        return this.http.post<IUserSelection>(this._addUserSelectionUrl, selection, httpOptions).pipe(
            tap((s: IUserSelection) => this.log(``)),
            catchError(this.handleError<IUserSelection>('addSelection'))
        );
    }
}
