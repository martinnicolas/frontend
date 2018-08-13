import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'; /*Para formulario*/

import { AppComponent } from './app.component';
import { PersonaDetalleComponent } from './persona-detalle/persona-detalle.component';
import { PersonasListComponent } from './personas-list/personas-list.component';

import { PersonaService } from './persona.service';
import { MessageService } from './message.service';
import { MessagesComponent } from './messages/messages.component';

import { HttpClientModule } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppRoutingModule } from './app-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { PersonaEditComponent } from './persona-edit/persona-edit.component';
import { PersonaCreateComponent } from './persona-create/persona-create.component';
import { PersonaFormComponent } from './persona-form/persona-form.component';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    AppComponent,
    PersonaDetalleComponent,
    PersonasListComponent,
    MessagesComponent,
    InicioComponent,
    PersonaEditComponent,
    PersonaCreateComponent,
    PersonaFormComponent
  ],
  imports: [
    ModalModule.forRoot(),
    AngularFontAwesomeModule,
    BrowserModule,
    FormsModule, /* Agrego el modulo a la app */
    HttpClientModule, AppRoutingModule
  ],
  providers: [ PersonaService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
