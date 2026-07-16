import express from 'express';
import {
  submitContactMessage,
  getContactMessages,
  updateMessageStatus,
  deleteMessage,
} from '../controllers/contact.controller.js';
import { protectAdmin } from '../middlewares/auth.middleware.js';

const router = express.Router();

// Public route for form submission
router.post('/submit', submitContactMessage);

// Protected Admin routes
router.get('/all', protectAdmin, getContactMessages);
router.patch('/:id/status', protectAdmin, updateMessageStatus);
router.delete('/:id', protectAdmin, deleteMessage);

export default router;
