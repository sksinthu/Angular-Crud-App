import { HttpClient } from '@angular/common/http';
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
  constructor(private formbuilder:FormBuilder,private http:HttpClient,
    private router:Router){}
ngOnInit(): void {
  this.signUpForm=this.formbuilder.group({
    fullname:['',Validators.required],
    mobile:['',Validators.required],
    email:['',Validators.required],
    password:['',Validators.required,]
  })
}

submit(){
  let check=this.http.get<any>('http://localhost:3000/register')
  .subscribe(res=>{
    res.find((e:any)=>{
     return e.email===this.signUpForm.value.email || e.email===null
    })
  })
  if(check){    
this.http.post<any>('http://localhost:3000/register',this.signUpForm.value)
.subscribe(res=>{
  alert('Register Sucessfull');
  this.signUpForm.reset('');
  this.router.navigate(['/login'])
},
error=>{
  alert('Something Went Wrong')
})
}else{
  alert('Altready use')
}
}
}
