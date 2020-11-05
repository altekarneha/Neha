import { Component, OnInit } from '@angular/core';
import { LocalStorageService, SessionStorageService, LocalStorage, SessionStorage } from 'angular-web-storage';
import {AssignmentService} from '../assignment.service';  


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
   
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  {

  /*  Bootstrap Popup */
  popoverTitle = 'Confirm';
  popoverMessage = 'Are you sure you want to delete this item?';
  confirmClicked = false;
  cancelClicked = false;
  /*  Bootstrap Popup */

  
  getuser=""; 
  users="";
  searchText;
  errmsg:false;
  successmsg:false;


 constructor(private st:LocalStorageService, private sr: AssignmentService){ 
   this.getuser=this.st.get("Username"); 
     //console.log(this.getuser);      
     this.sr.getuser().subscribe(u=>{
       this.users=u;
     })  
  }

  deleteRow=function(e){
   this.sr.deleteRow(e).subscribe(e=>{
     if(e.deletesuccess){
        this.successmsg=true;        
       } 

       this.getuser=this.st.get("Username"); 
       //console.log(this.getuser);      
       this.sr.getuser().subscribe(u=>{
         this.users=u;
       })  
       });
  }
  
}
