import React, { useState } from "react";
import {
  MdOutlineBolt,
  MdOutlineIntegrationInstructions,
} from "react-icons/md";
import {
  GiPerspectiveDiceSixFacesFive,
} from "react-icons/gi";
import {
  FaLightbulb,
  FaStar,
  FaBuilding,
  FaBullhorn,
  FaRocket,
  FaPencilRuler,
  FaUsers,
} from "react-icons/fa";
import {
  HiOutlineBookOpen,
} from "react-icons/hi";
import {
  IoIosPeople,
} from "react-icons/io";
import {
  BsPlug,
  BsCameraVideo,
  BsPersonWorkspace,
} from "react-icons/bs";

function PreNav() {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  const accordions = [
    {
      id: "1",
      header: "Features",
      body: [
        {
          icon: <MdOutlineBolt className="text-blue-600 text-xl" />,
          title: "Automation",
          body: "Automate repetitive tasks so your team can focus on what matters most.",
        },
        {
          icon: <GiPerspectiveDiceSixFacesFive className="text-blue-600 text-xl" />,
          title: "Templates",
          body: "Give your team a blueprint for success with ready-to-use templates.",
        },
        {
          icon: <MdOutlineIntegrationInstructions className="text-blue-600 text-xl" />,
          title: "Integrations",
          body: "Connect with your favorite apps like Slack, Jira, and Google Drive.",
        },
      ],
    },
    {
      id: "2",
      header: "Solutions",
      body: [
        {
          icon: <FaBullhorn className="text-blue-600 text-xl" />,
          title: "Marketing teams",
          body: "Launch new campaigns and manage creative workflows efficiently.",
        },
        {
          icon: <FaRocket className="text-blue-600 text-xl" />,
          title: "Startups",
          body: "Hit goals faster and manage workflows that help small businesses thrive.",
        },
        {
          icon: <FaPencilRuler className="text-blue-600 text-xl" />,
          title: "Design teams",
          body: "Streamline design reviews and collaborate seamlessly across teams.",
        },
        {
          icon: <FaUsers className="text-blue-600 text-xl" />,
          title: "Remote teams",
          body: "Keep your remote team connected and motivated wherever they are.",
        },
      ],
    },
    {
      id: "3",
      header: "Plans",
      body: [
        {
          icon: <FaLightbulb className="text-yellow-500 text-xl" />,
          title: "Free plan",
          body: "For individuals or small teams looking to keep work organized.",
        },
        {
          icon: <FaStar className="text-pink-500 text-xl" />,
          title: "Premium",
          body: "Best for teams up to 100 needing project tracking and visualization.",
        },
        {
          icon: <FaBuilding className="text-blue-500 text-xl" />,
          title: "Enterprise",
          body: "For large teams needing admin controls and enterprise features.",
        },
      ],
    },
    {
      id: "4",
      header: "Resources",
      body: [
        {
          icon: <HiOutlineBookOpen className="text-blue-600 text-xl" />,
          title: "Trello guide",
          body: "A step-by-step workflow guide to get you started quickly.",
        },
        {
          icon: <IoIosPeople className="text-blue-600 text-xl" />,
          title: "Customer stories",
          body: "See how teams worldwide use Trello to streamline their work.",
        },
        {
          icon: <BsPlug className="text-blue-600 text-xl" />,
          title: "Developers",
          body: "Extend Trello’s power with custom Power-Ups and integrations.",
        },
        {
          icon: <BsCameraVideo className="text-blue-600 text-xl" />,
          title: "Webinars",
          body: "Join our free Trello webinars and become a productivity pro.",
        },
        {
          icon: <BsPersonWorkspace className="text-blue-600 text-xl" />,
          title: "Help resources",
          body: "Need help? Access FAQs and articles to get unstuck anytime.",
        },
      ],
    },
  ];

  return (
    <div className="sticky top-0 bg-[#f9fafc] backdrop-blur-md shadow-sm border-b border-gray-200 z-50">
      <div className="h-[60px] flex items-center justify-between px-6 max-w-7xl mx-auto">
 
        <div className="flex items-center gap-6">
          <span className="font-extrabold text-lg text-blue-700 tracking-wide">
            LOGO
          </span>

 
          <div className="flex gap-3">
            {accordions.map((acc) => (
              <div key={acc.id} className="relative">

                <div
                  onClick={() => toggleAccordion(acc.id)}
                  className={`cursor-pointer text-gray-700 text-sm font-medium px-4 py-2 rounded-md flex justify-between items-center gap-1 transition-all duration-300 
                    ${openAccordion === acc.id ? "bg-blue-600 text-white" : "bg-white hover:bg-blue-50 hover:text-blue-700"}
                  `}
                >
                  {acc.header}
                  <span
                    className={`transform transition-transform duration-300 ${
                      openAccordion === acc.id ? "rotate-180" : ""
                    }`}
                  >
                    ⌄
                  </span>
                </div>


                <div
                  className={`fixed left-0 right-0 w-full bg-white border-t border-gray-200 overflow-hidden transition-all duration-500 ease-in-out shadow-lg
                    ${
                      openAccordion === acc.id
                        ? "max-h-screen py-6 opacity-100"
                        : "max-h-0 py-0 opacity-0"
                    }`}
                >
                  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-8 text-sm font-light">
                    {acc.body.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 p-3 rounded-lg hover:bg-blue-50 transition-all"
                      >
                        {item.icon}
                        <div>
                          <h3 className="text-sm font-semibold text-gray-800">
                            {item.title}
                          </h3>
                          <p className="text-xs text-gray-600 mt-1">
                            {item.body}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>


        <div>
          <button className="bg-green-600 text-white text-sm font-medium px-5 py-2 rounded-md hover:bg-green-700 hover:shadow-md transition-all duration-300">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default PreNav;
