import { Test, TestingModule } from '@nestjs/testing';
import { PrismaCrudService } from './prisma-crud.service';

describe('PrismaService', () => {
  let service: PrismaCrudService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrismaCrudService],
    }).compile();

    service = module.get<PrismaCrudService>(PrismaCrudService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
