import { registerLocaleData } from '@angular/common';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  userdetails:any ={
    1000:{acno:1000,actype:"savings",username:"userone",password:"userone",balance:50000},
    1001:{acno:1001,actype:"savings",username:"usertwo",password:"usertwo",balance:5000},
    1002:{acno:1002,actype:"current",username:"userthree",password:"userthree",balance:10000},
    1003:{acno:1003,actype:"current",username:"userfour",password:"userfour",balance:6000}
}


  constructor( ) { }


  registerIndata(acc:any,use:any,pass:any){
    var user=this.userdetails;

    if(acc in user){
      return false
     
    }
    else{
      user[acc]={
        acc,
        username:use,
        password:pass,
        balance:0

      }
      return true
     
    }
  }


  loginIndata(acno:any,uname:any,pswd:any){
    var users=this.userdetails;
    
    if(acno in users)
    {
        if(uname==users[acno]["username"] && pswd==users[acno]["password"]){
          return true
          
        }

        else{
          alert("invalid password or username")
          return false
            
        }
    }
    else{
      alert("invalid account number")
      return false;
       
    }
  }




}

