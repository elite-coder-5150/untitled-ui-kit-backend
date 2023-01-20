import { Mongoose } from "mongoose";
import { Schema } from "mongoose";
import { Express, Router } from "express";



const NewsletterSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
});

const Newsletter = Mongoose.model("Newsletter", NewsletterSchema);