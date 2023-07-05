import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, Validators} from '@angular/forms'
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  public signUpForm!:FormGroup;
  constructor(private formbuilder:FormBuilder,
    private router:Router,
    ){}
ngOnInit(): void {
  this.signUpForm=this.formbuilder.group({
    fullname:['',Validators.required],
    email:['',Validators.required],
    password:['',Validators.required,]
  })
}

submit(){
 console.log(this.signUpForm.value);
 this.signUpForm.reset('');
}
}
