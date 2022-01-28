import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'contracts', pathMatch: 'full' },
  { path: 'contracts', loadChildren: () => import('./features/contracts/contracts.module').then(m => m.ContractsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
