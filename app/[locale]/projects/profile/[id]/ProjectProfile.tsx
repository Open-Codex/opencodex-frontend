'use client';

import { useState } from 'react';
import { useProjects } from "@/hooks/projects/useProjects";
import ProfileHeader from "@/components/features/projects/profile/ProfileHeader";
import ProfileStats from "@/components/features/projects/profile/ProfileStats";
import ProfileTabs from "@/components/features/projects/profile/ProfileTabs";
import AboutSection from "@/components/features/projects/profile/AboutSection";
import ContactSection from "@/components/features/projects/profile/ContactSection";
import ProfileSkeleton from "@/components/features/projects/profile/ProfileSkeleton";
import MembersSection from '@/components/features/projects/profile/MembersSection';
import SkillsSection from '@/components/features/projects/profile/SkillsSection';
import { useTranslations } from 'next-intl';
import VacanciesSection from '@/components/features/projects/profile/VacanciesSection';

interface Props {
    id: string;
}

const ProjectProfile = ({ id }: Props) => {
    const { data, isLoading, error } = useProjects(id);
    const [activeTab, setActiveTab] = useState<string>("about");
    const t = useTranslations('App.Page.Project');

    if (isLoading) return <ProfileSkeleton />;
    if (error) {
        return (
            <div className="p-6 text-red-500">
                Error unexpected: {error.message}
            </div>
        );
    }
    if (!data) {
        return (
            <div className="p-6 text-white">
                <h2 className="text-2xl font-bold mb-2">{t('projectNotFound')}</h2>
                <p className="text-gray-400">{t('projectNotFoundDescription')}</p>
            </div>
        );
    }

    const project = data;

    const stats = [
        { label: t('members'), value: project.memberships?.length || 0 },
        { label: t('vacancies'), value: project.vacancies?.length || 0 },
        { label: t('likes'), value: project.projectLikes || 0 },
        { label: t('category'), value: project.category?.name || "N/A" },
        { label: t('registeredAt'), value: project.createdAt ? new Date(project.createdAt).getFullYear() : "N/A" },
        { label: t('status'), value: project.status || "Activo" },
    ];

    return (
        <div className="flex-1 overflow-y-auto">
            <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-2 py-6 w-full text-white">
                <ProfileHeader project={project} />
                <ProfileStats stats={stats} />
                <ProfileTabs activeTab={activeTab} setActiveTab={setActiveTab} />

                <div className="grid grid-cols-3 gap-4 mt-4">
                    <div className="col-span-2">
                        {activeTab === "about" && <AboutSection project={project} />}
                        {activeTab === "contact" && <ContactSection />}
                        <MembersSection members={project.memberships} />

                    </div>
                    <div>

                    <SkillsSection projectSkills={project.requiredSkills} />
                    <VacanciesSection vacancies={project.vacancies} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectProfile;