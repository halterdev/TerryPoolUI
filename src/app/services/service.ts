import { HttpHeaders } from '@angular/common/http';

export class Service {

    constructor() { }

    getHeaders(): HttpHeaders {
        let headers = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');
        headers = headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));
        return headers;
    }

}
