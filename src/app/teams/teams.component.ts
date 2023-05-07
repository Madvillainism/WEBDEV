import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Jugador } from '../jugador.model';
import { ServPlayersService } from '../serv-players.service';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css'],
})
export class TeamsComponent {
  constructor(
    private router: Router,
    private servPlayer: ServPlayersService,
    private servAdd: ServicioService
  ) {
    this.jugadores = this.servAdd.jugadores;
  }

  goHome() {
    this.router.navigate(['']);
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

    this.router.navigate(['']);
  }

  inputNombre: string = '';
  inputApellido: string = '';
  inputPosicion: string = '';
  inputDorsal: number = 0;
}
