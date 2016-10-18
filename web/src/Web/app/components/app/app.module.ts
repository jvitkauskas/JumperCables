import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import {RouterOutlet, RouterLink, RouterLinkActive} from '@angular/router'

import { HammerConfig } from '../../shared/hammer.config';
import { APP_BASE_HREF, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { routing } from '../../shared/routes';
import { AUTH_PROVIDERS }      from 'angular2-jwt';

import { AppComponent }   from './app.component';
import {MainComponent} from '../main/main.component';
import {AboutComponent} from '../about/about.component';
import {ContactsComponent} from '../contacts/contacts.component';
import {LangSelectorComponent} from '../header/lang.selector.component';
import {HeaderComponent} from '../header/header.component';
import {FooterComponent} from '../footer/footer.component';
import {Auth} from '../../providers/authentication/auth.service.ts';
import {ContactsProvider} from '../contacts/shared/contacts.provider';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        routing
    ],
    declarations: [
        AppComponent,
        MainComponent,
        ContactsComponent,
        LangSelectorComponent,
        HeaderComponent,
        FooterComponent,
        AboutComponent
    ],
    providers: [
        { provide: APP_BASE_HREF, useValue: '/' },
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        { provide: HAMMER_GESTURE_CONFIG, useClass: HammerConfig },
        AUTH_PROVIDERS,
        Auth,
        ContactsProvider
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}