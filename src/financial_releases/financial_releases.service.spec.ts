import { Test, TestingModule } from '@nestjs/testing';
import { FinancialReleasesService } from './financial_releases.service';

describe('FinancialReleasesService', () => {
  let service: FinancialReleasesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FinancialReleasesService],
    }).compile();

    service = module.get<FinancialReleasesService>(FinancialReleasesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
