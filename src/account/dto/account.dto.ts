import { Schema } from "mongoose"

export class CreateAccountDTO {
    account_id: string
    person_doc_number: string    
    balance: number
    creation_date: Date
    transactions: []
}

export class CreateEmptyAccountDTO {
    account_id: string
    person_doc_number: string
    balance: number
    creation_date: Date
}

export class AddTransactionDTO{
    readonly transaction_code: string
    readonly sourceAccount: { type: Schema, ref: string, required: boolean}
    readonly targetAccount: { type: Schema, ref: string, required: boolean}
    readonly transaction_type: string 
    readonly amount: number 
    readonly created_at: Date
    readonly updated_at: Date
}
