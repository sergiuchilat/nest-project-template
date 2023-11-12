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

  static async listFiles(dirPath: string){
    return fs.readdirSync(dirPath);
  }

  static async listExpiredFiles(dirPath: string, timeout: number){
    const files = await this.listFiles(dirPath);
    const now = new Date();
    const result = [];
    for(const file of files){
      const fileStat = fs.statSync(`${dirPath}/${file}`);
      const fileDate = new Date(fileStat.mtime);
      const diff = now.getTime() - fileDate.getTime();
      const diffInMinutes = Math.round(diff / 60000);
      if(diffInMinutes > timeout){
        result.push(file);
      }
    }
    return result;
  }
}