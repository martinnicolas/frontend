import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Persona } from './persona';
import { PERSONAS } from './mock-personas';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class PersonaService {

  private personasUrl = 'http://localhost:8084/backend/personas';  // URL to web api

  constructor(private messageService: MessageService, private http: HttpClient) { }

  getPersonas(): Observable<Persona[]> {
    // Todo: send the message _after_ fetching the heroes
    this.messageService.add('PersonaService: personas encontradas');
    return this.http.get<Persona[]>(this.personasUrl);
  }

}
