import {Component} from '@angular/core';
import {Dictionary} from '../../providers/dictionary/dictionary';
import {Auth} from '../../providers/authentication/auth.service.ts';

@Component({
    selector: 'header',
    styleUrls: ['./header.component.scss'],
    templateUrl: './header.component.html'
})

export class HeaderComponent {
    dict: any = {};

    constructor(dictionary: Dictionary, private auth: Auth) {
        dictionary.get().subscribe(resp => this.dict = resp.json());
    }
}  