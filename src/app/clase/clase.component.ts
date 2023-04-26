import { Component } from '@angular/core';

@Component({
  selector: 'clase',
  templateUrl: './clase.component.html',
  styleUrls: ['./clase.component.css'],
})
export class ClaseComponent {
  clase1 = '';
  clase2 = ' ';
  exam = 'Junior Exam';
  registerText = 'No hay nadie registrado';
  userCheck = false; //PROPERTY BINDING CON CHECKBOX
  clases: Array<string>;

  constructor() {
    this.clases = ['Java', 'PHP', 'CSS', 'REACT'];
  }

  getUser(event: Event) {
    if ((<HTMLInputElement>event.target).value == 'si') {
      this.registerText = 'Registrado';
    } else {
      this.registerText = 'No hay nadie registrado';
    }
  }

  change(value: String) {}
}
