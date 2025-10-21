import React, { useState } from 'react';

function PreNav() {
  const [openAccordion, setOpenAccordion] = useState(null);
  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  const accordions = [
    { id: "1", header: "header1", body: "Body text 1 ..." },
    { id: "2", header: "header2", body: "Body text 2 ..." },
    { id: "3", header: "header3", body: "Body text 3 ..." },
    { id: "4", header: "header4", body: "Body text 4 ..." }
  ];

  return (
    <div className="sticky top-0 bg-white/90 backdrop-blur-md shadow-md border-b border-gray-100">
      <div className="h-[60px] flex items-center justify-between px-6 max-w-7xl mx-auto">

        {/* Logo + Accordions */}
        <div className="flex items-center gap-6">
          <span className="font-extrabold text-xl text-blue-700 tracking-wide">
            LOGO
          </span>

          <div className="flex gap-2">
            {accordions.map((acc) => (
              <div key={acc.id} className="relative">
                {/* Accordion Header */}
                <div
                  onClick={() => toggleAccordion(acc.id)}
                  className={`w-[110px] cursor-pointer text-gray-700 text-[15px] font-medium 
                              rounded-md flex justify-between items-center px-3 py-2
                              transition-all duration-300
                              hover:bg-blue-600 hover:text-blue-800 ${
                                openAccordion === acc.id ? 'bg-blue-600 text-white' : 'bg-transparent'
                              }`}
                >
                  {acc.header}
                  <span
                    className={`transform transition-transform duration-300 ${
                      openAccordion === acc.id ? 'rotate-180' : ''
                    }`}
                  >
                    ⌄
                  </span>
                </div>

                <div
                  className={`fixed left-0 right-0 w-full bg-blue-800 text-white px-8 text-sm font-light
                              overflow-hidden transition-all duration-500 ease-in-out shadow-lg
                              ${openAccordion === acc.id ? 'max-h-screen py-6 opacity-100' : 'max-h-0 py-0 opacity-0'}`}
                >
                  <div className="max-w-6xl mx-auto">{acc.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Login Button */}
        <div>
          <button className="bg-green-600 text-white font-medium px-5 py-2 rounded-md 
                             hover:bg-green-700 hover:shadow-md transition-all duration-300">
            Login
          </button>
        </div>

      </div>
    </div>
  );
}

export default PreNav;
