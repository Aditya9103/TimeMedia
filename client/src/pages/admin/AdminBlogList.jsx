import React from 'react';
import { Link } from 'react-router-dom';
import { Plus, Edit, Trash2 } from 'lucide-react';
import { useGetBlogsQuery, useDeleteBlogMutation } from '../../store/apiSlice';

const AdminBlogList = () => {
  const { data: response, isLoading: loading } = useGetBlogsQuery();
  const [deleteBlogMutation] = useDeleteBlogMutation();
  
  const blogs = response?.data || [];

  const deleteBlog = async (id) => {
    if (window.confirm('Are you sure you want to delete this blog?')) {
      try {
        await deleteBlogMutation(id).unwrap();
      } catch (error) {
        console.error('Failed to delete blog', error);
      }
    }
  };

  if (loading) return <div className="p-8">Loading...</div>;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200">
      <div className="p-6 border-b border-slate-200 flex justify-between items-center">
        <h2 className="text-xl font-bold text-slate-800">Manage Blogs</h2>
        <Link
          to="/admin/blogs/new"
          className="flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
        >
          <Plus size={18} /> New Blog
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-slate-50 text-slate-500 text-sm font-semibold uppercase tracking-wider text-left border-b border-slate-200">
            <tr>
              <th className="px-6 py-4">Title</th>
              <th className="px-6 py-4">Category</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Date</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {blogs.length === 0 ? (
              <tr>
                <td colSpan="5" className="px-6 py-8 text-center text-slate-500">
                  No blogs found. Start by creating a new one!
                </td>
              </tr>
            ) : (
              blogs.map((blog) => (
                <tr key={blog._id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-slate-800">{blog.title}</td>
                  <td className="px-6 py-4 text-slate-600">{blog.category}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${blog.status === 'Published' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                      {blog.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-600">
                    {new Date(blog.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Link
                        to={`/admin/blogs/${blog._id}/edit`}
                        className="p-2 text-sky-600 hover:bg-sky-50 rounded-lg transition-colors"
                      >
                        <Edit size={18} />
                      </Link>
                      <button
                        onClick={() => deleteBlog(blog._id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminBlogList;
