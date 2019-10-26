import { Component, OnInit, ViewChild } from '@angular/core';
import { PharmsServices } from 'src/app/shared/services/pharms'
import Swal from 'sweetalert2'

import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-admin-pharms',
  templateUrl: './admin-pharms.component.html',
  styleUrls: ['./admin-pharms.component.css']
})
export class AdminPharmsComponent implements OnInit {
  pharms = [];


  displayedColumns: string[] = ['id', 'name', 'progress', 'color', 'rate', 'sale', 'roomy','edit', 'delete'];
  dataSource;

    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor( private srv: PharmsServices) {

   this.myFunction()

   }

   myFunction() {
    this.srv.get().subscribe( res =>{
      this.dataSource = new MatTableDataSource(res.json());
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
   }

   ngOnInit() { }

   applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  //  getall() {
  //    this.srv.get().subscribe( (res) =>{
  //      var obj = res.json();
  //      this.pharms = obj;
  //      console.log(this.pharms);
  //    }) 
  //  }


   delete(id) {
     this.srv.delete(id).subscribe( res =>{
      Swal.fire({
        type: 'success',
        title: 'Done',
        text: 'Dori o\'chirildi!',
})
       this.myFunction();
     })
   }



}
