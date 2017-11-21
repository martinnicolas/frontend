import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';
import { PERSONAS } from '../mock-personas';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  personas = PERSONAS;
  
  selectedPersona: Persona; 

  constructor() { }
   
  ngOnInit() {
  }

  onSelect(persona: Persona): void {
    this.selectedPersona = persona;
  }

}
