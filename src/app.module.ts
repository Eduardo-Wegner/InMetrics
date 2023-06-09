import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { StatementsModule } from './statements/statements.module';
import { FinancialReleasesModule } from './financial_releases/financial_releases.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/challenge'),
    StatementsModule,
    FinancialReleasesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
