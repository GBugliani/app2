import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class testeService {

  private frutas: Array<string> = ['Uva', 'Pera', 'Maça', 'Laranja', 'Abacaxi', 'Manga', 'Banana'];

  private value : string | undefined;

  public getFrutas(): Array<string> {
    return this.frutas;
  }

  public setValue(value: any) {
    this.value = value;
    console.log(this.value);
  }

  public addFrutas(frutas: any) {
    this.frutas.push(frutas);
    console.log(this.frutas);
  }

  constructor() { }
}
