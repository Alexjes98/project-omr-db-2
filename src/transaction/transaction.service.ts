import { Injectable, Inject } from '@nestjs/common';
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";

import { Transaction } from "./interfaces/transaction.interface";
import { CreateTransactionDTO } from "./dto/transaction.dto";
import { AccountService } from 'src/account/account.service';
import { Account } from 'src/account/interfaces/account.interface';

@Injectable()
export class TransactionService {
    constructor(@Inject(AccountService) private readonly accountService: AccountService,@InjectModel('Transaction') private readonly transactionModel: Model<Transaction>) { }

    async getTransactions(): Promise<Transaction[]> {
        const transactions = await this.transactionModel.find()
        return transactions;
    }

    async getTransaction(transactionID: string): Promise<Transaction> {
        const transaction = await this.transactionModel.findById(transactionID);
        return transaction;
    }

    async createTransaction(createTransactionDTO: CreateTransactionDTO): Promise<Account> {
        const account = this.accountService.addTransaction(createTransactionDTO);                
        return account;
    }

    async deleteTransaction(transactionID: string): Promise<Transaction> {
        const deleteProduct = await this.transactionModel.findByIdAndDelete(transactionID);
        return deleteProduct;
    }

}
