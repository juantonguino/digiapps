import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userEmail:string;

  password:string;

  constructor(public authService:AuthService) { }

  ngOnInit(): void {
  }

  registerUser(){
    this.authService.emailRegister(this.userEmail,this.password)
  }
}
