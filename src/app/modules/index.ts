import { AuthModule } from './auth/auth.module';
import { CountryModule } from './geo/country/country.module';
import { LocationModule } from './geo/location/location.module';
import { RegionModule } from './geo/region/region.module';
import { UserModule } from './user/user.module';
import { CachedModule } from '@/app/modules/cached/cached.module';
import { FileUploaderModule } from '@/app/modules/file/modules/file-uploader/file-uploader.module';

export default [
  AuthModule,
  UserModule,
  CountryModule,
  RegionModule,
  LocationModule,
  CachedModule,
  FileUploaderModule
];
