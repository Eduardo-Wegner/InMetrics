import {CreateFinancialReleaseDto} from './create-financial_release.dto';

//@ts-ignore
export const CreateFinancialReleaseDtoStub = (): CreateFinancialReleaseDto => {
    return {
        releaseDate: new Date("2022-06-05T00:00:00.000Z"),
        type: "credito",
        value: 90
    }
}