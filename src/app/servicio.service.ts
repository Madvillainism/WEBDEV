import { Injectable } from '@angular/core';
import { Jugador } from './jugador.model';

@Injectable({
  providedIn: 'root',
})
export class ServicioService {
  jugadores: Jugador[] = [
    new Jugador('Steven', 'Gerrard', 'MC', 8),

    new Jugador('Eden', 'Hazard', 'LW', 11),

    new Jugador('Christian', 'Eriksen', 'MCO', 23),
  ];

  addJugador(jugador: Jugador) {
    this.jugadores.push(jugador);
  }

  constructor() {}
}
