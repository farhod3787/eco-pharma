import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {

  langs = [ 'RUS','UZB', 'ENG', 'УЗБ'];

  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'ru', 'uz']);
    translate.setDefaultLang('RUS');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|ru/) ? browserLang : 'en');
    translate.getLangs();
  }
    
  ngOnInit() {
  }

}
