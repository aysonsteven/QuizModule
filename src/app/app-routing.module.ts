import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { AuthenticationComponent } from './authentication/authentication.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';

import { QuizbuilderComponent } from './quizbuilder/quizbuilder.component';

const link: Routes = [
    { path: '', redirectTo:'/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'register', component: RegistrationComponent },
    { path: 'login', component: AuthenticationComponent },
    { path: 'quiz-builder', component: QuizbuilderComponent }
]

@NgModule({
    imports: [ RouterModule.forRoot( link ) ],
    exports: [ RouterModule ]
})

export class RoutesModule {}