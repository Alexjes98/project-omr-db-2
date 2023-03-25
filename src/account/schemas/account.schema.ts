import { Schema } from "mongoose";

import { TransactionSchema } from "src/transaction/schemas/transaction.schema";

export const AccountSchema = new Schema({
    account_id: {
        type: String,
        default: new Date().getTime().toString()
    },
    person_doc_number: {
        type: String,
        default: "000000"
    },
    balance: {
        type: Number,
        default: 0
    },
    creation_date: {
        type: Date,
        default: Date.now
    },
    transactions: [TransactionSchema]
});
