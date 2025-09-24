"use client";

import AdminGuard from '@/components/features/admin/AdminGuard';
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const AdminPanel = () => {
    const router = useRouter();

    return (
        <AdminGuard>
            <div className="p-4 space-y-6">
                <h1 className="text-2xl font-bold">Admin Panel</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Categories */}
                    <div className="border rounded p-4 flex flex-col justify-between">
                        <div>
                            <h2 className="text-xl font-semibold">Categories</h2>
                            <p className="text-gray-600 mt-1">
                                Manage all categories in the platform. Add or edit categories.
                            </p>
                        </div>
                        <Button
                            className="mt-4"
                            onClick={() => router.push("/admin/categories")}
                        >
                            Go to Categories
                        </Button>
                    </div>

                    {/* Skills */}
                    <div className="border rounded p-4 flex flex-col justify-between">
                        <div>
                            <h2 className="text-xl font-semibold">Skills</h2>
                            <p className="text-gray-600 mt-1">
                                Manage all skills used in projects and vacancies.
                            </p>
                        </div>
                        <Button
                            className="mt-4"
                            onClick={() => router.push("/admin/skills")}
                        >
                            Go to Skills
                        </Button>
                    </div>

                    {/* Roles */}
                    <div className="border rounded p-4 flex flex-col justify-between">
                        <div>
                            <h2 className="text-xl font-semibold">Roles</h2>
                            <p className="text-gray-600 mt-1">
                                Manage roles for project members.
                            </p>
                        </div>
                        <Button
                            className="mt-4"
                            onClick={() => router.push("/admin/roles")}
                        >
                            Go to Roles
                        </Button>
                    </div>
                </div>
            </div>
        </AdminGuard>
    );
};

export default AdminPanel;