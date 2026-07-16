import React, { useState } from 'react';
import { User } from 'lucide-react';
import { useGetBlogCommentsQuery, useAddCommentMutation } from '../../store/apiSlice';

const BlogComments = ({ blogId }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    message: ''
  });

  const { data: response } = useGetBlogCommentsQuery(blogId);
  const [addComment, { isLoading: isSubmitting }] = useAddCommentMutation();

  const comments = response?.data || [];

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addComment({ blogId, data: formData }).unwrap();
      // Clear form
      setFormData({ name: '', email: '', website: '', message: '' });
    } catch (error) {
      console.error('Failed to submit comment', error);
      alert('Failed to post comment. Please try again.');
    }
  };

  return (
    <div className="mt-12">
      
      {/* Comments List */}
      <div className="mb-12">
        <h3 className="text-2xl font-black text-slate-800 mb-8">{comments.length} Comments</h3>
        
        {comments.length === 0 ? (
          <p className="text-slate-500 italic">No comments yet. Be the first to share your thoughts!</p>
        ) : (
          <div className="space-y-8">
            {comments.map((comment) => (
              <div key={comment._id} className="flex gap-4 md:gap-6 bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-sky-100 flex-shrink-0 flex items-center justify-center text-sky-600 border-2 border-white shadow-md">
                  <User size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h4 className="font-bold text-slate-800 text-lg">{comment.name}</h4>
                    <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                      {new Date(comment.createdAt).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
                    </span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">{comment.message}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Leave a Reply Form */}
      <div className="bg-slate-50 p-6 md:p-10 rounded-3xl border border-slate-200">
        <h3 className="text-2xl font-black text-slate-800 mb-2">Leave a Reply</h3>
        <p className="text-slate-500 mb-8 text-sm">Your email address will not be published. Required fields are marked *</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <input
                type="text"
                name="name"
                required
                placeholder="Name *"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all placeholder-slate-400"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                required
                placeholder="Email *"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all placeholder-slate-400"
              />
            </div>
            <div className="md:col-span-2">
              <input
                type="url"
                name="website"
                placeholder="Website"
                value={formData.website}
                onChange={handleInputChange}
                className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all placeholder-slate-400"
              />
            </div>
          </div>
          
          <div>
            <textarea
              name="message"
              required
              placeholder="Your Comment *"
              rows={6}
              value={formData.message}
              onChange={handleInputChange}
              className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all placeholder-slate-400 resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="px-8 py-4 bg-sky-500 hover:bg-sky-600 text-white font-bold rounded-xl transition-colors uppercase tracking-wider text-sm shadow-lg shadow-sky-500/30 disabled:opacity-50"
          >
            {isSubmitting ? 'Posting...' : 'Post Comment'}
          </button>
        </form>
      </div>

    </div>
  );
};

export default BlogComments;
