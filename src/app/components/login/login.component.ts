import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// services
import { AuthService } from '../../services/auth-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
      private authService: AuthService,
      private router: Router
  ) { }

  public ngOnInit() {
  }

    public login() {
        this.authService.login()
            .then(res => {
                this.router.navigate(['/goals']);
            });
    }

}
