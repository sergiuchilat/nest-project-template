import { Injectable } from "@nestjs/common";
import { CountrySeedService } from "@/app/modules/geo/country/country.seed.service";
import {UserSeedService} from "@/app/modules/user/modules/user/user.seed.service";

@Injectable()
export class SeedService {

    public constructor(
        private readonly countrySeedService: CountrySeedService,
        private readonly userSeedService: UserSeedService
    ) { }
    public async seed(seedMethod: string) {
        try {
            return await this[seedMethod]();
        } catch (e) {
            throw new Error(`Seeder ${seedMethod} not found.`);
        }
    }

    private async countries() {
        await this.countrySeedService.seed();
    }

    private async users() {
        await this.userSeedService.seed();
    }
}