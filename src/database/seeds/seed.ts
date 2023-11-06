import { NestFactory } from "@nestjs/core";

import { SeedService } from "./seed.service";
import {AppModule} from "@/app/app.module";
import * as process from "process";
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

const bootstrap = async () => {
    const app = await NestFactory.create(AppModule);
    const seedService = app.get(SeedService);
    const seederName: string = 'countries';
    if(argv.name == 'countries') {
        await seedService.seedCountries();
    } else{
        throw new Error(`Seeder ${seederName} not found.`);
    }

    await app.close();

    console.log("Seed complete.");
}

bootstrap();