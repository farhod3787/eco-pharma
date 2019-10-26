import {Injectable} from '@angular/core';
import {Http} from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: Http) {

  }
 
  public playSound() {
    let audio = new Audio();
    audio.src = "./assets/audio/alarm.mp3";
    audio.load();
    audio.play().catch((reason => {
      console.log(reason);
    }));
  }

}
