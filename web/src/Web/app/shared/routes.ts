import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from '../components/about/about.component';
import {MainComponent} from '../components/main/main.component';
import {ContactsComponent} from '../components/contacts/contacts.component';


const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contacts', component: ContactsComponent }
];

export const routing = RouterModule.forRoot(routes);