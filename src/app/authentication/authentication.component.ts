import { Component, OnInit } from '@angular/core';
import { Member, MEMBER_DATA, MEMBER_LOGIN_DATA } from '../philgo-api/v2/member';
import { Router } from '@angular/router';
import { AuthsessionService } from '../services/auth-session.service';

@Component({
  selector: 'quiz-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {
  status : { loader?; error?; success?; } = {};
  loading:boolean = true;
  loginForm: MEMBER_LOGIN_DATA = <MEMBER_LOGIN_DATA> {};
  constructor(
    private user: Member,
    private routes: Router,
    private sessionSrvc: AuthsessionService
  ) { }

  ngOnInit() {
  }

  onClickLogin(){
    this.status = { 'loader' : true };
    console.log('onClickLogin()')
    this.user.login( this.loginForm , res=> {
      console.log('login success: ', res );
      this.status = { 'success': 'login success' }
    }, error=>{
      console.log( "login error "+ error );
    },()=>{
      this.status.loader = false; 
    })
  }
}
