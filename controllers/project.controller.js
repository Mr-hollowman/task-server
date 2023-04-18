import Property from "../models/project.js";
import User from '../models/User.js'
import mongoose from "mongoose";

const createProperty = async (req, res) => {

    try {
        const { title, description, projectType, location, email } = req.body;

        //start a new session
        // const session = await mongoose.startSession();
        // session.startTransaction();

        // const user = await User.findOne({ email }).session(session)
        const user = await User.findOne({ email })

        if (!user) throw new Error("User not found")

        const newProperty = await Property.create({
            title,
            description,
            projectType,
            location,
            creator: user._id
        })

        user.allProperties.push(newProperty._id);
        // await user.save({ session });

        // await session.commitTransaction();
        res.status(200).json({ message: "property added successfully" })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export {
    createProperty,
}