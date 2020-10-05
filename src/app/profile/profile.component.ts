import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute} from '@angular/router';
import { UserService } from '../service/user.service';
import { setegid } from 'process';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  model :any = {};  //dictionary to take input
  flag : boolean = true;  // flag for confirm pasword validation  
  gender:string="male";
  fname:string;
  lname:string;
  address:string;
  email:string;
  mobile:string;
  ugender:string;
  array:any=[];
  page:any=String;
  view:boolean=false;
  edit:boolean=false;
  sample:string;
  constructor(private router:Router,private userservice:UserService,private activatedroute:ActivatedRoute) { }

  ngOnInit() {
    this.fname=sessionStorage.getItem("first_name");
    this.lname=sessionStorage.getItem("last_name");
    this.address=sessionStorage.getItem("address");
    this.email=sessionStorage.getItem("email");
    this.mobile=sessionStorage.getItem('mobile');
    this.ugender=sessionStorage.getItem("gender");
  }
//Cance to fill form and directly navigate to login page 
cancel(){
 // this.router.navigate(['login']);
}
public pass(val:any):void{
  this.flag=this.model.password === this.model.confirm_password ? false : true ;
}
public changegender(val){
  this.gender=val;
}
// Store data to local storage and navigate to login page
onSubmit(){
//  this.model.gender=this.gender;
 // this.userservice.adduser(this.model) ;
  }
}
