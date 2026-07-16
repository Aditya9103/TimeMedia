import React, { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { User, Calendar, Tag } from 'lucide-react';
import PageContainer from '../components/layout/PageContainer';
import BlogSidebar from '../components/blog/BlogSidebar';
import { useGetBlogsQuery } from '../store/apiSlice';
import UpcomingEventsSection from '../components/home/UpcomingEventsSection';

const BlogPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get('category');
  const tag = searchParams.get('tag');
  const search = searchParams.get('search');
  const pageParam = parseInt(searchParams.get('page')) || 1;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [category, tag, search, pageParam]);

  const queryParams = { page: pageParam, limit: 5 };
  if (category) queryParams.category = category;
  if (tag) queryParams.tag = tag;
  if (search) queryParams.search = search;

  const { data: blogResponse, isLoading: loading } = useGetBlogsQuery(queryParams);
  
  const blogs = blogResponse?.data || [];
  const totalPages = blogResponse?.totalPages || 1;
  const currentPage = blogResponse?.currentPage || 1;

  return (

    <div className="bg-slate-50 min-h-screen py-12">
      <PageContainer>

        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Our <span className="text-sky-500">Blog</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {search ? `Search results for: "${search}"`
              : category ? `Showing posts for category: ${category}`
                : tag ? `Showing posts tagged with: ${tag}`
                  : 'Insights, news, and strategies for modern digital marketing and business excellence.'}
          </p>
        </div>

        {/* 70:30 Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

          {/* Main Content (70%) */}
          <div className="lg:col-span-8 space-y-12">
            {loading ? (
              <div className="text-center py-12 text-slate-500">Loading blogs...</div>
            ) : blogs.length === 0 ? (
              <div className="bg-white p-12 text-center rounded-2xl shadow-sm border border-slate-100">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">No Posts Found</h3>
                <p className="text-slate-500">Check back later or try searching for a different topic.</p>
                <Link to="/blog" className="inline-block mt-6 text-sky-500 font-bold hover:underline">
                  View all posts
                </Link>
              </div>
            ) : (
              blogs.map((blog) => (
                <article key={blog._id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 group">
                  <Link to={`/blog/${blog._id}`} className="block relative h-64 md:h-80 overflow-hidden bg-slate-100">
                    {blog.image ? (
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-slate-300 bg-slate-100">No Image</div>
                    )}
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-xl text-sm font-bold text-sky-600 uppercase tracking-wider">
                      {blog.category}
                    </div>
                  </Link>

                  <div className="p-8 md:p-10">
                    <div className="flex flex-wrap items-center gap-6 text-sm font-bold text-slate-500 mb-4 uppercase tracking-wider">
                      <div className="flex items-center gap-2">
                        <User size={16} className="text-sky-500" />
                        By {blog.author || 'Admin'}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={16} className="text-sky-500" />
                        {new Date(blog.createdAt).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
                      </div>
                      <div className="flex items-center gap-2">
                        <Tag size={16} className="text-sky-500" />
                        {blog.category}
                      </div>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-4 leading-tight group-hover:text-sky-500 transition-colors">
                      <Link to={`/blog/${blog._id}`}>{blog.title}</Link>
                    </h2>

                    {/* Extract a short snippet from HTML content */}
                    <div className="text-slate-600 mb-8 line-clamp-3 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: blog.content ? blog.content.substring(0, 200) + '...' : '' }} />

                    <Link
                      to={`/blog/${blog._id}`}
                      className="inline-flex items-center justify-center px-8 py-3.5 bg-slate-900 hover:bg-sky-500 text-white font-bold rounded-xl transition-colors uppercase tracking-wider text-sm shadow-md"
                    >
                      Read More
                    </Link>
                  </div>
                </article>
              ))
            )}
            
            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-4 pt-8 border-t border-slate-100">
                <button
                  disabled={currentPage === 1}
                  onClick={() => {
                    const newParams = new URLSearchParams(searchParams);
                    newParams.set('page', currentPage - 1);
                    setSearchParams(newParams);
                  }}
                  className="px-6 py-2.5 rounded-lg font-bold text-sm bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-sky-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Previous
                </button>
                <span className="text-sm font-bold text-slate-500">
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  disabled={currentPage === totalPages}
                  onClick={() => {
                    const newParams = new URLSearchParams(searchParams);
                    newParams.set('page', currentPage + 1);
                    setSearchParams(newParams);
                  }}
                  className="px-6 py-2.5 rounded-lg font-bold text-sm bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-sky-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Next
                </button>
              </div>
            )}
          </div>

          {/* Sidebar (30%) */}
          <div className="lg:col-span-4">
            <div className="sticky top-24">
              <BlogSidebar />
            </div>
          </div>

        </div>
      </PageContainer>
      <UpcomingEventsSection />
    </div>

  );
};

export default BlogPage;
