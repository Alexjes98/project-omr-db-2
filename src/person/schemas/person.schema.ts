import { Schema } from "mongoose";

import { Account } from "src/account/schemas/account.schema";

export const PersonSchema = new Schema({
    person_id: {
        type: String,
        default: ""
    },
    name: {
        type: String,
        default: ""
    },
    last_name: {
        type: String,
        default: ""
    },
    document_number: String,
    phone: String,
    accounts: [Account]
});
