import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../contentful.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Entry } from 'contentful';
import { MainWidthService } from '../main-width.service';


@Component({
  selector: 'app-portfolio-detail',
  templateUrl: './portfolio-detail.component.html',
  styleUrls: ['./portfolio-detail.component.scss']
})
export class PortfolioDetailComponent implements OnInit {
  project: Entry<any>;

  constructor(
    private ContentfulS: ContentfulService,
    private route: ActivatedRoute,
    private mainWidth: MainWidthService
  ) {}

  ngOnInit() {
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) =>
          this.ContentfulS.getProject(params.get('slug'))
        )
      )
      .subscribe(project => (this.project = project));

    this.mainWidth.updateWidth(6);
  }

}
