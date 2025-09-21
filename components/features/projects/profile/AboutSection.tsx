'use client'

import { Project } from "@/types/types";
import { useTranslations } from 'next-intl';
import { format } from "path";

const AboutSection = ({ project }: { project: Project }) => {
    const t = useTranslations('App.Page.Project');

    return (
        <div className="col-span-2 bg-[#161b22] rounded-md p-4">
            <h2 className="font-semibold mb-2">{t('aboutMe2')}</h2>
            <p className="text-gray-300 text-sm">
                {project.description}
            </p>
        </div>
    );
}

export default AboutSection;