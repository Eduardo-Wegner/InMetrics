import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FinancialReleases, FinancialReleasesDocument } from 'src/schemas/financial_releases.schema';
import {dateSanitizer} from '../utils/sanitizer'
@Injectable()
export class StatementsService {
  constructor(@InjectModel(FinancialReleases.name) private readonly financialReleaseModel: Model<FinancialReleasesDocument>,){}

  async find(date: String): Promise<any> {
    
    const dateAux = dateSanitizer(date);

    const dbResult =  this.financialReleaseModel.find({"releaseDate": {"$gte": new Date(dateAux.startDay),
    "$lte": new Date(dateAux.endDay)}}).exec();
    const statement = {};
    (await dbResult).forEach(element => {
      const releaseDate = element.releaseDate.toString();
      if (!statement[releaseDate]) {
        statement[releaseDate]= {
          "total": 0,
          "credito": [],
          "debito": []
      };
      }
      
        statement[releaseDate].total = element.type === "credito" ?  statement[releaseDate].total + element.value : statement[releaseDate].total - element.value;
        //@ts-ignore
        statement[releaseDate][element.type].push({"date": element.created, 'value': element.value, "description": element.description});
      
      console.log(element);
    });

    return statement;

  }
}
