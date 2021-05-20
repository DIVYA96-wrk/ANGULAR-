import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataserviceService } from '../service/dataservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  dashboardForm1 = this.fb.group({
    dAcno: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    dpass: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
    dAmn:['', [Validators.required, Validators.pattern('[0-9]*')]] })

    dashboardForm2 = this.fb.group({ 
    dAacno: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    dppass: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
    dAmmn:['', [Validators.required, Validators.pattern('[0-9]*')]]
  })
 
  


  constructor(private data:DataserviceService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  deposit(){
    if (this.dashboardForm1.valid) {
    var acno= this.dashboardForm1.value.dAcno;
    var pass=this.dashboardForm1.value.dpass;
    var amt=this.dashboardForm1.value.dAmn;
    const result=this.data.deposit(acno,pass,amt)

    alert("deposited")
    if(result){
      alert("your account has been credied with amount"+amt+" and your available balance is "+result);
    }}
    else{
      alert("invalid form")
    }
  }
  withdraw(){
    if (this.dashboardForm2.valid) {
    var acno= this.dashboardForm2.value.dAacno;
    var pass=this.dashboardForm2.value.dppass;
    var amt=this.dashboardForm2.value.dAmmn;
    const result=this.data.withdraw(acno,pass,amt);

    alert("withdrawn")
    if(result){
      alert("your account has been debited with amount"+amt+" and your available balance is "+result);
    }
  }

  else {
    alert("invalid form")
  }
  }
}
