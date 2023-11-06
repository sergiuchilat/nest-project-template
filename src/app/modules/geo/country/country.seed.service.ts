import {
  Inject,
  Injectable
} from '@nestjs/common';
import { CountryService } from "@/app/modules/geo/country/country.service";
import countries from '@/database/seeds-data/countries.json'

@Injectable()
export class CountrySeedService {
  @Inject(CountryService)
  private readonly countryService: CountryService;
  constructor() {}

  async seed(){
      for (const country of countries) {
          try {
              await this.countryService.create(
                  country,
                  {
                      props: {
                          id: 1
                      }
                  })
              console.log(`Seeded: ${JSON.stringify(country)}`);
          }catch (e) {
              console.log(`Skipped: ${JSON.stringify(country)}`);
          }
      }
  }
}
