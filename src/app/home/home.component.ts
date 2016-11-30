import { Component, OnInit } from '@angular/core';
import { Member, MEMBER_LOGIN_DATA } from '../philgo-api/v2/member';
import { AuthsessionService } from '../services/auth-session.service';

@Component({
  selector: 'quiz-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( private sessionSrvc: AuthsessionService, private user: Member ) {
    this.sessionSrvc.sessionData = this.user.getLoginData()
   }

  ngOnInit() {
  }

}
