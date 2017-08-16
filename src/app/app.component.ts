import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';

    constructor(private authService: AuthService) {}

    public ngOnInit() {
        this.authService.init();
    }
}
