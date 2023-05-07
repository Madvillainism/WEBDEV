import { Component } from '@angular/core';
import { Jugador } from '../jugador.model';
import { ServPlayersService } from '../serv-players.service';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
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
