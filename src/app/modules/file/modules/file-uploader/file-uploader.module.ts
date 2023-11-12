import { Module } from '@nestjs/common';
import { FileUploaderController } from './file-uploader.controller';

@Module({
  controllers: [FileUploaderController],
  providers: [],
})
export class FileUploaderModule {}
