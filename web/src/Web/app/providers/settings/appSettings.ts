import {Injectable} from '@angular/core';

//todo add configurations mechanism for multiple environments
@Injectable()
export class AppSettings {
    settings: Object = {
        "name": "Web company name",
        "email": "example@example.com",
        "fb": "https://www.facebook.com/example",
        "instagram": "https://www.instagram.com/example",
        "apiUrl": "http://jumpercablesapi.azurewebsites.net"  // TODO Temp value, note on CORS
    }

    auth0: any = {
        "clientId": "{clientId}",
        "domain": "{domain}"
    }
}