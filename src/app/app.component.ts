import { Component } from '@angular/core';

export class Persona {
  id: number;
  dni: number;
  apellido: string;
  nombre: string;
}

const PERSONAS: Persona[] = [
  {id: 1, dni: 31343209, apellido: "Moreno", nombre: "Martin" },
  {id: 2, dni: 32343209, apellido: "Gonzalez", nombre: "Nicolas" },
  {id: 3, dni: 33343209, apellido: "Perez", nombre: "Denis" },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Aplicacion en Angularjs';
  selectedPersona: Persona;  
  personas = PERSONAS;
  onSelect(persona: Persona): void {
    this.selectedPersona = persona;
  }
}
