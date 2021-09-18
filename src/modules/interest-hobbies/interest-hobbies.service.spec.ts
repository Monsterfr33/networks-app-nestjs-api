import { Test, TestingModule } from '@nestjs/testing';
import { InterestHobbiesService } from './interest-hobbies.service';

describe('InterestHobbiesService', () => {
  let service: InterestHobbiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InterestHobbiesService],
    }).compile();

    service = module.get<InterestHobbiesService>(InterestHobbiesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
