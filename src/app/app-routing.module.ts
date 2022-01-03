import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './home/landing-page/landing-page.component';

const routes: Routes = [{ path: 'home', component: LandingPageComponent }];
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [RouterModule.forRoot(routes),
    FormsModule, ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
