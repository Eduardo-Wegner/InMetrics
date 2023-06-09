import { Test, TestingModule } from '@nestjs/testing';
import { FinancialReleasesController } from './financial_releases.controller';
import { FinancialReleasesService } from './financial_releases.service';

describe('FinancialReleasesController', () => {
  let controller: FinancialReleasesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FinancialReleasesController],
      providers: [FinancialReleasesService],
    }).compile();

    controller = module.get<FinancialReleasesController>(FinancialReleasesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
