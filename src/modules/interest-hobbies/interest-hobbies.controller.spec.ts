import { Test, TestingModule } from '@nestjs/testing';
import { InterestHobbiesController } from './interest-hobbies.controller';

describe('InterestHobbiesController', () => {
  let controller: InterestHobbiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InterestHobbiesController],
    }).compile();

    controller = module.get<InterestHobbiesController>(InterestHobbiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
