import {Component} from '@angular/core';
import {AppSettings} from '../../providers/settings/appSettings.ts'

@Component({
    selector: 'app-footer',   
    styleUrls: ['./footer.component.scss'],
    templateUrl: './footer.component.html'
})

export class FooterComponent {
    year: number = new Date().getFullYear();

    constructor(private appSettings: AppSettings) { }
}  