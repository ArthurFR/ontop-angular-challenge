import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContractsComponent } from './contracts.component';
import { ContractsRoutingModule } from './contracts-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ContractsFilterComponent } from './components/contracts-filter/contracts-filter.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    ContractsComponent,
    ContractsFilterComponent
  ],
  imports: [
    CommonModule,
    ContractsRoutingModule,
    FlexLayoutModule,
    MatIconModule,
    SharedModule,
  ]
})
export class ContractsModule { }
