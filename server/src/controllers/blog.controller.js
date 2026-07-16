import Blog from '../models/Blog.js';
import Comment from '../models/Comment.js';

// --- Blogs ---

export const getBlogs = async (req, res) => {
  try {
    const { category, tag, search, page = 1, limit = 9 } = req.query;
    
    // Build query object
    const query = { status: 'Published' };
    if (category) query.category = category;
    if (tag) query.tags = tag;
    if (search) query.title = { $regex: search, $options: 'i' };

    // Pagination variables
    const skip = (parseInt(page) - 1) * parseInt(limit);
    
    const blogs = await Blog.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(parseInt(limit));
      
    const total = await Blog.countDocuments(query);

    res.status(200).json({ 
      success: true, 
      count: blogs.length, 
      total,
      totalPages: Math.ceil(total / parseInt(limit)),
      currentPage: parseInt(page),
      data: blogs 
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

export const getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ success: false, message: 'Blog not found' });
    }
    // Increment views
    blog.views += 1;
    await blog.save();
    res.status(200).json({ success: true, data: blog });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

export const createBlog = async (req, res) => {
  try {
    let image = req.body.image;
    if (req.file) {
      image = req.file.location || `${req.protocol}://${req.get('host')}/${req.file.path.replace(/\\/g, '/')}`;
    }
    
    let parsedTags = req.body.tags;
    if (typeof parsedTags === 'string') {
      parsedTags = parsedTags.split(',').map(t => t.trim()).filter(t => t);
    }

    const blog = await Blog.create({ ...req.body, image, tags: parsedTags });
    res.status(201).json({ success: true, data: blog });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const updateBlog = async (req, res) => {
  try {
    let image = req.body.image;
    if (req.file) {
      image = req.file.location || `${req.protocol}://${req.get('host')}/${req.file.path.replace(/\\/g, '/')}`;
    }
    
    let parsedTags = req.body.tags;
    if (typeof parsedTags === 'string') {
      parsedTags = parsedTags.split(',').map(t => t.trim()).filter(t => t);
    }
    
    const updateData = { ...req.body, tags: parsedTags };
    if (image) updateData.image = image;
    
    const blog = await Blog.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
      runValidators: true
    });
    if (!blog) return res.status(404).json({ success: false, message: 'Blog not found' });
    res.status(200).json({ success: true, data: blog });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) return res.status(404).json({ success: false, message: 'Blog not found' });
    // Also delete comments
    await Comment.deleteMany({ blogId: req.params.id });
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

// --- Comments ---

export const getCommentsForBlog = async (req, res) => {
  try {
    const comments = await Comment.find({ blogId: req.params.blogId, status: 'Approved' }).sort({ createdAt: -1 });
    res.status(200).json({ success: true, count: comments.length, data: comments });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

export const getRecentComments = async (req, res) => {
  try {
    const comments = await Comment.find({ status: 'Approved' })
      .sort({ createdAt: -1 })
      .limit(5)
      .populate('blogId', 'title');
    res.status(200).json({ success: true, data: comments });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

export const addComment = async (req, res) => {
  try {
    const comment = await Comment.create({ ...req.body, blogId: req.params.blogId });
    res.status(201).json({ success: true, data: comment });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
