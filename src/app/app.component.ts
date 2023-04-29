import { Component } from '@angular/core';
import { Jugador } from './jugador.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'PractiDire';

  jugadores: Jugador[] = [
    new Jugador('Steven', 'Gerrard', 'MC', 8),

    new Jugador('Eden', 'Hazard', 'LW', 11),

    new Jugador('Christian', 'Eriksen', 'MCO', 23),
  ];
}
