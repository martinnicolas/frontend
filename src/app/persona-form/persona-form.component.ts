import { Component, OnInit, Input } from '@angular/core';
import { Persona } from '../Persona';
import { PersonaService } from '../persona.service';
import { Provincia } from '../Provincia';
import { Localidad } from '../Localidad';
import { TipoDocumento } from '../TipoDocumento';
import { Router } from '@angular/router';

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
  guardando: boolean;

  constructor(
    private personaService: PersonaService,
    private router: Router
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
      this.crearPersona();
    }else {
      this.modificarPersona();
    }    
  }

  crearPersona() {
    this.guardando = true;
    this.personaService.createPersona(this.persona)
    .subscribe(data => {
      this.persona = data;
      this.guardando = false;
      this.router.navigate([`/personas/show/${this.persona.id}`]);
    });      
  }

  modificarPersona() {
    this.guardando = true;
    this.personaService.updatePersona(this.persona)
    .subscribe(data => {
      this.persona = data;
      this.guardando = false;
      this.router.navigate([`/personas/show/${this.persona.id}`]);
    });      
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
