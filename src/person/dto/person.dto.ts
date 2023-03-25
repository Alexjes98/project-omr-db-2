import { Account } from "src/account/interfaces/account.interface"

export class CreatePersonDTO{
    readonly person_id: string
    readonly name: string
    readonly last_name: string
    readonly document_number: string
    readonly phone: string
    readonly accounts: Account[]
}