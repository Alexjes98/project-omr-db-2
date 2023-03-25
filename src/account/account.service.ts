import { Inject, Injectable } from '@nestjs/common';
import { Account } from './interfaces/account.interface';

import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateEmptyAccountDTO } from './dto/account.dto';
import { PersonService } from 'src/person/person.service';
@Injectable()
export class AccountService {

    constructor(@Inject(PersonService) private readonly personService: PersonService, @InjectModel('Account') private readonly accountModel: Model<Account>) { }

    async createEmptyAccount(createEmptyAccountDTO: CreateEmptyAccountDTO): Promise<Account> {
        const person = await this.personService.getPersonByDocNum(createEmptyAccountDTO.person_doc_number);
        if (!person) return
        const account = new this.accountModel(createEmptyAccountDTO)
        return account.save()
    }

}
