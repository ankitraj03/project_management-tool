import React from "react";

function Navbar() {
  return (
    <nav className="sticky top-0 bg-[#282c34]/95 backdrop-blur-md z-50 shadow-sm">
      <div className="h-[60px] flex items-center justify-between px-4 lg:px-8 max-w-full mx-auto">

        <div className="flex items-center gap-6">

          <div className="text-white font-bold text-lg tracking-wide">
            LOGO
          </div>
        </div>

        <div className="flex items-center gap-3 sm:gap-4">

          <div className="hidden sm:flex items-center bg-[#23272f] rounded px-3 py-1.5">
            <svg
              width="18"
              height="18"
              fill="none"
              viewBox="0 0 24 24"
              className="text-gray-400 mr-1"
            >
              <circle cx="11" cy="11" r="7" stroke="#9FADBC" strokeWidth="2" />
              <path
                d="M21 21l-4.35-4.35"
                stroke="#9FADBC"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <input
              type="text"
              className="bg-transparent outline-none text-gray-300 ml-1 text-sm w-[120px] sm:w-[150px] placeholder:text-[#9FADBC]"
              placeholder="Search"
            />
          </div>

          <button className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded transition-all duration-300 flex items-center justify-center">
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
              <path
                d="M12 5v14M5 12h14"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>

          <button className="flex items-center hover:bg-gray-700 p-2 rounded transition">
            <svg
              width="20"
              height="20"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                d="M15 17v1a3 3 0 0 1-6 0v-1m-4-6V9a7 7 0 0 1 14 0v2a5 5 0 0 0 2 4H3a5 5 0 0 0 2-4z"
                stroke="#9FADBC"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Help */}
          <button className="flex items-center hover:bg-gray-700 p-2 rounded transition">
            <svg
              width="20"
              height="20"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 17h.01M12 13a3 3 0 1 1 3-3m-3 3v2"
                stroke="#9FADBC"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>

          {/* Profile */}
          <span className="w-8 h-8 rounded-full bg-gradient-to-tr from-red-500 to-orange-400 flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-200">
            <svg width="22" height="22" fill="none" viewBox="0 0 32 32">
              <circle cx="16" cy="16" r="16" fill="#c58556" />
            </svg>
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
