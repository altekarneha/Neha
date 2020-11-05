import { Component, Inject, Injectable } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AssignmentService} from '../assignment.service';
import {Router} from '@angular/router'; 
import { LocalStorageService} from 'angular-web-storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
 
export class LoginComponent {
  loginForm:FormGroup
  showmsg:false;
  errmsg:false;
  successmsg:false;

  createFrom=function(){
    this.loginForm=this.fb.group({
      uname:[null,[Validators.required]],
      psw:[null,[Validators.required]]
    })
  }

  loginsubmit=function(logindata){
    console.log(logindata.uname);
    this.st.set("Username", logindata.uname); 
    this.sr.login(logindata).subscribe(e=>{
     if(e.successmsg){
        this.successmsg=true;
        this.rt.navigateByUrl("/dashboard")
       }else if(e.errmsg){
        this.errmsg=true;
        this.rt.navigateByUrl("/login")
       } 
       }); 
    //this.showmsg=true;
    //this.rt.navigateByUrl("/dashboard")
  }




  constructor(private fb: FormBuilder, private sr:AssignmentService, private rt:Router,   private st:LocalStorageService) { 
    this.createFrom();
  }

  

}
