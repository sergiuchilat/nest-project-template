import {
  Inject,
  Injectable
} from '@nestjs/common';
import { CountryService } from '@/app/modules/geo/country/country.service';
import countries from '@/database/seeds-data/countries.json';

@Injectable()
export class CountrySeedService {
  @Inject(CountryService)
  private readonly countryService: CountryService;

  async seed(){
    for (const country of countries) {
      try {
        await this.countryService.create(
          country,
          {
            props: {
              id: 1
            }
          });
        console.log(`Seeded: ${JSON.stringify(country)}`);
      }catch (e) {
        console.log(`Skipped: ${JSON.stringify(country)}`);
      }
    }
  }

  async clean() {
    console.log('Start cleaning: countries...');
    await this.countryService.truncate();
    console.log('Cleaning complete: countries.');
  }
}
