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

const Me = () => {
    const { data, isLoading, error } = useMe();
    const [activeTab, setActiveTab] = useState<string>("about");

    if (isLoading) return <ProfileSkeleton />;
    if (error) return <div className="p-6 text-red-500">Error: {error.message}</div>;
    if (!data) return <div className="p-6 text-white">No se encontraron datos</div>;

    const user = data;
    const stats = [
        { label: "Proyectos", value: user.memberships?.length || 0 },
        { label: "Colaboraciones", value: "N/A" },
        { label: "Me Gustas", value: user.likesReceived || 0 },
        { label: "Reputación", value: "N/A" },
        { label: "Se unió", value: user.registeredAt ? new Date(user.registeredAt).getFullYear() : "N/A" },
        { label: "Estado", value: user.status || "Activo" },
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