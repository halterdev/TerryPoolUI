import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Service } from '../service';

// tslint:disable-next-line:import-blacklist
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { IGame } from '../../structures/games/game';

@Injectable({ providedIn: 'root' })
export class GameService extends Service {

    private _addGameUrl = 'http://localhost/TerryPoolApi/api/game/add';
    private _getGamesUrl = 'http://localhost/TerryPoolApi/api/game/get';

    constructor(private http: HttpClient) { super(); }

    addGames(games: IGame[]): Observable<IGame[]> {
        const httpOptions = {
            headers: this.getHeaders()
        };

        return this.http.post<IGame[]>(this._addGameUrl, games, httpOptions).pipe(
            tap((g: IGame[]) => this.log(``)),
            catchError(this.handleError<IGame[]>('addGames'))
        );
    }

    getGames(weekId: number): Observable<IGame[]> {
        const httpOptions = {
            headers: this.getHeaders()
        };

        const url = this._getGamesUrl + '/' + weekId;

        return this.http.get<IGame[]>(url, httpOptions);
    }
}
