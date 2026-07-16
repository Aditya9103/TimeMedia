import express from 'express';
import {
  submitNomination,
  getNominations,
  updateNominationStatus,
  updateNomination,
  deleteNomination,
} from '../controllers/nomination.controller.js';
import upload from '../middlewares/upload.middleware.js';
import { protectAdmin } from '../middlewares/auth.middleware.js';

const router = express.Router();

// Public route for submitting a nomination
// Multer middleware handles 'file' field upload
router.post('/submit', upload.single('file'), submitNomination);

// Protected Admin routes
router.get('/all', protectAdmin, getNominations);
router.patch('/:id/status', protectAdmin, updateNominationStatus);
router.put('/:id', protectAdmin, updateNomination);
router.delete('/:id', protectAdmin, deleteNomination);

export default router;
