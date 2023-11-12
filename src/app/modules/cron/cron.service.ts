import {Injectable} from '@nestjs/common';
import {Cron, CronExpression} from '@nestjs/schedule';
import {FileUploaderService} from '@/app/modules/file/modules/file-uploader/file-uploader.service';
import AppConfig from '@/config/app-config';

@Injectable()
export class CronService {
  @Cron(CronExpression.EVERY_10_SECONDS)
  handleCron() {
    console.log(CronExpression.EVERY_10_SECONDS);
  }

  @Cron(CronExpression.EVERY_10_MINUTES)
  async removeExpiredTempFiles() {
    const tempFilesDirectory = AppConfig.files.uploadTempDirectory;
    const tempFilesLifetime = AppConfig.files.uploadTempLifetime;
    const files = await FileUploaderService.listExpiredFiles(tempFilesDirectory, tempFilesLifetime / 60);
    for(const file of files){
      await FileUploaderService.deleteFile(`${tempFilesDirectory}/${file}`);
      console.log(`File ${file} deleted`);
    }
  }
}