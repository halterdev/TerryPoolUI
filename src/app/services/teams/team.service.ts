import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Service } from '../service';

// tslint:disable-next-line:import-blacklist
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { ITeam } from '../../structures/teams/team';

@Injectable({ providedIn: 'root' })
export class TeamService extends Service {

    private _getTeamsUrl = 'http://localhost/TerryPoolApi/api/team/get';

    constructor(private http: HttpClient) { super(); }

    getTeams(): Observable<ITeam[]> {
        const httpOptions = {
            headers: this.getHeaders()
        };

        return this.http.get<ITeam[]>(this._getTeamsUrl, httpOptions);
    }
}
