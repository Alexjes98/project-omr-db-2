import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body } from '@nestjs/common';
import { CreateEmptyAccountDTO } from './dto/account.dto';

import { AccountService } from './account.service';
import { PersonService } from '../person/person.service';

@Controller('account')
export class AccountController {
    constructor(private accountService: AccountService) { }

    @Get('/')
    getAccountAmount(){
        
    }
    @Post('/')
    async createAccount(@Res() res: any, @Body() createEmptyAccountDTO: CreateEmptyAccountDTO){        
        const account = await this.accountService.createEmptyAccount(createEmptyAccountDTO)
        res.status(HttpStatus.OK).json({
            account: account
        });                      
    }
}
