import { Module } from '@nestjs/common';
import { CountryController } from './country.controller';
import { CountryService } from './country.service';
import { RegionService } from '@/app/modules/geo/region/region.service';
import { Country } from './country.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Region } from '@/app/modules/geo/region/region.entity';
import { LocationService } from '@/app/modules/geo/location/location.service';
import { Location } from '@/app/modules/geo/location/location.entity';
import { RolesGuard } from '@/app/middleware/guards/roles.guard';
import { APP_GUARD } from '@nestjs/core';
import {CountrySeedService} from '@/app/modules/geo/country/country.seed.service';
import {CacheModule} from '@nestjs/cache-manager';


@Module({
  imports: [TypeOrmModule.forFeature([Country, Region, Location]), CacheModule.register()],
  exports: [TypeOrmModule, CountryService, CountrySeedService],
  controllers: [CountryController],
  providers: [
    CountryService,
    RegionService,
    LocationService,
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
    CountrySeedService,
  ],
})
export class CountryModule {}
