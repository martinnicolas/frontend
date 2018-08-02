import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonasComponent } from './personas/personas.component';
import { InicioComponent } from './inicio/inicio.component';
import { PersonaDetalleComponent } from './persona-detalle/persona-detalle.component';
import { PersonaEditComponent } from './persona-edit/persona-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'personas', component: PersonasComponent },
  { path: 'personas/show/:id', component: PersonaDetalleComponent },
  { path: 'personas/edit/:id', component: PersonaEditComponent },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [
    [ RouterModule.forRoot(routes) ],
  ],
})
export class AppRoutingModule { }

