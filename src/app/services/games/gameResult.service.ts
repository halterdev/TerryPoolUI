import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Service } from '../service';

// tslint:disable-next-line:import-blacklist
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { IGame } from '../../structures/games/game';

@Injectable({ providedIn: 'root' })
export class GameResultService extends Service {

    private _upsertUrl = 'http://localhost/TerryPoolApi/api/gameresults/upsert';

    constructor(private http: HttpClient) { super(); }

    upsert(games: IGame[]): Observable<IGame[]> {
        const httpOptions = {
            headers: this.getHeaders()
        };

        return this.http.post<IGame[]>(this._upsertUrl, games, httpOptions).pipe(
            tap((g: IGame[]) => this.log(``)),
            catchError(this.handleError<IGame[]>('upsert game results'))
        );
    }
}
