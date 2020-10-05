import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
    model :any = {};
    flag : boolean = true;
    submited:boolean=false;
  constructor(private router:Router) { }

  ngOnInit() {
  }
  cancel(){
    this.router.navigate(['/login']);
  }
  public pass(val:any):void{
    this.flag=this.model.user_password === this.model.user_confirm_password ? false : true 
  }

  onSubmit(){
    if ((this.model.user_password === this.model.user_confirm_password) && this.model.user_password)
    {
      this.flag=false;
      localStorage.setItem("password",this.model.user_password)
      this.router.navigate(['login']);
    }
    else{
      this.flag=false;
      this.submited=true;
    }
    }
  }
