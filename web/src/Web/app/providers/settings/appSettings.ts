import {Injectable} from '@angular/core';

@Injectable()
export class AppSettings {
    settings: Object = {
        "name": "Web company name",
        "email": "example@example.com",
        "fb": "https://www.facebook.com/example",
        "instagram": "https://www.instagram.com/example"
    }

    auth0: any = {
        "clientId": "{clientId}",
        "domain": "{domain}"
    }
}