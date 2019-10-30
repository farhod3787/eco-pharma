import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CategoryService } from 'src/app/shared/services/category';
import { PodCategoryService } from 'src/app/shared/services/podcategory';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  category = []
  podcategory = []

  constructor(
    public translate: TranslateService,
    private podcategoryService : PodCategoryService,
    private categoryService: CategoryService
  ) {
    this.podgetCategory();
    this.getcategory()

    translate.addLangs(['en', 'ru', 'uz']);
    translate.setDefaultLang('ru');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|ru/) ? browserLang : 'en');
    translate.getLangs();
  }

  getcategory() {
    this.categoryService.get().subscribe( res =>{
      this.category = res.json()
    })
  }

  podgetCategory() {
    this.podcategoryService.get().subscribe( res =>{
        this.podcategory = res.json()
      })
  }
  ngOnInit() {
  }


}
