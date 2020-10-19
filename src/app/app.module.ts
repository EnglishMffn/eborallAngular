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

// Markdown
import { MarkdownModule } from 'ngx-markdown';

// Site Components
import { PortfolioListComponent } from './portfolio-list/portfolio-list.component';
import { PortfolioDetailComponent } from './portfolio-detail/portfolio-detail.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ButtonComponent } from './button/button.component';
import { PageFooterComponent } from './page-footer/page-footer.component';

const routes: Routes = [
  { path: '', redirectTo: '/work', pathMatch: 'full' },
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
    PageFooterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MarkdownModule.forRoot(),
  ],
  providers: [
    ContentfulService,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
