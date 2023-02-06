import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder}from '@angular/forms'
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { EmployeeModel } from './employee.dashboard.module';
@Component({
  selector: 'app-employedashboard',
  templateUrl: './employedashboard.component.html',
  styleUrls: ['./employedashboard.component.css']
})
export class EmployedashboardComponent implements OnInit {
formvalue!:FormGroup;
employeeModelObj:EmployeeModel=new EmployeeModel();
employeeData:any;
showadd!:boolean;
showupdate!:boolean;
constructor(private formbuilber:FormBuilder,private api:ApiService,private router:Router,
  ){}
  
ngOnInit(): void {
  this.formvalue=this.formbuilber.group({
    firstname:[''],
    lastname:[''],
    email:[''],
    mobile:[''],
     salary:[''],

  })
  this.getAllEmployee();
}

postEmployeeDetail(){
  this.employeeModelObj.firstname=this.formvalue.value.firstname;
  this.employeeModelObj.lastname=this.formvalue.value.lastname;
  this.employeeModelObj.email=this.formvalue.value.email;
  this.employeeModelObj.mobile=this.formvalue.value.mobile;
  this.employeeModelObj.salary=this.formvalue.value.salary;

this.api.postEmployee(this.employeeModelObj)
.subscribe((res)=>{
console.log(res)
alert('Employee add success');
let ref=document.getElementById('cancel');
ref?.click();
this.formvalue.reset();
this.getAllEmployee();
  },
  error=>{
 alert('something went wrong')
  })
}

getAllEmployee(){
  this.api.getEmployee()
  .subscribe((res)=>{
    this.employeeData=res;
  })
}
deleatedata(data:any){
   this.api.deleateEmployee(data.id)
   .subscribe((res)=>{
    alert('Deleate Suceessful');
   this.getAllEmployee();
   })
}
employeeClick(){
  this,this.formvalue.reset('');
  this.showadd=true;
  this.showupdate=false;
}
onEdit(data:any){
    this.showadd=false;
    this.showupdate=true;
    this.employeeModelObj.id=data.id
    this.formvalue.controls['firstname'].setValue(data.firstname);
    this.formvalue.controls['lastname'].setValue(data.lastname);
    this.formvalue.controls['email'].setValue(data.email);
    this.formvalue.controls['mobile'].setValue(data.mobile);
    this.formvalue.controls['salary'].setValue(data.salary);
}
updateEmployeeDetail(){
  this.employeeModelObj.firstname=this.formvalue.value.firstname;
  this.employeeModelObj.lastname=this.formvalue.value.lastname;
  this.employeeModelObj.email=this.formvalue.value.email;
  this.employeeModelObj.mobile=this.formvalue.value.mobile;
  this.employeeModelObj.salary=this.formvalue.value.salary;
  this.api.updateEmployee(this.employeeModelObj,this.employeeModelObj.id)
.subscribe(res=>{
  alert('Update Sucessfully');
  let ref=document.getElementById('cancel')
  ref?.click();
  this.formvalue.reset();
this.getAllEmployee();
})
}

}
