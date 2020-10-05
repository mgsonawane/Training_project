import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  firstname : any;
  lastname:any ;
  show_stock:boolean=false;
  constructor(public router:Router) { }

  ngOnInit() {
    //console.log(sessionStorage);
    if (sessionStorage.getItem("logged")=="true"){
     this.firstname=sessionStorage.getItem('first_name'); //Name Displayed to homepage
     this.lastname=sessionStorage.getItem('last_name'); //Name Displayed to homepage
    }
     else{
       this.router.navigate(['login'])
     }
    }
    //  sign out to navigate login page
    public signout(){
      sessionStorage.clear();
      this.router.navigate(['login']);
    }
    public list(){
      if(this.show_stock){
        this.show_stock=false;
      }
      else{
        this.show_stock=true;  }
    }

}
