import { Injectable } from '@nestjs/common';
import { CountrySeedService } from '@/app/modules/geo/country/country.seed.service';
import {UserSeedService} from '@/app/modules/user/modules/user/user.seed.service';

@Injectable()
export class SeedService {

  public constructor(
        private readonly countrySeedService: CountrySeedService,
        private readonly userSeedService: UserSeedService
  ) { }

  public async seed(seedMethod: string, cleanInstall = false) {
    try {
      console.log(`Start seeding: ${seedMethod}...`);
      await this[seedMethod](cleanInstall);
      console.log(`Seeding complete: ${seedMethod}.`);
    } catch (e) {
      throw new Error(`Seeder ${seedMethod} not found.`);
    }
  }

  public async seedAll(cleanInstall = false, createAdmin = false) {
    await this.seed('users', cleanInstall);
    if(createAdmin){
      await this.userSeedService.createAdmin();
    }
    await this.seed('countries', cleanInstall);

  }

  private async countries(cleanInstall = false) {
    if(cleanInstall){
      await this.countrySeedService.clean();
    }
    await this.countrySeedService.seed();
  }

  private async users(cleanInstall = false) {
    if(cleanInstall){
      await this.userSeedService.clean();
    }
    await this.userSeedService.seed();
  }
}
