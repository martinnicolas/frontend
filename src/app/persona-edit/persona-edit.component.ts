import { Component, OnInit, Input } from '@angular/core';
import { Persona } from '../Persona';
import { PersonaService } from '../persona.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-persona-edit',
  templateUrl: './persona-edit.component.html',
  styleUrls: ['./persona-edit.component.css']
})
export class PersonaEditComponent implements OnInit {
  persona: Persona;
  constructor(
    private route: ActivatedRoute,
    private personaService: PersonaService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getPersona();
  }

  getPersona(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.personaService.getPersona(id)
      .subscribe(
        persona => this.persona = persona
      );
  }

  volver(): void {
    this.location.back();
  }

}
