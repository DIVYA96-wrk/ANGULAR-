import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataserviceService } from '../service/dataservice.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  aim = "Your perfect banking partner"

 
  loginForm = this.fb.group({
    use: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
    acc: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    pass: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]
  })



  constructor(private router: Router, private dataservice: DataserviceService,private  fb: FormBuilder) { }

  ngOnInit(): void {
  }
  login() {

    if (this.loginForm.valid) {
    var acno = this.loginForm.value.acc;
    var pswd = this.loginForm.value.pass;
    var uname = this.loginForm.value.use;
    console.log(acno, pswd);


    const result = this.dataservice.loginIndata(acno, uname, pswd)

    if (result) {
      alert("login succes");
      this.router.navigateByUrl('dashboard');
    }


  } 
else{
  alert("invalid form")
}}

  register() {
    this.router.navigateByUrl("register page")
  }

  /* accChange(event:any){
     this.acc=event.target.value;
     console.log(this.acc);
     
   }
 
   passChange(event:any){
     this.pass=event.target.value;
     console.log(this.pass);
     
   }
 
   useChange(event:any){
     this.use=event.target.value;
     console.log(this.use);
     
   }  */

}
