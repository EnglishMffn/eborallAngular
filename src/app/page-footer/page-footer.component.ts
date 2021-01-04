import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-footer',
  templateUrl: './page-footer.component.html',
  styleUrls: ['./page-footer.component.scss']
})
export class PageFooterComponent implements OnInit {

  copyrightYear(){
    const d = new Date();
    const year = d.getFullYear();

    return year;
  }

  constructor() { }

  ngOnInit() {
  }

}
