import { Component } from '@angular/core';
import { contractsTableConfig, contractsTableData } from './constants/table.constant';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.scss']
})
export class ContractsComponent {
  tableConfig = contractsTableConfig;
  tableData = contractsTableData;
}
