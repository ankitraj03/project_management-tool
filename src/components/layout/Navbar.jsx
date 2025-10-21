import React,{useState} from 'react';

function Navbar() {
  const [openAccordion, setOpenAccordion] = useState(null);
  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };
  const accordions = [
    { id: "1", header: "Workspaces", body: "Body text 1 ..." },
    { id: "2", header: "Recent", body: "Body text 2 ..." },
    { id: "3", header: "Starred", body: "Body text 3 ..." },
    { id: "4", header: "More", body: "Body text 4 ..." }
  ];

  return (
    <div className="sticky top-0 bg-[#282c34]/95  z-50">
      <div className="h-[60px] flex items-center justify-between px-4 lg:px-8 max-w-full mx-auto">
        <div className="flex items-center gap-6">
          
          <div className="flex items-center mr-2">
            LOGO
          </div>
          <div className="flex gap-0">
            {accordions.map((acc) => (
              <div key={acc.id} className="relative">
                <div
                  onClick={() => toggleAccordion(acc.id)}
                  className={`w-[130px] cursor-pointer text-[#9FADBC] text-[17px] font-medium
                    rounded flex justify-between items-center px-4 py-2
                    hover:bg-gray-700 transition-all duration-300
                    ${openAccordion === acc.id ? 'bg-gray-800 text-white' : 'bg-transparent'}
                  `}
                >
                  {acc.header}
                  <span
                    className={`ml-2 transform transition-transform duration-300 ${openAccordion === acc.id ? 'rotate-180' : ''}`}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M7 10l5 5 5-5" stroke="#9FADBC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </div>

                <div
                  className={`fixed left-0 right-0 w-full bg-gray-800 text-white px-8 text-sm font-light
                    overflow-hidden transition-all duration-500 ease-in-out shadow-lg
                    ${openAccordion === acc.id ? 'max-h-screen py-6 opacity-100 z-40' : 'max-h-0 py-0 opacity-0'}`}
                  style={{ top: "60px" }}
                >
                  <div className="max-w-6xl mx-auto">{acc.body}</div>
                </div>
              </div>
            ))}
          </div>
          <button className="ml-4 bg-blue-500 hover:bg-blue-600 text-white font-medium px-3 py-2 rounded transition-all duration-300">
            <svg width="22" height="22" fill="none" viewBox="0 0 22 22">
              <rect width="22" height="22" rx="6" fill="#69AEFF"/>
              <path d="M11 7v8M7 11h8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center bg-[#23272f] rounded px-3 py-1">
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24" className="text-gray-400 mr-1">
              <circle cx="11" cy="11" r="7" stroke="#9FADBC" strokeWidth="2"/>
              <path d="M21 21l-4.35-4.35" stroke="#9FADBC" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <input
              className="bg-transparent outline-none text-gray-300 ml-1 text-[16px] w-[120px]"
              placeholder="Search"
            />
          </div>
          <button className="flex items-center">
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
              <path d="M15 17v1a3 3 0 0 1-6 0v-1m-4-6V9a7 7 0 0 1 14 0v2a5 5 0 0 0 2 4H3a5 5 0 0 0 2-4z"
                stroke="#9FADBC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="flex items-center">
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
              <path d="M12 17h.01M12 13a3 3 0 1 1 3-3m-3 3v2" stroke="#9FADBC" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
          <span className="w-8 h-8 rounded-full bg-gradient-to-tr from-red-500 to-orange-400 flex items-center justify-center">
            <svg width="25" height="25" fill="none" viewBox="0 0 32 32">
              <circle cx="16" cy="16" r="16" fill="#c58556"/>
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
