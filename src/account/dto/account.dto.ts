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