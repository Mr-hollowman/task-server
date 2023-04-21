import express from 'express';

// import { createProperty, deleteProperty, getAllProperties, getPropertyDetail, updateProperty  } from '../controllers/property.controller.js';
import { createProject, getAllProjects, getProjectDetail, update } from '../controllers/project.controller.js';

const router = express.Router();

router.route('/').get(getAllProjects)
router.route('/:id').get(getProjectDetail)
router.route("/:id").post(update)
router.route('/').post(createProject)
// router.route('/').patch(updateProperty)
// router.route('/').delete(deleteProperty)

export default router;