import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Jugador } from './jugador.model';

@Injectable()
export class DataServices {
  constructor(private client: HttpClient) {}

  loadPlayers() {
    return this.client.get(
      'https://footteam-ee502-default-rtdb.firebaseio.com/datos.json'
    );
  }

  savePlayers(jugadores: Jugador[]) {
    this.client
      .put(
        'https://footteam-ee502-default-rtdb.firebaseio.com/datos.json',
        jugadores
      )
      .subscribe(
        (response) => console.log('Players saved' + response),
        (error) => console.log(error)
      );
  }

  sendPlayers(index: number, jugador: Jugador) {
    let url =
      'https://footteam-ee502-default-rtdb.firebaseio.com/datos/' +
      index +
      '.json';

    this.client.put(url, jugador).subscribe((res) => {
      console.log('Se ha sustituido este jugador: ' + res);
    });
  }

  leavePlayers(index: number) {
    let url =
      'https://footteam-ee502-default-rtdb.firebaseio.com/datos/' +
      index +
      '.json';

    this.client.delete(url).subscribe((res) => {
      console.log('Se ha vendido este jugador: ' + res);
    });
  }
}
