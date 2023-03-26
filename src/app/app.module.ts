import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CursosComponents } from './cursos/cursos.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ClaseComponent } from './clase/clase.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, CursosComponents, ClaseComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
