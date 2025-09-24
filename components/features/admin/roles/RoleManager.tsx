"use client";

import { useRoles, useCreateRole, useUpdateRole } from "@/hooks/admin/useRoles";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import BackToAdminButton from "../BackToAdminButton";

export default function RoleManager() {
    const { data: roles, isLoading } = useRoles();
    const createRole = useCreateRole();
    const updateRole = useUpdateRole();

    const [newName, setNewName] = useState("");

    const [editingId, setEditingId] = useState<string | null>(null);
    const [editName, setEditName] = useState("");

    if (isLoading) return <p>Loading...</p>;

    const handleCreate = () => {
        if (!newName.trim()) {
            alert("Name are required");
            return;
        }

        createRole.mutate({ name: newName });
        setNewName("");
    };

    const handleUpdate = (id: string) => {
        if (!editName.trim()) {
            alert("Name are required");
            return;
        }

        updateRole.mutate({
            id,
            name: editName,
        });

        setEditingId(null);
    };

    return (
        <div className="p-4 space-y-4">
            <h2 className="text-xl font-bold">Roles</h2>
            <BackToAdminButton />

            <div className="flex gap-2">
                <input
                    type="text"
                    className="border p-2 rounded flex-1"
                    placeholder="Name"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                />
                <Button onClick={handleCreate}>Add</Button>
            </div>

            <ul className="space-y-2">
                {roles?.map((cat) => (
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
                                <Button onClick={() => handleUpdate(cat.id)}>Save</Button>
                                <Button onClick={() => setEditingId(null)}>Cancel</Button>
                            </div>
                        ) : (
                            <>
                                <span>
                                    <strong>{cat.name}</strong>
                                </span>
                                <div className="flex gap-2">
                                    <Button
                                        variant="ghost"
                                        onClick={() => {
                                            setEditingId(cat.id);
                                            setEditName(cat.name);
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