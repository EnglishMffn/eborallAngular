import { Component } from '@angular/core';
import { fadeAnimation } from '../animations/fade.animation';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  animations: [fadeAnimation],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  constructor(
    private titleService: Title,
  ) {}

  public getState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}
