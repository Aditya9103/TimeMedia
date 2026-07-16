import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    content: { type: String, required: true },
    tags: [{ type: String }],
    author: { type: String, default: 'Admin' },
    status: { type: String, enum: ['Draft', 'Published'], default: 'Published' },
    views: { type: Number, default: 0 }
  },
  { timestamps: true }
);

export default mongoose.model('Blog', blogSchema);
