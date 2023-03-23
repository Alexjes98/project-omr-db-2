import { Schema } from "mongoose";

export const TransactionSchema = new Schema({
    origin_account: String,
    destination_account: String,
    code: String,
    amount: {
        type: Number,
        default: 0
    },
    transaction_type: String,
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    },
});

