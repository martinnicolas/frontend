import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonasListComponent } from './personas-list/personas-list.component';
import { InicioComponent } from './inicio/inicio.component';
import { PersonaDetalleComponent } from './persona-detalle/persona-detalle.component';
import { PersonaEditComponent } from './persona-edit/persona-edit.component';
import { PersonaCreateComponent } from './persona-create/persona-create.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'personas', component: PersonasListComponent },
  { path: 'personas/show/:id', component: PersonaDetalleComponent },
  { path: 'personas/edit/:id', component: PersonaEditComponent },
  { path: 'personas/new', component: PersonaCreateComponent },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [
    [ RouterModule.forRoot(routes) ],
  ],
})
export class AppRoutingModule { }

