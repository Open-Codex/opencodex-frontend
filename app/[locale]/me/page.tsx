'use client'

import { useState } from 'react';
import { useMe } from "@/hooks/me/useMe";
import ProfileHeader from "@/components/features/users/profile/ProfileHeader";
import ProfileStats from "@/components/features/users/profile/ProfileStats";
import ProfileTabs from "@/components/features/users/profile/ProfileTabs";
import AboutSection from "@/components/features/users/profile/AboutSection";
import ContactSection from "@/components/features/users/profile/ContactSection";
import ProfileSkeleton from "@/components/features/users/profile/ProfileSkeleton";
import ProjectsSection from '@/components/features/users/profile/ProjectSection';
import SkillsSection from '@/components/features/users/profile/SkillsSection';
import { useTranslations } from 'next-intl';

const Me = () => {
    const { data, isLoading, error } = useMe();
    const [activeTab, setActiveTab] = useState<string>("about");
    const t = useTranslations('App.Page.Me');

    if (isLoading) return <ProfileSkeleton />;
    if (error) return <div className="p-6 text-red-500">Error: {error.message}</div>;
    if (!data) return <div className="p-6 text-white">Not found data</div>;

    const user = data; console.log(user);
    const reputation = Math.floor((user.likesReceived / (user.likesReceived + user.dislikesReceived)) * 100);

    const stats = [
        { label: t('projects'), value: user.memberships?.length || 0 },
        { label: t('collaborations'), value: user.memberships?.length || 0 },
        { label: t('likes'), value: user.likesReceived || 0 },
        { label: t('reputation'), value: reputation + "%"},
        { label: t('registeredAt'), value: user.registeredAt ? new Date(user.registeredAt).getFullYear() : "N/A" },
        { label: t('status'), value: user.status || "Activo" },
    ];

    return (
        <div className="flex-1 overflow-y-auto">
            <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-2 py-6 w-full text-white">
                <ProfileHeader user={user} />
                <ProfileStats stats={stats} />

                <ProfileTabs activeTab={activeTab} setActiveTab={setActiveTab} />

                {/* About Skills */}
                <div className="grid grid-cols-3 gap-4 mt-4">
                    {/* About */}
                    <div className="col-span-2">
                        {activeTab === "about" && <AboutSection user={user} />}
                        {activeTab === "contact" && <ContactSection />}

                    </div>

                    {/* Skills Card direita) */}
                    <SkillsSection userSkills={user.userSkills} />
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4">
                    <ProjectsSection memberships={user.memberships} />
                </div>
            </div>
        </div>
    );
};

export default Me;