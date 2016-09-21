import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {CookieProvider} from '../cookies/cookieProvider'
import {Observable} from "rxjs/Observable";

@Injectable()
export class Dictionary {
    url: string = "/app/providers/dictionary/sources/";
    availableLanguages: { [id: string]: string; } = {
        "LT": require("./sources/lt.json"),
        "EN": require("./sources/en.json")
    };
    defaultLang: string = "LT";
    cookieName: string = "lang";

    constructor(private http: Http, private coockieProvider: CookieProvider) {
    }

    public get(): Observable<Response> {
        let lang = this.getActiveLanguage();

        return this.http.get(this.availableLanguages[lang]);
    }

    getActiveLanguage(): string {
        let lang = this.coockieProvider.getCookie(this.cookieName);

        if (!this.availableLanguages[lang]) {
            lang = this.defaultLang;
        }

        return lang;
    }

    getAvailableLanguages(): Array<string> {
        let lanuages = new Array<string>();

        for (var name in this.availableLanguages) {
            lanuages.push(name);
        }

        return lanuages;
    }

    setLanguage(lang: string) {
        if (!this.availableLanguages[lang]) {
            return;
        }

        this.coockieProvider.setCookie(this.cookieName, lang, 30);
    }
}