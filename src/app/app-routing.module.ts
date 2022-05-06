import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovementListComponent } from './components/movement-list/movement-list.component';
import { MovementNewComponent } from './components/movement-new/movement-new.component';
import { AccountHolderComponent } from './components/account-holder/account-holder.component';

const routes: Routes = [

  { path: 'movement-new', component: MovementNewComponent },
  { path: 'movement', component: MovementListComponent },
  { path: 'account-holder', component: AccountHolderComponent },
  { path: '', redirectTo: 'movement', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
