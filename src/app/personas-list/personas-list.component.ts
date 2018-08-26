import { Component, OnInit, TemplateRef } from '@angular/core';
import { Persona } from '../Persona';
import { PersonaService } from '../persona.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-personas',
  templateUrl: './personas-list.component.html',
  styleUrls: ['./personas-list.component.css']
})
export class PersonasListComponent implements OnInit {

  personas: Persona[];
  persona: Persona;
  modalRef: BsModalRef;
  cargando_personas: boolean;

  constructor(
    private personaService: PersonaService,
    private modalService: BsModalService) { }
   
  ngOnInit() {
    this.getPersonas();
  }

  getPersonas(): void {
    this.cargando_personas = true;
    this.personaService.getPersonas().subscribe(data => {
      this.personas = data;
      this.cargando_personas = false;
    });
  }

  modalEliminar(template: TemplateRef<any>):void {
    this.modalRef = this.modalService.show(template);
  }

  eliminar(persona: Persona): void {
    this.personaService.deletePersona(persona).
      subscribe(data => {
        this.modalRef.hide();
        this.getPersonas();
      });    
  }

}
