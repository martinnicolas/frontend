import { Component, OnInit, Input } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-persona-detalle',
  templateUrl: './persona-detalle.component.html',
  styleUrls: ['./persona-detalle.component.css']
})
export class PersonaDetalleComponent implements OnInit {
  @Input() persona: Persona;
  
  constructor() { }

  ngOnInit() {
  }

}
