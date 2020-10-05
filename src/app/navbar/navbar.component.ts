import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ProfileComponent } from '../profile/profile.component';
import {ResizedEvent } from 'angular-resize-event' ;
import { UserService } from '../service/user.service' ;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  model:any={} ;
  flag:boolean=false;
  show_stock:boolean=false;
  view:boolean=true;
  edit:boolean=false;
  fname:string;
  width: number;
  height: number;
  constructor(private router:Router,private dialog:MatDialog,private userservice:UserService) { }

  ngOnInit() {
    if (sessionStorage.getItem("logged")!="true" ){
      this.router.navigate(['login'])
     }
     else{
    this.fname=sessionStorage.getItem("first_name");
    this.model.first_name=sessionStorage.getItem("first_name");
    this.model.last_name=sessionStorage.getItem("last_name");
    this.model.address=sessionStorage.getItem("address");
    this.model.email=sessionStorage.getItem("email");
    this.model.mobile_no=sessionStorage.getItem('mobile');
    this.model.gender=sessionStorage.getItem("gender");
     }
  }
  // signout 
  public signout(){
    sessionStorage.clear();
    this.router.navigate(['login']);
  }
  //stock flag
  public list(){
    if(this.show_stock){
      this.show_stock=false;
    }
    else{
      this.show_stock=true;  }
  }
  // fruits component
  public students(){
    this.router.navigate(['students']);
  }
  //books component
  public books(){
    this.router.navigate(['books']);
  }
  //homescreen
  public home(){
    this.router.navigate(['home']);
  }
  //Edit profile
  public editprofile(){
    this.view=false;
    this.edit=true;
  }
  //View profile
  public viewprofile(){
    this.edit=false;
    this.view=true;
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(ProfileComponent, {
      data: {dialogTitle: "hello",},
      panelClass: 'custom'
    });
    dialogRef.afterClosed().subscribe(result => {
      
    });
  }
  // ----------------      Signup page functions  --------------//
  public pass(val:any):void{
    this.flag=this.model.password === this.model.confirm_password ? false : true ;
  }
  public changegender(val){
    this.model.gender=val;
  }
  // Store data to local storage and navigate to login page
  onSubmit(){
    sessionStorage.setItem("first_name",this.model.first_name);
    sessionStorage.setItem("last_name",this.model.last_name);
    sessionStorage.setItem("address",this.model.address);
    sessionStorage.setItem("email",this.model.email);
    sessionStorage.setItem('mobile',this.model.mobile_no);
    sessionStorage.setItem("gender",this.model.gender);
    this.userservice.updateprofile(this.model).subscribe(data =>{
      console.log(data);
    });
    }
    public refresh(){
      window.location.reload();
    }


    onResized(event: ResizedEvent) {
      this.width = event.newWidth;
      this.height = event.newHeight;
    }

}
