import { NgModule } from "@angular/core";
import { Routes,RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { CurrentTrainingComponent } from './training/current-training/current-training.component';
import { NewTrainingComponent } from './training/new-training/new-training.component';
import { PastTrainingComponent } from './training/past-training/past-training.component';
import { TrainingComponent } from './training/training.component';

const routes:Routes=[
    {path :'',component:WelcomeComponent},
    {path :'login',component:LoginComponent },
    {path :'signup',component:SignupComponent},
    {path :'training',component:TrainingComponent}
];
 @NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule {}