// Default Starting page. 
import { Component, OnInit } from '@angular/core';
import { Router  } from '@angular/router';
import { UserService } from '../service/user.service';
@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  wrongpass=false;
  model: any={}
  submitted = false;
  err:boolean = false ;
  temp:any=[];
  constructor( private router :Router ,private userservice :UserService) { }
  ngOnInit() {
  this.temp=JSON.parse(localStorage.getItem("users"))
    sessionStorage.clear();
  }
  public changecolor(){
    this.wrongpass=false;
    this.submitted=false;
    this.err=false;
  }
  // Sumbit function
  public onSubmit() {
      this.submitted = true;
      //console.log(this.model);
      // stop here if form is invalid
      this.userservice.validateuser(this.model).subscribe(data =>{
      if (data[0]){
                  this.wrongpass = false;
                  this.router.navigate(["/"]);
                  sessionStorage.setItem("logged","true");
                  sessionStorage.setItem("first_name",data[0]["fname"]);
                  sessionStorage.setItem("last_name",data[0]["lname"]);
                  sessionStorage.setItem("email",data[0]["email"]);
                  sessionStorage.setItem("address",data[0]["address"]);
                  sessionStorage.setItem("mobile",data[0]["mobile"]);
                  sessionStorage.setItem("gender",data[0]["gender"]);
                //  console.log(sessionStorage);
                 this.router.navigate(['/home']);
                }
                else{
                  if  ( !this.model.userpassword && !this.model.user_email ) 
        {
          this.wrongpass = false;
          this.err = false;
        }
      else{
          this.wrongpass=true;
          this.err=true;
          
        }

                }
      }); 
      
          }
  // Signup component
public signup(){
  this.router.navigate((['\signup']));
  }
  // Forget-password component
public forget(){
  //console.log("hello");
  this.router.navigate((['forgetpassword']));
}
}
