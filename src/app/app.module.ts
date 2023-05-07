import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlayerComponent } from './player/player.component';
import { SkillsComponent } from './skills/skills.component';
import { ServPlayersService } from './serv-players.service';
import { ServicioService } from './servicio.service';
import { HomeComponent } from './home/home.component';
import { TeamsComponent } from './teams/teams.component';
import { DevComponent } from './dev/dev.component';
import { ContactComponent } from './contact/contact.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'teams', component: TeamsComponent },
  { path: 'dev', component: DevComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    SkillsComponent,
    HomeComponent,
    TeamsComponent,
    DevComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [ServPlayersService, ServicioService],
  bootstrap: [AppComponent],
})
export class AppModule {}
