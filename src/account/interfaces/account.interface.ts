export class Account extends Document{
    readonly account_id: string
    readonly person_doc_number: string
    readonly balance: number
    readonly creation_date: Date
    readonly transactions: []  
}