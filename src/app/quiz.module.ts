import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//routesModule
import { RoutesModule } from './app-routing.module';
//Philgo-API Module
import { PhilgoApiModule } from './philgo-api/v2/philgo-api-module';

import { AuthsessionService } from './services/auth-session.service'

import { AppComponent } from './quiz.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';

import { QuizbuilderComponent } from './quizbuilder/quizbuilder.component';
import { LayoutComponent } from './layout/layout.component';
import { QuiztestComponent } from './quiztest/quiztest.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    RegistrationComponent,
    HomeComponent,
    QuizbuilderComponent,
    LayoutComponent,
    QuiztestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutesModule,
    PhilgoApiModule
  ],
  providers: [ AuthsessionService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
