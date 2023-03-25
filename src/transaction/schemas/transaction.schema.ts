import { Schema } from "mongoose";

export const TransactionSchema = new Schema({
    transaction_code: String,
    sourceAccount: { type: Schema.Types.ObjectId, ref: 'Account', required: true },
    targetAccount: { type: Schema.Types.ObjectId, ref: 'Account', required: true },
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

