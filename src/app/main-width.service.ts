import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainWidthService {

  mainWidthClass: string;
  slideshowWidthClass: string;

  constructor() {
    this.mainWidthClass = 'col-lg-4';
    this.slideshowWidthClass = 'col-lg-8';
  }

  updateWidth(mainWidthInput) {
    this.mainWidthClass = 'col-lg-' + mainWidthInput;
    if (mainWidthInput === 12) {
      this.slideshowWidthClass = 'hide';
    } else {
      this.slideshowWidthClass = 'col-lg-' + (12 - mainWidthInput);
    }

    console.log(this.slideshowWidthClass);
  }

  getWidths() {
    return {
      main: this.mainWidthClass,
      slideshow: this.slideshowWidthClass
    };
  }
}
