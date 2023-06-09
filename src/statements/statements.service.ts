import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FinancialReleases, FinancialReleasesDocument } from 'src/schemas/financial_releases.schema';
import {dateSanitizer} from '../utils/sanitizer'
import { format } from 'date-fns';
@Injectable()
export class StatementsService {
  constructor(@InjectModel(FinancialReleases.name) private readonly financialReleaseModel: Model<FinancialReleasesDocument>,){}

  async find(date: String): Promise<any> {
    
    const dateAux = dateSanitizer(date);

    const dbResult =  this.financialReleaseModel.find({"releaseDate": {"$gte": new Date(dateAux.startDay),
    "$lte": new Date(dateAux.endDay)}}).exec();
    const statement = {};
    (await dbResult).forEach(element => {
      const formattedDate = format(element.releaseDate, 'dd/MM/yyyy')
      
      if (!statement[formattedDate]) {
        statement[formattedDate]= {
          "total": 0,
          "credito": [],
          "debito": []
      };
      }
      
        statement[formattedDate].total = element.type === "credito" ?  statement[formattedDate].total + element.value : statement[formattedDate].total - element.value;
        //@ts-ignore
        statement[formattedDate][element.type].push({"date": format(element.created, 'dd/MM/yyyy - HH:mm'), 'value': element.value, "description": element.description});      
    });
    
    if (Object.keys(statement).length > 1) {
      statement["totalPeriodo"] = 0;
      await Object.entries(statement).forEach((entry) => {
        const [key, value] = entry;
        if (key !== "totalPeriodo") {
          //@ts-ignore
          statement["totalPeriodo"] = statement["totalPeriodo"] + value.total;
        }
      });
    }

    return statement;

  }
}
