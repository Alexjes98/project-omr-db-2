import { CreateAccountDTO } from "src/account/dto/account.dto"
import { Account } from "src/account/interfaces/account.interface"

export class Person extends Document{
    readonly person_id: string
    readonly name: string
    readonly last_name: string
    readonly document_number: string
    readonly phone: string
}