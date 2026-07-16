import React from 'react';
import { User, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { StaggerContainer, StaggerItem } from '../animations/StaggerFadeIn';
import { useGetBlogsQuery } from '../../store/apiSlice';

const LatestNewsSection = () => {
  const { data: response, isLoading } = useGetBlogsQuery();
  
  const blogs = response?.data || [];
  
  // Sort by newest and take the latest 2
  const latestBlogs = [...blogs]
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 2);

  if (isLoading || latestBlogs.length === 0) {
    return null;
  }

  return (
    <section className="py-20 bg-white">
      <div>
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h4 className="text-sky-700 font-bold uppercase tracking-widest text-sm mb-4">NEWS</h4>
          <h2 className="text-3xl md:text-5xl font-black text-black">
            Latest News & Blog
          </h2>
        </div>

        {/* Blog Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto">
          {latestBlogs.map((article) => (
            <StaggerItem key={article._id} className="flex flex-col">
              
              {/* Meta Info */}
              <div className="flex items-center text-gray-400 text-sm font-medium mb-4">
                <div className="flex items-center gap-2">
                  <User size={16} className="text-cyan-400" />
                  <span>{article.author || 'Admin'}</span>
                </div>
                <span className="mx-4 text-gray-300">|</span>
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-cyan-400" />
                  <span>{new Date(article.createdAt).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })}</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-black mb-6 hover:text-sky-700 transition-colors">
                <Link to={`/blog/${article._id}`}>
                  {article.title}
                </Link>
              </h3>

              {/* Divider */}
              <hr className="border-gray-300 mb-4" />

              {/* Read More Link */}
              <Link 
                to={`/blog/${article._id}`} 
                className="text-gray-400 font-bold text-xs tracking-widest uppercase hover:text-sky-700 transition-colors inline-block"
              >
                READ MORE
              </Link>
              
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
};

export default LatestNewsSection;
