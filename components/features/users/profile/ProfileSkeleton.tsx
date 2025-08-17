'use client'

const ProfileSkeleton = () => (
    <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 py-6 w-full">
        {/* Header Skeleton */}
        <div className="flex items-center gap-4">
            <div className="w-20 h-20 bg-gray-700 rounded-full animate-pulse" />
            <div className="space-y-2">
                <div className="h-6 w-48 bg-gray-700 rounded animate-pulse" />
                <div className="h-4 w-32 bg-gray-700 rounded animate-pulse" />
                <div className="flex gap-2 mt-2">
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="w-5 h-5 bg-gray-700 rounded-sm animate-pulse" />
                    ))}
                </div>
            </div>
        </div>

        {/* Stats Skeleton */}
        <div className="grid grid-cols-6 gap-4 mt-6">
            {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-[#161b22] rounded-md p-4 text-center">
                    <div className="h-6 w-8 mx-auto bg-gray-700 rounded animate-pulse" />
                    <div className="h-4 w-16 mx-auto mt-2 bg-gray-700 rounded animate-pulse" />
                </div>
            ))}
        </div>

        {/* Tabs Skeleton */}
        <div className="flex gap-2 mt-6 border-b border-gray-700 pb-2">
            {[...Array(2)].map((_, i) => (
                <div key={i} className="h-8 w-24 bg-gray-700 rounded-md animate-pulse" />
            ))}
        </div>

        {/* Content Skeleton */}
        <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="col-span-2 bg-[#161b22] rounded-md p-4 h-48 animate-pulse" />
            <div className="bg-[#161b22] rounded-md p-4 h-48 animate-pulse" />
        </div>
    </div>
);

export default ProfileSkeleton;