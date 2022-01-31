export type TableConfig = CellConfig[];

interface CellConfig {
    label: string,
    value: string,
    type: 'date' | 'price' | 'string' | 'action' | 'custom',
    size: number,
}
