import { Controller, Get, Query, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException } from '@nestjs/common';
import { CreateAccountDTO } from 'src/account/dto/account.dto';

import { CreatePersonDTO, PersonDTO } from "./dto/person.dto";
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
    @Get('/')
    async getPersons(@Res() res: any){
        const person = await this.personService.getPersons()
        return res.status(HttpStatus.OK).json({
            persons: person
        })        
    }

    @Get('/:document_number')
    async getPersonByDocumentNumber(@Res() res: any, @Param('document_number') document_number): Promise<PersonDTO> {
        const person = await this.personService.getPersonByDocNum(document_number)
        if(!person) throw new NotFoundException('Person not found')
        return res.status(HttpStatus.OK).json({
            person: person
        })
    }
}
