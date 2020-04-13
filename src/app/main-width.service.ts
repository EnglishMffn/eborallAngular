import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainWidthService {

  private mainWidthClass = new Subject<string>();
  private slideshowWidthClass = new Subject<string>();

  mainChanged$ = this.mainWidthClass.asObservable();
  slideshowChanged$ = this.slideshowWidthClass.asObservable();

  constructor() {
  }

  updateWidth(mainWidthInput) {
    this.mainWidthClass.next('col-lg-' + mainWidthInput);
    if (mainWidthInput === 12) {
      this.slideshowWidthClass.next('hide-slideshow');
    } else {
      this.slideshowWidthClass.next('col-lg-' + (12 - mainWidthInput));
    }
  }
}
