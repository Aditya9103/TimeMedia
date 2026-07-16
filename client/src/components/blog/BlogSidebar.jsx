import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import { useGetBlogsQuery, useGetRecentCommentsQuery } from '../../store/apiSlice';

const categories = [
  'Blog',
  'Digital Marketing',
  'News',
  'Seo Optimization',
  'Uncategorized'
];

const BlogSidebar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const { data: blogsResponse } = useGetBlogsQuery({ limit: 20 });
  const { data: commentsResponse } = useGetRecentCommentsQuery();

  const allBlogs = blogsResponse?.data || [];
  const recentPosts = allBlogs.slice(0, 5);
  
  const tagsSet = new Set();
  allBlogs.forEach(blog => {
    if (blog.tags && Array.isArray(blog.tags)) {
      blog.tags.forEach(tag => tagsSet.add(tag));
    }
  });
  const popularTags = Array.from(tagsSet).slice(0, 15);

  const recentComments = commentsResponse?.data || [];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/blog?search=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      navigate('/blog');
    }
  };

  return (
    <div className="space-y-10">

      {/* Search Bar */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
        <h3 className="text-xl font-bold text-slate-800 mb-4 border-b border-sky-500 pb-2 inline-block">Search</h3>
        <form onSubmit={handleSearch} className="relative">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-4 pr-12 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
          />
          <button type="submit" className="absolute right-0 top-0 h-full px-4 text-slate-400 hover:text-sky-500 transition-colors">
            <Search size={20} />
          </button>
        </form>
      </div>

      {/* Category */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
        <h3 className="text-xl font-bold text-slate-800 mb-4 border-b border-sky-500 pb-2 inline-block">Category</h3>
        <ul className="space-y-3">
          {categories.map((category) => (
            <li key={category}>
              <Link to={`/blog?category=${category}`} className="flex items-center text-slate-600 hover:text-sky-500 transition-colors">
                <span className="w-2 h-2 rounded-full bg-sky-500 mr-3"></span>
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Recent Posts */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
        <h3 className="text-xl font-bold text-slate-800 mb-4 border-b border-sky-500 pb-2 inline-block">Recent Posts</h3>
        <div className="space-y-4">
          {recentPosts.length === 0 ? (
            <p className="text-sm text-slate-500">No recent posts.</p>
          ) : (
            recentPosts.map((post) => (
              <div key={post._id} className="flex gap-4 items-start group">
                <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-slate-100">
                  {post.image && (
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                  )}
                </div>
                <div>
                  <span className="text-xs text-sky-500 font-bold tracking-wider uppercase block mb-1">
                    {new Date(post.createdAt).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
                  </span>
                  <Link to={`/blog/${post._id}`} className="text-sm font-bold text-slate-800 group-hover:text-sky-500 transition-colors line-clamp-2">
                    {post.title}
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Recent Comments */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
        <h3 className="text-xl font-bold text-slate-800 mb-4 border-b border-sky-500 pb-2 inline-block">Recent Comments</h3>
        <div className="space-y-4">
          {recentComments.length === 0 ? (
            <p className="text-sm text-slate-500">No recent comments.</p>
          ) : (
            recentComments.map((comment) => (
              <div key={comment._id} className="text-sm text-slate-600">
                <span className="font-bold text-slate-800">{comment.name}</span> on{' '}
                <Link to={`/blog/${comment.blogId?._id}`} className="text-sky-500 hover:underline">
                  {comment.blogId?.title || 'a post'}
                </Link>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Popular Tags */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
        <h3 className="text-xl font-bold text-slate-800 mb-4 border-b border-sky-500 pb-2 inline-block">Popular Tags</h3>
        <div className="flex flex-wrap gap-2">
          {popularTags.map((tag) => (
            <Link
              key={tag}
              to={`/blog?tag=${tag}`}
              className="px-3 py-1.5 bg-slate-50 border border-slate-200 text-slate-600 text-xs font-bold uppercase tracking-wider rounded hover:bg-sky-500 hover:text-white hover:border-sky-500 transition-colors"
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
};

export default BlogSidebar;
