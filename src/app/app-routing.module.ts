import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortfolioListComponent } from './portfolio-list/portfolio-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full' },
  { path: 'work', component: PortfolioListComponent }
];

@NgModule({
  declarations: [
    PortfolioListComponent,
  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
