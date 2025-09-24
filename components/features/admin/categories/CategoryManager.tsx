"use client";

import { useCategories, useCreateCategory, useUpdateCategory } from "@/hooks/admin/useCategories";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import BackToAdminButton from "../BackToAdminButton";

export default function CategoryManager() {
    const { data: categories, isLoading } = useCategories();
    const createCategory = useCreateCategory();
    const updateCategory = useUpdateCategory();

    const [newName, setNewName] = useState("");
    const [newDescription, setNewDescription] = useState("");

    const [editingId, setEditingId] = useState<string | null>(null);
    const [editName, setEditName] = useState("");
    const [editDescription, setEditDescription] = useState("");

    if (isLoading) return <p>Loading...</p>;

    const handleCreate = () => {
        if (!newName.trim() || !newDescription.trim()) {
            alert("Both Name and Description are required");
            return;
        }

        createCategory.mutate({ name: newName, description: newDescription });
        setNewName("");
        setNewDescription("");
    };

    const handleUpdate = (id: string) => {
        if (!editName.trim() || !editDescription.trim()) {
            alert("Both Name and Description are required");
            return;
        }

        updateCategory.mutate({
            id,
            name: editName,
            description: editDescription,
        });

        setEditingId(null);
    };

    return (
        <div className="p-4 space-y-4">
            <h2 className="text-xl font-bold">Categories</h2>
            <BackToAdminButton />

            <div className="flex gap-2">
                <input
                    type="text"
                    className="border p-2 rounded flex-1"
                    placeholder="Name"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                />
                <input
                    type="text"
                    className="border p-2 rounded flex-1"
                    placeholder="Description"
                    value={newDescription}
                    onChange={(e) => setNewDescription(e.target.value)}
                />
                <Button onClick={handleCreate}>Add</Button>
            </div>

            <ul className="space-y-2">
                {categories?.map((cat) => (
                    <li
                        key={cat.id}
                        className="flex items-center justify-between border p-2 rounded"
                    >
                        {editingId === cat.id ? (
                            <div className="flex gap-2 flex-1">
                                <input
                                    type="text"
                                    className="border p-1 rounded flex-1"
                                    value={editName}
                                    onChange={(e) => setEditName(e.target.value)}
                                />
                                <input
                                    type="text"
                                    className="border p-1 rounded flex-1"
                                    value={editDescription}
                                    onChange={(e) => setEditDescription(e.target.value)}
                                />
                                <Button onClick={() => handleUpdate(cat.id)}>Save</Button>
                                <Button onClick={() => setEditingId(null)}>Cancel</Button>
                            </div>
                        ) : (
                            <>
                                <span>
                                    <strong>{cat.name}</strong> – {cat.description}
                                </span>
                                <div className="flex gap-2">
                                    <Button
                                        variant="ghost"
                                        onClick={() => {
                                            setEditingId(cat.id);
                                            setEditName(cat.name);
                                            setEditDescription(cat.description);
                                        }}
                                    >
                                        Edit
                                    </Button>
                                </div>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}