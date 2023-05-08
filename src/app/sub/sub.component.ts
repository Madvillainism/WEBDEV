import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Jugador } from '../jugador.model';
import { ServPlayersService } from '../serv-players.service';
import { ServicioService } from '../servicio.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.css'],
})
export class SubComponent implements OnInit {
  constructor(
    private router: Router,
    private servPlayer: ServPlayersService,
    private servAdd: ServicioService,
    private route: ActivatedRoute
  ) {}

  jugadores: Jugador[] = [];

  action: string;

  ngOnInit(): void {
    this.action = this.route.snapshot.queryParams['mode'];

    this.jugadores = this.servAdd.jugadores;
    this.index = this.route.snapshot.params['id'];
    let player: Jugador = this.servAdd.getPlayer(this.index);

    this.inputNombre = player.nombre;
    this.inputApellido = player.apellido;
    this.inputPosicion = player.posicion;
    this.inputDorsal = player.dorsal;
  }

  goHome() {
    this.router.navigate(['']);
    setTimeout(function reset() {
      location.reload();
    }, 200);
  }

  updatePlayer() {
    if (this.action == '1') {
      let player = new Jugador(
        this.inputNombre,
        this.inputApellido,
        this.inputPosicion,
        this.inputDorsal
      );

      this.servAdd.actPlayer(this.index, player);

      (this.inputNombre = ''),
        (this.inputApellido = ''),
        (this.inputPosicion = ''),
        (this.inputDorsal = 0);

      this.router.navigate(['']);
      setTimeout(function reset() {
        location.reload();
      }, 200);
    } else {
      this.servAdd.killPlayer(this.index);

      (this.inputNombre = ''),
        (this.inputApellido = ''),
        (this.inputPosicion = ''),
        (this.inputDorsal = 0);

      this.router.navigate(['']);
      setTimeout(function reset() {
        location.reload();
      }, 200);
    }
  }

  /*sellPlayer() {
    this.servAdd.killPlayer(this.index);

    (this.inputNombre = ''),
      (this.inputApellido = ''),
      (this.inputPosicion = ''),
      (this.inputDorsal = 0);

    this.router.navigate(['']);
  }*/

  inputNombre: string = '';
  inputApellido: string = '';
  inputPosicion: string = '';
  inputDorsal: number = 0;

  index: number;
}
