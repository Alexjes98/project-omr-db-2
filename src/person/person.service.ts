import { Injectable } from '@nestjs/common';
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";

import { Person } from "./interfaces/person.interface";
import { CreatePersonDTO } from './dto/person.dto';
@Injectable()
export class PersonService {
    constructor(@InjectModel('Person') private readonly personModel: Model<Person>) { }

    async createPerson(createPersonDTO: CreatePersonDTO): Promise<Person> {
        const person = new this.personModel(createPersonDTO);
        return person.save();
    }

    async getPersons(): Promise<Person[]> {
        const persons = await this.personModel.find()
        return persons;
    }

    async getPerson(personID: string): Promise<Person> {
        const person = await this.personModel.findById(personID);
        return person;
    }
}
