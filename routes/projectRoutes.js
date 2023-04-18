import express from 'express';

// import { createProperty, deleteProperty, getAllProperties, getPropertyDetail, updateProperty  } from '../controllers/property.controller.js';
import { createProperty,} from '../controllers/project.controller.js';

const router = express.Router();

// router.route('/').get(getAllProperties)
// router.route('/:id').get(getPropertyDetail)
router.route('/').post(createProperty)
// router.route('/').patch(updateProperty)
// router.route('/').delete(deleteProperty)

export default router;