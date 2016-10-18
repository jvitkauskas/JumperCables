import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Contact } from './contact';
import {AppSettings} from '../../../providers/settings/appSettings.ts'

@Injectable()
export class ContactsProvider {

    constructor(private http: Http, private appSettings: AppSettings) {
    }

    public get(): Observable<Array<Contact>> {
        return this.http.get(this.appSettings.settings["apiUrl"] + "/api/contacts").map(response => {
            return response.json();
        }).catch((err, caught) => {
            let response = JSON.parse(err._body) || 'Server error';

            return Observable.throw(response);
        });
    }
}