import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Contact } from './contact';

@Injectable()
export class ContactsProvider {
    private url: string = "http://localhost:5001/api/contacts"; // TODO Temp value, note on CORS

    constructor(private http: Http) {
    }

    public get(): Observable<Array<Contact>> {
        return this.http.get(this.url).map(response => {
            return response.json();
        }).catch((err, caught) => {
            let response = JSON.parse(err._body) || 'Server error';

            return Observable.throw(response);
        });
    }
}