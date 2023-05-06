import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlayerComponent } from './player/player.component';
import { SkillsComponent } from './skills/skills.component';
import { ServPlayersService } from './serv-players.service';
import { ServicioService } from './servicio.service';

@NgModule({
  declarations: [AppComponent, PlayerComponent, SkillsComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [ServPlayersService, ServicioService],
  bootstrap: [AppComponent],
})
export class AppModule {}
