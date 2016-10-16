import {Component} from '@angular/core';
import {ContactsProvider} from "./contacts.provider"

@Component({
    selector: 'contacts',
    styleUrls: ['./contacts.component.scss'],
    templateUrl: './contacts.component.html',
    providers: [ContactsProvider]
})

export class ContactsComponent {
    private contacts : any;

    constructor(private provider: ContactsProvider) {
        this.provider.get().subscribe(r => this.contacts = r);
    }
}  