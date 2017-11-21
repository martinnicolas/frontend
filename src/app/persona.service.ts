import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Persona } from './persona';
import { PERSONAS } from './mock-personas';
import { MessageService } from './message.service';

@Injectable()
export class PersonaService {

  constructor(private messageService: MessageService) { }

  getPersonas(): Observable<Persona[]> {
    // Todo: send the message _after_ fetching the heroes
    this.messageService.add('PersonaService: personas encontradas')
    return of(PERSONAS);
  }

}
