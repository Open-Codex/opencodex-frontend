"use client";

import { usePathname } from "next/navigation";
import { Bell, Settings, User, Folder } from "lucide-react";
import { useState } from "react";
import { useTranslations } from 'next-intl';

function Navbar() {
    const t = useTranslations('App.Navbar');
    const pathname = usePathname();
    const [darkMode, setDarkMode] = useState(true);
    const [searchType, setSearchType] = useState<"user" | "project">("user");
    const [searchTerm, setSearchTerm] = useState("");

    const pageTitle = (() => {
        if (/^\/[a-z]{2}\/dashboard$/.test(pathname)) return "Dashboard";
        if (/^\/[a-z]{2}\/me$/.test(pathname)) return t('pathnameMe');
        return "";
    })();

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchType === "user") {
            console.log("Search Username:", searchTerm);
        } else {
            console.log("Search Project Name:", searchTerm);
        }
    };

    return (
        <nav className="flex items-center justify-between px-4 py-2 bg-[#161b22] text-white border-b border-gray-800">
            {/* Title */}
            <div className="flex items-center gap-2">
                <span className="text-[#a855f7] text-xl">⌘</span>
                <span className="text-sm font-medium">{pageTitle}</span>
            </div>

            {/* Search Bar */}
            <form onSubmit={handleSearch} className="flex-1 mx-4 max-w-md">
                <div className="relative">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder={`${t('search')} ${searchType === "user" ? t('user') : t('project')}...`}
                        className="w-full pl-10 pr-3 py-1 text-sm bg-gray-800 text-gray-300 rounded-md outline-none focus:ring-2 focus:ring-purple-500"
                    />

                    {/* Input */}
                    <div className="absolute left-2 top-1.5 cursor-pointer" onClick={() =>
                        setSearchType(searchType === "user" ? "project" : "user")
                    }>
                        {searchType === "user" ? (
                            <User size={16} className="text-gray-400" />
                        ) : (
                            <Folder size={16} className="text-gray-400" />
                        )}
                    </div>
                </div>
            </form>

            {/* Actions */}
            <div className="flex items-center gap-4">
                {/* Theme toggle */}
                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className={`w-6 h-6 rounded-full border ${darkMode ? "bg-black border-gray-600" : "bg-white border-gray-300"
                        }`}
                />

                {/* New Project */}
                <button className="px-3 py-1 text-sm font-medium bg-purple-500 hover:bg-purple-600 rounded-md">
                    + {t('newProject')}
                </button>

                {/* Icons */}
                <button className="p-1 rounded hover:bg-gray-800">
                    <Bell size={18} />
                </button>
                <button className="p-1 rounded hover:bg-gray-800">
                    <Settings size={18} />
                </button>
                <button className="p-1 rounded hover:bg-gray-800">
                    <User size={18} />
                </button>
            </div>
        </nav>
    );
}

export default Navbar;