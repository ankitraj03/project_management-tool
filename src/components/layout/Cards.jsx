import React from "react";

function Cards() {
  return (
    <div className="mt-4">
      <div className="w-[200px] h-[100px] rounded-xl overflow-hidden shadow-lg cursor-pointer transition-transform transform hover:scale-105">
        <div className="h-[70px] bg-gradient-to-r from-purple-500 to-pink-400"></div>

        <div className="bg-[#2a2a2a]">
          <p className="text-gray-300 font-sans  text-[15px] px-4">My Trello board</p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
