import { Test, TestingModule } from '@nestjs/testing';
import { MongooseModule } from '@nestjs/mongoose';
import { FinancialReleasesController } from './financial_releases.controller';
import { FinancialReleasesService } from './financial_releases.service';
import { closeInMongodConnection, rootMongooseTestModule } from '../../test/mongoDdTest';
import {FinancialReleaseSchema} from '../schemas/financial_releases.schema'

describe('FinancialReleasesController', () => {
  let controller: FinancialReleasesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        rootMongooseTestModule(),
        MongooseModule.forFeature([{ name: 'financialreleases', schema: FinancialReleaseSchema }]),
      ],
      controllers: [FinancialReleasesController],
      providers: [FinancialReleasesService],
    }).compile();

    controller = module.get<FinancialReleasesController>(FinancialReleasesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
