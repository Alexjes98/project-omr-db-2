import { HttpException, Inject, Injectable } from '@nestjs/common';
import { Account } from './interfaces/account.interface';

import { InjectModel, Schema } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateEmptyAccountDTO } from './dto/account.dto';
import { PersonService } from 'src/person/person.service';
import { CreateTransactionDTO } from 'src/transaction/dto/transaction.dto';
@Injectable()
export class AccountService {

    constructor(@Inject(PersonService) private readonly personService: PersonService, @InjectModel('Account') private readonly accountModel: Model<Account>) { }

    async getAccountTransactions(account_id: string): Promise<Account> {
        const account = await this.accountModel.findOne({account_id: account_id})
        return account
    }

    async getPersonAccounts(person_number: string): Promise<Account[]>{
        const accounts = await this.accountModel.find({person_doc_number: person_number})
        return accounts
    }

    async createEmptyAccount(createEmptyAccountDTO: CreateEmptyAccountDTO): Promise<Account> {
        const person = await this.personService.getPersonByDocNum(createEmptyAccountDTO.person_doc_number);
        if (!person) return
        const account = new this.accountModel(createEmptyAccountDTO)
        return account.save()
    }

    async addTransaction(createTransactionDTO: CreateTransactionDTO): Promise<Account> {
        if (createTransactionDTO.transaction_type === "transfer") {
            const originAccount = await this.accountModel.findOne({ account_id: createTransactionDTO.source_account }).then((account) => {
                account.transactions.push(createTransactionDTO);
                if(account.balance - createTransactionDTO.amount < 0){
                    throw new HttpException('Insufficient funds', 400);
                }
                account.balance -= createTransactionDTO.amount;
                return account.save();
            });
            const targetAccount = await this.accountModel.findOne({ account_id: createTransactionDTO.target_account }).then((account) => {
                account.transactions.push(createTransactionDTO);
                account.balance += createTransactionDTO.amount;
                return account.save();
            });
            return originAccount;
        }

        const account = await this.accountModel.findOne({ account_id: createTransactionDTO.target_account}).then((account) => {
            if(createTransactionDTO.transaction_type === "withdraw" && account.balance - createTransactionDTO.amount < 0){
                throw new HttpException('Insufficient funds', 400);                
            }
            account.transactions.push(createTransactionDTO);
            account.balance += this.manageTransactionType(createTransactionDTO.transaction_type, createTransactionDTO.amount);
            return account.save();
        });
        return account
    }

    manageTransactionType(transaction_type, amount){
        if(transaction_type === "deposit") return amount;
        return -amount;
    }



}
