import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-heroe',
  templateUrl: './card-heroe.component.html',
  styleUrls: ['./card-heroe.component.css']
})
export class CardHeroeComponent implements OnInit {

  @Input() heroe:any = {};

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  showMore(id : number) {
    this.router.navigate( ["heroe/",id] );
  }

}
