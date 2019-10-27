import { Component, OnInit } from '@angular/core';
import { RetseptService } from 'src/app/shared/services/retsept-service';

@Component({
  selector: 'app-admin-retsept-true',
  templateUrl: './admin-retsept-true.component.html',
  styleUrls: ['./admin-retsept-true.component.css']
})
export class AdminRetseptTrueComponent implements OnInit {

  retsepts = []
  constructor( private retseptService: RetseptService) {
    this.get()
  }

  ngOnInit() {
  }
  get() {
    this.retseptService.getTrue().subscribe(res =>{
      this.retsepts = res.json()
      console.log(this.retsepts)
    })
  }

  delete(id){
    this.retseptService.delete(id).subscribe( res =>{
      if(res) {
        alert("Deleted")
      }
      else {
        alert("Error")
      }
    })
  }


}
