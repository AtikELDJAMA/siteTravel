import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AccueilComponent } from './accueil/accueil.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { InscriptionPageComponent } from './inscription-page/inscription-page.component';

const routes: Routes = [
  {path:'', component: AccueilComponent},
  {path : 'login' ,component: LoginPageComponent},
  {path: 'home-page', component: HomePageComponent},
  {path: 'inscription', component: InscriptionPageComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
