import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import { useGetBlogByIdQuery, useCreateBlogMutation, useUpdateBlogMutation } from '../../store/apiSlice';

const AdminWriteBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditing = !!id;

  const [formData, setFormData] = useState({
    title: '',
    category: '',
    tags: '',
    author: 'Admin',
    status: 'Published',
  });
  const [imageFile, setImageFile] = useState(null);
  const [previewImage, setPreviewImage] = useState('');
  const [content, setContent] = useState('');
  const [saving, setSaving] = useState(false);
  const [isHtmlMode, setIsHtmlMode] = useState(false);

  const { data: blogResponse, isSuccess } = useGetBlogByIdQuery(id, { skip: !isEditing });
  const [createBlog] = useCreateBlogMutation();
  const [updateBlog] = useUpdateBlogMutation();

  useEffect(() => {
    if (isEditing && isSuccess && blogResponse?.data) {
      const blog = blogResponse.data;
      setFormData({
        title: blog.title,
        category: blog.category,
        tags: blog.tags.join(', '),
        author: blog.author || 'Admin',
        status: blog.status,
      });
      setPreviewImage(blog.image);
      setContent(blog.content);
    }
  }, [isEditing, isSuccess, blogResponse]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      const data = new FormData();
      data.append('title', formData.title);
      data.append('category', formData.category);
      data.append('tags', formData.tags);
      data.append('author', formData.author);
      data.append('status', formData.status);
      data.append('content', content);
      
      if (imageFile) {
        data.append('image', imageFile);
      }

      if (isEditing) {
        await updateBlog({ id, formData: data }).unwrap();
      } else {
        await createBlog(data).unwrap();
      }
      navigate('/admin/blogs');
    } catch (error) {
      console.error('Failed to save blog', error);
      alert(error.data?.message || 'Failed to save blog');
    } finally {
      setSaving(false);
    }
  };

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}],
      ['link', 'image', 'video'],
      ['clean']
    ],
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
      <h2 className="text-2xl font-bold text-slate-800 mb-6">
        {isEditing ? 'Edit Blog' : 'Write New Blog'}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Title</label>
            <input
              type="text"
              name="title"
              required
              value={formData.title}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none"
              placeholder="Blog Title"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Category</label>
            <select
              name="category"
              required
              value={formData.category}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none bg-white"
            >
              <option value="" disabled>Select a Category</option>
              <option value="Blog">Blog</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="News">News</option>
              <option value="Seo Optimization">Seo Optimization</option>
              <option value="Uncategorized">Uncategorized</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Author / Writer Name</label>
            <input
              type="text"
              name="author"
              required
              value={formData.author}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none"
              placeholder="e.g. Admin"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Image Upload</label>
            <div className="flex items-center gap-4">
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-bold file:bg-sky-50 file:text-sky-700 hover:file:bg-sky-100"
              />
              {previewImage && (
                <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 border border-slate-200">
                  <img src={previewImage} alt="Preview" className="w-full h-full object-cover" />
                </div>
              )}
            </div>
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Tags (Comma separated)</label>
            <input
              type="text"
              name="tags"
              value={formData.tags}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none"
              placeholder="SEO, Marketing, News"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none bg-white"
            >
              <option value="Published">Published</option>
              <option value="Draft">Draft</option>
            </select>
          </div>
        </div>

        <div className="pt-4">
          <div className="flex items-center justify-between mb-2">
            <label className="block text-sm font-bold text-slate-700">Content</label>
            <button
              type="button"
              onClick={() => setIsHtmlMode(!isHtmlMode)}
              className="text-sm px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-md font-medium transition-colors"
            >
              {isHtmlMode ? 'Switch to Visual Editor' : 'Switch to HTML Editor'}
            </button>
          </div>
          
          <div className="bg-white rounded-lg overflow-hidden border border-slate-300 h-96">
            {isHtmlMode ? (
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full h-full p-4 font-mono text-sm bg-slate-50 text-slate-800 outline-none resize-none"
                placeholder="<p>Write your raw HTML here...</p>"
              />
            ) : (
              <ReactQuill
                theme="snow"
                value={content}
                onChange={setContent}
                modules={modules}
                className="h-full pb-10"
              />
            )}
          </div>
        </div>

        <div className="pt-6 flex justify-end gap-4">
          <button
            type="button"
            onClick={() => navigate('/admin/blogs')}
            className="px-6 py-2 border border-slate-300 text-slate-700 rounded-lg font-bold hover:bg-slate-50 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={saving}
            className="px-6 py-2 bg-sky-500 text-white rounded-lg font-bold hover:bg-sky-600 transition-colors disabled:opacity-50"
          >
            {saving ? 'Saving...' : (isEditing ? 'Update Blog' : 'Publish Blog')}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminWriteBlog;
