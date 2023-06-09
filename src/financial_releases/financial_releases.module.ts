import { Module } from '@nestjs/common';
import { FinancialReleasesService } from './financial_releases.service';
import { FinancialReleasesController } from './financial_releases.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {FinancialReleases, FinancialReleaseSchema} from '../schemas/financial_releases.schema'

@Module({
  imports: [MongooseModule.forFeature([{name: FinancialReleases.name, schema: FinancialReleaseSchema}])],
  controllers: [FinancialReleasesController],
  providers: [FinancialReleasesService]
})
export class FinancialReleasesModule {}
