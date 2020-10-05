import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  edit:boolean=false;
  view:boolean=false;
  local:any;
  constructor(private http:HttpClient) { }
  
  ngOnInit() {
    this.local =  JSON.parse(localStorage.getItem('users'));
    console.log('local',this.local);
  }
  settings = {
    actions: {
      add: false, //as an example
     
    },
    custom: { 
      type: 'custom',
      filter: false,
       name: 'Add', 
       title: `<h1>Add New  </h1>` },
    columns: {
      first_name: {
        title: 'First_name',
        filter: true
      },
      last_name: {
        title: 'Last_name',
        filter: true
      },
      address: {
        title: 'Address',
        filter: true
      },
      email: {
        title: 'Email',
        filter: true
      },
      mobile_no: {
        title: 'Contact',
        filter: true
      },
      gender: {
        title: 'Gender',
        filter: true
      }
    }
  };
  onSearch(query: string = '') {
    this.local.setFilter([
      // fields we want to include in the search
      {
        field: 'First_name',
        search: query
      },
      {
        field: 'Last_name',
        search: query
      },
      
      {
        field: 'address',
        search: query
      },
      {
        field: 'email',
        search: query
      },
      {
        field: 'contact',
        search: query
      },
      
      {
        field: 'gender',
        search: query
      }
    ], true);
    // second parameter specifying whether to perform 'AND' or 'OR' search 
    // (meaning all columns should contain search query or at least one)
    // 'AND' by default, so changing to 'OR' by setting false here
  }

    public demo(){
       //   this.local.grid.getNewRow();
    }

}