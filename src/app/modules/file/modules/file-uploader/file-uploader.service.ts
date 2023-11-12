import {Injectable, NotFoundException} from '@nestjs/common';
import fs from 'fs';

@Injectable ()
export class FileUploaderService {
  static async moveUploadedFile(tmpFilePath: string, finalFilePath: string){
    fs.rename(tmpFilePath, finalFilePath, (error) => {
      if(error){
        throw new NotFoundException();
      }
    });
  }

  static async deleteFile(filePath: string){
    fs.unlink(filePath, (err) => {
      if (err) {
        throw new NotFoundException();
      }
    });
  }
}