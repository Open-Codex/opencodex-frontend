"use client";

import { useState } from "react";
import { useVacanciesByProject } from "@/hooks/projects/useVacanciesByProject";
import { useCreateVacancy } from "@/hooks/projects/useCreateVacancy";
import { useUpdateVacancy } from "@/hooks/projects/useUpdateVacancy";
import { useDeleteVacancy } from "@/hooks/projects/useDeleteVacancy";
import { useSkills } from "@/hooks/projects/useSkills";
import { useAddSkillsToVacancy, useRemoveSkillsFromVacancy } from "@/hooks/projects/useVacancySkills";

type Vacancy = {
    id: string;
    title: string;
    description: string;
    isFilled: boolean;
    requiredSkills: { skill: { id: string; name: string } }[];
};

const VacancyManager = ({ projectId }: { projectId: string }) => {
    const { data: vacancies = [], isLoading } = useVacanciesByProject(projectId);
    const { data: allSkills = [] } = useSkills();

    const createVacancy = useCreateVacancy();
    const updateVacancy = useUpdateVacancy();
    const deleteVacancy = useDeleteVacancy();
    const addSkills = useAddSkillsToVacancy();
    const removeSkills = useRemoveSkillsFromVacancy();

    const [newVacancy, setNewVacancy] = useState({ title: "", description: "" });
    const [editingVacancyId, setEditingVacancyId] = useState<string | null>(null);
    const [editValues, setEditValues] = useState({ title: "", description: "" });
    const [selectedSkills, setSelectedSkills] = useState<{ [key: string]: string }>({});
    const [skillDropdownOpen, setSkillDropdownOpen] = useState<{ [key: string]: boolean }>({});
    const [skillSearch, setSkillSearch] = useState<{ [key: string]: string }>({});

    const handleCreate = () => {
        if (!newVacancy.title.trim()) return;
        createVacancy.mutate({
            projectId,
            title: newVacancy.title,
            description: newVacancy.description,
        });
        setNewVacancy({ title: "", description: "" });
    };

    if (isLoading) return <p>Loading vacancies...</p>;

    const toggleFilled = (vacancy: Vacancy) => {
        updateVacancy.mutate({ id: vacancy.id, data: { isFilled: !vacancy.isFilled }, projectId });
    };

    const startEdit = (vacancy: Vacancy) => {
        setEditingVacancyId(vacancy.id);
        setEditValues({ title: vacancy.title, description: vacancy.description });
    };

    const saveEdit = (id: string) => {
        updateVacancy.mutate({ id, data: { ...editValues }, projectId });
        setEditingVacancyId(null);
    };

    const handleAddSkill = (vacancyId: string) => {
        const skillId = selectedSkills[vacancyId];
        if (!skillId) return;
        addSkills.mutate({ projectId, vacancyId, skillIds: [skillId] });
        setSelectedSkills({ ...selectedSkills, [vacancyId]: "" });
    };

    const handleRemoveSkill = (vacancyId: string, skillId: string) => {
        removeSkills.mutate({ projectId, vacancyId, skillIds: [skillId] });
    };

    return (
        <div className="space-y-6">
            <h2 className="text-xl font-semibold">Vacancy Manager</h2>

            <div className="p-4 border rounded bg-gray-800">
                <h3 className="font-bold mb-2">Create Vacancy</h3>
                <input
                    className="w-full mb-2 p-2 rounded bg-gray-700"
                    placeholder="Title"
                    value={newVacancy.title}
                    onChange={(e) => setNewVacancy({ ...newVacancy, title: e.target.value })}
                />
                <textarea
                    className="w-full mb-2 p-2 rounded bg-gray-700"
                    placeholder="Description"
                    value={newVacancy.description}
                    onChange={(e) => setNewVacancy({ ...newVacancy, description: e.target.value })}
                />
                <button
                    onClick={handleCreate}
                    className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded"
                >
                    Create Vacancy
                </button>
            </div>

            <div>
                {vacancies.length === 0 ? (
                    <p>No vacancies yet.</p>
                ) : (
                    <ul className="space-y-4">
                        {vacancies.map((v: Vacancy) => {
                            const availableSkills = allSkills.filter(
                                (s) => !v.requiredSkills.some((rs) => rs.skill.id === s.id)
                            ).filter(
                                (s) =>
                                    !skillSearch[v.id] ||
                                    s.name.toLowerCase().includes(skillSearch[v.id].toLowerCase())
                            );

                            return (
                                <li key={v.id} className="p-4 border rounded bg-gray-900">
                                    {editingVacancyId === v.id ? (
                                        <>
                                            <input
                                                className="w-full mb-2 p-2 rounded bg-gray-700"
                                                value={editValues.title}
                                                onChange={(e) => setEditValues({ ...editValues, title: e.target.value })}
                                            />
                                            <textarea
                                                className="w-full mb-2 p-2 rounded bg-gray-700"
                                                value={editValues.description}
                                                onChange={(e) => setEditValues({ ...editValues, description: e.target.value })}
                                            />
                                            <button
                                                className="bg-green-600 hover:bg-green-700 px-3 py-1 rounded mr-2"
                                                onClick={() => saveEdit(v.id)}
                                            >
                                                Save
                                            </button>
                                            <button
                                                className="bg-gray-600 hover:bg-gray-700 px-3 py-1 rounded"
                                                onClick={() => setEditingVacancyId(null)}
                                            >
                                                Cancel
                                            </button>
                                        </>
                                    ) : (
                                        <>
                                            <h3 className="font-bold text-lg">{v.title}</h3>
                                            <p className="text-sm mb-2">{v.description}</p>
                                            <p className="text-sm mb-2">
                                                Status:{" "}
                                                <span className={v.isFilled ? "text-red-400" : "text-green-400"}>
                                                    {v.isFilled ? "Filled" : "Open"}
                                                </span>
                                            </p>

                                            <div className="mb-2">
                                                <p className="font-semibold">Required Skills:</p>
                                                {v.requiredSkills.length > 0 ? (
                                                    <ul className="list-disc ml-5">
                                                        {v.requiredSkills.map((rs) => (
                                                            <li key={rs.skill.id} className="flex justify-between items-center">
                                                                {rs.skill.name}
                                                                <button
                                                                    className="text-red-400 hover:text-red-600 ml-2"
                                                                    onClick={() => handleRemoveSkill(v.id, rs.skill.id)}
                                                                >
                                                                    Remove
                                                                </button>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                ) : (
                                                    <p className="text-gray-400">No skills assigned</p>
                                                )}
                                            </div>

                                            <div className="relative mb-2">
                                                <button
                                                    className="bg-green-600 hover:bg-green-700 px-3 py-1 rounded"
                                                    onClick={() =>
                                                        setSkillDropdownOpen({ ...skillDropdownOpen, [v.id]: !skillDropdownOpen[v.id] })
                                                    }
                                                >
                                                    Add Skill
                                                </button>

                                                {skillDropdownOpen[v.id] && (
                                                    <div className="absolute mt-1 w-60 p-2 bg-gray-800 border rounded shadow-lg z-10">
                                                        <input
                                                            className="w-full p-1 rounded mb-2 bg-gray-700"
                                                            placeholder="Search skill..."
                                                            value={skillSearch[v.id] || ""}
                                                            onChange={(e) =>
                                                                setSkillSearch({ ...skillSearch, [v.id]: e.target.value })
                                                            }
                                                        />
                                                        <ul className="max-h-40 overflow-y-auto">
                                                            {availableSkills.map((s) => (
                                                                <li
                                                                    key={s.id}
                                                                    className="p-1 hover:bg-gray-700 cursor-pointer"
                                                                    onClick={() => {
                                                                        setSelectedSkills({ ...selectedSkills, [v.id]: s.id });
                                                                        handleAddSkill(v.id);
                                                                        setSkillDropdownOpen({ ...skillDropdownOpen, [v.id]: false });
                                                                    }}
                                                                >
                                                                    {s.name}
                                                                </li>
                                                            ))}
                                                            {availableSkills.length === 0 && <li className="p-1 text-gray-400">No skills found</li>}
                                                        </ul>
                                                    </div>
                                                )}
                                            </div>

                                            <div className="flex gap-2">
                                                <button
                                                    className={`px-3 py-1 rounded ${v.isFilled ? "bg-green-600 hover:bg-green-700" : "bg-red-600 hover:bg-red-700"
                                                        }`}
                                                    onClick={() => toggleFilled(v)}
                                                >
                                                    Mark as {v.isFilled ? "Open" : "Filled"}
                                                </button>
                                                <button
                                                    className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded"
                                                    onClick={() => startEdit(v)}
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    className="bg-gray-600 hover:bg-gray-700 px-3 py-1 rounded"
                                                    onClick={() => deleteVacancy.mutate(v.id)}
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </>
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default VacancyManager;