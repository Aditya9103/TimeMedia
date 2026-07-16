import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema(
  {
    blogId: { type: mongoose.Schema.Types.ObjectId, ref: 'Blog', required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    website: { type: String },
    message: { type: String, required: true },
    status: { type: String, enum: ['Pending', 'Approved'], default: 'Approved' }
  },
  { timestamps: true }
);

export default mongoose.model('Comment', commentSchema);
