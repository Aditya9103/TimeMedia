import React from 'react';
import { Helmet } from 'react-helmet-async';
import NominationForm from '../components/common/NominationForm';
import { Sparkles } from 'lucide-react';

const Nomination = () => {
  return (
    <div className="min-h-screen bg-slate-50 relative pb-20">
      <Helmet>
        <title>Submit Nomination | TimeMedia</title>
      </Helmet>
      
      {/* Premium Hero Section */}
      <div className="bg-slate-900 pt-32 pb-32 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#15b7b9]/20 rounded-full blur-3xl"></div>
          <div className="absolute top-40 -left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 md:px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/90 text-sm font-bold tracking-widest uppercase mb-6 backdrop-blur-md">
            <Sparkles size={16} className="text-[#15b7b9]" />
            Celebrate Excellence
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 font-display tracking-tight">
            Award <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#15b7b9] to-blue-400">Nomination</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-medium leading-relaxed">
            Submit a nomination or register your interest for our upcoming premium events. Ensure all mandatory fields (*) are completed accurately.
          </p>
        </div>
      </div>
      
      {/* Form Container */}
      <div className="max-w-5xl mx-auto px-4 md:px-6 -mt-16 relative z-20">
        <NominationForm />
      </div>
    </div>
  );
};

export default Nomination;
