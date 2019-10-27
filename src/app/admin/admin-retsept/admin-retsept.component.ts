import { Component, OnInit } from '@angular/core';
import { RetseptService } from 'src/app/shared/services/retsept-service';

@Component({
  selector: 'app-admin-retsept',
  templateUrl: './admin-retsept.component.html',
  styleUrls: ['./admin-retsept.component.css']
})
export class AdminRetseptComponent implements OnInit {

  retsepts = []
  constructor(
    private retseptService: RetseptService
  ) {
    this.get()
  }

  get() {
    this.retseptService.get().subscribe(res =>{
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

  ngOnInit() {
  }

}
