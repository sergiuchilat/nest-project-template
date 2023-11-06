import {
  Inject,
  Injectable
} from '@nestjs/common';
import {CountryService} from "@/app/modules/geo/country/country.service";

@Injectable()
export class CountrySeedService {
  @Inject(CountryService)
  private readonly countryService: CountryService;
  constructor() {}


  async seed(){
    await this.countryService.create(
        {
          name: 'United States',
          code: 'US'
        },
        {
            props: {
                id: 1
            }
        })
  }
}
