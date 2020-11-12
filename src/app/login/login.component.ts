import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userEmail:string;

  password:string;

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

  loginEmailPassword(){
    this.authService.emailPasswordSingin(this.userEmail,this.password);
  }

}
