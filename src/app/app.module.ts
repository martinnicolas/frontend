import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'; /*Para formulario*/

import { AppComponent } from './app.component';
import { PersonaDetalleComponent } from './persona-detalle/persona-detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonaDetalleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule /* Agrego el modulo a la app */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
