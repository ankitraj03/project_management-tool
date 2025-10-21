import React from "react";
import img from '../../../assets/img.png';
import trelloImg from '../../../assets/img2.png';

function LandingSection() {
  return (
    <>
      {/* Landing Section */}
      <section className="bg-gray-50 py-20 px-6 md:px-16 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        <div className="flex-1 max-w-lg">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-snug">
            Capture, organize, and tackle your to-dos from anywhere.
          </h1>
          <p className="text-gray-700 mb-8 text-lg">
            Escape the clutter and chaos—unleash your productivity with Trello.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 border border-gray-300 rounded-md flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors shadow-md">
              Sign up – it’s free!
            </button>
          </div>

          <p className="text-gray-500 text-sm">
            By entering my email, I acknowledge the{" "}
            <a href="#" className="text-blue-600 underline hover:text-blue-800">
              Atlassian Privacy Policy
            </a>.
          </p>
        </div>

        <div className="flex-1 flex justify-center">
          <img 
            src={img} 
            alt="App mockup" 
            className="w-full max-w-md md:max-w-lg object-contain shadow-xl rounded-lg"
          />
        </div>
      </section>

      {/* Trello 101 Section */}
      <section className="bg-white py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          
          {/* Left content */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Your productivity powerhouse
            </h2>
            <p className="text-gray-700 mb-8 text-lg">
              Stay organized and efficient with Inbox, Boards, and Planner. Every to-do, idea, or responsibility—no matter how small—finds its place, keeping you at the top of your game.
            </p>

            {/* Features */}
            <div className="space-y-6">
              <div className="bg-white shadow-md p-5 rounded-md border-l-4 border-cyan-400 hover:shadow-lg transition">
                <h3 className="font-semibold text-lg mb-1">Inbox</h3>
                <p className="text-gray-700 text-sm">
                  When it’s on your mind, it goes in your Inbox. Capture your to-dos from anywhere, anytime.
                </p>
              </div>

              <div className="bg-white p-5 rounded-md hover:shadow-lg transition">
                <h3 className="font-semibold text-lg mb-1">Boards</h3>
                <p className="text-gray-700 text-sm">
                  Your to-do list may be long, but it can be manageable! Keep tabs on everything from "to-dos to tackle" to "mission accomplished!"
                </p>
              </div>

              <div className="bg-white p-5 rounded-md hover:shadow-lg transition">
                <h3 className="font-semibold text-lg mb-1">Planner</h3>
                <p className="text-gray-700 text-sm">
                  Drag, drop, get it done. Snap your top priorities into place and stay on schedule.
                </p>
              </div>
            </div>
          </div>

          <div className="flex-1 flex justify-center">
            <img 
              src={trelloImg} 
              alt="Trello overview" 
              className="w-full max-w-md md:max-w-lg object-contain shadow-xl rounded-lg"
            />
          </div>

        </div>
      </section>
    </>
  );
}

export default LandingSection;
