'use client'
import { useTranslations } from 'next-intl';

interface Skill {
    id: string;
    name: string;
}

interface UserSkill {
    skill: Skill;
}

interface SkillsSectionProps {
    userSkills?: UserSkill[];
}

const SkillsSection = ({ userSkills = [] }: SkillsSectionProps) => {
    const t = useTranslations('App.Page.Me');

    return (
        <div className="bg-[#161b22] rounded-md p-4 h-fit sticky top-4">
            <h2 className="font-semibold mb-2">{t('skills')}</h2>
            <div className="flex flex-wrap gap-2">
                {userSkills.length > 0 ? (
                    userSkills.map((userSkill) => (
                        <span
                            key={userSkill.skill.id}
                            className="px-2 py-1 bg-gray-800 rounded text-xs text-gray-300"
                        >
                            {userSkill.skill.name}
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