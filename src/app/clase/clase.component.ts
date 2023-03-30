import { Component } from '@angular/core';

@Component({
  selector: 'clase',
  templateUrl: './clase.component.html',
  styleUrls: ['./clase.component.css'],
})
export class ClaseComponent {
  clase1 = '';
  clase2 = ' ';

  change(value: String) {}
}
