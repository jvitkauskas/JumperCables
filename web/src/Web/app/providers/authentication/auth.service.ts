import { Injectable }      from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import Auth0Lock from "auth0-lock";
import {AppSettings} from '../settings/appSettings'

// Avoid name not found warnings
//declare var Auth0Lock: any;

@Injectable()
export class Auth {
    // Configure Auth0
    lock: any;
    userProfile: Object;

    constructor(private appSettings: AppSettings) {
        this.lock = new Auth0Lock(appSettings.auth0.clientId, appSettings.auth0.domain, { auth: { redirect: false }, autoclose: true });
        this.userProfile = JSON.parse(localStorage.getItem('profile'));

        // Add callback for lock `authenticated` event
        this.lock.on("authenticated", (authResult) => {
            localStorage.setItem('id_token', authResult.idToken);   

            // Fetch profile information
            this.lock.getProfile(authResult.idToken, (error, profile) => {
                if (error) {
                    // Handle error
                    alert(error);
                    return;
                }

                localStorage.setItem('profile', JSON.stringify(profile));
                this.userProfile = profile;
            });

        });
    }

    public login() {
        // Call the show method to display the widget.
        this.lock.show();
    };

    public authenticated() {
        // Check if there's an unexpired JWT
        // This searches for an item in localStorage with key == 'id_token'
        return tokenNotExpired();
    };

    public logout() {
        localStorage.removeItem('id_token');
        localStorage.removeItem('profile');
        this.userProfile = undefined;
    };
}