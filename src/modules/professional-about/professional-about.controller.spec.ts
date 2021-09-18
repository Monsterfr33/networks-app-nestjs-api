import { Test, TestingModule } from '@nestjs/testing';
import { ProfessionalAboutController } from './professional-about.controller';

describe('ProfessionalAboutController', () => {
  let controller: ProfessionalAboutController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProfessionalAboutController],
    }).compile();

    controller = module.get<ProfessionalAboutController>(ProfessionalAboutController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
