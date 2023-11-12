import { v4 as uuid } from 'uuid';
import { HttpException, HttpStatus } from '@nestjs/common';
import AppConfig from '@/config/app-config';
import {diskStorage} from 'multer';
import { extname } from 'path';
import { existsSync, mkdirSync } from 'fs';

// Multer upload options
export const multerOptions = (config: any) => {

  return {
    // Enable file size limits
    limits: {
      fileSize: Math.min(AppConfig.files.maxFileSize, config.maxSize),
    },
    // Check the mimetypes to allow for upload
    fileFilter: (req: any, file: any, cb: any) => {
      if (config.filetypes.includes(file.mimetype)) {
        // Allow storage of file
        cb(null, true);
      } else {
        // Reject file
        cb(new HttpException(`UNSUPPORTED_FILE_TYPE:${extname(file.originalname)}`, HttpStatus.BAD_REQUEST), false);
      }
    },
    // Storage properties
    storage: diskStorage({
    // Destination storage path details
      destination: (req: any, file: any, cb: any) => {
        const uploadPath = `${AppConfig.files.uploadDirectory}/${config.folderTmp || config.folder}`;
        // Create folder if doesn't exist
        if (!existsSync(uploadPath)) {
          mkdirSync(uploadPath);
        }
        cb(null, uploadPath);
      },
      // File modification details
      filename: (req: any, file: any, cb: any) => {
      // Calling the callback passing the random name generated with the original extension name
        cb(null, `${uuid()}${extname(file.originalname)}`);
      },
    })
  };
};