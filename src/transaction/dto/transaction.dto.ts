
export class CreateTransactionDTO {
    readonly transaction_code: string
    readonly source_account: string
    readonly target_account: string
    readonly transaction_type: string 
    readonly amount: number 
    readonly created_at: Date
    readonly updated_at: Date
}