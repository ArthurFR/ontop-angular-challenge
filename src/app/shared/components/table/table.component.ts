import { Component, Input, TemplateRef } from '@angular/core';
import { TableConfig } from './table.types';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() tableConfig: TableConfig = [];
  @Input() tableData: Record<string, any>[] = [];
  @Input() customTemplate1: TemplateRef<any> | undefined;
  @Input() customTemplate2: TemplateRef<any> | undefined;
}
