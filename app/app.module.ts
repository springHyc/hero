import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { routing } from './app.routing';
import { HttpModule } from "@angular/http";

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }  from './app.component';
import { HeroDetailComponent } from "./heroDetail.component";
import { HeroesComponent }     from './heroes.component';
import { HeroService }         from './hero.service';
import { DashboardComponent } from "./Dashboard.component";


@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule, 
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    routing,
    HttpModule
  ],
  declarations: [ 
    AppComponent, 
    HeroDetailComponent, 
    HeroesComponent, 
    DashboardComponent
  ],
  providers: [ HeroService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
