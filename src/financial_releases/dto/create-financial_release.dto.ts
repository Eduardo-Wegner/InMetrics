import {
    IsDate,
    IsNotEmpty,
    IsString,
    IsNumber,
    IsEnum,
    MaxLength,
    isNumber,
    IsDateString,
} from 'class-validator';

import {operationType} from '../entities/financial_release.entity'

export class CreateFinancialReleaseDto {
    @IsDateString()
    releaseDate: Date;

    @IsEnum(operationType)
    type: string;

    @IsNumber()
    value: number;
}
