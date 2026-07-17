import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Loader2, Upload, CheckCircle2, AlertCircle } from 'lucide-react';
import { useSubmitNominationMutation } from '../../store/apiSlice';

const AWARDS = [
  'International Awards',
  'Global Education Awards',
  'Global Healthcare Awards',
  'Digital Bharat Summit',
  'Global Icon Awards',
  'India Excellence Awards',
  'National Dental Awards'
];

const WANT_TO_OPTIONS = [
  'Nominate for Awards',
  'Speak at the Summit',
  'Exhibit at the Show',
  'Attend the Conference'
];

const REFERRED_BY_OPTIONS = [
  'Heena',
  'Jaya',
  'Mahima',
  'Renu',
  'Urmila',
  'Arti',
  'Vishal',
  'Kajal',
  'Nandini',
  'Snower',
  'The highest'
];

const NominationForm = () => {
  const { register, handleSubmit, formState: { errors }, reset, watch } = useForm({
    defaultValues: {
      registrationType: 'organisation',
      termsAccepted: false
    }
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'
  const [errorMessage, setErrorMessage] = useState('');
  
  const [submitNomination] = useSubmitNominationMutation();
  
  // Watch fields
  const registrationType = watch('registrationType');
  const selectedFile = watch('file');

  const onSubmit = async (data) => {
    try {
      setSubmitStatus('submitting');
      setErrorMessage('');
      
      const formData = new FormData();
      Object.keys(data).forEach(key => {
        if (key !== 'file' && data[key] !== undefined && data[key] !== '') {
          formData.append(key, data[key]);
        }
      });

      if (data.file && data.file.length > 0) {
        formData.append('file', data.file[0]);
      }

      await submitNomination(formData).unwrap();

      setSubmitStatus('success');
      reset();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error('Submission failed:', error);
      setSubmitStatus('error');
      setErrorMessage(error.data?.message || 'An error occurred while submitting your nomination. Please try again.');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = "w-full px-4 py-3.5 rounded-xl border-2 border-slate-200/80 text-slate-900 focus:border-[#15b7b9] focus:ring-4 focus:ring-[#15b7b9]/15 outline-none transition-all bg-white shadow-sm font-bold placeholder:text-slate-400 placeholder:font-medium text-[15px]";
  const labelClass = "block text-[11px] font-black text-slate-800 mb-2.5 uppercase tracking-widest";
  const errorClass = "text-red-500 text-[11px] font-bold uppercase tracking-widest mt-2";

  if (submitStatus === 'success') {
    return (
      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center max-w-2xl mx-auto border border-sky-100">
        <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10 text-emerald-500" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Nomination Received!</h2>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          Thank you for submitting your nomination. We have successfully received your details. Our team will evaluate your submission and get back to you soon.
        </p>
        <button 
          onClick={() => setSubmitStatus(null)}
          className="px-8 py-3 bg-sky-600 hover:bg-sky-700 text-white rounded-full font-bold transition-all"
        >
          Submit Another Nomination
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-12 border border-slate-100">
      
      {submitStatus === 'error' && (
        <div className="bg-red-50 text-red-600 p-4 rounded-xl flex items-start gap-3 border border-red-200 mb-8">
          <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
          <p className="font-medium">{errorMessage}</p>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        
        {/* Section: Category Selection */}
        <div className="bg-slate-50/70 p-6 md:p-8 rounded-2xl border border-slate-100 space-y-6">
          <h3 className="text-xl font-bold text-slate-800 border-b border-slate-200 pb-4 mb-2">1. Select Category</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className={labelClass}>For Which Award Form To Be Filled *</label>
              <select 
                className={`${inputClass} ${errors.awardName ? 'border-red-500' : ''}`}
                {...register('awardName', { required: 'Please select an award' })}
              >
                <option value="">-Please choose an option-</option>
                {AWARDS.map(award => (
                  <option key={award} value={award}>{award}</option>
                ))}
              </select>
              {errors.awardName && <p className={errorClass}>{errors.awardName.message}</p>}
            </div>

            <div>
              <label className={labelClass}>Want to *</label>
              <select 
                className={`${inputClass} ${errors.wantTo ? 'border-red-500' : ''}`}
                {...register('wantTo', { required: 'Please select an option' })}
              >
                <option value="">-Please choose an option-</option>
                {WANT_TO_OPTIONS.map(opt => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
              {errors.wantTo && <p className={errorClass}>{errors.wantTo.message}</p>}
            </div>
          </div>

          <div>
            <label className={labelClass}>Select your Registration type *</label>
            <div className="flex gap-6 mt-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input 
                  type="radio" 
                  value="organisation" 
                  className="w-4 h-4 text-sky-600 focus:ring-sky-500"
                  {...register('registrationType')}
                />
                <span className="text-gray-700 font-medium">Organisation</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input 
                  type="radio" 
                  value="individual" 
                  className="w-4 h-4 text-sky-600 focus:ring-sky-500"
                  {...register('registrationType')}
                />
                <span className="text-gray-700 font-medium">Individual</span>
              </label>
            </div>
          </div>
        </div>

        {/* Section: Basic Details */}
        <div className="bg-slate-50/70 p-6 md:p-8 rounded-2xl border border-slate-100 space-y-6">
          <h3 className="text-xl font-bold text-slate-800 border-b border-slate-200 pb-4 mb-2">2. Entity Details</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className={labelClass}>Nominee Name *</label>
              <input 
                type="text" 
                placeholder="Enter nominee name"
                className={`${inputClass} ${errors.nomineeName ? 'border-red-500' : ''}`}
                {...register('nomineeName', { required: 'Nominee name is required' })}
              />
              {errors.nomineeName && <p className={errorClass}>{errors.nomineeName.message}</p>}
            </div>

            {registrationType === 'organisation' && (
              <div>
                <label className={labelClass}>Organization/Clinic/Hospital Name *</label>
                <input 
                  type="text" 
                  placeholder="Enter organization name"
                  className={`${inputClass} ${errors.organizationName ? 'border-red-500' : ''}`}
                  {...register('organizationName', { required: 'Organization name is required for organisations' })}
                />
                {errors.organizationName && <p className={errorClass}>{errors.organizationName.message}</p>}
              </div>
            )}
          </div>
        </div>

        {/* Section: Organization Head Details */}
        <div className="bg-slate-50/70 p-6 md:p-8 rounded-2xl border border-slate-100 space-y-6">
          <h3 className="text-xl font-bold text-slate-800 border-b border-slate-200 pb-4 mb-2">3. Head Details</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className={labelClass}>Name of Organization Head</label>
              <input type="text" className={inputClass} {...register('headName')} />
            </div>
            <div>
              <label className={labelClass}>Organization Head Designation</label>
              <input type="text" className={inputClass} {...register('headDesignation')} />
            </div>
            <div>
              <label className={labelClass}>Organization Head Email</label>
              <input type="email" className={inputClass} {...register('headEmail')} />
            </div>
            <div>
              <label className={labelClass}>Organization Head Mobile</label>
              <input type="tel" className={inputClass} {...register('headMobile')} />
            </div>
          </div>
        </div>

        {/* Section: Contact Person Details */}
        <div className="bg-slate-50/70 p-6 md:p-8 rounded-2xl border border-slate-100 space-y-6">
          <h3 className="text-xl font-bold text-slate-800 border-b border-slate-200 pb-4 mb-2">4. Contact Person Details</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className={labelClass}>Contact Person Name</label>
              <input type="text" className={inputClass} {...register('contactName')} />
            </div>
            <div>
              <label className={labelClass}>Contact Person’s Designation</label>
              <input type="text" className={inputClass} {...register('contactDesignation')} />
            </div>
            <div>
              <label className={labelClass}>Contact Person Email *</label>
              <input 
                type="email" 
                className={`${inputClass} ${errors.contactEmail ? 'border-red-500' : ''}`}
                {...register('contactEmail', { 
                  required: 'Contact email is required',
                  pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' }
                })} 
              />
              {errors.contactEmail && <p className={errorClass}>{errors.contactEmail.message}</p>}
            </div>
            <div>
              <label className={labelClass}>Contact Person’s Mobile *</label>
              <input 
                type="tel" 
                className={`${inputClass} ${errors.contactMobile ? 'border-red-500' : ''}`}
                {...register('contactMobile', { required: 'Contact mobile is required' })} 
              />
              {errors.contactMobile && <p className={errorClass}>{errors.contactMobile.message}</p>}
            </div>
          </div>
        </div>

        {/* Section: Additional Information */}
        <div className="bg-slate-50/70 p-6 md:p-8 rounded-2xl border border-slate-100 space-y-6">
          <h3 className="text-xl font-bold text-slate-800 border-b border-slate-200 pb-4 mb-2">5. Additional Information</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className={labelClass}>Website</label>
              <input type="url" placeholder="https://" className={inputClass} {...register('website')} />
            </div>
            <div>
              <label className={labelClass}>Turnover for Last Financial Year (in digit)</label>
              <input type="number" placeholder="e.g. 5000000" className={inputClass} {...register('turnover')} />
            </div>
            
            <div className="md:col-span-2">
              <label className={labelClass}>Street Address</label>
              <input type="text" className={inputClass} {...register('streetAddress')} />
            </div>
            
            <div>
              <label className={labelClass}>City</label>
              <input type="text" className={inputClass} {...register('city')} />
            </div>
            <div>
              <label className={labelClass}>State/Province</label>
              <input type="text" className={inputClass} {...register('state')} />
            </div>
            <div>
              <label className={labelClass}>ZIP/Postal Code</label>
              <input type="text" className={inputClass} {...register('zipCode')} />
            </div>

            <div>
              <label className={labelClass}>Referred By</label>
              <select className={inputClass} {...register('referredBy')}>
                <option value="">-Please choose an option-</option>
                {REFERRED_BY_OPTIONS.map(opt => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
          </div>
          
          <div className="pt-4">
            <label className={labelClass}>Upload File (Optional)</label>
            <div className="border-2 border-dashed border-slate-300 rounded-2xl p-8 text-center hover:bg-slate-50 hover:border-[#15b7b9] transition-all cursor-pointer group">
              <input 
                type="file" 
                id="file-upload" 
                className="hidden" 
                {...register('file')}
              />
              <label htmlFor="file-upload" className="cursor-pointer flex flex-col items-center gap-3 w-full">
                {selectedFile && selectedFile.length > 0 ? (
                  <>
                    <div className="w-14 h-14 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <span className="text-base font-bold text-emerald-600 line-clamp-1 px-4 text-center">{selectedFile[0].name}</span>
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Click to change file</span>
                  </>
                ) : (
                  <>
                    <div className="w-14 h-14 bg-cyan-50 text-[#15b7b9] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Upload className="w-6 h-6" />
                    </div>
                    <span className="text-[15px] font-bold text-slate-700">Click to upload or drag and drop</span>
                    <span className="text-sm text-slate-500 font-medium">PDF, DOC, DOCX, JPG, PNG (Max. 5MB)</span>
                  </>
                )}
              </label>
            </div>
          </div>

          <div>
            <label className={labelClass}>Message</label>
            <textarea 
              rows="4" 
              className={`${inputClass} resize-none`}
              {...register('message')}
            ></textarea>
          </div>
        </div>

        {/* Section: Terms & Submit */}
        <div className="bg-sky-50 p-6 rounded-xl border border-sky-100">
          <label className="flex items-start gap-4 cursor-pointer">
            <input 
              type="checkbox" 
              className="mt-1 w-5 h-5 text-sky-600 rounded focus:ring-sky-500"
              {...register('termsAccepted', { required: 'You must accept the Terms & Conditions' })}
            />
            <div className="text-sm text-gray-700 leading-relaxed">
              <span className="font-bold block mb-1">Terms & Conditions</span>
              By filling and submitting the nomination form, I declare that I have read and understood the Application, Selection process and the Terms & Conditions of the related awards. I hereby agree and accept the same. I further declare that information provided in the nomination form is true to the best of my knowledge and belief.
            </div>
          </label>
          {errors.termsAccepted && <p className="text-red-500 text-sm font-medium mt-2 ml-9">{errors.termsAccepted.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-5 rounded-2xl bg-gradient-to-r from-[#15b7b9] to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white font-bold text-lg flex items-center justify-center gap-3 transition-all disabled:opacity-70 shadow-xl shadow-cyan-600/30 hover:shadow-cyan-600/50 hover:-translate-y-1"
        >
          {isSubmitting ? (
            <Loader2 className="w-6 h-6 animate-spin" />
          ) : (
            <Upload className="w-6 h-6" />
          )}
          {isSubmitting ? 'Submitting Application...' : 'Submit Nomination'}
        </button>
      </form>
    </div>
  );
};

export default NominationForm;
