import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OperationsComponent} from './operations/operations.component';
import {StatechangeComponent} from './statechange/statechange.component';

const routes: Routes = [
  { path: 'states', component: StatechangeComponent },
  { path: 'operations', component: OperationsComponent },
  { path: '',   redirectTo: '/states', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
