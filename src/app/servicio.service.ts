import { Injectable } from '@angular/core';
import { Jugador } from './jugador.model';
import { ServPlayersService } from './serv-players.service';
import { DataServices } from './data.services';

@Injectable({
  providedIn: 'root',
})
export class ServicioService {
  constructor(
    private servSkills: ServPlayersService,
    private servData: DataServices
  ) {}

  jugadores: Jugador[] = [];

  /*jugadores: Jugador[] = [
    new Jugador('Steven', 'Gerrard', 'MC', 8),

    new Jugador('Eden', 'Hazard', 'LW', 11),

    new Jugador('Christian', 'Eriksen', 'MCO', 23),
  ];*/

  setPlayer(player: Jugador[]) {
    this.jugadores = player;
  }

  bringPlayer() {
    return this.servData.loadPlayers();
  }

  addJugador(jugador: Jugador) {
    this.servSkills.showMsg(
      'Añadiendo Jugador Estrella ' + jugador.nombre + ' ' + jugador.apellido
    );

    this.jugadores.push(jugador);

    this.servData.savePlayers(this.jugadores);
  }

  getPlayer(indice: number) {
    return this.jugadores[indice];
  }

  actPlayer(indice: number, player: Jugador) {
    this.jugadores[indice] = player;

    this.servData.sendPlayers(indice, player);
  }

  killPlayer(indice: number) {
    this.jugadores.splice(indice, 1);

    this.servData.leavePlayers(indice);

    if (this.jugadores != null) {
      this.servData.savePlayers(this.jugadores);
    }
  }
}
