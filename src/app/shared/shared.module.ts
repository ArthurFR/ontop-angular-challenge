import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { InputComponent } from './components/input/input.component';
import { ButtonComponent } from './components/button/button.component';
import { SelectComponent } from './components/select/select.component';



@NgModule({
  declarations: [
    InputComponent,
    NavbarComponent,
    ButtonComponent,
    SelectComponent,
  ],
  exports: [
    InputComponent,
    NavbarComponent,
    ButtonComponent,
    SelectComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatIconModule,
  ]
})
export class SharedModule { }
