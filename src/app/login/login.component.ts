import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from '@angular/forms';
import { AuthserviceService } from '../shared/authservice.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit{
  public loginForm!:FormGroup;
constructor(private formbuilder:FormBuilder,private router:Router,   private authservice:AuthserviceService){}

ngOnInit(): void {
  this.loginForm=this.formbuilder.group({
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.minLength(6)]]
  })
}
login() {
 console.log(this.loginForm.value);
 this.authservice.loggedInUser=this.loginForm.value;
 this.loginForm.reset('');
this.router.navigate(['/dashboard'])

}
}
