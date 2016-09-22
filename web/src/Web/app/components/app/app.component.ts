import {Component} from '@angular/core';
import {Dictionary} from '../../providers/dictionary/dictionary';
import {CookieProvider} from '../../providers/cookies/cookieProvider';
import {AppSettings} from '../../providers/settings/appSettings';
import {Auth} from '../../providers/authentication/auth.service';



@Component({
    selector: 'app', 
    providers: [Dictionary, CookieProvider, AppSettings, Auth],
    styleUrls: ['./app.component.scss'],
    templateUrl: './app.component.html'
})

export class AppComponent {
}  