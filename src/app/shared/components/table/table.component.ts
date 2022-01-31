import { Component, Input, OnInit } from '@angular/core';
import { TableConfig } from './table.types';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() tableConfig: TableConfig = [];
  @Input() tableData: Record<string, any>[] = []
}
