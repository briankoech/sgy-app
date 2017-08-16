import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MdDialogRef } from '@angular/material';
import { GoalsService } from '../../../services/goals-service';

@Component({
    selector: 'add-goal-dialog',
    templateUrl: './add-goal-dialog.html',
    styleUrls: ['./add-goal-dialog.scss']
})
export class AddGoalDialog implements OnInit {
    public goalForm; FormGroup;

    constructor(
        private goalService: GoalsService,
        private dialogRef: MdDialogRef<AddGoalDialog>
    ) {
        
    }

    public ngOnInit() {
        this.goalForm = new FormGroup({
            title: new FormControl('', [Validators.required]),
            description: new FormControl('', [Validators.required]),
        });
    }

    public addGoal(value) {
        if (this.goalForm.invalid) return;
        this.goalService.create(value)
            .then(res => {
                this.dialogRef.close();
            })
            .catch(err => {
                console.log(err);
            });
    }
}
