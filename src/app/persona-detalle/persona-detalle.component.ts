import { Component, OnInit, Input } from '@angular/core';
import { Persona } from '../persona';
import { PersonaService } from '../persona.service';

@Component({
  selector: 'app-persona-detalle',
  templateUrl: './persona-detalle.component.html',
  styleUrls: ['./persona-detalle.component.css']
})
export class PersonaDetalleComponent implements OnInit {
  @Input() persona: Persona;
  
  constructor(private personaService: PersonaService) { }

  ngOnInit() {
  }

  guardar(): void {
    this.personaService.updatePersona(this.persona)
      .subscribe(persona => this.persona = persona);      
  }

}
