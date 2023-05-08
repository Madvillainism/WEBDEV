import { Component, Input } from '@angular/core';
import { Jugador } from '../jugador.model';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css'],
})
export class PlayerComponent {
  @Input() player: Jugador;
  @Input() index: number;

  skills = [''];

  addSkill(newSkill: string) {
    this.skills.push(newSkill);
  }
}
