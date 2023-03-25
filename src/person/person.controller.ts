import { Controller, Get, Query, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException } from '@nestjs/common';
import { CreateAccountDTO } from 'src/account/dto/account.dto';

import { CreatePersonDTO } from "./dto/person.dto";
import { PersonService } from './person.service';

@Controller('person')
export class PersonController {

    constructor(private personService: PersonService) { }

    @Post('/create')
    async createPerson(@Res() res: any, @Body() createPersonDTO: CreatePersonDTO) {
        const person = await this.personService.createPerson(createPersonDTO)
        res.status(HttpStatus.OK).json({
            person: person
        });
    }

    @Post('/update')
    async updatePerson(@Res() res: any, @Body() createPersonDTO: CreatePersonDTO) {
        const person = await this.personService.createPerson(createPersonDTO)
        res.status(HttpStatus.OK).json({
            person: person
        });
    }

    @Post('/add_account/:document_number')
    async addAccount(@Res() res: any, @Param('document_number') document_number) {
        const account = new CreateAccountDTO;
        const person = await this.personService.addPersonAccount(document_number, account)
        if(!person) throw new NotFoundException('No person found')
        res.status(HttpStatus.OK).json({
            account: account,
            person: person            
        });
    }    

    @Get('/')
    async getPersons(@Res() res: any) {
        const persons = await this.personService.getPersons();
        return res.status(HttpStatus.OK).json({
            persons: persons
        })
    }

    @Get('/:document_number')
    async getPersonAccounts(@Res() res: any, @Param('document_number') document_number) {
        const personAccounts = await this.personService.getPersonAccounts(document_number)
        res.status(HttpStatus.OK).json({
            account: personAccounts,            
        });
    }

}
