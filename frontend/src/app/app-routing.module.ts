import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./frontpage/frontpage.component').then(m => m.FrontpageComponent)
  },
  {
    path: 'frontpage',
    loadComponent: () => import('./frontpage/frontpage.component').then(m => m.FrontpageComponent)
  },
  {
    path: 'contact',
    loadComponent: () => import('./contactme/contactme.component').then(m => m.ContactmeComponent)
  },
  {
    path: 'portfolio',
    loadComponent: () => import('./portfolio/portfolio.component').then(m => m.PortfolioComponent)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
