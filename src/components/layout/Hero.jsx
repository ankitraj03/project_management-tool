import React, { useState } from "react";
import { CgBoard, CgTemplate } from "react-icons/cg";
import { BiHomeAlt2 } from "react-icons/bi";
import { MdWorkspaces } from "react-icons/md";
import Templates from "./Templates";
import Boards from '../../pages/Boards'
import BusinessData from "../../pages/templates/Business";
import DesignData from "../../pages/templates/Design";
import EducationData from "../../pages/templates/Education";
import EngineeringData from "../../pages/templates/Engineering";
import HRData from "../../pages/templates/HR";
import MarketingData from "../../pages/templates/Marketting";
import PersonalData from "../../pages/templates/Personal";
import ProductManagementData from "../../pages/templates/Product_management";
import ProductivityData from "../../pages/templates/Productivity";
import SalesData from "../../pages/templates/sales";
import Home from "../../pages/Home";

function Hero() {
  const [activeCategory, setActiveCategory] = useState("Business");
  const [visible, setVisible] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const categories = [
    "Business", "Design", "Education", "Engineering", "Marketing", "HR & Operations",
    "Personal", "Productivity", "Product management", "Project management",
    "Remote work", "Sales", "Support",
  ];

  const getData = (category) => {
    switch (category) {
      case "Business": return BusinessData;
      case "Design": return DesignData;
      case "Education": return EducationData;
      case "Engineering": return EngineeringData;
      case "HR & Operations": return HRData;
      case "Marketing": return MarketingData;
      case "Personal": return PersonalData;
      case "Productivity": return ProductivityData;
      case "Product management": return ProductManagementData;
      case "Sales": return SalesData;
      default: return [];
    }
  };

  const data = getData(activeCategory);

  return (
    <div className="flex flex-col md:flex-row h-screen bg-[#1e1f24] text-[#9FADBC]">
      <div className="md:hidden flex items-center justify-between px-4 py-3 border-b border-gray-800">
        <h1 className="text-lg font-semibold">Dashboard</h1>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="bg-[#2f2f2f] px-3 py-1 rounded-md text-sm"
        >
          {sidebarOpen ? "Close" : "Menu"}
        </button>
      </div>


      <div
        className={`${
          sidebarOpen ? "block" : "hidden"
        } md:flex w-full md:w-[25%] border-r border-gray-800 p-6 flex-col overflow-y-auto scrollbar-hide transition-all duration-300`}
      >
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
                  onClick={() => {
                    setActiveCategory(item);
                    if (window.innerWidth < 768) setSidebarOpen(false);
                  }}
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

        <div>
          <h2 className="text-sm font-semibold mb-2 px-4">Workspaces</h2>
          <div className="flex items-center gap-3 px-4 py-2 rounded-xl cursor-pointer hover:bg-[#2a2c31] transition-all">
            <MdWorkspaces size={18} />
            <span>W1</span>
          </div>
        </div>
      </div>

      <Boards/>
      <div className="flex-1 p-6 overflow-y-auto scrollbar-hide">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {data.slice(0, 12).map((item, index) => (
            <Templates
              key={index}
              bg={item.bg}
              main={item.main}
              title={item.title}
              desc={item.desc}
            />
          ))}
        </div>
      </div>
      <Home/>

    </div>
  );
}

export default Hero;
