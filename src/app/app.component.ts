import { Component } from '@angular/core';
import { fadeAnimation } from '../animations/fade.animation';
import { Title } from '@angular/platform-browser';
import { MainWidthService } from './main-width.service';
import { Subscription } from 'rxjs';
import { DeferLoadModule } from '@trademe/ng-defer-load';

@Component({
  selector: 'app-root',
  animations: [fadeAnimation],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  // Main and Slideshow Bootstrap Classes
  mainWidthClass = 'col-lg-4';
  slideshowWidthClass = 'col-lg-8';
  subscription: Subscription;


  constructor(
    private titleService: Title,
    private widthService: MainWidthService
  ) {

    // Listen for changes to main width
    this.subscription = widthService.mainChanged$.subscribe(
      mainWidth => {
        this.mainWidthClass = mainWidth;
      }
    );

    // Listen for changes to slideshow width
    this.subscription = widthService.slideshowChanged$.subscribe(
      slideshowWidth => {
        this.slideshowWidthClass = slideshowWidth;
      }
    );
  }

  public getState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}
