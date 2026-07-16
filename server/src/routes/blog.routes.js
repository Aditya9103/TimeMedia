import express from 'express';
import {
  getBlogs,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog,
  getCommentsForBlog,
  getRecentComments,
  addComment
} from '../controllers/blog.controller.js';
import { protectAdmin } from '../middlewares/auth.middleware.js';
import upload from '../middlewares/upload.middleware.js';

const router = express.Router();

// Public Routes
router.get('/', getBlogs);
router.get('/recent-comments', getRecentComments);
router.get('/:id', getBlogById);
router.get('/:blogId/comments', getCommentsForBlog);
router.post('/:blogId/comments', addComment);

// Protected Admin Routes
router.post('/', protectAdmin, upload.single('image'), createBlog);
router.put('/:id', protectAdmin, upload.single('image'), updateBlog);
router.delete('/:id', protectAdmin, deleteBlog);

export default router;
