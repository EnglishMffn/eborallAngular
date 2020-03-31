import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../contentful.service';
import { Entry } from 'contentful';
import { MainWidthService } from '../main-width.service';

@Component({
  selector: 'app-portfolio-list',
  templateUrl: './portfolio-list.component.html',
  styleUrls: ['./portfolio-list.component.scss']
})
export class PortfolioListComponent implements OnInit {

  projects: Entry<any>[];

  constructor(
    private contentfulService: ContentfulService,
    private mainWidth: MainWidthService
    ) {}

  ngOnInit() {
    this.contentfulService
      .getProjects()
      .then(project => (this.projects = project));
    console.log('Before ' + this.mainWidth.getWidths().slideshow);
    this.mainWidth.updateWidth(6);
    console.log('Now ' + this.mainWidth.getWidths().slideshow);
  }

}
