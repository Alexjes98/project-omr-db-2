export interface Transaction extends Document {
    readonly id: number
    readonly origin_account: string
    readonly destination_account: string
    readonly code: string
    readonly amount: number
    readonly transaction_type: string
    readonly created_at: Date
    readonly updated_at: Date
}