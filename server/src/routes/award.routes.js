import express from 'express';
import {
  getAwardCategories,
  createAwardCategory,
  updateAwardCategory,
  deleteAwardCategory,
  getAwardEvents,
  getAwardEventBySlug,
  createAwardEvent,
  updateAwardEvent,
  deleteAwardEvent
} from '../controllers/award.controller.js';
import { protectAdmin } from '../middlewares/auth.middleware.js';
import uploadS3 from '../utils/s3Upload.js';

const router = express.Router();

// Categories
router.route('/categories')
  .get(getAwardCategories)
  .post(protectAdmin, createAwardCategory);

router.route('/categories/:id')
  .put(protectAdmin, updateAwardCategory)
  .delete(protectAdmin, deleteAwardCategory);

// Events
router.route('/events')
  .get(getAwardEvents)
  .post(protectAdmin, uploadS3.fields([
    { name: 'heroImage', maxCount: 1 },
    { name: 'galleryImages', maxCount: 20 }
  ]), createAwardEvent);

router.route('/events/slug/:slug')
  .get(getAwardEventBySlug);

router.route('/events/:id')
  .put(protectAdmin, uploadS3.fields([
    { name: 'heroImage', maxCount: 1 },
    { name: 'galleryImages', maxCount: 20 }
  ]), updateAwardEvent)
  .delete(protectAdmin, deleteAwardEvent);

export default router;
