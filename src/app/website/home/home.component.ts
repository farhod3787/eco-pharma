import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CategoryService } from 'src/app/shared/services/category';
import { PodCategoryService } from 'src/app/shared/services/podcategory';
import { PharmsServices } from 'src/app/shared/services/pharms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  icons = ['tablets', 'baby', 'stethoscope']
  category = []
  podcategory = []
  pharms = []

  constructor(
    public translate: TranslateService,
    private podcategoryService : PodCategoryService,
    private categoryService: CategoryService,
    private pharmService: PharmsServices
  ) {
    this.podgetCategory();
    this.getcategory();
    this.getPharms();


    translate.addLangs(['en', 'ru', 'uz']);
    translate.setDefaultLang('ru');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|ru/) ? browserLang : 'en');
    translate.getLangs();
  }


  getPharms() {
    this.pharmService
    .get().subscribe( res =>{
      this.pharms = res.json()
    })
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
