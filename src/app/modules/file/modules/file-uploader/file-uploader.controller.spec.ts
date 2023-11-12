import { Test, TestingModule } from '@nestjs/testing';
import { FileUploaderController } from './file-uploader.controller';
import { FileUploaderService } from './file-uploader.service';

describe('FileUploaderController', () => {
  let controller: FileUploaderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FileUploaderController],
      providers: [FileUploaderService],
    }).compile();

    controller = module.get<FileUploaderController>(FileUploaderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
