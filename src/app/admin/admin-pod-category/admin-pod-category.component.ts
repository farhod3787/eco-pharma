import { Component, OnInit } from '@angular/core';
import { PodCategoryService } from 'src/app/shared/services/podcategory';
import { CategoryService } from 'src/app/shared/services/category';

@Component({
  selector: 'app-admin-pod-category',
  templateUrl: './admin-pod-category.component.html',
  styleUrls: ['./admin-pod-category.component.css']
})
export class AdminPodCategoryComponent implements OnInit {

  podcategorys = []
  categorys = []
  constructor(
    private podcategory: PodCategoryService,
    private categoryService: CategoryService
  ) {
    this.get()
    this.getCat()
  }

  ngOnInit() {
  }

  getCat() {
    this.categoryService.get().subscribe(res =>{
      this.categorys = res.json()
    })
  }
  get() {
    this.podcategory.get().subscribe( res =>{
      this.podcategorys = res.json()
      console.log( this.podcategorys )
    })
  }

  add(a, b) {
    // console.log(a + b)
    this.podcategory.post({name: a, category_id: b}).subscribe( res =>{
      if(res) {
        console.log("Added")
        this.get()
      }
      else {
        console.log("Error")

      }
    })
  }

  deleteCategory(id) {
    this.podcategory.delete(id).subscribe(res =>{
      if(res) {
        console.log("Deleted")
        this.get()
      }
      else {
        console.log("Error")
      }
    })
  }

}
