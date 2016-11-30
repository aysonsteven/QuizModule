import { Injectable } from '@angular/core';

import { Member, MEMBER_DATA } from '../philgo-api/v2/member';

@Injectable()
export class AuthsessionService {

  isLogged: boolean;
  sessionData;

  constructor() { }

}