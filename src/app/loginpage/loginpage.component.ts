import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css' ]
})
export class LoginpageComponent implements OnInit {

  aim="Your perfect banking partner"

  acc="enter account number"

  use="enter username"

  pass=""

  userdetails:any ={
    1000:{acno:1000,actype:"savings",username:"userone",password:"userone",balance:50000},
    1001:{acno:1001,actype:"savings",username:"usertwo",password:"usertwo",balance:5000},
    1002:{acno:1002,actype:"current",username:"userthree",password:"userthree",balance:10000},
    1003:{acno:1003,actype:"current",username:"userfour",password:"userfour",balance:6000}
}

  constructor() { }

  ngOnInit(): void {
  }
  login(a:any,u:any,p:any){
    

    var acno= a.value;
    var pswd= p.value;
    var uname=u.value;
    console.log(uname);
    
    let users=this.userdetails;
    if(acno in users)
    {
        if(uname==users[acno]["username"] && pswd==users[acno]["password"]){
           alert("login succes")
        }

        else{
            alert("invalid password or username")
        }
    }
    else{
        alert("invalid account number")
    }
  }

  /*accChange(event:any){
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
    
  } */

}
