// ./src/app/app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Browser Animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// ROUTING
// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// SERVICES
// Contentful Import
import { ContentfulService } from './contentful.service';
import { MainWidthService } from './main-width.service';

// Markdown
import { MarkdownModule } from 'ngx-markdown';

// Site Components
import { PortfolioListComponent } from './portfolio-list/portfolio-list.component';
import { PortfolioDetailComponent } from './portfolio-detail/portfolio-detail.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ButtonComponent } from './button/button.component';

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
    NavigationComponent,
    ButtonComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MarkdownModule.forRoot(),
  ],
  providers: [
    ContentfulService,
    MainWidthService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
