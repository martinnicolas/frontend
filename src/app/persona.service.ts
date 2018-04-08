import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Persona } from './persona';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class PersonaService {

  private personasUrl = 'http://localhost:8084/backend/personas';  // URL to web api

  constructor(private messageService: MessageService, private http: HttpClient) { }

  getPersonas(): Observable<Persona[]> {
    // Todo: send the message _after_ fetching the heroes
    this.messageService.add('PersonaService: listado de personas');
    return this.http.get<Persona[]>(this.personasUrl);
  }

  createPersona(persona: Persona): Observable<Persona> {
    this.messageService.add('PersonaService: Persona creada');
    let params = new URLSearchParams();
    params.set('dni', persona.dni.toString());
    params.set('apellido', persona.apellido.toString());
    params.set('nombre', persona.nombre.toString());
    return this.http.post<Persona>(this.personasUrl, params);
  }

  updatePersona(persona: Persona): Observable<Persona> {
    this.messageService.add('PersonaService: Persona actualizada');
    let options = {
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };
    let params = new URLSearchParams();
    params.set('dni', persona.dni.toString());
    params.set('apellido', persona.apellido.toString());
    params.set('nombre', persona.nombre.toString());
    return this.http.put<Persona>(`${this.personasUrl}/${persona.id}`, params.toString(), options);
  }

  deletePersona(persona: Persona): Observable<Persona> {
    this.messageService.add('PersonaService: Persona eliminada');
    return this.http.delete<Persona>(`${this.personasUrl}/${persona.id}`);
  }

}
