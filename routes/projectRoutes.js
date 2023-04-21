import express from 'express';
import { createProject, getAllProjects, getProjectDetail, update } from '../controllers/project.controller.js';

const router = express.Router();

router.route('/').get(getAllProjects)
router.route('/:id').get(getProjectDetail)
router.route("/:id").post(update)
router.route('/').post(createProject)

export default router;