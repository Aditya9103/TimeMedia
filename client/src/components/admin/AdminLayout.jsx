import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet-async';

const AdminLayout = () => {
  const { adminInfo } = useSelector((state) => state.auth);

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Helmet>
        <title>Admin Dashboard | TimeMedia</title>
      </Helmet>
      
      {/* Sidebar - Fixed width on desktop */}
      <div className="hidden md:block w-64 flex-shrink-0">
        <div className="fixed w-64 h-full">
          <Sidebar />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-slate-200 h-16 flex items-center justify-between px-6 sticky top-0 z-10">
          <h1 className="text-xl font-bold text-slate-800 hidden md:block">
            Dashboard
          </h1>
          <div className="flex items-center gap-4 ml-auto">
            <div className="text-sm">
              <p className="text-slate-500">Welcome back,</p>
              <p className="font-bold text-slate-800">{adminInfo?.name || 'Admin'}</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 font-bold border-2 border-sky-200">
              {adminInfo?.name ? adminInfo.name.charAt(0).toUpperCase() : 'A'}
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
