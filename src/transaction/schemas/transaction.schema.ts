import { Schema } from "mongoose";

export const TransactionSchema = new Schema({
    transaction_code: String,
    source_account: {
        type: String,
        default: "0"
    },
    target_account: String,
    transaction_type: 
    {
        type: String,
        default: "deposit"
    },    
    amount: {
        type: Number,
        default: 0
    },    
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    },
});

