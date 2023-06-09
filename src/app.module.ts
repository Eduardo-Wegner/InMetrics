import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { StatementsModule } from './statements/statements.module';
import { FinancialReleasesModule } from './financial_releases/financial_releases.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        uri:`${config.get<string>('MONGODB_URL')}:${config.get<string>('MONGODB_PORT')}/${config.get<string>('MONGODB_DATABASE')}`,
      })
    }),
    StatementsModule,
    FinancialReleasesModule,
    ConfigModule.forRoot({ isGlobal: true })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
