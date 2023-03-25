import { Schema } from "mongoose"

export interface Transaction extends Document {
    readonly transaction_code: string
    readonly sourceAccount: { type: Schema, ref: string, required: boolean}
    readonly targetAccount: { type: Schema, ref: string, required: boolean}
    readonly transaction_type: string 
    readonly amount: number 
    readonly created_at: Date
    readonly updated_at: Date
}