import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  dataa:any ;
  constructor(private http:HttpClient) { }
  public adduser(user){
      return  this.http.post('http://localhost:8091/signup',{ "fname":  user["first_name"], "lname":user["last_name"],"email" : user[ "email" ],"address":user["address"],
        "gender":user["gender"],"mobile":user["mobile_no"],"password":user["password"]});
  }
  public validateuser(user){
    return this.http.post('http://localhost:8091/login',{ "email":  user["user_email"],"password":user["userpassword"]});
  }
  public updateprofile(user){
    //console.log(user);
    return this.http.post( 'http://localhost:8091/updateprofile',{ "fname":  user["first_name"],
    "lname":user["last_name"],"email" : user[ "email" ],"address":user["address"],
    "gender":user["gender"],"mobile":user["mobile_no"]},{responseType: 'text'} );
  }
  public addstudent(user){
    //console.log(user);
    return this.http.post( 'http://localhost:8091/addstudent',{ "rollno":  user["RollNo"],
    "name":user["Name"],"database" : user[ "Database" ],"simulation":user["Simulation"],"angular":user["Angular"],
    "total":user["Total"],"percentage":user["Percentage"]},{responseType: 'text'} );
  }
  public deletestudent(user){
   console.log(user);
   return this.http.post( 'http://localhost:8091/deletestudent',{ "rollno":  user["RollNo"],
   "name":user["Name"],"database" : user[ "Database" ],"simulation":user["Simulation"],"angular":user["Angular"],
   "total":user["Total"],"percentage":user["Percentage"]},{responseType: 'text'} );
  }
  public getstudent(){
    return this.http.get( 'http://localhost:8091/getstudent');
  }
  public updatestudent(user){
  //  console.log(user);
    return this.http.post( 'http://localhost:8091/updatestudent',{ "rollno":  user["RollNo"],
    "name":user["Name"],"database" : user[ "Database" ],"simulation":user["Simulation"],"angular":user["Angular"],
    "total":user["Total"],"percentage":user["Percentage"]},{responseType: 'text'} );
    }
}
