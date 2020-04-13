import { Component, OnInit } from '@angular/core';
import { MainWidthService } from '../main-width.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {

  constructor(private mainWidthService: MainWidthService) {
  }

  ngOnInit() {
    this.mainWidthService.updateWidth(4);
  }

}
