import { CreateTransactionDTO } from "src/transaction/dto/transaction.dto"

export class Account extends Document{
    readonly account_id: string
    readonly person_doc_number: string
    balance: number
    readonly creation_date: Date
    readonly transactions: CreateTransactionDTO[]  
}