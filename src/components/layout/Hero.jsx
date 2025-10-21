import React, { useState } from "react";
import { CgBoard, CgTemplate } from "react-icons/cg";
import { BiHomeAlt2 } from "react-icons/bi";
import { MdWorkspaces } from "react-icons/md";
import Boards from "../../pages/Boards";
import Templates from "./Templates";

function Hero() {
  const [activeCategory, setActiveCategory] = useState("Business");
  const [visible, setVisible] = useState(false);

  const categories = [
    "Business", "Design", "Education", "Engineering", "Marketing", "HR & Operations",
    "Personal", "Productivity", "Product management", "Project management",
    "Remote work", "Sales", "Support",
  ];

  return (
    <div className="flex h-[200vh] bg-[#1e1f24] text-[#9FADBC]">

      <div className="w-[25%] border-r border-gray-800 p-6 flex flex-col">

        <div className="flex items-center gap-3 px-4 py-2 mb-2 rounded-xl cursor-pointer hover:bg-[#2a2c31] transition-all">
          <CgBoard size={18} />
          <span>Boards</span>
        </div>

        <div className="flex flex-col mb-2">
          <div
            className="flex items-center gap-3 px-4 py-2 rounded-xl cursor-pointer hover:bg-[#2a2c31] transition-all"
            onClick={() => setVisible(!visible)}
          >
            <CgTemplate size={18} />
            <span>Templates</span>
          </div>

          {visible && (
            <div className="ml-6 mt-2 space-y-1 transition-all">
              {categories.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setActiveCategory(item)}
                  className={`px-3 py-1.5 text-sm rounded-md cursor-pointer transition-all duration-200
                    ${
                      activeCategory === item
                        ? "bg-[#2f2f2f] text-white"
                        : "hover:bg-[#2f2f2f]"
                    }`}
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>


        <div className="flex items-center gap-3 px-4 py-2 mb-2 rounded-xl cursor-pointer hover:bg-[#2a2c31] transition-all">
          <BiHomeAlt2 size={18} />
          <span>Home</span>
        </div>

        <hr className="my-3 border-gray-800" />

        {/* Workspaces */}
        <div>
          <h2 className="text-sm font-semibold mb-2 px-4">Workspaces</h2>
          <div className="flex items-center gap-3 px-4 py-2 rounded-xl cursor-pointer hover:bg-[#2a2c31] transition-all">
            <MdWorkspaces size={18} />
            <span>W1</span>
          </div>
        </div>
      </div>


      <div className="w-[75%] p-6 overflow-hidden">
        {/* <Boards /> */}
        templates
        <Templates/>
            </div>
    </div>
  );
}

export default Hero;
 