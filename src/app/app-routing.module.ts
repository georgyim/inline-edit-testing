import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyPageComponent } from './company-page/company-page.component';

const routes: Routes = [
  { path: 'company-list', component: CompanyListComponent },
  { path: 'company-page/:id', component: CompanyPageComponent },
  { path: '',
    redirectTo: '/company-list',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
