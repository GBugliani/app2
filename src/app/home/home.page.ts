import { testeService } from './../services/teste.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public frutas: Array<string> | undefined;
  public fruta!: string;

  constructor(public testeService: testeService) {}

}
