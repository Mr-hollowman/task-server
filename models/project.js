
import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    projectType: { type: String, required: true },
    creator: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
},{timestamps: true})

export default mongoose.model("Project", projectSchema)
