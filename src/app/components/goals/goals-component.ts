import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MdDialog } from '@angular/material';
import { AuthService } from '../../services/auth-service';

// components
import { AddGoalDialog } from '../dialogs/add-goal-dialog/add-goal-dialog';

@Component({
    selector: 'goals-component',
    templateUrl: './goals-component.html',
    styleUrls: ['./goal-component.css']
})
export class GoalsComponent implements OnInit {
    constructor(
        private authService: AuthService,
        private router: Router,
        private dialog: MdDialog
    ) {

    }

    public ngOnInit() {

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
}
