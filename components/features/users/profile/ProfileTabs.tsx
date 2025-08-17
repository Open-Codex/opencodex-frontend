'use client'

import { useState } from "react";

const ProfileTabs = () => {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="flex gap-2 mt-6 border-b border-gray-700 pb-2">
      {[
        { id: "about", label: "Sobre mi" },
        { id: "contact", label: "Contacto" }
      ].map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`px-4 py-1 rounded-md hover:bg-gray-800 text-sm ${
            activeTab === tab.id ? "bg-gray-800" : ""
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default ProfileTabs;