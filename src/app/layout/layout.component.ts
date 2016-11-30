import { Component, OnInit } from '@angular/core';
import { AuthsessionService } from '../services/auth-session.service';
import { Member, MEMBER_DATA } from '../philgo-api/v2/member';
import { Router } from '@angular/router';

@Component({
  selector: 'quiz-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor( 
    private sessionSrvc: AuthsessionService, 
    private user: Member ,
    private route: Router
    ) { }

  ngOnInit() {
  }

  onClickLogout(){
    this.user.logout();
    this.sessionSrvc.isLogged = false;
    this.sessionSrvc.sessionData = null;
    this.route.navigate(['home']);
  }

}
