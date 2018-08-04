import { Component, OnInit, Input } from '@angular/core';
import { PersonaService } from '../persona.service';
import { Persona } from '../persona';

@Component({
  selector: 'app-persona-create',
  templateUrl: './persona-create.component.html',
  styleUrls: ['./persona-create.component.css']
})
export class PersonaCreateComponent implements OnInit {
  @Input() persona: Persona;
  constructor(
    private personaService: PersonaService
  ) { }

  ngOnInit() {
    this.persona = new Persona();
  }

  guardar(): void {
    this.personaService.createPersona(this.persona)
      .subscribe(persona => this.persona = persona);      
  }

}
