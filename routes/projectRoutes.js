import express from 'express';

// import { createProperty, deleteProperty, getAllProperties, getPropertyDetail, updateProperty  } from '../controllers/property.controller.js';
import { createProject, getAllProjects, getProjectDetail } from '../controllers/project.controller.js';

const router = express.Router();

router.route('/').get(getAllProjects)
router.route('/:id').get(getProjectDetail)
router.route('/').post(createProject)
// router.route('/').patch(updateProperty)
// router.route('/').delete(deleteProperty)

export default router;