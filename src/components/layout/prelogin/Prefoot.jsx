import React from "react";

function Prefooter() {
  return (
    <div className="bg-gray-100 flex flex-col">
      {/* Hero Section */}
      <div className="pt-32 pb-16 text-center">
        <h1 className="font-bold text-4xl md:text-5xl text-gray-900 mb-8">
          Get started with Trello today
        </h1>
        <form className="flex flex-col md:flex-row justify-center items-center gap-3">
          <input
            type="email"
            placeholder="Email"
            className="w-full md:w-[400px] py-3 px-4 text-lg rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium py-3 px-8 rounded transition"
          >
            Sign up – it's free!
          </button>
        </form>
        <p className="mt-6 text-gray-600 text-sm">
          By entering my email, I acknowledge the{" "}
          <a
            href="https://www.atlassian.com/legal/privacy-policy"
            className="text-blue-600 underline hover:text-blue-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            Atlassian Privacy Policy
          </a>
          .
        </p>
      </div>

      {/* Footer Section */}
      <footer className="bg-[#1c2b3a] text-white pt-10 pb-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-start justify-between gap-8">
            {/* Logo & Login */}
            <div className="mb-6 md:mb-0 flex flex-col items-start">
              <div className="flex items-center mb-4">
                <img
                  src="https://cdn.worldvectorlogo.com/logos/trello.svg"
                  alt="Trello"
                  className="w-12 h-12 mr-2"
                />
                <span className="font-bold text-xl">Trello</span>
              </div>
              <button className="underline text-sm hover:text-gray-300">Log In</button>
            </div>

            {/* Footer Links */}
            <div>
              <h2 className="font-bold text-base mb-2">About Trello</h2>
              <ul>
                <li className="text-sm mb-1 text-gray-300">What's behind the boards.</li>
              </ul>
            </div>
            <div>
              <h2 className="font-bold text-base mb-2">Jobs</h2>
              <ul>
                <li className="text-sm mb-1 text-gray-300">Learn about open roles on the Trello team.</li>
              </ul>
            </div>
            <div>
              <h2 className="font-bold text-base mb-2">Apps</h2>
              <ul>
                <li className="text-sm mb-1 text-gray-300">Download the Trello App for your Desktop or Mobile devices.</li>
              </ul>
            </div>
            <div>
              <h2 className="font-bold text-base mb-2">Contact us</h2>
              <ul>
                <li className="text-sm mb-1 text-gray-300">Get in touch and we can help.</li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom Links and Icons */}
          <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 text-sm">
            <div className="flex flex-wrap gap-4 items-center text-gray-300">
              <span>
                <svg width="18" height="18" fill="currentColor" className="inline mr-1">
                  <circle cx="9" cy="9" r="9" fill="#23395e" />
                  <ellipse cx="9" cy="9" rx="8" ry="3" fill="#fff" />
                  <rect x="8" y="0" width="2" height="18" fill="#fff" />
                </svg>
                English
              </span>
              <span>Notice at Collection</span>
              <span>Privacy Policy</span>
              <span>Terms</span>
              <span>Copyright © 2024 Atlassian</span>
            </div>
            <div className="flex space-x-6 text-xl">
              {/* Social Icons */}
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <span className="sr-only">Facebook</span>
                <svg fill="white" width="24" height="24" viewBox="0 0 32 32">
                  <path d="M32,16A16,16,0,1,0,14.06,31.81V20.57H9.8V16h4.26V12.67c0-4.22,2.52-6.55,6.37-6.55a25.85,25.85,0,0,1,3.77.33V10.2H21.54c-2.1,0-2.54,1-2.54,2.43V16h4.32l-.56,4.57H19V31.8A16,16,0,0,0,32,16Z" />
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <span className="sr-only">LinkedIn</span>
                <svg fill="white" width="24" height="24" viewBox="0 0 32 32">
                  <path d="M29 0h-26c-1.6 0-3 1.4-3 3v26c0 1.6 1.4 3 3 3h26c1.6 0 3-1.4 3-3v-26c0-1.6-1.4-3-3-3zM12 24h-4v-10h4v10zM10 12.9c-1.3 0-2.4-1.1-2.4-2.5s1.1-2.5 2.4-2.5c1.3 0 2.4 1.1 2.4 2.5s-1.1 2.5-2.4 2.5zM26 24h-4v-5.4c0-1.3-0.8-2.1-1.9-2.1-1.1 0-1.8 0.7-1.8 2.1v5.3h-4v-10h3.9v1.2h0.1c0.5-0.9 1.6-1.9 3.5-1.9 2.5 0 4.1 1.6 4.1 4.9v6.8z" />
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <span className="sr-only">Twitter</span>
                <svg fill="white" width="24" height="24" viewBox="0 0 32 32">
                  <path d="M32,6c-1.2,0.5-2.4,0.8-3.7,1c1.3-0.8,2.3-2,2.7-3.3c-1.2,0.7-2.5,1.3-3.9,1.6C26.1,2.7,24.6,2,23,2c-3.1,0-5.5,2.5-5.5,5.5c0,0.4,0,0.8,0.1,1.2c-4.5-0.2-8.5-2.4-11.2-5.7C5.6,4.7,5.9,5.7,5.9,6.7c0,1.9,1,3.6,2.5,4.6c-0.9,0-1.8-0.3-2.6-0.7v0.1c0,2.7,1.9,4.9,4.3,5.4c-0.5,0.1-1,0.2-1.6,0.2c-0.4,0-0.7,0-1-0.1c0.7,2.2,2.8,3.8,5.2,3.8C10.7,26,7.3,27.2,3.5,27.2c-0.7,0-1.4,0-2-0.1C5,28.3,8.7,29,12.5,29c8.7,0,13.4-7.2,13.4-13.3c0-0.2,0-0.4,0-0.6C30,8.4,31.1,7.3,32,6z" />
                </svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <span className="sr-only">YouTube</span>
                <svg fill="white" width="24" height="24" viewBox="0 0 32 32">
                  <path d="M31.5,8.4c-0.4-1.5-1.6-2.7-3.2-2.8C25.1,5.3,16,5.3,16,5.3s-9.1,0-12.3,0.3c-1.6,0.1-2.8,1.3-3.2,2.8C0,10.9,0,16,0,16s0,5.1,0.5,7.6c0.4,1.5,1.6,2.7,3.2,2.8C6.9,26.7,16,26.7,16,26.7s9.1,0,12.3-0.3c1.6-0.1,2.8-1.3,3.2-2.8C32,21.1,32,16,32,16S32,10.9,31.5,8.4z M12.8,21.7V10.3l9.2,5.7L12.8,21.7z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Prefooter;
