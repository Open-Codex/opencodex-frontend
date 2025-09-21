'use client'
import { useTranslations } from 'next-intl';

interface Skill {
    id: string;
    name: string;
}

interface ProjectSkill {
    skill: Skill;
}

interface SkillsSectionProps {
    projectSkills?: ProjectSkill[];
}

const SkillsSection = ({ projectSkills = [] }: SkillsSectionProps) => {
    const t = useTranslations('App.Page.Project');

    return (
        <div className="bg-[#161b22] rounded-md p-4 h-fit sticky top-4">
            <h2 className="font-semibold mb-2">{t('skills')}</h2>
            <div className="flex flex-wrap gap-2">
                {projectSkills.length > 0 ? (
                    projectSkills.map((projectSkill) => (
                        <span
                            key={projectSkill.skill.id}
                            className="px-2 py-1 bg-gray-800 rounded text-xs text-gray-300"
                        >
                            {projectSkill.skill.name}
                        </span>
                    ))
                ) : (
                    <p className="text-gray-500 text-sm">{t('notSkills')}</p>
                )}
            </div>
        </div>
    );
}

export default SkillsSection;