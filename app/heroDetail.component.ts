import {Component, EventEmitter, OnInit, Input, Output } from "@angular/core";
import { ActivatedRoute, Params } from '@angular/router';

import { Hero } from "./hero";
import { HeroService } from "./hero.service";

@Component ({
  selector: 'my-hero-detail',
  templateUrl: 'app/heroDetail.component.html',
  styleUrls: ['app/heroDetail.component.html']
})

export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;
  @Output() close = new EventEmitter();
  error: any;
  navigated = false;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      if(params['id'] !== undefined) {
        let id = +params['id'];
        this.navigated = true;
        this.heroService.getHero(id)
          .then(hero => this.hero = hero);        
        } else {
          this.navigated = false;
          this.hero = new Hero();
        }

    });
  }

  goBack(savedHero: Hero = null): void {
    this.close.emit(savedHero);
    if(this.navigated) {
      window.history.back();
    }
  }

  save(): void {
    this.heroService.save(this.hero).then(hero => {
      this.hero = hero;
      this.goBack(hero);
    })
    .catch(error => this.error = error);
  }

}