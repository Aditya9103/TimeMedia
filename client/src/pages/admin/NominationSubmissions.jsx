import React, { useState } from 'react';
import { Award, Trash2, Loader2, Search, Download, Eye, Edit2 } from 'lucide-react';
import { useGetNominationsQuery, useUpdateNominationStatusMutation, useUpdateNominationPaymentMutation, useDeleteNominationMutation } from '../../store/apiSlice';
import NominationViewModal from '../../components/admin/NominationViewModal';
import NominationEditModal from '../../components/admin/NominationEditModal';

const STATUS_OPTIONS = [
  'ALL STATUSES',
  'NOMINATION RECEIVED',
  'UNDER EVALUATION',
  'IN PROGRESS (SHORTLISTED)',
  'SELECTED (WINNER)',
  'REJECTED'
];

export default function NominationSubmissions() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL STATUSES');
  const [paymentFilter, setPaymentFilter] = useState('ALL PAYMENTS');
  const [updatingId, setUpdatingId] = useState(null);

  // Modal states
  const [viewingNomination, setViewingNomination] = useState(null);
  const [editingNomination, setEditingNomination] = useState(null);

  const queryParams = {
    search: searchTerm,
    status: statusFilter !== 'ALL STATUSES' ? statusFilter : undefined,
    paymentStatus: paymentFilter !== 'ALL PAYMENTS' ? paymentFilter : undefined
  };

  const { data: response, isLoading, error } = useGetNominationsQuery(queryParams);
  const [updateStatus] = useUpdateNominationStatusMutation();
  const [updatePayment] = useUpdateNominationPaymentMutation();
  const [deleteNom] = useDeleteNominationMutation();

  const nominations = response?.data || [];

  const handleStatusChange = async (id, newStatus) => {
    try {
      setUpdatingId(id);
      await updateStatus({ id, status: newStatus }).unwrap();
    } catch (err) {
      console.error('Failed to update status:', err);
      alert('Failed to update status');
    } finally {
      setUpdatingId(null);
    }
  };

  const handlePaymentStatusChange = async (id, newPaymentStatus) => {
    try {
      setUpdatingId(id);
      await updatePayment({ id, paymentStatus: newPaymentStatus }).unwrap();
    } catch (err) {
      console.error('Failed to update payment status:', err);
      alert('Failed to update payment status');
    } finally {
      setUpdatingId(null);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this nomination? This cannot be undone.')) return;
    try {
      setUpdatingId(id);
      await deleteNom(id).unwrap();
    } catch (err) {
      console.error('Failed to delete nomination:', err);
      alert('Failed to delete nomination');
    } finally {
      setUpdatingId(null);
    }
  };

  const handleSaveEdit = () => {
    setEditingNomination(null);
  };

  const getStatusBadgeColor = (status) => {
    switch (status) {
      case 'NOMINATION RECEIVED': return 'bg-sky-50 text-sky-600 border-sky-200';
      case 'UNDER EVALUATION': return 'bg-amber-50 text-amber-600 border-amber-200';
      case 'IN PROGRESS (SHORTLISTED)': return 'bg-indigo-50 text-indigo-600 border-indigo-200';
      case 'SELECTED (WINNER)': return 'bg-emerald-50 text-emerald-600 border-emerald-200';
      case 'REJECTED': return 'bg-red-50 text-red-600 border-red-200';
      default: return 'bg-slate-50 text-slate-600 border-slate-200';
    }
  };

  const renderNominationsTable = () => (
    <div className="relative group/table mt-6">
      <div className="overflow-x-auto max-h-[75vh] rounded-2xl border border-slate-200 bg-white shadow-sm overflow-y-auto custom-scrollbar">
        <table className="min-w-[1600px] w-full text-left border-separate border-spacing-0">
          <thead>
            <tr className="sticky top-0 z-40 shadow-sm">
              {[
                { label: "Participation", width: "220px" },
                { label: "Category", width: "220px" },
                { label: "Nominee Entity", width: "240px" },
                { label: "Workflow Status", width: "200px" },
                { label: "Revenue Status", width: "180px" },
                { label: "Leadership", width: "220px" },
                { label: "Primary Contact", width: "220px" },
                { label: "Geography", width: "200px" },
                { label: "Financials", width: "180px" },
                { label: "Referral & Remarks", width: "240px" },
                { label: "Timestamp", width: "140px" }
              ].map((th, i) => (
                <th key={i} className="px-4 py-4 bg-slate-50 border-b border-slate-200" style={{ width: th.width }}>
                  <span className="text-sm font-bold uppercase tracking-wider text-slate-600">{th.label}</span>
                </th>
              ))}
              <th className="px-4 py-4 sticky right-0 z-50 bg-slate-50 border-b border-l border-slate-200 text-right shadow-[-4px_0_10px_-4px_rgba(0,0,0,0.05)]">
                <span className="text-sm font-bold uppercase tracking-wider text-slate-600">Control Node</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {nominations.map((n) => (
              <tr key={n._id} className="hover:bg-slate-50/50 transition-colors duration-200">
                <td className="px-4 py-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border bg-sky-50 border-sky-100 text-sky-700 text-sm font-bold uppercase tracking-widest shadow-sm">
                    <span className="text-base">{n.wantTo?.includes('Nominate') ? '🏆' : n.wantTo?.includes('Speak') ? '🎤' : n.wantTo?.includes('Exhibit') ? '🏢' : '💎'}</span>
                    <span className="whitespace-normal leading-tight max-w-[160px]">{n.wantTo}</span>
                  </div>
                </td>
                <td className="px-4 py-4">
                  <div className="space-y-1">
                    <div className="text-base font-bold text-slate-800 leading-tight">{n.awardName}</div>
                    <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">{n.registrationType}</div>
                  </div>
                </td>
                <td className="px-4 py-4">
                  <div className="space-y-1">
                    <div className="text-base font-bold text-slate-800">{n.nomineeName}</div>
                    <div className="text-sm font-bold text-slate-600 uppercase tracking-wider truncate max-w-[200px]">
                      {n.organizationName || "—"}
                    </div>
                    {n.website && <div className="text-sm font-medium text-sky-600 truncate max-w-[200px]">{n.website}</div>}
                  </div>
                </td>
                <td className="px-4 py-4">
                  <div className="space-y-2">
                    <span className={`inline-flex items-center border px-2.5 py-1 rounded-full text-xs font-black uppercase tracking-widest ${getStatusBadgeColor(n.status)}`}>
                      {n.status}
                    </span>
                    <select
                      value={n.status}
                      onChange={(e) => handleStatusChange(n._id, e.target.value)}
                      disabled={updatingId === n._id}
                      className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm font-bold uppercase tracking-widest text-slate-700 focus:outline-none focus:border-sky-500 transition-all cursor-pointer shadow-sm disabled:opacity-50"
                    >
                      {STATUS_OPTIONS.filter(s => s !== 'ALL STATUSES').map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </td>
                <td className="px-4 py-4">
                  <div className="space-y-2">
                    <span className={`inline-flex items-center border px-2.5 py-1 rounded-full text-xs font-black uppercase tracking-widest ${n.paymentStatus === 'paid' ? 'bg-emerald-50 text-emerald-600 border-emerald-200' :
                      n.paymentStatus === 'initial_paid' ? 'bg-amber-50 text-amber-600 border-amber-200' :
                        n.paymentStatus === 'not_interested' ? 'bg-red-50 text-red-600 border-red-200' :
                          'bg-slate-50 text-slate-600 border-slate-200'
                      }`}>
                      {n.paymentStatus === 'paid' ? 'FULLY PAID' :
                        n.paymentStatus === 'initial_paid' ? 'INITIAL PAID' :
                          n.paymentStatus === 'not_interested' ? 'NOT INTERESTED' :
                            'NOT PAID'}
                    </span>
                    <select
                      value={n.paymentStatus || 'not_paid'}
                      onChange={(e) => handlePaymentStatusChange(n._id, e.target.value)}
                      disabled={updatingId === n._id}
                      className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm font-bold uppercase tracking-widest text-slate-700 focus:outline-none focus:border-[#d4af37] transition-all cursor-pointer shadow-sm disabled:opacity-50"
                    >
                      <option value="not_paid">Not Paid</option>
                      <option value="initial_paid">Initial Paid</option>
                      <option value="paid">Fully Paid</option>
                      <option value="not_interested">Not Interested</option>
                    </select>
                    {n.amount && <div className="text-sm font-bold text-slate-700">Amount: ₹{n.amount}</div>}
                  </div>
                </td>
                <td className="px-4 py-4">
                  <div className="space-y-1.5">
                    <div className="text-base font-bold text-slate-800">{n.headName || "—"}</div>
                    <div className="text-sm font-medium text-slate-600">{n.headDesignation || "—"}</div>
                    <div className="text-sm font-medium text-slate-500 truncate max-w-[180px]">{n.headEmail || "—"}</div>
                    {n.headMobile && <div className="text-sm font-mono font-medium text-slate-500">{n.headMobile}</div>}
                  </div>
                </td>
                <td className="px-4 py-4">
                  <div className="space-y-1.5">
                    <div className="text-base font-bold text-slate-800">{n.contactName || "—"}</div>
                    <div className="text-sm font-medium text-slate-600">{n.contactDesignation || "—"}</div>
                    <div className="text-sm font-medium text-slate-500 truncate max-w-[180px]">{n.contactEmail || "—"}</div>
                    {n.contactMobile && <div className="text-sm font-mono font-medium text-slate-500">{n.contactMobile}</div>}
                  </div>
                </td>
                <td className="px-4 py-4">
                  <div className="space-y-1.5">
                    <div className="text-base font-bold text-slate-700">{n.city ? `${n.city}, ${n.state}` : "—"}</div>
                    <div className="text-sm font-medium text-slate-600 truncate max-w-[180px]">{n.streetAddress || "—"}</div>
                    {n.zipCode && <div className="text-sm font-medium text-slate-500">{n.zipCode}</div>}
                  </div>
                </td>
                <td className="px-4 py-4">
                  <div className="space-y-1.5">
                    <div className="text-base font-bold text-slate-700">Turnover: {n.turnover ? `₹${n.turnover}` : "—"}</div>
                  </div>
                </td>
                <td className="px-4 py-4">
                  <div className="space-y-2">
                    {n.referredBy && <div className="text-sm font-bold uppercase tracking-widest text-indigo-600">Ref: {n.referredBy}</div>}
                    <div className="text-sm font-medium text-slate-700 truncate max-w-[200px]" title={n.message}>
                      <span className="font-bold text-slate-800">Msg:</span> {n.message || "—"}
                    </div>
                    <div className="text-sm font-medium text-red-600 truncate max-w-[200px]" title={n.adminRemark}>
                      <span className="font-bold text-red-700">Admin:</span> {n.adminRemark || "—"}
                    </div>
                  </div>
                </td>
                <td className="px-4 py-4">
                  <div className="text-sm font-bold uppercase tracking-widest text-slate-500 space-y-1">
                    <div>{new Date(n.createdAt).toLocaleDateString()}</div>
                    <div className="text-slate-400 font-semibold">{new Date(n.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
                  </div>
                </td>
                <td className="px-4 py-4 sticky right-0 z-30 bg-slate-50/95 backdrop-blur-sm border-l border-slate-200 text-right shadow-[-4px_0_10px_-4px_rgba(0,0,0,0.05)]">
                  <div className="flex items-center justify-end gap-2">
                    {n.fileUrl && (
                      <a
                        href={n.fileUrl.startsWith('http') ? n.fileUrl : `http://localhost:5001${n.fileUrl}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-lg bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-700 hover:bg-sky-100 transition-all shadow-sm"
                        title="View Document"
                      >
                        <Download size={16} />
                      </a>
                    )}
                    <button
                      onClick={() => setViewingNomination(n)}
                      className="w-9 h-9 rounded-lg bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-700 hover:bg-indigo-100 transition-all shadow-sm"
                      title="Insight View"
                    >
                      <Eye size={16} />
                    </button>
                    <button
                      onClick={() => setEditingNomination(n)}
                      className="w-9 h-9 rounded-lg bg-slate-50 border border-slate-300 flex items-center justify-center text-slate-700 hover:bg-slate-100 hover:border-slate-400 transition-all shadow-sm"
                      title="Edit Record"
                    >
                      <Edit2 size={16} />
                    </button>
                    <button
                      onClick={() => handleDelete(n._id)}
                      disabled={updatingId === n._id}
                      className="w-9 h-9 rounded-lg bg-red-50 border border-red-200 flex items-center justify-center text-red-600 hover:bg-red-100 transition-all disabled:opacity-50 shadow-sm"
                      title="Delete"
                    >
                      {updatingId === n._id ? <Loader2 size={16} className="animate-spin" /> : <Trash2 size={16} />}
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="max-w-[1600px] mx-auto w-full px-2">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Nominations Database</h1>
          <p className="text-slate-600 mt-1 font-medium">Review and manage award nominations efficiently</p>
        </div>
        <div className="bg-white border border-slate-200 shadow-sm px-4 py-2 rounded-lg flex items-center gap-3">
          <Award className="text-sky-500" size={20} />
          <span className="text-slate-700 font-bold">{nominations.length} Records</span>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="mt-6 bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
          <input
            type="text"
            placeholder="Search across all fields..."
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 text-base font-medium text-slate-700 placeholder:text-slate-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="w-full md:w-64">
          <select
            className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 text-sm font-bold uppercase tracking-widest text-slate-700 cursor-pointer"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            {STATUS_OPTIONS.map(s => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
        <div className="w-full md:w-48">
          <select
            className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 text-sm font-bold uppercase tracking-widest text-slate-700 cursor-pointer"
            value={paymentFilter}
            onChange={(e) => setPaymentFilter(e.target.value)}
          >
            <option value="ALL PAYMENTS">ALL PAYMENTS</option>
            <option value="paid">FULLY PAID</option>
            <option value="initial_paid">INITIAL PAID</option>
            <option value="not_paid">NOT PAID</option>
            <option value="not_interested">NOT INTERESTED</option>
          </select>
        </div>
      </div>

      {error && (
        <div className="mt-4 bg-red-50 text-red-600 p-4 rounded-xl font-medium border border-red-200">
          {error}
        </div>
      )}

      {/* Content */}
      {isLoading ? (
        <div className="flex justify-center py-20">
          <Loader2 className="w-10 h-10 animate-spin text-sky-500" />
        </div>
      ) : nominations.length === 0 ? (
        <div className="mt-6 bg-white shadow-sm rounded-2xl p-16 text-center text-slate-500 border border-slate-200">
          <Award className="w-12 h-12 mx-auto mb-4 opacity-50" />
          <p className="text-xl font-bold text-slate-700">No records found</p>
          <p className="text-sm mt-2">No nominations match the current filters.</p>
        </div>
      ) : (
        renderNominationsTable()
      )}

      {/* Modals */}
      <NominationViewModal
        nomination={viewingNomination}
        onClose={() => setViewingNomination(null)}
      />
      <NominationEditModal
        nomination={editingNomination}
        onClose={() => setEditingNomination(null)}
        onSave={handleSaveEdit}
      />
    </div>
  );
}
