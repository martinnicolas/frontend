import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'; /*Para formulario*/

import { AppComponent } from './app.component';
import { PersonaDetalleComponent } from './persona-detalle/persona-detalle.component';
import { PersonasComponent } from './personas-list/personas-list.component';

import { PersonaService } from './persona.service';
import { MessageService } from './message.service';
import { MessagesComponent } from './messages/messages.component';

import { HttpClientModule } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppRoutingModule } from './app-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { PersonaEditComponent } from './persona-edit/persona-edit.component';
import { PersonaCreateComponent } from './persona-create/persona-create.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonaDetalleComponent,
    PersonasComponent,
    MessagesComponent,
    InicioComponent,
    PersonaEditComponent,
    PersonaCreateComponent
  ],
  imports: [
    AngularFontAwesomeModule,
    BrowserModule,
    FormsModule, /* Agrego el modulo a la app */
    HttpClientModule, AppRoutingModule
  ],
  providers: [ PersonaService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
