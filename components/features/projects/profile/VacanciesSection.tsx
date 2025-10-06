'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import ApplyModal from "./ApplyModal";

interface RequiredSkill {
    id: string;
    skillId: string;
    skill?: {
        id: string;
        name: string;
    };
}

interface Vacancy {
    id: string;
    title: string;
    description: string;
    isFilled: boolean;
    createdAt: string;
    requiredSkills: RequiredSkill[];
}

interface VacanciesSectionProps {
    vacancies?: Vacancy[];
    projectId: string;
}

const VacanciesSection = ({ vacancies = [], projectId }: VacanciesSectionProps) => {
    const t = useTranslations('App.Page.Project');
    const [showModal, setShowModal] = useState(false);
    const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
    const [currentUserId, setCurrentUserId] = useState<string | null>(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const token = localStorage.getItem('token');
            if (token) {
                try {
                    const decoded = jwtDecode<{ userId: string }>(token);
                    setCurrentUserId(decoded.userId);
                    console.log("🟣 UserId decodificado:", decoded.userId);
                } catch (error) {
                    console.error("❌ Error al decodificar token:", error);
                }
            }
        }
    }, []);

    return (
        <div className="mt-6">
            <h2 className="font-semibold mb-4">{t("vacancies")}</h2>

            {vacancies.length > 0 ? (
                <div className="grid gap-4">
                    {vacancies.map((vacancy) => (
                        <div key={vacancy.id} className="bg-[#161b22] rounded-md p-4 border border-gray-800">
                            <div className="flex justify-between items-center">
                                <h3 className="font-medium text-lg">{vacancy.title}</h3>
                                <span
                                    className={`text-xs px-2 py-1 rounded-full ${vacancy.isFilled
                                            ? "bg-gray-700 text-gray-400"
                                            : "bg-green-900 text-green-300"
                                        }`}
                                >
                                    {vacancy.isFilled ? t("filled") : t("open")}
                                </span>
                            </div>

                            <p className="text-gray-400 text-sm mt-2">{vacancy.description}</p>

                            {vacancy.requiredSkills?.length > 0 && (
                                <div className="flex flex-wrap gap-2 mt-3">
                                    {vacancy.requiredSkills.map((skill) => (
                                        <span
                                            key={skill.id}
                                            className="px-2 py-1 text-xs rounded bg-gray-800 text-gray-300"
                                        >
                                            {skill.skill?.name || t("unknownSkill")}
                                        </span>
                                    ))}
                                </div>
                            )}

                            {!vacancy.isFilled && (
                                <button
                                    className="mt-4 px-3 py-2 bg-purple-600 hover:bg-purple-700 text-white text-xs rounded-md transition"
                                    onClick={() => {
                                        setSelectedProjectId(projectId);
                                        setShowModal(true);
                                    }}
                                >
                                    {t("apply")}
                                </button>
                            )}

                            <p className="text-xs text-gray-500 mt-3">
                                {t("registeredAt")}: {new Date(vacancy.createdAt).toLocaleDateString()}
                            </p>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-gray-500">{t("noVacancies")}</p>
            )}

            {showModal && selectedProjectId && currentUserId && (
                <ApplyModal
                    projectId={selectedProjectId}
                    userId={currentUserId}
                    onClose={() => setShowModal(false)}
                />
            )}
        </div>
    );
};

export default VacanciesSection;