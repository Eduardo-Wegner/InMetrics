import { Test, TestingModule } from '@nestjs/testing';
import { FinancialReleasesService } from './financial_releases.service';
import { CreateFinancialReleaseDtoStub } from './dto/create-financial_release.dto.stub';

describe('FinancialReleasesService', () => {
  let service: FinancialReleasesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports:[],
      providers: [FinancialReleasesService],
    }).compile();

    service = module.get<FinancialReleasesService>(FinancialReleasesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  
  it('should be defined', () => {
   const create = service.create(CreateFinancialReleaseDtoStub());
   console.log(create)
   expect(create).not.toBeNull;
  });
});
