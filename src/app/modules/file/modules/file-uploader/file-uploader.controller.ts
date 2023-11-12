import {Controller, Post, Body, UseInterceptors, UploadedFile} from '@nestjs/common';
import {FileInterceptor} from '@nestjs/platform-express';
import { Express } from 'express';
import { CreateFileUploaderDto } from '@/app/modules/file/modules/file-uploader/dto/create-file-uploader.dto';
import { multerOptionsCountryFlag } from '@/app/modules/geo/country/interceptors/country-flag.storage.interceptor.config';

@Controller('file-uploader')
export class FileUploaderController {

  @Post('upload-file-for-countries')
  @UseInterceptors(FileInterceptor('file', multerOptionsCountryFlag))
  async uploadFile(@UploadedFile() file: Express.Multer.File, @Body() fileParams: CreateFileUploaderDto) {
    console.log(`Linked entity id: ${fileParams.entity}`);
    console.log(`File name: ${file.filename}`);
    return {
      entity: fileParams.entity,
      filename: file.filename,
      path: file.path
    };
  }
}
