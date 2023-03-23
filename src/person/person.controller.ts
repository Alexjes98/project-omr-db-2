import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body } from '@nestjs/common';

import { CreatePersonDTO } from "./dto/person.dto";
import { PersonService } from './person.service';

@Controller('person')
export class PersonController {

    constructor(private personService: PersonService) { }

    @Post('/create')
    async createPerson(@Res() res: any, @Body() createPersonDTO: CreatePersonDTO) {
        
        const person = await this.personService.createPerson(createPersonDTO)
        res.status(HttpStatus.OK).json({
            message: 'received',
            transaction: person
        });
    }

    @Get('/')
    async getPersons(@Res() res: any){
        const persons = await this.personService.getPersons();
        return res.status(HttpStatus.OK).json({
            persons: persons
        })
    }

}
