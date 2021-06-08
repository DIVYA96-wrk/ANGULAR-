import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataserviceService } from '../service/dataservice.service';

@Component({
  selector: 'app-registerpage',
  templateUrl: './registerpage.component.html',
  styleUrls: ['./registerpage.component.css']
})

export class RegisterpageComponent implements OnInit {


  registerForm = this.fb.group({
    use: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
    acc: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    pass: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]
  })

  constructor(private dataservice: DataserviceService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  register() {



    if (this.registerForm.valid) {
      var acc = this.registerForm.value.acc;
      var use = this.registerForm.value.use;
      var pass = this.registerForm.value.pass;
      this.dataservice.registerIndata(acc, use, pass)
        .subscribe((result: any) => {
          if (result) {
            alert(result.message);
            this.router.navigateByUrl("")
          }
        },
          (result) => {
            alert(result.error.message)
          }
        )
    }
    else {
      alert("INVALID FORM")
    }

  }



}
