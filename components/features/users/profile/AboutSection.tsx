'use client'

import { formatDate } from "@/lib/utils";
import { User } from "@/types";
import { useTranslations } from 'next-intl';
import { format } from "path";

const AboutSection = ({ user }: { user: User }) => {
    const t = useTranslations('App.Page.Me');

    return (
        <div className="col-span-2 bg-[#161b22] rounded-md p-4">
            <h2 className="font-semibold mb-2">{t('aboutMe2')}</h2>
            <p className="text-gray-300 text-sm">
                {user.description}
            </p>
            <p className="text-gray-500 text-xs mt-4">
            {/* convert to conditional */}
            {t('lastSeen')}: {formatDate(user.lastLogin) || (
                    t('notSeen')
            )}
            </p>
        </div>
    );
}

export default AboutSection;