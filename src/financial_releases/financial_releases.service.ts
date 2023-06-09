import { Injectable } from '@nestjs/common';
import { CreateFinancialReleaseDto } from './dto/create-financial_release.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {FinancialReleases ,FinancialReleasesDocument} from '../schemas/financial_releases.schema'

@Injectable()
export class FinancialReleasesService {
  
  constructor(@InjectModel(FinancialReleases.name) private readonly financialReleaseModel: Model<FinancialReleasesDocument>,){}
  async create(createFinancialReleaseDto: CreateFinancialReleaseDto) {
    const financialRelease = new this.financialReleaseModel(createFinancialReleaseDto);
    return financialRelease.save();
  }

  remove(id: number) {
    return `This action removes a #${id} financialRelease`;
  }
}
