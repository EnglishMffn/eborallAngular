import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent {
  constructor(
    private titleService: Title,
  ) {
    // Set Page Title
    this.titleService.setTitle('Contact Me | Joseph Eborall');
  }
}
