'use client'

import { useState } from "react";
import { useTranslations } from 'next-intl';

const ProfileTabs = () => {
  const [activeTab, setActiveTab] = useState("about");
  const t = useTranslations('App.Page.Me');

  return (
    <div className="flex gap-2 mt-6 border-b border-gray-700 pb-2">
      {[
        { id: "about", label: t('aboutMe') },
        { id: "contact", label: t('contact') }
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