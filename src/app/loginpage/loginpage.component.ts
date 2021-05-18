import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from '../service/dataservice.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  aim = "Your perfect banking partner"

  acc = "enter account number"

  use = "enter username"

  pass = ""


  constructor(private router: Router, private dataservice: DataserviceService) { }

  ngOnInit(): void {
  }
  login() {


    var acno = this.acc;
    var pswd = this.pass;
    var uname = this.use;
    console.log(acno, pswd);


    const result = this.dataservice.loginIndata(acno, uname, pswd)

    if (result) {
      alert("login succes");
      this.router.navigateByUrl('dashboard');
    }


  }

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
