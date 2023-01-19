import { Mongoose, Schema } from "mongoose";

const UserSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String
    },
    joinedDate: {
        type: Date,
    },
    updatedDate: {
        type: Date,
        default: Date.now
    },

    social: {
        facebook: {
            type: String
        },

        twitter: {
            type: String
        },

        github: {
            type: String
        },

        linkedin: {
            type: String
        },

        youtube: {
            type: String
        },

    }
});

const User = Mongoose.model("User", UserSchema);
