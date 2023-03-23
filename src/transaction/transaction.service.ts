import { Injectable } from '@nestjs/common';
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";

import { Transaction } from "./interfaces/transaction.interface";
import { CreateTransactionDTO } from "./dto/transaction.dto";

@Injectable()
export class TransactionService {
    constructor(@InjectModel('Transaction') private readonly transactionModel: Model<Transaction>) { }

    async getTransactions(): Promise<Transaction[]> {
        const transactions = await this.transactionModel.find()
        return transactions;
    }

    async getTransaction(transactionID: string): Promise<Transaction> {
        const transaction = await this.transactionModel.findById(transactionID);
        return transaction;
    }

    async createTransaction(createTransactionDTO: CreateTransactionDTO): Promise<Transaction> {
        const transaction = new this.transactionModel(createTransactionDTO);
        return transaction.save();
    }

    async deleteTransaction(transactionID: string): Promise<Transaction> {
        const deleteProduct = await this.transactionModel.findByIdAndDelete(transactionID);
        return deleteProduct;
    }

}
