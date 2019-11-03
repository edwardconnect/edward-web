import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './entities/home/home.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

/**
 * RouterModule.forRoot is like combining the previous route (same copy) and return the update module (same copy)
 * or if a module want to add some params before inject
 */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
