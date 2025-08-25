'use client'

import Image from "next/image";
import { User } from "@/types/types";
import { formatDate } from "@/lib/utils";
import {
    Github,
    XIcon,
    Linkedin,
    Globe
} from "lucide-react";
import { useTranslations } from 'next-intl';

const ProfileHeader = ({ user }: { user: User }) => {
    const t = useTranslations('App.Page.Me');

    return (
        <div className="flex items-center gap-4">
            {user.avatarUrl ? (
                <Image
                    src={user.avatarUrl}
                    alt={`Avatar de ${user.name}`}
                    width={80}
                    height={80}
                    className="w-20 h-20 rounded-full object-cover"
                />
            ) : (
                <div className="w-20 h-20 bg-gray-500 rounded-full flex items-center justify-center">
                    {user.name?.charAt(0).toUpperCase()}
                </div>
            )}
            <div>
                <h1 className="text-lg font-semibold">
                    @{user.username} | {user.name}
                </h1>
                <p className="text-gray-400 text-sm">
                    {t('registeredAt')} {user.registeredAt ? formatDate(user.registeredAt) : "fecha desconocida"}
                </p>
                <div className="flex gap-2 mt-2">
                    {user.github && (
                        <a href={`https://github.com/${user.github}`} target="_blank" rel="noopener noreferrer">
                            <div className="w-5 h-5 rounded-sm flex items-center justify-center">
                                <Github />
                            </div>
                        </a>
                    )}
                    {user.twitter && (
                        <a href={`https://twitter.com/${user.twitter}`} target="_blank" rel="noopener noreferrer">
                            <div className="w-5 h-5 rounded-sm flex items-center justify-center">
                                <XIcon />
                            </div>
                        </a>
                    )}
                    {user.linkedin && (
                        <a href={user.linkedin} target="_blank" rel="noopener noreferrer">
                            <div className="w-5 h-5 bg-blue-600 rounded-sm flex items-center justify-center">
                                <Linkedin />
                            </div>
                        </a>
                    )}
                    {user.website && (
                        <a href={user.website} target="_blank" rel="noopener noreferrer">
                            <div className="w-5 h-5 rounded-sm flex items-center justify-center">
                                <Globe />
                            </div>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProfileHeader;