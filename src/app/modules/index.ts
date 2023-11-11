import { AuthModule } from './auth/auth.module';
import { CountryModule } from './geo/country/country.module';
import { LocationModule } from './geo/location/location.module';
import { RegionModule } from './geo/region/region.module';
import { UserModule } from './user/user.module';
import { PrismaCrudModule } from '@/app/modules/prisma-crud/prisma-crud.module';

export default [
  AuthModule,
  UserModule,
  CountryModule,
  RegionModule,
  LocationModule,
  PrismaCrudModule
];
