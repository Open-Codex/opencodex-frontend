'use client'

const ProfileStats = ({ stats }: { stats: Array<{ label: string; value: string | number }> }) => (
    <div className="grid grid-cols-6 gap-4 mt-6">
        {stats.map((stat) => (
            <div key={stat.label} className="bg-[#161b22] rounded-md p-4 text-center">
                <div className="text-lg font-bold">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
        ))}
    </div>
);

export default ProfileStats;