import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddsurveyComponent } from './addsurvey/addsurvey.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
{path:'',component:HomeComponent},
{path:'add',component:AddsurveyComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
