import { Component, OnInit } from '@angular/core';
import { Member, MEMBER_DATA } from '../philgo-api/v2/member';
import { Router } from '@angular/router';
import { AuthsessionService } from '../services/auth-session.service';

@Component({
  selector: 'quiz-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  message: string;
  registrationForm : MEMBER_DATA = <MEMBER_DATA> {};

  constructor(
    private user: Member,
    private sessionSrvc: AuthsessionService,
    private route: Router
    ) { 
      this.sessionSrvc.sessionData = this.user.logged();
    }
    

  ngOnInit() {
  }

  onClickRegister(){
    this.user.register( this.registrationForm, res=>{
      this.sessionSrvc.isLogged = true;
      console.log( 'registered', res )
      this.route.navigate(['home']);
    }, e=>{
      console.error(e);
    })
  }

    loadUserData(){
    if(!this.sessionSrvc.isLogged) return;
    //
    this.user.data( userdata => {
      this.registrationForm.id = this.sessionSrvc.sessionData.id;
      this.registrationForm.name = userdata.name;
      this.registrationForm.email = userdata.email;
 
    }, error =>{

      alert(error);
    })
  }
  test(){
  }



}
