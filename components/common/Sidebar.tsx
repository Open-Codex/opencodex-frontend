import Link from 'next/link'

const Sidebar = () => {
    return (
        <div className='w-64 bg-gray-800 text-white h-full p-4'>
            <h2 className="text-xl mb-4">Sidebar</h2>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/profile">Profile</Link></li>
                <li><Link href="/settings">Settings</Link></li>
                {/* Agrega más enlaces según lo que necesites */}
            </ul>
        </div>
    )
}

export default Sidebar