import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './pages/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { PagesComponent } from './pages/pages.component';
import { ProfessionalsComponent } from './pages/professionals/professionals.component';
import { TrusteesComponent } from './pages/trustees/trustees.component';

const routes: Routes = [{
  path:'',component:PagesComponent,
  children: [
    {path:'home',component:HomeComponent},
    {path:'',component:ProfessionalsComponent},   
    {path:'trustees',component:TrusteesComponent},
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
