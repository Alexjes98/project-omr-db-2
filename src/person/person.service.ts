import { Injectable } from '@nestjs/common';
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";

import { Person } from "./interfaces/person.interface";
import { CreatePersonDTO } from './dto/person.dto';
import { CreateAccountDTO } from 'src/account/dto/account.dto';
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

    async addPersonAccount(person_document_number: string, createAccountDTO: CreateAccountDTO): Promise<Person> {
        const updatedPersonAccounts = await this.personModel.findOne({document_number: person_document_number }).then((person) => {
            person.accounts.push(createAccountDTO);
            return person.save();
        }).then((savedUser) => {
            return savedUser;
        })
        .catch((error) => {
            console.log("Error al agregar la cuenta: ", error);
            return error;
        });
        return updatedPersonAccounts;
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

    async getPerson(personID: string): Promise<Person> {
        const person = await this.personModel.findById(personID);
        return person;
    }

    async getPersonAccounts(person_document_number: string): Promise<CreateAccountDTO[]> {
        const person = await this.personModel.findOne({document_number: person_document_number }).then((person)=>{
            return person.accounts;
        });
        return person;
    }

}
