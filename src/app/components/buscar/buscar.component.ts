import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HeroesService} from '../../services/heroes.service';


@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html'
})
export class BuscarComponent implements OnInit {

  heroes:any[]=[]
  termino:string;

  constructor( private activadedRoute:ActivatedRoute, private _heroeService:HeroesService) { 

    
  }

  ngOnInit() {
      this.activadedRoute.params.subscribe(params =>{
        this.termino=params['termino'];
        this.heroes = this._heroeService.buscarHeroes(params['termino']);
        console.log(this.heroes);
      })  
  }

}
