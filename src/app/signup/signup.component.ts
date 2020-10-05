import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router'
import { UserService } from '../service/user.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
    model :any = {};  //dictionary to take input
    flag : boolean = true;  // flag for confirm pasword validation  
    array:any=[];
    flag1: boolean = false ;

  constructor( private router:Router,private userservice:UserService ) { }
    ngOnInit() {
    //  console.log(localStorage);
     this.model.gender="male";
    }
  //Cance to fill form and directly navigate to login page 
    cancel(){
      this.router.navigate(['login']);
    }
    public pass(val:any):void{
      this.flag=this.model.password === this.model.confirm_password ? false : true ;
    }
    public change(){
      this.flag1=false ;
    }
  // Store data to local storage and navigate to login page
    onSubmit(){
        this.userservice.adduser(this.model).subscribe( data=>{
          if (data === "exists"){
          this.flag1=true ;
        }
        else{
          this.router.navigate(['login']);
        }
        });
      }
     
    }