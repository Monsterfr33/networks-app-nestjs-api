import { Test, TestingModule } from '@nestjs/testing';
import { ProfessionalAboutService } from './professional-about.service';

describe('ProfessionalAboutService', () => {
  let service: ProfessionalAboutService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProfessionalAboutService],
    }).compile();

    service = module.get<ProfessionalAboutService>(ProfessionalAboutService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
