export class Account extends Document{
    readonly account_id: string
    readonly balance: number
    readonly creation_date: Date
}