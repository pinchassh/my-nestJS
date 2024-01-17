import { Test, TestingModule } from '@nestjs/testing';
import { ZmanimService } from './zmanim.service';

describe('ZmanimService', () => {
  let service: ZmanimService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ZmanimService],
    }).compile();

    service = module.get<ZmanimService>(ZmanimService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
