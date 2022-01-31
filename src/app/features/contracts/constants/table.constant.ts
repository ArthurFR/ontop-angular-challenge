import { TableConfig } from "src/app/shared/components/table/table.types";

export const contractsTableConfig: TableConfig = [
    {
        label: 'Contractor name',
        type: 'string',
        value: 'contractorName',
        size: 20,
    },
    {
        label: 'Type',
        type: 'string',
        value: 'type',
        size: 15,
    },
    {
        label: 'Start date',
        type: 'date',
        value: 'startDate',
        size: 15,
    },
    {
        label: 'Amount',
        type: 'price',
        value: 'amount',
        size: 15,
    },
    {
        label: 'Status',
        type: 'string',
        value: 'status',
        size: 20,
    },
    {
        label: 'Actions',
        type: 'action',
        value: 'status',
        size: 15,
    },
    
];

export const contractsTableData = [
    {
        contractorName: 'Darlene Robertson',
        type: 'Traditional',
        startDate: new Date(),
        amount: 200,
        status: 'Active'
    },
    {
        contractorName: 'Darlene Robertson',
        type: 'Traditional',
        startDate: new Date(),
        amount: 200,
        status: 'Active'
    },
    {
        contractorName: 'Darlene Robertson',
        type: 'Traditional',
        startDate: new Date(),
        amount: 200,
        status: 'Signature pending'
    }
];