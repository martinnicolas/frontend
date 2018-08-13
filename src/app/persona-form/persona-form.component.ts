import { Component, OnInit, Input } from '@angular/core';
import { Persona } from '../Persona';
import { PersonaService } from '../persona.service';
import { Provincia } from '../Provincia';
import { Localidad } from '../Localidad';
import { TipoDocumento } from '../TipoDocumento';

@Component({
  selector: 'app-persona-form',
  templateUrl: './persona-form.component.html',
  styleUrls: ['./persona-form.component.css']
})
export class PersonaFormComponent implements OnInit {
  @Input() persona: Persona;
  tipos_documento: TipoDocumento[];
  provincias: Provincia[];
  localidades: Localidad[];
  constructor(
    private personaService: PersonaService
  ) { }

  ngOnInit() {
    this.getTiposDocumento();
    this.getProvincias();    
    if (this.persona.localidad) {
      this.getLocalidades(this.persona.localidad.provincia.id);
    }else {
      this.getLocalidades(Provincia.CHUBUT);
    }
  }

  guardar(): void {
    if (!this.persona.id) {
      this.nuevaPersona();
    }else {
      this.modificarPersona();
    }    
  }

  nuevaPersona() {
    this.personaService.createPersona(this.persona)
    .subscribe(
      persona => this.persona = persona
    );      
  }

  modificarPersona() {
    this.personaService.updatePersona(this.persona)
    .subscribe(
      persona => this.persona = persona
    );      
  }

  changeProvincia(provincia_id: number) {
    this.getLocalidades(provincia_id);
  }

  getTiposDocumento() {
    this.personaService.getTiposDocumento()
      .subscribe(
        tipos_documento => this.tipos_documento = tipos_documento
      );
  }

  getProvincias() {
    this.personaService.getProvincias()
      .subscribe(
        provincias => this.provincias = provincias
      );
  }

  getLocalidades(provincia_id: number) {
    this.personaService.getLocalidades(provincia_id)
      .subscribe(
        localidades => this.localidades = localidades
      );
  }

}
