import { Country } from '../country/country.entity';
import { Location } from '../location/location.entity';
export declare class Region {
    id: number;
    name: string;
    code: string;
    countryId: number;
    createdAt: Date;
    updatedAt: Date;
    country: Country;
    locations: Location[];
}
