import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Persona } from './Persona';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Api } from './api.service';
import { Localidad } from './Localidad';
import { Provincia } from './Provincia';
import { TipoDocumento } from './TipoDocumento';

@Injectable()
export class PersonaService extends Api{

  private personasResource = `${this.baseURL}/personas`;
  private tipoDocumentosResource = `${this.baseURL}/tipo_documentos`;
  private provinciasResource = `${this.baseURL}/provincia`;
  private localidadesResource = `${this.baseURL}/localidads`;
  
  constructor(private messageService: MessageService, private http: HttpClient) {
    super();
  }

  getPersonas(): Observable<Persona[]> {
    // Todo: send the message _after_ fetching the heroes
    //this.messageService.add('Listado de personas');
    return this.http.get<Persona[]>(this.personasResource);
  }

  getTiposDocumento(): Observable<TipoDocumento[]> {
    // Todo: send the message _after_ fetching the heroes
    //this.messageService.add('Listado de tipos de documento');
    return this.http.get<TipoDocumento[]>(this.tipoDocumentosResource);
  }

  getProvincias(): Observable<Provincia[]> {
    // Todo: send the message _after_ fetching the heroes
    //this.messageService.add('Listado de provincias');
    return this.http.get<Provincia[]>(this.provinciasResource);
  }

  getLocalidades(provincia_id: number): Observable<Localidad[]> {
    // Todo: send the message _after_ fetching the heroes
    //this.messageService.add('Listado de localidades de una provincia');
    return this.http.get<Localidad[]>(`${this.localidadesResource}/${provincia_id}/provincia`);
  }

  createPersona(persona: Persona): Observable<Persona> {
    this.messageService.add('Persona creada con exito');
    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };
    let params = new URLSearchParams();
    params.set('tipo_documento_id', persona.tipo_documento_id.toString());
    params.set('numero_documento', persona.numero_documento.toString());
    params.set('apellido', persona.apellido.toString());
    params.set('nombre', persona.nombre.toString());
    params.set('localidad_id', persona.localidad_id.toString());
    return this.http.post<Persona>(this.personasResource, params.toString(), options);
  }

  updatePersona(persona: Persona): Observable<Persona> {
    this.messageService.add('Persona actualizada con exito');
    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };
    let params = new URLSearchParams();
    params.set('tipo_documento_id', persona.tipo_documento_id.toString());
    params.set('numero_documento', persona.numero_documento.toString());
    params.set('apellido', persona.apellido.toString());
    params.set('nombre', persona.nombre.toString());
    params.set('localidad_id', persona.localidad_id.toString());
    return this.http.put<Persona>(`${this.personasResource}/${persona.id}`, params.toString(), options);
  }

  deletePersona(persona: Persona): Observable<Persona> {
    this.messageService.add('Persona eliminada con exito');
    return this.http.delete<Persona>(`${this.personasResource}/${persona.id}`);
  }

  getPersona(id: number): Observable<Persona> {
    // TODO: send the message _after_ fetching the hero
    //this.messageService.add(`Se encontro la persona id=${id}`);
    return this.http.get<Persona>(`${this.personasResource}/${id}`);
  }

}
