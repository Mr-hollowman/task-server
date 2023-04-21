import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    userName:{type: String, unique: true, required: true},
    email:{type: String, unique: true, required: true},
    type:{type: String, required: true},
    password:{type: String, required: true},
    img:{type: String,},
    phone:{type:Number},
    allProjects:[{type:mongoose.Schema.Types.ObjectId, ref:"Project"}]
},{timestamps: true})

export default mongoose.model("User", UserSchema)