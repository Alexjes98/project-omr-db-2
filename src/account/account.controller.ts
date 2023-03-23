import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body } from '@nestjs/common';

@Controller('account')
export class AccountController {
    @Get('/')
    getAccountAmount(){
        
    }
}
