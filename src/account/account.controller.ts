import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param } from '@nestjs/common';
import { CreateEmptyAccountDTO } from './dto/account.dto';

import { AccountService } from './account.service';
import { PersonService } from '../person/person.service';
import { Account } from './interfaces/account.interface';

@Controller('account')
export class AccountController {
    constructor(private accountService: AccountService) { }
    
    @Get('/:account_id')
    async getAccountTransactions(@Res() res: any,@Param('account_id') account_id: string){
        const account = await this.accountService.getAccountTransactions(account_id);
        res.status(HttpStatus.OK).json({
            transactions: account.transactions
        });
    }

    @Get('person/:person_number')
    async getPersonAccounts(@Res() res: any, @Param('person_number') person_number: string){
        const accounts = await this.accountService.getPersonAccounts(person_number);
        res.status(HttpStatus.OK).json({
            accounts: accounts
        })
    }

    @Post('/')
    async createAccount(@Res() res: any, @Body() createEmptyAccountDTO: CreateEmptyAccountDTO){        
        const account = await this.accountService.createEmptyAccount(createEmptyAccountDTO)
        res.status(HttpStatus.OK).json({
            account: account
        });                      
    }
}
