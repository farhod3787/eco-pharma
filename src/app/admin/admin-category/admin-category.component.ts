import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/shared/services/category';

@Component({
  selector: 'app-admin-category',
  templateUrl: './admin-category.component.html',
  styleUrls: ['./admin-category.component.css']
})
export class AdminCategoryComponent implements OnInit {

  category = []

  constructor(private service : CategoryService) {
      this.getall()
   }

  ngOnInit() {
  }

  getall() {
    this.service.get().subscribe( res =>{
      this.category = res.json();  
    })
  }

  add(name, id) {
    this.service.post({name: name, id: id}).subscribe( res =>{
      alert("New Category Added");
      this.getall();
    })
  }

  deleteCategory(id) {
    this.service.delete(id).subscribe( res =>{
      alert("Category Deleted");
      this.getall();
    })
  }
}
