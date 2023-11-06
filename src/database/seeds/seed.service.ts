import { Injectable } from "@nestjs/common";
import {CountrySeedService} from "@/app/modules/geo/country/country.seed.service";

@Injectable()
export class SeedService {
    public constructor(private readonly countrySeedService: CountrySeedService) { }

    public async seedCountries() {
        await this.countrySeedService.seed();
    }
}