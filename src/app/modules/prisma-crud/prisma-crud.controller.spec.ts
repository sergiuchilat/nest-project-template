import { Test, TestingModule } from '@nestjs/testing';
import { PrismaCrudController } from './prisma-crud.controller';
import { PrismaCrudService } from './prisma-crud.service';

describe('PrismaController', () => {
  let controller: PrismaCrudController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PrismaCrudController],
      providers: [PrismaCrudService],
    }).compile();

    controller = module.get<PrismaCrudController>(PrismaCrudController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
