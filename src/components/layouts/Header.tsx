import { LogIn, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SearchBar from './SearchBar'

const Header = () => {
    const navigate = useNavigate()
    const [active, setActive] = useState<Boolean>(false)
    return (
        <div className='w-full bg-[#0EA5E9] px-[10%] py-5 flex justify-between'>
            <h1
                className='font-extrabold text-2xl md:text-5xl cursor-pointer hover:scale-105 transition-transform'
                onClick={() => navigate('/')}
            >
                Cinema
            </h1>
            {/* Desktop */}
            <div className='hidden md:flex gap-4 items-center'>
                <NavLink />
                <LogIn />
            </div>

            {/* Mobile */}
            <div className='flex md:hidden gap-4 items-center'>
                {!active ? (
                    <Menu className='cursor-pointer' onClick={() => setActive(!active)} />
                ) : (
                    <X className='cursor-pointer' onClick={() => setActive(!active)} />
                )}
            </div>

            <div
                className={`${
                    !active ? '-translate-x-full' : null
                } md:hidden fixed top-0 left-0 z-40 h-screen p-8 overflow-y-auto transition-transform bg-[#0EA5E9] min-w-[65%]`}
            >
                <div className='flex flex-col justify-between h-full'>
                    <div className='flex flex-col gap-4'>
                        <h1 className='font-extrabold text-2xl md:text-4xl border-b-2 cursor-pointer' onClick={() => navigate('/')}>
                            Cinema
                        </h1>
                        <NavLink />
                    </div>
                    <LogIn />
                </div>
            </div>
        </div>
    )
}

const NavLink = () => {
    return (
        <ul className='flex md:flex-row flex-col gap-4 items-center'>
            <li className=''>
                <SearchBar />
            </li>
            <li>
                <Link className='text-xl hover:bg-white/15 rounded-lg p-2 transition-colors' to={`contacts/2`}>
                    Favorite
                </Link>
            </li>
            <li>
                <Link className='text-xl hover:bg-white/15 rounded-lg p-2 transition-colors' to={`contacts/2`}>
                    Watchlist
                </Link>
            </li>
        </ul>
    )
}

export default Header
