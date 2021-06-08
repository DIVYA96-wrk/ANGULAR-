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

  

  constructor(private router: Router, private dataservice: DataserviceService, private fb: FormBuilder) { 
 
  }

  ngOnInit(): void {
  }
  login() {

    if (this.loginForm.valid) {
      var acc = this.loginForm.value.acc;
      var use = this.loginForm.value.use;
      var pass = this.loginForm.value.pass;
      console.log(acc, pass);


      this.dataservice.loginIndata(acc, use, pass)
        .subscribe((result: any) =>{
        if (result) {
          localStorage.setItem("name",result.namee);
          localStorage.setItem("acno",result.acno);
          alert(result.message);
        this.router.navigateByUrl('dashboard');
        }
      }
        ,
      (result) => {
        alert(result.error.message)
      }
       )
    }


    else {
      alert("invalid form")
    } }
  

  register() {
    this.router.navigateByUrl("register page")
  } }

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


