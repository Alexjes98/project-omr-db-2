import { Schema } from "mongoose";

export const PersonSchema = new Schema({
    name: String,
    last_name: String,
    document_number: String,
    phone: String,
});
