import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ContactsProvider {
    private url: string = "http://localhost:5001/api/ping"; // TODO Temp value, note on CORS

    constructor(private http: Http) {
    }

    public get(): Observable<string> {
        return this.http.get(this.url).map(response => {
            return response.toString();
        }).catch((err, caught) => {
            let response = JSON.parse(err._body) || 'Server error';

            return Observable.throw(response);
        });
    }
}