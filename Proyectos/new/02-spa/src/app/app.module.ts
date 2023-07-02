import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Rutas
import { AppRoutingModule } from './app-routing.module';

// Servicios
import { HeroesService } from "./components/services/heroes.service";

// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';

@NgModule({
  // Aqui vienen todos los componentes
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent
  ],
  // Aqui vienen todas las Rutas
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  // Aqui vienen todos los Servicios
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
