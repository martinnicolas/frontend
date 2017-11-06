import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'; /*Para formulario*/

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule /* Agrego el modulo a la app */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
