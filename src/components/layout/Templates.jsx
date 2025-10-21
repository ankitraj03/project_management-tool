import React from 'react';
import img from '../../assets/img.png'

function Templates() {
  return (
    <div className="bg-[#23272f] w-[300px] h-[300px] rounded-xl overflow-hidden shadow-lg p-4 text-[#d1d5db]">

      <div className="relative">
        <img
          src={img}
          alt="Remote Class Template"
          className="w-full h-26 object-cover rounded-xl"
        />

        <div className="absolute -bottom-7 left-4">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Kelly Theisen"
            className="w-16 h-16 rounded-full border-4 border-[#23272f] object-cover shadow-lg"
          />
        </div>
      </div>

      <div className="pt-8 pb-3 px-2">
        <div className="font-semibold text-lg text-[#eaeaea]">Remote Class Template</div>
        <div className="text-sm text-[#b6b6b6] mt-1">
          by Kelly Theisen, Assistant Professor of Chemistry
        </div>
        <div className="mt-3 text-base text-[#dcdcdc]">
          Stay organized in a remote learning environment.
        </div>
      </div>

      <div className="flex space-x-6 items-center px-2 py-3 text-[#b6b6b6] text-sm">
        <div className="flex items-center">
          <svg width="17" height="17" fill="none" className="mr-1">
            <rect x="1.5" y="2.5" width="14" height="12" rx="2" stroke="#9FADBC" strokeWidth="1.5"/>
            <rect x="4.5" y="6.5" width="8" height="1" rx=".5" fill="#9FADBC"/>
          </svg>
          <span>48.9K</span>
        </div>
        <div className="flex items-center">
          <svg width="17" height="17" fill="none" className="mr-1" viewBox="0 0 20 20">
            <circle cx="10" cy="10" r="7" stroke="#9FADBC" strokeWidth="1.5"/>
            <circle cx="10" cy="10" r="2.5" fill="#9FADBC"/>
          </svg>
          <span>217.8K</span>
        </div>
      </div>
    </div>
  );
}

export default Templates;
