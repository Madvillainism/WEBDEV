import { Component } from '@angular/core';
import { Jugador } from '../jugador.model';
import { ServPlayersService } from '../serv-players.service';
import { ServicioService } from '../servicio.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  title = 'BEST FOOTBALL PLAYERS';

  constructor(
    private servPlayer: ServPlayersService,
    private servAdd: ServicioService
  ) {}

  ngOnInit(): void {
    //this.jugadores = this.servAdd.jugadores;
    this.servAdd.bringPlayer().subscribe((players) => {
      console.log(players);
      this.jugadores = Object.values(players);
      this.servAdd.setPlayer(this.jugadores);
    });

    /*this.servAdd.bringPlayer().subscribe((pj) => {
      console.log(pj);
    });*/
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
