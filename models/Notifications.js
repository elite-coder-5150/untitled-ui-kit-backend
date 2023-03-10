import { Mongoose } from "mongoose";
import { Schema } from "mongoose";

const NotificationSchema = new Schema({
    id: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
});

const Notification = Mongoose.model("Notification", NotificationSchema);