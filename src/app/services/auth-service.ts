import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {
    public currentUser: any;
    constructor(
        private afAuth: AngularFireAuth,
        private router: Router
    ) {

    }

    public init() {
        this.afAuth.authState.subscribe(user => {

            this.currentUser = user;
            if (user) {
                this.router.navigate(['/goals']);
            }
            console.log('currentUser', user);
        });
    }

    public login(): firebase.Promise<any> {
        return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }

    public logout(): firebase.Promise<any> {
        return this.afAuth.auth.signOut();
    }
}
