import { Component } from '@angular/core';
import { fadeAnimation } from '../animations/fade.animation';
import { Title } from '@angular/platform-browser';
import { MainWidthService } from './main-width.service';

@Component({
  selector: 'app-root',
  animations: [fadeAnimation],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MainWidthService]
})
export class AppComponent {

  // Main and Slideshow Bootstrap Classes
  mainWidthClass = '';
  slideshowWidthClass = '';

  public constructor(
    private titleService: Title,
    private mainWidth: MainWidthService
  ) {
    // Get Widths from Service
    this.mainWidthClass =  mainWidth.getWidths().main;
    this.slideshowWidthClass = mainWidth.getWidths().slideshow;


  }

  public getState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}
