import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';
import { PersonaService } from '../persona.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  selectedPersona: Persona; 
  personas: Persona[];
  persona: Persona;

  constructor(private personaService: PersonaService) { }
   
  ngOnInit() {
    this.getPersonas();
  }

  onSelect(persona: Persona): void {
    this.selectedPersona = persona;
  }

  getPersonas(): void {
    this.personaService.getPersonas()
        .subscribe(personas => this.personas = personas);
  }

  eliminar(persona: Persona): void {
    this.personaService.deletePersona(persona)
    .subscribe(persona => this.persona = persona);;
  }

}
