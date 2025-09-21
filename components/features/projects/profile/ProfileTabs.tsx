'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Star, GitFork, Eye, Bookmark, Share2, Flag, Users } from 'lucide-react';

type Props = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

const ProfileTabs = ({ activeTab, setActiveTab }: Props) => {
  const t = useTranslations('App.Page.Project');

  const tabs = [
    { id: 'about', label: t('aboutMe') },
    { id: 'contact', label: t('contact') },
  ];

  return (
    <div className="flex items-center justify-between mt-6 border-b border-gray-700 pb-2">
      <div className="flex gap-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-3 py-1 text-sm border-b-2 transition-colors ${activeTab === tab.id
                ? 'border-purple-500 text-white'
                : 'border-transparent text-gray-400 hover:text-white'
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Botones */}
      <div className="flex gap-2">
        <Button variant="default" className="bg-purple-600 hover:bg-purple-700 h-2 px-2">
          <Users className="w-4 h-4 mr-2" />
          {t('button.submitApplication')}
        </Button>
        <Button variant="ghost">
          <Star className="w-4 h-4 mr-2" />
          {t('button.like')}
        </Button>
        <Button variant="ghost">
          <GitFork className="w-4 h-4 mr-2" />
          Fork
        </Button>
        <Button variant="ghost">
          <Bookmark className="w-4 h-4 mr-2" />
          {t('button.save')}
        </Button>
        <Button variant="ghost">
          <Share2 className="w-4 h-4 mr-2" />
          {t('button.share')}
        </Button>
        <Button variant="ghost">
          <Flag className="w-4 h-4 mr-2" />
          {t('button.report')}
        </Button>
      </div>
    </div>
  );
};

export default ProfileTabs;