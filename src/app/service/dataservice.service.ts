import { registerLocaleData } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class DataserviceService {
  userdetails: any = {
    1000: { acno: 1000, actype: "savings", username: "userone", password: "userone", balance: 50000 },
    1001: { acno: 1001, actype: "savings", username: "usertwo", password: "usertwo", balance: 5000 },
    1002: { acno: 1002, actype: "current", username: "userthree", password: "userthree", balance: 10000 },
    1003: { acno: 1003, actype: "current", username: "userfour", password: "userfour", balance: 6000 }
  }
  currentUser = localStorage.getItem("name");
  option =
    {
      withCredentials: true
    }
  constructor(private http: HttpClient) {


  }
  saveDetails() {
    localStorage.setItem("accountdetails", JSON.stringify(this.userdetails))
    if (this.currentUser) {
      localStorage.setItem("currentuser", JSON.stringify(this.currentUser))
    }
  }


  getDetails() {
    this.currentUser = JSON.parse(localStorage.getItem("currentuser"))
    if (this.currentUser) {
      this.userdetails = JSON.parse(localStorage.getItem("accountdetails"))
    }

  }


  registerIndata(acc: any, use: any, pass: any) {

    const data = { acc, use, pass }
    return this.http.post("http://localhost:3000/register", data)

  }


  loginIndata(acc: any, use: any, pass: any) {

    const dataa = { acc, use, pass, }
    return this.http.post("http://localhost:3000/login", dataa, this.option)

  }

  deposit(acc: any, pass: any, amt: any) {
    const dataa = { acc, pass, amt }
    return this.http.post("http://localhost:3000/deposit", dataa, this.option)
  }



  withdraw(acc: any, pass: any, amt: any) {
    const dataa = { acc, pass, amt }
    return this.http.post("http://localhost:3000/withdraw", dataa, this.option)
  }

  deleteAccDetails(acc: any) {
    return this.http.delete("http://localhost:3000/deleteAccount/" + acc, this.option)


  }




}






