import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    if (sessionStorage.getItem("logged")!="true" ){
      this.router.navigate(['login'])
     }
  }

}
