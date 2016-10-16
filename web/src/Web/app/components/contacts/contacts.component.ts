import {Component} from '@angular/core';
import {ContactsProvider} from "./shared/contacts.provider"
import {Contact} from "./shared/contact"

@Component({
    selector: 'contacts',
    styleUrls: ['./contacts.component.scss'],
    templateUrl: './contacts.component.html',
    providers: [ContactsProvider]
})

export class ContactsComponent {
    private contacts : Array<Contact>;

    constructor(private provider: ContactsProvider) {
        this.provider.get().subscribe(r => this.contacts = r);
    }
}  