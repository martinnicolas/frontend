import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonasComponent } from './personas/personas.component';
import { InicioComponent } from './inicio/inicio.component';
import { PersonaDetalleComponent } from './persona-detalle/persona-detalle.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'personas', component: PersonasComponent },
  { path: 'personas/edit/:id', component: PersonaDetalleComponent },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [
    [ RouterModule.forRoot(routes) ],
  ],
})
export class AppRoutingModule { }

