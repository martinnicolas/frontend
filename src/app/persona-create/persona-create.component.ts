import { Component, OnInit, Input } from '@angular/core';
import { PersonaService } from '../persona.service';
import { Persona } from '../Persona';
import { Provincia } from '../Provincia';
import { Localidad } from '../Localidad';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-persona-create',
  templateUrl: './persona-create.component.html',
  styleUrls: ['./persona-create.component.css']
})
export class PersonaCreateComponent implements OnInit {
  persona: Persona;
  constructor() { }

  ngOnInit() {
    this.persona = new Persona();
  }

}
