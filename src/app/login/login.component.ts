import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName: string;
  password: string;
  loginFailed: boolean;
  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit() {
  }

  submit() {
    this.loginFailed = false;
    this.loginService.loginUser(this.userName, this.password).subscribe(result => {
      if (result) {
        //TODO: Decide where to go.
        console.log("Success logging in.");
      } else {
        this.loginFailed = true;
      }
    },
      error => {
        this.loginFailed = true;
      });
  }

}
