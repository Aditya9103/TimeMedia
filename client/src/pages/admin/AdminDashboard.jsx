import React from 'react';
import { Trophy, Mail, FileText, Award } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  useGetNominationsQuery,
  useGetContactSubmissionsQuery,
  useGetBlogsQuery,
  useGetAwardEventsQuery 
} from '../../store/apiSlice';

const StatCard = ({ title, value, icon: Icon, isLoading, linkTo }) => (
  <Link to={linkTo} className="block group">
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-center justify-between hover:shadow-md transition-shadow">
      <div>
        <p className="text-slate-500 font-medium mb-1">{title}</p>
        <h3 className="text-3xl font-black text-slate-800">
          {isLoading ? (
            <span className="inline-block h-8 w-16 bg-slate-100 animate-pulse rounded"></span>
          ) : (
            value
          )}
        </h3>
      </div>
      <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
        <Icon className="w-7 h-7" />
      </div>
    </div>
  </Link>
);

const AdminDashboard = () => {
  const { data: nomData, isLoading: nomLoading } = useGetNominationsQuery();
  const { data: contactData, isLoading: contactLoading } = useGetContactSubmissionsQuery();
  const { data: blogData, isLoading: blogLoading } = useGetBlogsQuery();
  const { data: eventsData, isLoading: eventsLoading } = useGetAwardEventsQuery();

  const nominations = nomData?.data || [];
  const contacts = contactData?.data || [];
  const blogs = blogData?.data?.blogs || [];
  const events = eventsData?.data || [];

  // Get 5 most recent nominations
  const recentNominations = [...nominations].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 5);

  return (
    <div className="space-y-8 max-w-7xl mx-auto p-4 md:p-8">
      <Helmet>
        <title>Dashboard | Admin Portal</title>
      </Helmet>

      <div>
        <h2 className="text-3xl font-bold text-slate-800">Overview</h2>
        <p className="text-slate-500 mt-1">Here's a quick summary of your platform's activity.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Total Nominations" 
          value={nominations.length} 
          icon={Trophy} 
          isLoading={nomLoading}
          linkTo="/admin/nominations"
        />
        <StatCard 
          title="Messages" 
          value={contacts.length} 
          icon={Mail} 
          isLoading={contactLoading}
          linkTo="/admin/contact"
        />
        <StatCard 
          title="Award Events" 
          value={events.length} 
          icon={Award} 
          isLoading={eventsLoading}
          linkTo="/admin/award-events"
        />
        <StatCard 
          title="Published Blogs" 
          value={blogs.length} 
          icon={FileText} 
          isLoading={blogLoading}
          linkTo="/admin/blogs"
        />
      </div>

      {/* Recent Nominations Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden mt-8">
        <div className="px-6 py-5 border-b border-slate-100 flex justify-between items-center">
          <h3 className="text-lg font-bold text-slate-800">Recent Nominations</h3>
          <Link to="/admin/nominations" className="text-blue-600 text-sm font-semibold hover:text-blue-700">View All →</Link>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider">
                <th className="px-6 py-4 font-semibold">Date</th>
                <th className="px-6 py-4 font-semibold">Applicant Name</th>
                <th className="px-6 py-4 font-semibold">Award Category</th>
                <th className="px-6 py-4 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {nomLoading ? (
                <tr><td colSpan="4" className="px-6 py-8 text-center text-slate-500">Loading recent activity...</td></tr>
              ) : recentNominations.length === 0 ? (
                <tr><td colSpan="4" className="px-6 py-8 text-center text-slate-500 font-medium">No nominations received yet.</td></tr>
              ) : (
                recentNominations.map(nom => (
                  <tr key={nom._id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-slate-600">
                      {new Date(nom.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 font-medium text-slate-800">
                      {nom.applicantName}
                      {nom.companyName && <span className="block text-xs text-slate-500 mt-0.5">{nom.companyName}</span>}
                    </td>
                    <td className="px-6 py-4 text-slate-600 max-w-xs truncate">
                      {nom.category?.name || 'General'}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold
                        ${nom.status === 'approved' ? 'bg-emerald-100 text-emerald-800' : 
                          nom.status === 'rejected' ? 'bg-red-100 text-red-800' : 
                          'bg-amber-100 text-amber-800'}`}>
                        {nom.status?.charAt(0).toUpperCase() + nom.status?.slice(1) || 'Pending'}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
