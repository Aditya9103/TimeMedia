import React from 'react';
import { useSelector } from 'react-redux';
import { User, Mail, Shield, Key } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const AdminSettings = () => {
  const { adminInfo } = useSelector((state) => state.auth);

  return (
    <div className="space-y-6">
      <Helmet>
        <title>Settings | Admin Portal</title>
      </Helmet>

      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-slate-800">Admin Settings</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Profile Card */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h2 className="text-xl font-semibold text-slate-800 mb-4 flex items-center gap-2">
            <User className="w-5 h-5 text-blue-600" />
            Profile Information
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-500 mb-1">Name</label>
              <div className="flex items-center p-3 bg-slate-50 rounded-lg border border-slate-100">
                <User className="w-5 h-5 text-slate-400 mr-3" />
                <span className="text-slate-700 font-medium">{adminInfo?.name || 'Admin User'}</span>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-500 mb-1">Email Address</label>
              <div className="flex items-center p-3 bg-slate-50 rounded-lg border border-slate-100">
                <Mail className="w-5 h-5 text-slate-400 mr-3" />
                <span className="text-slate-700 font-medium">{adminInfo?.email || 'admin@example.com'}</span>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-500 mb-1">Role</label>
              <div className="flex items-center p-3 bg-slate-50 rounded-lg border border-slate-100">
                <Shield className="w-5 h-5 text-slate-400 mr-3" />
                <span className="text-slate-700 font-medium">Super Administrator</span>
              </div>
            </div>
          </div>
        </div>

        {/* Security Card */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h2 className="text-xl font-semibold text-slate-800 mb-4 flex items-center gap-2">
            <Key className="w-5 h-5 text-blue-600" />
            Security Preferences
          </h2>
          <div className="p-4 bg-amber-50 rounded-lg border border-amber-100 text-amber-800 text-sm mb-4">
            Note: Password changes must currently be handled by the database administrator. An automated password reset feature will be added in a future update.
          </div>
          
          <button 
            disabled
            className="w-full py-2.5 px-4 bg-slate-100 text-slate-400 rounded-lg font-medium cursor-not-allowed border border-slate-200 flex items-center justify-center gap-2"
          >
            <Key className="w-4 h-4" />
            Change Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminSettings;
