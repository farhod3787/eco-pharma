import { Component, OnInit,ViewChild } from '@angular/core';
import { PersonService } from 'src/app/shared/services/person';

import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {

  users = []

  displayedColumns: string[] = ['id', 'number', 'name', 'address', 'delete'];
  dataSource;

    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor( private personService: PersonService) {
    // this.get()
    this.myFunction()
   }

   myFunction() {
    this.personService.get().subscribe( res =>{
      this.dataSource = new MatTableDataSource(res.json());
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
   }

   applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  //  get() {
  //    this.personService.get().subscribe( res =>{
  //      this.users = res.json()
  //    })
  //  }

   delete(id) {
     this.personService.delete(id).subscribe( res =>{
     
      alert("User Deleted");
      // this.get(); 
      this.myFunction()  
    }) 
   }

  ngOnInit() {
  }

}
