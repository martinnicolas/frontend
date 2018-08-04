import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Persona } from './persona';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Api } from './api.service';

@Injectable()
export class PersonaService extends Api{

  private personasResource = `${this.baseURL}/personas`;
  
  constructor(private messageService: MessageService, private http: HttpClient) {
    super();
  }

  getPersonas(): Observable<Persona[]> {
    // Todo: send the message _after_ fetching the heroes
    //this.messageService.add('Listado de personas');
    return this.http.get<Persona[]>(this.personasResource);
  }

  createPersona(persona: Persona): Observable<Persona> {
    this.messageService.add('Persona creada con exito');
    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };
    let params = new URLSearchParams();
    params.set('dni', persona.dni.toString());
    params.set('apellido', persona.apellido.toString());
    params.set('nombre', persona.nombre.toString());
    return this.http.post<Persona>(this.personasResource, params.toString(), options);
  }

  updatePersona(persona: Persona): Observable<Persona> {
    this.messageService.add('Persona actualizada con exito');
    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };
    let params = new URLSearchParams();
    params.set('dni', persona.dni.toString());
    params.set('apellido', persona.apellido.toString());
    params.set('nombre', persona.nombre.toString());
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
