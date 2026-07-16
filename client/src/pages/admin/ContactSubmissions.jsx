import React from 'react';
import { Mail, Check, Trash2, Loader2, Calendar, Phone, Building } from 'lucide-react';
import { useGetContactSubmissionsQuery, useUpdateContactStatusMutation, useDeleteContactMutation } from '../../store/apiSlice';

const ContactSubmissions = () => {
  const { data: response, isLoading, error } = useGetContactSubmissionsQuery();
  const [updateStatus] = useUpdateContactStatusMutation();
  const [deleteContact] = useDeleteContactMutation();
  
  const messages = response?.data || [];

  const handleStatusChange = async (id, newStatus) => {
    try {
      await updateStatus({ id, status: newStatus }).unwrap();
    } catch (err) {
      console.error('Failed to update status:', err);
      alert('Failed to update status');
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this message?')) return;
    try {
      await deleteContact(id).unwrap();
    } catch (err) {
      console.error('Failed to delete message:', err);
      alert('Failed to delete message');
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'new':
        return <span className="px-3 py-1 bg-sky-500/10 text-sky-500 rounded-full text-xs font-semibold">New</span>;
      case 'read':
        return <span className="px-3 py-1 bg-slate-500/10 text-slate-400 rounded-full text-xs font-semibold">Read</span>;
      case 'replied':
        return <span className="px-3 py-1 bg-emerald-500/10 text-emerald-500 rounded-full text-xs font-semibold">Replied</span>;
      default:
        return <span className="px-3 py-1 bg-gray-500/10 text-gray-500 rounded-full text-xs font-semibold">{status}</span>;
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <Loader2 className="w-8 h-8 animate-spin text-sky-500" />
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Contact Submissions</h1>
          <p className="text-slate-500 mt-1">Manage inquiries from your website visitors</p>
        </div>
        <div className="bg-white border border-slate-200 shadow-sm px-4 py-2 rounded-lg flex items-center gap-3">
          <Mail className="text-sky-500" size={20} />
          <span className="text-slate-700 font-semibold">{messages.length} Total</span>
        </div>
      </div>

      {error && (
        <div className="bg-red-50 text-red-600 p-4 rounded-xl font-medium border border-red-200">
          {error}
        </div>
      )}

      <div className="grid gap-4">
        {messages.length === 0 ? (
          <div className="bg-white shadow-sm rounded-xl p-12 text-center text-slate-500 border border-slate-200">
            <Mail className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p className="text-lg font-medium">No messages yet</p>
            <p className="text-sm">When visitors submit the contact form, they will appear here.</p>
          </div>
        ) : (
          messages.map((msg) => (
            <div key={msg._id} className={`bg-white rounded-xl p-6 border shadow-sm transition-colors ${msg.status === 'new' ? 'border-sky-300 bg-sky-50/20' : 'border-slate-200'}`}>
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                
                {/* Left Side: Sender Info */}
                <div className="space-y-4 flex-1">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-slate-100 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center font-black text-slate-500 text-lg uppercase shadow-sm">
                        {msg.name.charAt(0)}
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wide">{msg.name}</h3>
                        <a href={`mailto:${msg.email}`} className="text-xs text-sky-600 hover:underline font-medium">
                          {msg.email}
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[12px] font-bold uppercase tracking-wider text-slate-600 mt-2">
                      {msg.organization && (
                        <div className="flex items-center gap-2">
                          <Building size={16} className="text-slate-500" />
                          {msg.organization}
                        </div>
                      )}
                      {msg.phone && (
                        <div className="flex items-center gap-2">
                          <Phone size={16} className="text-slate-500" />
                          <a href={`tel:${msg.phone}`} className="hover:text-sky-600 transition-colors">{msg.phone}</a>
                        </div>
                      )}
                      <div className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-md border border-slate-200 text-slate-700 shadow-sm">
                        <Calendar size={16} className="text-slate-500" />
                        {new Date(msg.createdAt).toLocaleString(undefined, {
                          dateStyle: 'medium',
                          timeStyle: 'short'
                        })}
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 text-sm text-slate-700 whitespace-pre-wrap leading-relaxed shadow-inner">
                    {msg.message}
                  </div>
                </div>

                {/* Right Side: Actions */}
                <div className="flex md:flex-col gap-3 shrink-0 min-w-[160px] md:border-l md:border-slate-100 md:pl-6">
                  <div className="space-y-2 w-full">
                    <span className={`inline-flex items-center border px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-widest ${
                      msg.status === 'new' ? 'bg-sky-50 text-sky-600 border-sky-200' : 
                      msg.status === 'read' ? 'bg-amber-50 text-amber-600 border-amber-200' : 
                      'bg-emerald-50 text-emerald-600 border-emerald-200'
                    }`}>
                      {msg.status.toUpperCase()}
                    </span>
                    <select
                      value={msg.status}
                      onChange={(e) => handleStatusChange(msg._id, e.target.value)}
                      className="w-full bg-white border border-slate-200 rounded-lg px-2 py-2 text-[10px] font-bold uppercase tracking-widest text-slate-700 focus:outline-none focus:border-sky-500 transition-all cursor-pointer shadow-sm hover:border-slate-300"
                    >
                      <option value="new">NEW INQUIRY</option>
                      <option value="read">MARKED READ</option>
                      <option value="replied">REPLIED</option>
                    </select>
                  </div>

                  <button 
                    onClick={() => handleDelete(msg._id)}
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-white border border-red-200 hover:bg-red-50 text-red-500 hover:text-red-600 rounded-lg transition-colors text-[10px] font-bold uppercase tracking-widest mt-auto shadow-sm"
                  >
                    <Trash2 size={14} /> Delete
                  </button>
                </div>

              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ContactSubmissions;
