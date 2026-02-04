import React from 'react';

function Form() {
  return (
    <div className="bg-purple-50 min-h-screen py-10 flex justify-center">
      <div className="w-full max-w-2xl mx-4">
        {/* Header*/}
        <div className="bg-white rounded-t-lg border-t-8 border-purple-700 p-6 mb-3 shadow-sm">
          <h1 className="text-3xl font-normal text-slate-900">Survei Kesehatan</h1>
        </div>

        <form className="space-y-3">
          {/* Input Nama */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
            <label className="block text-base mb-4">Nama Lengkap <span className="text-red-500">*</span></label>
            <input 
              placeholder="Jawaban Anda"
              className="w-full border-b border-gray-300 focus:border-b-2 focus:border-purple-600 outline-none py-2 transition-all" 
              type="text" 
              required 
            />
          </div>

          {/* Input Umur */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
            <label className="block text-base mb-4">Umur</label>
            <input 
              placeholder="Jawaban Anda"
              className="w-40 border-b border-gray-300 focus:border-b-2 focus:border-purple-600 outline-none py-2 transition-all" 
              type="number" 
            />
          </div>

          {/* Jenis Kelamin */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
            <label className="block text-base mb-4">Jenis Kelamin</label>
            <div className="space-y-3">
              {['Laki-laki', 'Perempuan'].map((item) => (
                <label key={item} className="flex items-center cursor-pointer group">
                  <input type="radio" name="jk" className="w-5 h-5 accent-purple-700" />
                  <span className="ml-3 text-sm text-slate-700">{item}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Status Perokok*/}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
            <label className="block text-base mb-4">Apakah Anda Perokok?</label>
            <div className="space-y-3">
              {['Ya', 'Tidak'].map((pilihan) => (
                <label key={pilihan} className="flex items-center cursor-pointer">
                  <input type="radio" name="perokok" className="w-5 h-5 accent-purple-700" />
                  <span className="ml-3 text-sm text-slate-700">{pilihan}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Pilihan Rokok*/}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
            <label className="block text-base mb-2">Jika Anda Perokok, Rokok apa yang pernah Anda coba?</label>
            <div className="space-y-3">
              {['Sampurna', 'Kretek', 'Filter', 'Grandel'].map((merk) => (
                <label key={merk} className="flex items-center cursor-pointer">
                  <input type="checkbox" className="w-5 h-5 rounded accent-purple-700" />
                  <span className="ml-3 text-sm text-slate-700">{merk}</span>
                </label>
              ))}
            </div>
          </div>

          {/* CTA*/}
          <div className="flex justify-between items-center py-4">
            <button type="submit" className="bg-purple-700 text-white px-6 py-2 rounded shadow hover:bg-purple-800 transition font-medium">
              Kirim
            </button>
            <button type="reset" className="text-purple-700 font-medium text-sm hover:bg-purple-50 px-3 py-2 rounded">
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
