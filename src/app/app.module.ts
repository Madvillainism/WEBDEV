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
import { HttpClientModule } from '@angular/common/http';
import { SubComponent } from './sub/sub.component';
import { ErrorComponent } from './error/error.component';
import { DataServices } from './data.services';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'teams', component: TeamsComponent },
  { path: 'dev', component: DevComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'update/:id', component: SubComponent },
  { path: '**', component: ErrorComponent },
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
    SubComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  providers: [ServPlayersService, ServicioService, DataServices],
  bootstrap: [AppComponent],
})
export class AppModule {}
