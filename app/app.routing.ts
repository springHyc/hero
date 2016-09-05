import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroesComponent } from "./heroes.component";
import { DashboardComponent } from "./Dashboard.component";
import { HeroDetailComponent } from "./heroDetail.component";

const appRoutes: Routes = [
  {
    path: 'heroes',
    component: HeroesComponent
  }, {
    path: 'dashboard',
    component: DashboardComponent
  }, {
    path: 'detail/:id',
    component: HeroDetailComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
