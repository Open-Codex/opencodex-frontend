'use client';

import Image from "next/image";
import { formatDate } from "@/lib/utils";
import { useTranslations } from 'next-intl';

interface User {
    id: string;
    name: string;
    username: string;
    avatarUrl?: string;
}

interface Role {
    name: string;
}

interface Membership {
    id: string;
    user: User;
    permission: string;
    role?: Role;
    joinedAt: string;
}

interface MembersSectionProps {
    members?: Membership[];
}

const MembersSection = ({ members = [] }: MembersSectionProps) => {
    const t = useTranslations('App.Page.Project');

    return (
        <div className="mt-6">
            <h2 className="font-semibold mb-4">{t('members')}</h2>
            {members.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
                    {members.map((membership) => (
                        <div
                            key={membership.id}
                            className="flex items-center bg-[#161b22] rounded-md p-4 gap-3"
                        >
                            {/* Avatar */}
                            <div className="flex-shrink-0">
                                <Image
                                    src={membership.user.avatarUrl || "/images/default-avatar.webp"}
                                    alt={membership.user.name}
                                    width={48}
                                    height={48}
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                            </div>

                            {/* Info */}
                            <div className="flex flex-col">
                                <span className="font-medium">{membership.user.name}</span>
                                <div className="flex items-center gap-2 mt-1">
                                    <span
                                        className={`text-xs px-2 py-0.5 rounded-full ${membership.permission === "ADMIN"
                                            ? "bg-purple-900 text-purple-300"
                                            : membership.permission === "MODERATOR"
                                                ? "bg-blue-900 text-blue-300"
                                                : "bg-gray-700 text-gray-300"
                                            }`}
                                    >
                                        {membership.role?.name || membership.permission}
                                    </span>
                                    <span className="text-gray-400 text-sm">@{membership.user.username}</span>

                                </div>
                                <div className="flex items-center gap-2 mt-1">
                                    <span className="text-gray-500 text-xs">
                                        {t('joinedAt')}: {formatDate(membership.joinedAt)}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-gray-500">{t('noMembers')}</p>
            )}
        </div>
    );
};

export default MembersSection;