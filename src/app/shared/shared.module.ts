import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { InputComponent } from './components/input/input.component';
import { ButtonComponent } from './components/button/button.component';
import { SelectComponent } from './components/select/select.component';
import { TableComponent } from './components/table/table.component';
import { ChatbotIconComponent } from './components/chatbot-icon/chatbot-icon.component';



@NgModule({
  declarations: [
    InputComponent,
    NavbarComponent,
    ButtonComponent,
    SelectComponent,
    TableComponent,
    ChatbotIconComponent,
  ],
  exports: [
    InputComponent,
    NavbarComponent,
    ButtonComponent,
    SelectComponent,
    TableComponent,
    ChatbotIconComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatIconModule,
  ]
})
export class SharedModule { }
