import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CategoryService } from 'src/app/shared/services/category';
import { PharmsServices } from 'src/app/shared/services/pharms';

@Component({
  selector: 'app-cat-pharms',
  templateUrl: './cat-pharms.component.html',
  styleUrls: ['./cat-pharms.component.css']
})
export class CatPharmsComponent implements OnInit {

  constructor(
    public route: ActivatedRoute,
    private router : Router,
    private catService: CategoryService,
    private pharmService: PharmsServices
  ) { }

   id: string;
    name: string;
    pharms = []
  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has("id")) {
        this.id = paramMap.get("id");
        this.catService.getOne(this.id).subscribe( res =>{
          this.name = res.json().name;
          this.pharmService.getCat(this.name).subscribe( res =>{
            this.pharms = res.json()
          })
        })

      }
    })

}

}
