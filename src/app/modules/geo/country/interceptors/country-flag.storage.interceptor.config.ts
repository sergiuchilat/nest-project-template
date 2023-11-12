import { multerOptions } from '@/app/modules/file/modules/file-uploader/interceptors/storage.interceptor.config';
// Multer configuration

export const filesConfig = {
  folderTmp: 'tmp',
  folder: 'countries/flags',
  filetypes: ['image/png'],
  maxSize: 1024 * 1024 * 5,
};

// Multer upload options
export const multerOptionsCountryFlag= multerOptions(filesConfig);