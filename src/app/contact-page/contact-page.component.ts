import { Component, OnInit } from '@angular/core';
import { MainWidthService } from '../main-width.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

  constructor(private mainWidthService: MainWidthService) { }

  ngOnInit() {
    this.mainWidthService.updateWidth(4);
  }

}
