import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MdDialogRef, MD_DIALOG_DATA, MdSnackBar } from '@angular/material';
import { GoalsService } from '../../../services/goals-service';

@Component({
    selector: 'add-goal-dialog',
    templateUrl: './add-goal-dialog.html',
    styleUrls: ['./add-goal-dialog.scss']
})
export class AddGoalDialog implements OnInit {
    public goalForm; FormGroup;
    public priorities = ['High', 'Medium', 'Low'];
    constructor(
        private goalService: GoalsService,
        private dialogRef: MdDialogRef<AddGoalDialog>,
        @Inject(MD_DIALOG_DATA) private data,
        private snackBar: MdSnackBar
    ) {

    }

    public ngOnInit() {
        this.goalForm = new FormGroup({
            title: new FormControl('', [Validators.required]),
            description: new FormControl('', [Validators.required]),
            priority: new FormControl('', [Validators.required])
        });

        if (this.data && this.data.key) {
            this.goalService.fetchGoal(this.data.key)
                .subscribe(val => {
                    this.goalForm.controls['title'].setValue(val.title);
                    this.goalForm.controls['description'].setValue(val.description);
                    this.goalForm.controls['priority'].setValue(val.priority);
                });
        }

    }

    public addGoal(value) {
        if (this.goalForm.invalid) return;

        if (this.data && this.data.key) {
            this.updateGoal(value);
        } else {
            this.saveNewGoal(value);
        }
    }

    public saveNewGoal(value) {
        this.goalService.create(value)
            .then(res => {
                this.dialogRef.close();
                this.snackBar.open('New Goal Saved', 'SUCCESS', {
                    duration: 2000,
                });

            })
            .catch(err => {
                console.log(err);
            });
    }

    public updateGoal(value) {
        this.goalService.update(this.data.key, value)
            .then(res => {
                this.dialogRef.close();
                this.snackBar.open('Goal updated', 'SUCCESS', {
                    duration: 2000,
                });

            })
            .catch(err => {
                console.log(err);
            });

    }

}
