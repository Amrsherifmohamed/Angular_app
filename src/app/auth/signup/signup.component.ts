import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from '../user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
user:User;
  constructor(private router:Router,private authservice:AuthService) { }
maxDate;
  ngOnInit(): void {
    this.maxDate=new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear()-18);
  }
  onSubmit(form:NgForm){
    this.authservice.registeruser({
      email:form.value.email,
      password:form.value.password
    })
    // console.log(form);
   // this.router.navigate(/home);
  }

}
