import { Component, Output, EventEmitter } from '@angular/core';
import { ServPlayersService } from '../serv-players.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent {
  @Output() Skills = new EventEmitter<string>();

  constructor(private service: ServPlayersService) {}

  addItem(value: string) {
    this.service.showMsg('Añadiendo skill: ' + value);
    this.Skills.emit(value);
  }
}
