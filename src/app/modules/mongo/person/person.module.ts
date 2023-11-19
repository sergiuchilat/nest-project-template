import { Module } from '@nestjs/common';
import { PersonService } from './person.service';
import { PersonController } from './person.controller';
import {MongooseModule} from '@nestjs/mongoose';
import {Person, personSchema} from '@/app/modules/mongo/person/person.schema';

@Module({
  imports:[MongooseModule.forFeature([{ name: Person.name, schema: personSchema }])],
  controllers: [PersonController],
  providers: [PersonService],
})
export class PersonModule {}
