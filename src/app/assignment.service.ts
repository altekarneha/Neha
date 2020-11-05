import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {

url:any="http://localhost:5000";

  constructor(private http:HttpClient) { }

  register=function(data):any{
   console.log(data);
   return this.http.post(this.url+"/register",data)
  }



  login=function(logdata):any{
    console.log(logdata);
    return this.http.post(this.url+"/login",logdata)
  }

  getuser=function():any{
   return this.http.get(this.url+"/getuser");
  }

  deleteRow=function(dr):any{
    console.log(dr)
    return this.http.post(this.url+"/deleteRow",dr)
  }
}
