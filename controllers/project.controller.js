import Project from "../models/project.js";
import User from '../models/User.js'
import mongoose from "mongoose";
import * as dotenv from 'dotenv'
import { v2 as cloudinary } from 'cloudinary';

dotenv.config()

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

const createProject = async (req, res) => {

    try {
        const { title, description, projectType, location, email, tag,  price } = req.body;

        // start a new session
        const session = await mongoose.startSession();
        session.startTransaction();

        const user = await User.findOne({ email }).session(session)
        // const user = await User.findOne({ email })

        if (!user) throw new Error("User not found")

        const newProject = await Project.create({
            title,
            description,
            projectType,
            location,
            tag,
            price,
            creator: user._id
        })
        console.log(newProject,"njkhjk");

        user.allProjects.push(newProject._id);
        await user.save({ session });

        await session.commitTransaction();
        res.status(200).json({ message: "project added successfully" })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const getAllProjects = async (req, res) => {
    const { _end, _order, _start, _sort, title_like = "", projectType = "" } = req.query

    const query = {};

    if (projectType != "") {
        query.projectType = projectType
    }

    if (title_like) {
        query.title = { $regex: title_like, $options: "i" }
    }

    try {
        const count = await Project.countDocuments({ query })
        const projects = await Project
            .find(query)
            .limit(_end)
            .skip(_start)
            .sort({ [_sort]: _order })

        res.header('x-total-count', count);
        res.header("Access-Control-Expose-Headers", "x-total-count");

        res.status(200).json(projects)

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export {
    createProject,
    getAllProjects,
}