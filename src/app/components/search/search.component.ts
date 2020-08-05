import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  heroes:any[] = [];

  constructor(private activatedRoute : ActivatedRoute,
              private heroesService  : HeroesService,
              private router         : Router) 
              { 
                this.activatedRoute.params.subscribe(params => {
                  this.heroes = this.heroesService.getHeroeByName(params['text']);
                });
              }
}
