import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../service/dataservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  dAcno=""
  dpass=""
  dAmn=""
  dAacno=""
  dppass=""
  dAmmn=""
  


  constructor(private data:DataserviceService) { }

  ngOnInit(): void {
  }

  deposit(){
    var acno= this.dAcno;
    var pass=this.dpass;
    var amt=this.dAmn;
    const result=this.data.deposit(acno,pass,amt)

    alert("deposited")
    if(result){
      alert("your account has been credied with amount"+amt+" and your available balance is "+result);
    }
  }
  withdraw(){
    var acno= this.dAacno;
    var pass=this.dppass;
    var amt=this.dAmmn;
    const result=this.data.withdraw(acno,pass,amt);

    alert("withdrawn")
    if(result){
      alert("your account has been debited with amount"+amt+" and your available balance is "+result);
    }
  }


}
