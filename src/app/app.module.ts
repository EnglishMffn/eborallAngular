// ./src/app/app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Browser Animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Routing
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Contentful Import
import { ContentfulService } from './contentful.service';
// Markdown
import { MarkdownModule } from 'ngx-markdown';

// Site Components
import { PortfolioListComponent } from './portfolio-list/portfolio-list.component';
import { PortfolioDetailComponent } from './portfolio-detail/portfolio-detail.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'work', component: PortfolioListComponent },
  { path: 'work/:slug', component: PortfolioDetailComponent },
  { path: 'contact', component: ContactPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PortfolioListComponent,
    PortfolioDetailComponent,
    HomePageComponent,
    ContactPageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MarkdownModule.forRoot(),
  ],
  providers: [
    ContentfulService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
