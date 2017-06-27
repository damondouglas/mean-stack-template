const mongoose = require("mongoose")
const UserSchema = mongoose.Schema({
    username: {type: String, require: true}
}, {timestamps: true})

mongoose.model("User", UserSchema)