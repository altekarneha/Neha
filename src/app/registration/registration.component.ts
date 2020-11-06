import { Component } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from '@angular/forms';
import {AssignmentService} from '../assignment.service';
import {Router} from '@angular/router';

import { ConfirmedValidator } from '../confirmed.validator';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent  {

registrationForm: FormGroup
msg:any;
showmsg=false;

createForm=function(){
  this.registrationForm=this.fb.group({
    fname: [null,[Validators.compose([
      Validators.required,Validators.minLength(4)
    ])]],
    lname:[null,[Validators.compose([
      Validators.required,Validators.minLength(4)
    ])]],
    email:[null,[
      Validators.email,
      Validators.required
    ]],
    username:[null,[Validators.compose([
      Validators.required,Validators.minLength(6)
    ])]],
    psw:[null,[Validators.compose([
      Validators.required,Validators.minLength(6)
    ])]],
    pswrepeat:[null,[Validators.compose([
      Validators.required,Validators.minLength(6)
    ])]]
  }
  , { 
    validator: ConfirmedValidator('psw', 'pswrepeat')
  })
}

  registersubmit=function(rt){
    console.log(rt);
    this.sr.register(rt).subscribe(a=>console.log(a.msg)) 
    this.showmsg=true;
        
    this.r.navigateByUrl("/login");
  }
  constructor(private fb:FormBuilder, private sr:AssignmentService, private r:Router) { 
    this.createForm();
  }
   
  

}
