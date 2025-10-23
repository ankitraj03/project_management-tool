import React from 'react';
import img from '../../assets/img.png';

function Templates({ bg, main, title, desc }) {
  return (
    <div className="bg-[#23272f] w-[300px] h-auto rounded-xl overflow-hidden shadow-lg p-4 text-[#d1d5db] transition-transform duration-300 hover:scale-101">
      <div className="relative">
        <img
          src={bg}
          alt="Template Background"
          className="w-full h-26 object-cover rounded-xl"
        />

        <div className="absolute -bottom-7 left-4">
          <img
            src={main}
            alt="Template Avatar"
            className="w-16 h-16 rounded-full border-4 border-[#23272f] object-cover shadow-lg"
          />
        </div>
      </div>

      <div className="pt-8 pb-3 px-2">
        <div className="font-semibold text-lg text-[#eaeaea]">{title}</div>
        <div className="text-sm text-[#b6b6b6] mt-1">{desc}</div>
      </div>
    </div>
  );
}

export default Templates;
