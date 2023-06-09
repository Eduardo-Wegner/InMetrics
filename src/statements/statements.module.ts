import { Module } from '@nestjs/common';
import { StatementsService } from './statements.service';
import { StatementsController } from './statements.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { FinancialReleases, FinancialReleaseSchema } from '../schemas/financial_releases.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: FinancialReleases.name, schema: FinancialReleaseSchema}])],
  controllers: [StatementsController],
  providers: [StatementsService]
})
export class StatementsModule {}
