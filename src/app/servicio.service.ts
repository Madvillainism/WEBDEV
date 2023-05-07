import { Injectable } from '@angular/core';
import { Jugador } from './jugador.model';
import { ServPlayersService } from './serv-players.service';

@Injectable({
  providedIn: 'root',
})
export class ServicioService {
  constructor(private servSkills: ServPlayersService) {}

  jugadores: Jugador[] = [
    new Jugador('Steven', 'Gerrard', 'MC', 8),

    new Jugador('Eden', 'Hazard', 'LW', 11),

    new Jugador('Christian', 'Eriksen', 'MCO', 23),
  ];

  addJugador(jugador: Jugador) {
    this.servSkills.showMsg(
      'Añadiendo Jugador Estrella ' + jugador.nombre + ' ' + jugador.apellido
    );

    this.jugadores.push(jugador);
  }
}
