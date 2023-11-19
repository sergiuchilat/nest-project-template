import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema({collection: 'persons'})
export class Person {
  @Prop()
    name: string;

  @Prop()
    age: number;

  @Prop()
    email: string;
}

export type PersonDocument = HydratedDocument<Person>
export const personSchema = SchemaFactory.createForClass(Person);