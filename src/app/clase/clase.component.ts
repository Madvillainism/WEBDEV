import { Component } from '@angular/core';

@Component({
  selector: 'clase',
  templateUrl: './clase.component.html',
  styleUrls: ['./clase.component.css'],
})
export class ClaseComponent {
  clase1 = '';
  clase2 = ' ';
  imagen = './gatico.jpg'; //INTENTO DE PROPERTY BINDING CON IMAGEN
  userCheck = false; //PROPERTY BINDING CON CHECKBOX

  change(value: String) {}
}
