import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { ToastrService }  from 'ngx-toastr';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  local: LocalDataSource=new LocalDataSource;
  limit:number=10;
  error:boolean=false;
  selectedBanner:any;
  banners: any[] = [
    { name: 5},
    {name: 10},
    {name: 20},
    {name: 25}
];
  constructor(private userservice:UserService,private toastr:ToastrService) { }

  ngOnInit() {
    this.selectedBanner=this.banners[1];
   this.userservice.getstudent().subscribe(data=>{
     this.local.load(Object.assign(data)) ;
   });
  }
  // Settings of ng2-table
  settings = {
    columns: {
      RollNo: {
        title: 'RollNo',
        filter: true,
        sort : true,
        width: '20px' ,
        type: 'number',
        hidden:true
      },
      Name: {
        display:false,
        title: 'Name',
        filter: true,
        type: 'string'
      },
      Database: {
        title: 'Database',
        filter: true,
        type: 'number'
      },  
      Simulation: {
        title: 'Simulation',
        filter: true,
        type: 'number'
      },
      Angular: {
        title: 'Angular',
        filter: true,
        type: 'number'
      },
      Total: {
        title: 'Total',
        filter: true,
        addable:false,
        type: 'number',
        editable:false
      },
      Percentage: {
        title: 'Percentage',
        addable:false,
        filter: true,
        editable:false,
        type: 'number'
      }
    },
    pager:{
      perPage:this.limit,
      display:true
    },
    add:{
      confirmCreate:true,
      createButtonContent: '<i class="fa fa-check"></i>&nbsp&nbsp' ,
      cancelButtonContent: '<i class="fa fa-window-close"></i>'
      
     },
     delete: {
      deleteButtonContent: '<i class="fa fa-trash" aria-hidden="true"></i>',
      confirmDelete: true
      },
      edit :{
       confirmSave:true,
       editButtonContent: '<i class="fa fa-pencil"></i>&nbsp&nbsp',
       saveButtonContent: '<i class="fa fa-check"></i>&nbsp',
       cancelButtonContent: '<i class="fa fa-window-close"></i>'
      },
      actions: {
        //add: false, //as an example
       
      }
  };
  //Global Search !used
  onSearch(query: string = '') {
    this.local.setFilter([
      // fields we want to include in the search
      {
        field:'RollNo',
        search: query
      },
      {
        field: 'Name',
        search: query
      },
      {
        field: 'Database',
        search: query
      },
      {
        field: 'Simulation',
        search: query
      },
      {
        field: 'Angular',
        search: query
      },
      {
        field: 'Total',
        search: query
      },
      
      {
        field: 'Percentage',
        search: query
      }
    ], true);
  }
 //          Add new record or column
  onCreateConfirm(event):void { 
    if (event.newData.RollNo && event.newData.Name && event.newData.Database && event.newData.Simulation && 
      event.newData.Angular){
                  var totall=parseInt(event.newData.Database)+parseInt(event.newData.Simulation)+parseInt(event.newData.Angular);
                  var perc=(totall/3).toFixed(2);
                  
                  this.userservice.addstudent({'RollNo':event.newData.RollNo ,'Name':event.newData.Name,'Database':event.newData.Database,
                'Simulation':event.newData.Simulation,'Angular':event.newData.Angular ,'Total':String(totall),'Percentage':String(perc)})
                .subscribe(data =>{
                  if (data==='exists'){
                    this.error=true;
                    this.toastr.error("Roll number exists");
                  }
                  });
                  // console.log(this.error);
                  // if(!this.error){
                  this.userservice.getstudent().subscribe(data=>{
                    //console.log(data[0]);
                    this.local.load(Object.assign(data)) ;
                  });
                  event.confirm.resolve(this.local)
               // }
                 // window.location.reload();
                }
    else {
      this.toastr.error("Enter all Fields");
      event.confirm.reject();
          }
  } 
  //                  Update record 
  onSaveConfirm(event):void {
 //   console.log(event);
      if (event.newData.RollNo && event.newData.Name && event.newData.Database && event.newData.Simulation && 
        event.newData.Angular){
          var totall=parseInt(event.newData.Database)+parseInt(event.newData.Simulation)+parseInt(event.newData.Angular);
          var perc=(totall/3).toFixed(2);
                    this.userservice.updatestudent({'RollNo':event.newData.RollNo ,'Name':event.newData.Name,'Database':event.newData.Database,
                  'Simulation':event.newData.Simulation,'Angular':event.newData.Angular ,'Total':String(totall),'Percentage':String(perc)})
                  .subscribe(data =>{
                    
                    });
                                this.userservice.getstudent().subscribe(data=>{
                                  //console.log(data[0]);
                                  this.local.load(Object.assign(data)) ;
                                });
                              event.confirm.resolve(this.local)
                  }
      else {
        event.confirm.reject();
            }
  }
  //         Delete record

  onDeleteConfirm(event): void {
    if(window.confirm('Are you sure you want to delete record?')){
    this.userservice.deletestudent({'RollNo':event.data.RollNo ,'Name':event.data.Name,'Database':event.data.Database,
    'Simulation':event.data.Simulation,'Angular':event.data.Angular ,'Total':event.data.Total,'Percentage':event.data.Percentage}).subscribe(data =>{
      //console.log(data);
      });
      event.confirm.resolve(event.data);
    }
    else {
      event.confirm.reject();
          }

  }
  // Pagination using select tag
  public change_limit(){ 
     this.local.setPaging(1, this.selectedBanner['name'], true);
     this.settings = Object.assign({}, this.settings);
 //   console.log((this.selectedBanner['name']));
  }
  // Add new button 
  addRow() {
    var btnanadir: any = document.querySelector(
      ".ng2-smart-actions-title-add a"
    );
    btnanadir.click.call(btnanadir);
  }
    

}