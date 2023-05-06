import { Component } from '@angular/core';
import { Jugador } from './jugador.model';
import { ServPlayersService } from './serv-players.service';
import { ServicioService } from './servicio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'BEST FOOTBALL PLAYERS';

  constructor(
    private servPlayer: ServPlayersService,
    private servAdd: ServicioService
  ) {
    this.jugadores = this.servAdd.jugadores;
  }

  jugadores: Jugador[] = [];

  addPlayer() {
    let player = new Jugador(
      this.inputNombre,
      this.inputApellido,
      this.inputPosicion,
      this.inputDorsal
    );
    this.servPlayer.showMsg(
      'Añadiendo Jugador Estrella ' + player.nombre + ' ' + player.apellido
    );

    this.servAdd.addJugador(player);

    (this.inputNombre = ''),
      (this.inputApellido = ''),
      (this.inputPosicion = ''),
      (this.inputDorsal = 0);
  }

  inputNombre: string = '';
  inputApellido: string = '';
  inputPosicion: string = '';
  inputDorsal: number = 0;
}
