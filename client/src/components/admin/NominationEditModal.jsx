import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useUpdateNominationMutation } from '../../store/apiSlice';

export default function NominationEditModal({ nomination, onClose, onSave }) {
  const [formData, setFormData] = useState(null);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    if (nomination) {
      setFormData({ ...nomination });
    } else {
      setFormData(null);
    }
  }, [nomination]);

  const [updateNomination] = useUpdateNominationMutation();

  if (!nomination || !formData) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setIsSaving(true);
    try {
      const response = await updateNomination({ id: formData._id, data: formData }).unwrap();
      setSuccess('Nomination successfully updated!');
      setTimeout(() => {
        onSave(response.data);
      }, 1500);
    } catch (err) {
      setError(err.data?.message || 'Failed to update nomination');
    } finally {
      setIsSaving(false);
    }
  };

  const inputClass = "w-full bg-black/20 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white/90 placeholder:text-white/20 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all font-medium";
  const selectClass = "w-full bg-[#0a1128] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white/90 focus:outline-none focus:border-indigo-500/50 transition-all font-medium appearance-none";

  return createPortal(
    <div className="fixed inset-0 bg-black/60 backdrop-blur-xl flex items-center justify-center z-[9999] p-4 sm:p-8" onClick={onClose}>
      <div
        className="bg-[#050A15]/95 border border-white/10 shadow-[0_30px_100px_rgba(0,0,0,1)] p-6 sm:p-8 rounded-[2rem] max-w-5xl w-full max-h-[90vh] overflow-y-auto custom-scrollbar relative group"
        onClick={e => e.stopPropagation()}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-transparent pointer-events-none rounded-[2rem]" />

        <div className="relative z-50">
          <div className="absolute -top-2 -right-2 sm:top-0 sm:right-0 z-[999]">
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onClose();
              }}
              className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-red-500 hover:border-red-500 transition-all shadow-xl hover:rotate-90 cursor-pointer"
            >
              ✕
            </button>
          </div>

          <div className="mb-8 border-b border-white/10 pb-6 pr-12">
            <div className="flex items-center gap-2 mb-2">
              <div className="h-2 w-2 bg-indigo-500 rounded-full animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-400">Admin Action</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tighter uppercase leading-none">Edit <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400">Nomination</span></h2>
          </div>

          {error && (
            <div className="mb-6 bg-red-500/10 border border-red-500/50 text-red-500 text-xs font-bold uppercase tracking-widest px-4 py-3 rounded-xl flex items-center gap-3">
              <span className="text-lg">⚠️</span> {error}
            </div>
          )}

          {success && (
            <div className="mb-6 bg-emerald-500/10 border border-emerald-500/50 text-emerald-400 text-xs font-bold uppercase tracking-widest px-4 py-3 rounded-xl flex items-center gap-3">
              <span className="text-lg">✅</span> {success}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-5">
              {/* Participation & Category */}
              <div className="space-y-5 bg-white/5 p-6 rounded-2xl border border-white/10 shadow-sm hover:bg-white/[0.07] transition-colors">
                <h3 className="text-[10px] font-black uppercase tracking-widest text-indigo-400 mb-2 flex items-center gap-2">
                  <span className="p-1.5 bg-indigo-500/10 rounded-lg text-xs">📑</span> Categorization
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-[9px] font-black uppercase tracking-widest text-white/40 ml-1 mb-1.5 block">Participation Type</label>
                    <input className={inputClass} name="wantTo" value={formData.wantTo || ""} onChange={handleChange} />
                  </div>
                  <div>
                    <label className="text-[9px] font-black uppercase tracking-widest text-white/40 ml-1 mb-1.5 block">Category (User)</label>
                    <input className={inputClass} name="awardName" value={formData.awardName || ""} onChange={handleChange} />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-[9px] font-black uppercase tracking-widest text-white/40 ml-1 mb-1.5 block">Registration Type</label>
                      <input className={inputClass} name="registrationType" value={formData.registrationType || ""} onChange={handleChange} />
                    </div>
                    <div>
                      <label className="text-[9px] font-black uppercase tracking-widest text-white/40 ml-1 mb-1.5 block">Referred By</label>
                      <input className={inputClass} name="referredBy" value={formData.referredBy || ""} onChange={handleChange} />
                    </div>
                  </div>
                  <div>
                    <label className="text-[9px] font-black uppercase tracking-widest text-[#d4af37]/80 ml-1 mb-1.5 block">Payment Status</label>
                    <select className={selectClass} name="paymentStatus" value={formData.paymentStatus || "not_paid"} onChange={handleChange}>
                      <option value="not_paid">Not Paid</option>
                      <option value="partially_paid">Partially Paid</option>
                      <option value="paid">Fully Paid</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Identity */}
              <div className="space-y-5 bg-white/5 p-6 rounded-2xl border border-white/10 shadow-sm hover:bg-white/[0.07] transition-colors">
                <h3 className="text-[10px] font-black uppercase tracking-widest text-cyan-400 mb-2 flex items-center gap-2">
                  <span className="p-1.5 bg-cyan-500/10 rounded-lg text-xs">🆔</span> Core Identity
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-[9px] font-black uppercase tracking-widest text-white/40 ml-1 mb-1.5 block">Nominee Name</label>
                    <input className={inputClass} name="nomineeName" value={formData.nomineeName || ""} onChange={handleChange} />
                  </div>
                  <div>
                    <label className="text-[9px] font-black uppercase tracking-widest text-white/40 ml-1 mb-1.5 block">Organization</label>
                    <input className={inputClass} name="organizationName" value={formData.organizationName || ""} onChange={handleChange} />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-[9px] font-black uppercase tracking-widest text-white/40 ml-1 mb-1.5 block">Website</label>
                      <input className={inputClass} name="website" value={formData.website || ""} onChange={handleChange} />
                    </div>
                    <div>
                      <label className="text-[9px] font-black uppercase tracking-widest text-white/40 ml-1 mb-1.5 block">Turnover</label>
                      <input className={inputClass} name="turnover" value={formData.turnover || ""} onChange={handleChange} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Leadership & Contact */}
              <div className="md:col-span-2 grid md:grid-cols-2 gap-5">
                <div className="space-y-5 bg-white/5 p-6 rounded-2xl border border-white/10 shadow-sm hover:bg-white/[0.07] transition-colors">
                  <h3 className="text-[10px] font-black uppercase tracking-widest text-emerald-400 mb-2 flex items-center gap-2">
                    <span className="p-1.5 bg-emerald-500/10 rounded-lg text-xs">👑</span> Leadership (Org Head)
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <input className={inputClass} name="headName" value={formData.headName || ""} onChange={handleChange} placeholder="Name" />
                    <input className={inputClass} name="headDesignation" value={formData.headDesignation || ""} onChange={handleChange} placeholder="Designation" />
                    <input className={inputClass} name="headMobile" value={formData.headMobile || ""} onChange={handleChange} placeholder="Mobile" />
                    <input className={inputClass} name="headEmail" value={formData.headEmail || ""} onChange={handleChange} placeholder="Email" />
                  </div>
                </div>
                <div className="space-y-5 bg-white/5 p-6 rounded-2xl border border-white/10 shadow-sm hover:bg-white/[0.07] transition-colors">
                  <h3 className="text-[10px] font-black uppercase tracking-widest text-purple-400 mb-2 flex items-center gap-2">
                    <span className="p-1.5 bg-purple-500/10 rounded-lg text-xs">📞</span> Operational Point (Contact)
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <input className={inputClass} name="contactName" value={formData.contactName || ""} onChange={handleChange} placeholder="Name" />
                    <input className={inputClass} name="contactDesignation" value={formData.contactDesignation || ""} onChange={handleChange} placeholder="Designation" />
                    <input className={inputClass} name="contactMobile" value={formData.contactMobile || ""} onChange={handleChange} placeholder="Mobile" />
                    <input className={inputClass} name="contactEmail" value={formData.contactEmail || ""} onChange={handleChange} placeholder="Email" />
                  </div>
                </div>
              </div>

              {/* Logistics & Remarks */}
              <div className="md:col-span-2 space-y-5 bg-white/5 p-6 rounded-2xl border border-white/10 shadow-sm hover:bg-white/[0.07] transition-colors">
                <h3 className="text-[10px] font-black uppercase tracking-widest text-[#d4af37] mb-2 flex items-center gap-2">
                  <span className="p-1.5 bg-[#d4af37]/10 rounded-lg text-xs">🌍</span> Logistics & Assessment
                </h3>
                <div className="grid md:grid-cols-4 gap-4">
                  <input className={inputClass} name="streetAddress" value={formData.streetAddress || ""} onChange={handleChange} placeholder="Street Address" />
                  <input className={inputClass} name="city" value={formData.city || ""} onChange={handleChange} placeholder="City" />
                  <input className={inputClass} name="state" value={formData.state || ""} onChange={handleChange} placeholder="State" />
                  <input className={inputClass} name="zipCode" value={formData.zipCode || ""} onChange={handleChange} placeholder="ZIP" />
                </div>
                <div className="grid md:grid-cols-2 gap-5 mt-5">
                  <div>
                    <label className="text-[9px] font-black uppercase tracking-widest text-white/40 ml-1 mb-1.5 block">Public Remarks / Message</label>
                    <textarea className={`${inputClass} min-h-[80px] resize-none`} name="message" value={formData.message || ""} onChange={handleChange} />
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1.5">
                      <label className="text-[9px] font-black uppercase tracking-widest text-red-400/80 ml-1 block">Internal Admin Remarks</label>
                      <label className="text-[9px] font-black uppercase tracking-widest text-indigo-400 ml-1 block border-b border-indigo-400">Valuation</label>
                    </div>
                    <div className="flex gap-2">
                      <textarea className={`${inputClass} min-h-[80px] resize-none border-red-500/20 focus:border-red-500/50 flex-1`} name="adminRemark" value={formData.adminRemark || ""} onChange={handleChange} placeholder="Internal Notes..." />
                      <input className={`${inputClass} w-32`} name="amount" value={formData.amount || ""} onChange={handleChange} placeholder="Fee / Amount" />
                    </div>
                  </div>
                </div>

                {formData.fileUrl && (
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <a
                      href={formData.fileUrl.startsWith('http') ? formData.fileUrl : `http://localhost:5001${formData.fileUrl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 text-white/70 text-xs font-bold uppercase tracking-widest rounded-lg transition-colors border border-white/10"
                    >
                      📄 View Attached Document
                    </a>
                  </div>
                )}
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-8 pt-6 border-t border-white/10">
              <button
                type="button"
                onClick={(e) => { e.preventDefault(); e.stopPropagation(); onClose(); }}
                className="px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest text-white/40 hover:text-white hover:bg-white/5 transition-all"
              >
                Discard Changes
              </button>
              <button
                type="submit"
                disabled={isSaving || success !== ''}
                className="bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-3 text-[10px] font-black uppercase tracking-widest shadow-[0_0_20px_rgba(99,102,241,0.4)] rounded-xl transition-all disabled:opacity-50"
              >
                {isSaving ? 'Committing...' : success ? 'Committed!' : 'Commit Update'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>,
    document.body
  );
}
