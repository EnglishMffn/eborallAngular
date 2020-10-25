import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../contentful.service';
import { Entry } from 'contentful';
import { Title } from '@angular/platform-browser';
import {trigger, transition, style, animate, query, stagger, keyframes} from '@angular/animations';

@Component({
  selector: 'app-portfolio-list',
  templateUrl: './portfolio-list.component.html',
  styleUrls: ['./portfolio-list.component.scss'],
  animations: [

    trigger('photosAnimation', [
      transition('* => *', [
        query(':enter, :exit', style({ opacity: 0, transform: 'translateY(15px)'})),
        query('.project',
          stagger('50ms', [
            animate('230ms cubic-bezier(0.4, 0.0, 0.2, 1)', style({opacity: 1, transform: 'translateY(-15px)'}))
          ])
        )
      ])
    ])

  ]
})
export class PortfolioListComponent implements OnInit {
  SearchFilter = '';
  projects: Entry<any>[];

  constructor(
    private contentfulService: ContentfulService,
    private titleService: Title,
    ) {
      // Set Page Title
      this.titleService.setTitle('My Work | Joseph Eborall');
    }

  ngOnInit() {
    this.contentfulService
      .getProjects()
      .then(project => (this.projects = project));
  }

  public updateFilter(newFilter: string) {

    if (newFilter === 'All') {
      this.SearchFilter = '';
    } else {
      this.SearchFilter = newFilter;
    }
  }


  // Split Filters
  public processFilters(projectData) {
    // Filter Project Types into Array
    const rawArray = projectData.filter(project => project.fields.typeOfWork).map(project => project.fields.typeOfWork);
    const splitArray = [];

    // Loop through filters
    for (const item in rawArray) {
      if (rawArray.hasOwnProperty(item)) {
        const splits = rawArray[item];

        // Loop through Individual Labels
        for (const split in splits) {
          if (splits.hasOwnProperty(split)){
            splitArray.push(splits[split]);
          }
        }
      }
    }
    const uniqueFilters = [...new Set(splitArray.sort())];
    uniqueFilters.unshift('All');

    return uniqueFilters;
  }

  public getState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }

}
