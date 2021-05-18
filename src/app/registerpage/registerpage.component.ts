import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataserviceService } from '../service/dataservice.service';

@Component({
  selector: 'app-registerpage',
  templateUrl: './registerpage.component.html',
  styleUrls: ['./registerpage.component.css']
})

export class RegisterpageComponent implements OnInit {
  acc=""

  use=""

  pass=""

  constructor( private dataservice:DataserviceService,private router:Router) { }

  ngOnInit(): void {
  }
  register(){
    var acc=this.acc;
    var use=this.use;
    var pass=this.pass;
    const result=this.dataservice.registerIndata(acc,use,pass);
     if(result ==true)
     {
      alert("succesfully registered");
     
      
      this.router.navigateByUrl("")
     }
     else{
      alert("aleready existing account number, please log in ")
     }
    }
  }
