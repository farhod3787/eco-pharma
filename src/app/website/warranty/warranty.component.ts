import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { PharmsServices } from 'src/app/shared/services/pharms';
import { MatPaginator, MatSort } from '@angular/material';
  
@Component({
  selector: 'app-warranty',
  templateUrl: './warranty.component.html',
  styleUrls: ['./warranty.component.css']
})
export class WarrantyComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'progress', 'color'];
  dataSource;

    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor( private  pharmService : PharmsServices) {

      pharmService.get().subscribe( res =>{
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
 
  ngOnInit() {
    
  }
}

 

 

 
 
 
