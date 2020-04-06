import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ItemDetailsComponent } from './item-details/item-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'items', redirectTo: ''},
  { path: 'items/:id', component: ItemDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
