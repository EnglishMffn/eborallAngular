import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ContentfulService } from '../contentful.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Entry } from 'contentful';
import { Title } from '@angular/platform-browser';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';


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
    private titleService: Title,
  ) {}

  ngOnInit() {
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) =>
          this.ContentfulS.getProject(params.get('slug'))
        )
      )
      .subscribe(project => (this.project = project, this.titleService.setTitle(project.fields.projectName + ' | EBORALL')));
  }

}
