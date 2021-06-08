import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
    dAmn: ['', [Validators.required, Validators.pattern('[0-9]*')]]
  })

  dashboardForm2 = this.fb.group({
    dAacno: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    dppass: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
    dAmmn: ['', [Validators.required, Validators.pattern('[0-9]*')]]
  })

  today = new Date;
  acc;
  user = localStorage.getItem("name")

  constructor(private data: DataserviceService, private fb: FormBuilder, private router: Router) {
    this.user, this.acc
  }

  ngOnInit(): void {
  }




  deposit() {
    if (this.dashboardForm1.valid) {
      var acno = this.dashboardForm1.value.dAcno;
      var pass = this.dashboardForm1.value.dpass;
      var amt = this.dashboardForm1.value.dAmn;
      this.data.deposit(acno, pass, amt)
        .subscribe((result: any) => {
          if (result) {
            alert(result.message)

          }
        },
          (result) => {
            alert(result.error.message);

          }
        )
    }

    else {
      alert("invalid form")
    }
  }

  withdraw() {
    if (this.dashboardForm2.valid) {
      var acno = this.dashboardForm2.value.dAacno;
      var pass = this.dashboardForm2.value.dppass;
      var amt = this.dashboardForm2.value.dAmmn;
      this.data.withdraw(acno, pass, amt)
        .subscribe((result: any) => {
          if (result) {
            alert(result.message)
          }
        },
          (result) => {
            alert(result.error.message);

          }
        )
    }

    else {
      alert("invalid form")
    }
  }

  deleteAcc(event: any) {
    console.log(event);
    this.data.deleteAccDetails(event)


      .subscribe((result: any) => {
        if (result) {
          console.log(result);

          alert(result.message)
          this.router.navigateByUrl("")

        }
      },
        (result) => {
          alert(result.error.message);

        }
      )

  }


  deleteAct() {
    this.acc = localStorage.getItem("acno")
  }

  onCancel(event: any) {
    this.acc = null;
  }



}

