import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule, Route } from '@angular/router'
// angularfire2 modules
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

// app components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { GoalsComponent } from './components/goals/goals-component';
import { AddGoalDialog } from './components/dialogs/add-goal-dialog/add-goal-dialog';

import { environment } from '../environments/environment';

// services
import { AuthService } from './services/auth-service';
import { GoalsService } from './services/goals-service';

// routes
const routes: Route[] = [
    {
        path: '',
        component: LoginComponent 
    },
    {
        path: 'goals',
        component: GoalsComponent
    }
];

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        GoalsComponent,
        AddGoalDialog
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        BrowserAnimationsModule,
        MaterialModule,
        RouterModule.forRoot(routes),
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAuthModule,
        AngularFireDatabaseModule
    ],
    entryComponents: [AddGoalDialog],
    providers: [ AuthService, GoalsService ],
    bootstrap: [AppComponent]
})
export class AppModule { }
