import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'; /*Para formulario*/

import { AppComponent } from './app.component';
import { PersonaDetalleComponent } from './persona-detalle/persona-detalle.component';
import { PersonasComponent } from './personas/personas.component';

import { PersonaService } from './persona.service';
import { MessageService } from './message.service';
import { MessagesComponent } from './messages/messages.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PersonaDetalleComponent,
    PersonasComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, /* Agrego el modulo a la app */
    HttpClientModule
  ],
  providers: [ PersonaService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
