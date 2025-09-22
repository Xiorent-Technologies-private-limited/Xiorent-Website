"use client";
import React, { useState } from "react";
import CompanyDirector from "./CompanyDirector";
import Anindya from "./Anindya";
import ManagementTeam from "../AboutTeam/ManagementTeam";
import LeadingTeam from "../AboutTeam/LeadingTeam";
import BusinessEthics from "../AboutEthics/BusinessEthics";
import CreateTogether from "../layout/CreateTogether";
import Faq from "../layout/Faq";
import ComingSoon from "../Common/ComingSoon";

const AboutTabs = () => {
  const [activeTab, setActiveTab] = useState("bod");

  const tabs = [
    { id: "bod", label: "Board of Directors" },
    { id: "team", label: "Our Team" },
    { id: "ethics", label: "Code of Ethics" },
    { id: "jobs", label: "Jobs" }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "bod":
        return (
          <>
            <CompanyDirector />
            {/* <Anindya /> */}
            {/* <CreateTogether /> */}
            {/* <Faq /> */}
          </>
        );
      case "team":
        return (
          <>
            <ManagementTeam />
            <LeadingTeam />
            {/* <CreateTogether /> */}
            {/* <Faq /> */}
          </>
        );
      case "ethics":
        return (
          <>
            <BusinessEthics />
            {/* <CreateTogether /> */}
            {/* <Faq /> */}
          </>
        );
      case "jobs":
        return (
          <>
            <ComingSoon />
            {/* <CreateTogether /> */}
            {/* <Faq /> */}
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto relative">
        
        {/* TAB NAVIGATION */}
        <nav className="flex justify-between items-center mb-20">
          <ul className="flex w-full justify-between text-base text-gray-400">
            {tabs.map((tab) => (
              <li key={tab.id}>
                <button
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative pb-2 transition ${
                    activeTab === tab.id
                      ? "font-semibold text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-white"
                      : "hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* TAB CONTENT */}
        {renderTabContent()}
      </div>
    </div>
  );
};

export default AboutTabs;
