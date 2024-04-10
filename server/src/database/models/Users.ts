import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    emailaddress: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    isLoggedIn: {
        type: Boolean,
    },
});

const Users = mongoose.model("User", userSchema);

export { Users };