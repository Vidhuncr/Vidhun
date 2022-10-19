import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        required: true,
        type: "string"
    },
    email: {
        required: true,
        type: "string",
        unique: true
    },
    password: {
        required: true,
        type: "string"
    }
});

export default mongoose.model("User", UserSchema);

