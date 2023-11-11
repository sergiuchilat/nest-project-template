import { NestFactory } from '@nestjs/core';
import { SeedService } from './seed.service';
import {AppModule} from '@/app/app.module';
import * as process from 'process';
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const argv = yargs(hideBin(process.argv)).argv;

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);
  const seedService = app.get(SeedService);
  const seederNameArg: string = argv.name;

  if(argv.install) {
    try {
      console.log('Start seeding: all...');
      await seedService.seedAll(argv.clean, argv.create_admin);
      console.log('Seeding complete: all.');
    } catch (e){
      console.log('Error: Unable to install app');
    }

    await app.close();
    return;
  }

  if(!argv.name){
    try {
      console.log('Start seeding: all...');
      await seedService.seedAll();
      console.log('Seeding complete: all.');
    } catch (e){
      console.log('Error: Unable to seed all');
    }

    await app.close();
    return;
  }

  const seederNames = seederNameArg.split(',');
  for (const seederName of seederNames) {
    try {
      await seedService.seed(seederName, argv.clean);
    } catch (e) {
      console.log(`Seeder ${seederName} not found.`);
    }
  }

  await app.close();
};

(async () => {
  console.log('App bootstrap started');
  await bootstrap();
  console.log('App bootstrap finished');
})();
