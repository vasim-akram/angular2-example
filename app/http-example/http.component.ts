import { Component } from '@angular/core';
import { HttpService } from './http-service.component';
import {OnInit} from "@angular/core";
import { Data } from './data';

@Component({
  selector: 'data-list',
  template: `List of Data <br>
              <ul>
                  <li *ngFor="let data of heroes">{{data.name}}</li>
              </ul>
            `,
  providers: [HttpService],
})
export class HttpComponent implements OnInit{
  errorMessage: string;
  heroes: Data[];
  mode = 'Observable';
  constructor(private _httpService: HttpService){}
  ngOnInit() { this.getHeroes(); }
  getHeroes() {
    this._httpService.getData()
                     .subscribe(
                       heroes => this.heroes = heroes,
                       error =>  this.errorMessage = <any>error);
  }

}
