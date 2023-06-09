export class FinancialRelease {
    releaseDate: Date;
    description: string;
    type: string;
    value: number;
}

export enum operationType {
    DEBITO = 'debito',
    CREDITO = 'credito'
}
