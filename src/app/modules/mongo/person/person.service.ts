import { Injectable } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import {InjectModel} from '@nestjs/mongoose';
import {Person} from '@/app/modules/mongo/person/person.schema';
import {Model} from 'mongoose';

@Injectable()
export class PersonService {
  constructor(@InjectModel(Person.name) private readonly personModel: Model<Person>) {
  }
  create(createPersonDto: CreatePersonDto) {
    const createdPerson = new this.personModel(createPersonDto);
    return createdPerson.save();
  }

  findAll() {
    return this.personModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} person`;
  }

  update(id: number, updatePersonDto: UpdatePersonDto) {
    console.log(updatePersonDto);
    return `This action updates a #${id} person`;
  }

  remove(id: number) {
    return `This action removes a #${id} person`;
  }
}
