import { Schema } from "mongoose";

export const Account = new Schema({
    account_id: {
        type: String,
        default: new Date().getTime().toString()
    },
    balance: {
        type: Number,
        default: 0
    },
    creation_date: {
        type: Date,
        default: Date.now
    }
});
