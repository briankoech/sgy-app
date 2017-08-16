import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MdDialog } from '@angular/material';
import { FirebaseListObservable } from 'angularfire2/database';
import * as moment from 'moment';

import { AuthService } from '../../services/auth-service';
import { GoalsService } from '../../services/goals-service';

// components
import { AddGoalDialog } from '../dialogs/add-goal-dialog/add-goal-dialog';

@Component({
    selector: 'goals-component',
    templateUrl: './goals-component.html',
    styleUrls: ['./goal-component.scss']
})
export class GoalsComponent implements OnInit {
    public goals: FirebaseListObservable<any>;
    public activeGoalKey: string;
    public priorities = ['High', 'Medium', 'Low'];

    constructor(
        private authService: AuthService,
        private goalService: GoalsService,
        private router: Router,
        private dialog: MdDialog
    ) {

    }

    public ngOnInit() {
       this.goals = this.goalService.fetchAll();
    }
    
    public logout()  {
        this.authService.logout()
            .then(() => {
                // send a user back to login page
                this.router.navigate(['/']);
            });
    }

    public openDialog() {
        this.dialog.open(AddGoalDialog, {
            height: 'auto',
            width: '30%'
        });
    }
    
    public openEditDialog() {
        this.dialog.open(AddGoalDialog, {
            height: 'auto',
            width: '30%',
            data: {
                key: this.activeGoalKey
            }
        });
    }
    public onMenuOpen(key) {
        this.activeGoalKey = key;
    }

    public getDate(date) {
        if (!date) return;
        return moment(date).format('ll');
    }
}
