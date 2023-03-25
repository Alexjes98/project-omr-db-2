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

    async updatePerson(personID: string, createPersonDTO: CreatePersonDTO): Promise<Person> {
        const updatedPerson = await this.personModel.findByIdAndUpdate(personID, createPersonDTO, { new: true });
        return updatedPerson;
    }

    async deletePersonAccount(personID: string, createPersonDTO: CreatePersonDTO): Promise<Person> {
        const updatedPerson = await this.personModel.findByIdAndUpdate(personID, createPersonDTO, { new: true });
        return updatedPerson;
    }

    async deletePerson(personID: string, createPersonDTO: CreatePersonDTO): Promise<Person> {
        const updatedPerson = await this.personModel.findByIdAndUpdate(personID, createPersonDTO, { new: true });
        return updatedPerson;
    }

    async getPersons(): Promise<Person[]> {
        const persons = await this.personModel.find()
        return persons;
    }

    async getPersonByDocNum(document_number: string) {
        const person = await this.personModel.findOne({document_number: document_number});
        return person;        
    }
}
