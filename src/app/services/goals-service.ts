import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

import { AuthService } from './auth-service';

@Injectable()
export class GoalsService {
    constructor(
        private afDb: AngularFireDatabase,
        private authService: AuthService
    ) {

    }

    public fetchAll() {
        return this.afDb.list('goals');
    }

    public create(data) {
        return this.afDb.list(`goals`).push({
            ...data, 
            email: this.authService.currentUser.email, 
            date: Date.now()
        });
    }

    public fetchGoal(goalId) {
        return this.afDb.object(`goals/${goalId}`);
    }

    public update(goalId, data) {
        return this.afDb.object(`goals/${goalId}`).update({...data});
    }
}
