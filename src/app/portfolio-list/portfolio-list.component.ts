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
    private mainWidthService: MainWidthService
    ) {}

  ngOnInit() {
    this.contentfulService
      .getProjects()
      .then(project => (this.projects = project));
    this.mainWidthService.updateWidth(6);
  }

}
