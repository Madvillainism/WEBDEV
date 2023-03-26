import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <p>{{ count }}</p>

    <button (click)="Count()">CONTADORSKI</button>
  `,
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  count = 0;

  Count() {
    this.count++;
  }
}
