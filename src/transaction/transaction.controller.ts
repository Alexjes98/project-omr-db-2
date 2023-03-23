import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body } from '@nestjs/common';

import { CreateTransactionDTO } from './dto/transaction.dto';
import { TransactionService } from "./transaction.service";

@Controller('transaction')
export class TransactionController {

    constructor(private transactionService: TransactionService) { }

    @Post('/create')
    async createPost(@Res() res: any, @Body() createTransactionDTO: CreateTransactionDTO) {
        
        const transaction = await this.transactionService.createTransaction(createTransactionDTO)
        res.status(HttpStatus.OK).json({
            message: 'received',
            transaction: transaction
        });
    }
    @Get('/')
    async getTransactions(@Res() res: any){
        const transactions = await this.transactionService.getTransactions();
        return res.status(HttpStatus.OK).json({
            transactions: transactions
        })
    }
    @Get('/transactions')
    getTransaction(@Res() res: any) {
        res.status(HttpStatus.OK).json({
            message: 'received'
        })
    }
}
